import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertQuoteRequestSchema, insertContactMessageSchema, insertNewsletterSubscriptionSchema, insertServiceRequestSchema } from "@shared/schema";
import { z } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // Quote request endpoint
  app.post("/api/quote-requests", async (req, res) => {
    try {
      const validatedData = insertQuoteRequestSchema.parse(req.body);
      const quoteRequest = await storage.createQuoteRequest(validatedData);
      
      // In a real application, you might send an email notification here
      console.log(`New quote request from ${validatedData.firstName} ${validatedData.lastName}`);
      
      res.status(201).json({
        success: true,
        message: "Quote request submitted successfully",
        id: quoteRequest.id
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({
          success: false,
          message: "Invalid data provided",
          errors: error.errors
        });
      } else {
        console.error("Error creating quote request:", error);
        res.status(500).json({
          success: false,
          message: "Internal server error"
        });
      }
    }
  });

  // Contact message endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertContactMessageSchema.parse(req.body);
      const contactMessage = await storage.createContactMessage(validatedData);
      
      console.log(`New contact message from ${validatedData.name}`);
      
      res.status(201).json({
        success: true,
        message: "Message sent successfully",
        id: contactMessage.id
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({
          success: false,
          message: "Invalid data provided",
          errors: error.errors
        });
      } else {
        console.error("Error creating contact message:", error);
        res.status(500).json({
          success: false,
          message: "Internal server error"
        });
      }
    }
  });

  // Newsletter subscription endpoint
  app.post("/api/newsletter", async (req, res) => {
    try {
      const validatedData = insertNewsletterSubscriptionSchema.parse(req.body);
      const subscription = await storage.createNewsletterSubscription(validatedData);
      
      console.log(`New newsletter subscription: ${validatedData.email}`);
      
      res.status(201).json({
        success: true,
        message: "Successfully subscribed to newsletter",
        id: subscription.id
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({
          success: false,
          message: "Invalid email address",
          errors: error.errors
        });
      } else {
        console.error("Error creating newsletter subscription:", error);
        res.status(500).json({
          success: false,
          message: "Internal server error"
        });
      }
    }
  });

  // Service request endpoint
  app.post("/api/service-requests", async (req, res) => {
    try {
      const validatedData = insertServiceRequestSchema.parse(req.body);
      const serviceRequest = await storage.createServiceRequest(validatedData);
      
      console.log(`New service request from ${validatedData.customerName} in ${validatedData.city}, ${validatedData.state}`);
      
      res.status(201).json({
        success: true,
        message: "Service request submitted successfully",
        id: serviceRequest.id
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({
          success: false,
          message: "Invalid data provided",
          errors: error.errors
        });
      } else {
        console.error("Error creating service request:", error);
        res.status(500).json({
          success: false,
          message: "Internal server error"
        });
      }
    }
  });

  // Get all quote requests (admin endpoint)
  app.get("/api/quote-requests", async (req, res) => {
    try {
      const quoteRequests = await storage.getAllQuoteRequests();
      res.json({
        success: true,
        data: quoteRequests
      });
    } catch (error) {
      console.error("Error fetching quote requests:", error);
      res.status(500).json({
        success: false,
        message: "Internal server error"
      });
    }
  });

  // Get all contact messages (admin endpoint)
  app.get("/api/contact", async (req, res) => {
    try {
      const contactMessages = await storage.getAllContactMessages();
      res.json({
        success: true,
        data: contactMessages
      });
    } catch (error) {
      console.error("Error fetching contact messages:", error);
      res.status(500).json({
        success: false,
        message: "Internal server error"
      });
    }
  });

  // Mark contact message as read
  app.patch("/api/contact/:id/read", async (req, res) => {
    try {
      const { id } = req.params;
      const contactMessage = await storage.markContactMessageAsRead(id);
      
      if (!contactMessage) {
        res.status(404).json({
          success: false,
          message: "Contact message not found"
        });
        return;
      }
      
      res.json({
        success: true,
        message: "Message marked as read",
        data: contactMessage
      });
    } catch (error) {
      console.error("Error marking message as read:", error);
      res.status(500).json({
        success: false,
        message: "Internal server error"
      });
    }
  });

  // Health check endpoint
  app.get("/api/health", (req, res) => {
    res.json({
      success: true,
      message: "AAA Electrician API is running",
      timestamp: new Date().toISOString()
    });
  });

  const httpServer = createServer(app);
  return httpServer;
}
