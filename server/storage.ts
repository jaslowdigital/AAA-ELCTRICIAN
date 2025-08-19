import { 
  type User, 
  type InsertUser, 
  type QuoteRequest, 
  type InsertQuoteRequest,
  type ContactMessage,
  type InsertContactMessage,
  type NewsletterSubscription,
  type InsertNewsletterSubscription,
  type ServiceRequest,
  type InsertServiceRequest
} from "@shared/schema";
import { randomUUID } from "crypto";

// Extended storage interface for electrician website functionality
export interface IStorage {
  // User management
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  // Quote requests
  createQuoteRequest(quoteRequest: InsertQuoteRequest): Promise<QuoteRequest>;
  getAllQuoteRequests(): Promise<QuoteRequest[]>;
  getQuoteRequest(id: string): Promise<QuoteRequest | undefined>;
  updateQuoteRequestStatus(id: string, status: string): Promise<QuoteRequest | undefined>;
  
  // Contact messages
  createContactMessage(contactMessage: InsertContactMessage): Promise<ContactMessage>;
  getAllContactMessages(): Promise<ContactMessage[]>;
  getContactMessage(id: string): Promise<ContactMessage | undefined>;
  markContactMessageAsRead(id: string): Promise<ContactMessage | undefined>;
  
  // Newsletter subscriptions
  createNewsletterSubscription(subscription: InsertNewsletterSubscription): Promise<NewsletterSubscription>;
  getAllNewsletterSubscriptions(): Promise<NewsletterSubscription[]>;
  unsubscribeNewsletter(email: string): Promise<boolean>;
  
  // Service requests
  createServiceRequest(serviceRequest: InsertServiceRequest): Promise<ServiceRequest>;
  getAllServiceRequests(): Promise<ServiceRequest[]>;
  getServiceRequest(id: string): Promise<ServiceRequest | undefined>;
  updateServiceRequestStatus(id: string, status: string): Promise<ServiceRequest | undefined>;
}

export class MemStorage implements IStorage {
  private users: Map<string, User>;
  private quoteRequests: Map<string, QuoteRequest>;
  private contactMessages: Map<string, ContactMessage>;
  private newsletterSubscriptions: Map<string, NewsletterSubscription>;
  private serviceRequests: Map<string, ServiceRequest>;

  constructor() {
    this.users = new Map();
    this.quoteRequests = new Map();
    this.contactMessages = new Map();
    this.newsletterSubscriptions = new Map();
    this.serviceRequests = new Map();
  }

  // User methods
  async getUser(id: string): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = randomUUID();
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  // Quote request methods
  async createQuoteRequest(insertQuoteRequest: InsertQuoteRequest): Promise<QuoteRequest> {
    const id = randomUUID();
    const now = new Date();
    const quoteRequest: QuoteRequest = {
      ...insertQuoteRequest,
      id,
      status: "pending",
      createdAt: now,
      updatedAt: now,
    };
    this.quoteRequests.set(id, quoteRequest);
    return quoteRequest;
  }

  async getAllQuoteRequests(): Promise<QuoteRequest[]> {
    return Array.from(this.quoteRequests.values()).sort(
      (a, b) => b.createdAt.getTime() - a.createdAt.getTime()
    );
  }

  async getQuoteRequest(id: string): Promise<QuoteRequest | undefined> {
    return this.quoteRequests.get(id);
  }

  async updateQuoteRequestStatus(id: string, status: string): Promise<QuoteRequest | undefined> {
    const quoteRequest = this.quoteRequests.get(id);
    if (quoteRequest) {
      const updated = { ...quoteRequest, status, updatedAt: new Date() };
      this.quoteRequests.set(id, updated);
      return updated;
    }
    return undefined;
  }

  // Contact message methods
  async createContactMessage(insertContactMessage: InsertContactMessage): Promise<ContactMessage> {
    const id = randomUUID();
    const contactMessage: ContactMessage = {
      ...insertContactMessage,
      id,
      isRead: false,
      createdAt: new Date(),
      phone: insertContactMessage.phone ?? null,
    };
    this.contactMessages.set(id, contactMessage);
    return contactMessage;
  }

  async getAllContactMessages(): Promise<ContactMessage[]> {
    return Array.from(this.contactMessages.values()).sort(
      (a, b) => b.createdAt.getTime() - a.createdAt.getTime()
    );
  }

  async getContactMessage(id: string): Promise<ContactMessage | undefined> {
    return this.contactMessages.get(id);
  }

  async markContactMessageAsRead(id: string): Promise<ContactMessage | undefined> {
    const contactMessage = this.contactMessages.get(id);
    if (contactMessage) {
      const updated = { ...contactMessage, isRead: true };
      this.contactMessages.set(id, updated);
      return updated;
    }
    return undefined;
  }

  // Newsletter subscription methods
  async createNewsletterSubscription(insertSubscription: InsertNewsletterSubscription): Promise<NewsletterSubscription> {
    const id = randomUUID();
    const subscription: NewsletterSubscription = {
      ...insertSubscription,
      id,
      isActive: true,
      subscribedAt: new Date(),
    };
    this.newsletterSubscriptions.set(id, subscription);
    return subscription;
  }

  async getAllNewsletterSubscriptions(): Promise<NewsletterSubscription[]> {
    return Array.from(this.newsletterSubscriptions.values()).filter(
      (sub) => sub.isActive
    ).sort((a, b) => b.subscribedAt.getTime() - a.subscribedAt.getTime());
  }

  async unsubscribeNewsletter(email: string): Promise<boolean> {
    const subscription = Array.from(this.newsletterSubscriptions.values()).find(
      (sub) => sub.email === email && sub.isActive
    );
    
    if (subscription) {
      const updated = { ...subscription, isActive: false };
      this.newsletterSubscriptions.set(subscription.id, updated);
      return true;
    }
    return false;
  }

  // Service request methods
  async createServiceRequest(insertServiceRequest: InsertServiceRequest): Promise<ServiceRequest> {
    const id = randomUUID();
    const now = new Date();
    const serviceRequest: ServiceRequest = {
      ...insertServiceRequest,
      id,
      status: "pending",
      estimatedCost: null,
      actualCost: null,
      technicianNotes: null,
      createdAt: now,
      updatedAt: now,
      preferredDate: insertServiceRequest.preferredDate ?? null,
    };
    this.serviceRequests.set(id, serviceRequest);
    return serviceRequest;
  }

  async getAllServiceRequests(): Promise<ServiceRequest[]> {
    return Array.from(this.serviceRequests.values()).sort(
      (a, b) => b.createdAt.getTime() - a.createdAt.getTime()
    );
  }

  async getServiceRequest(id: string): Promise<ServiceRequest | undefined> {
    return this.serviceRequests.get(id);
  }

  async updateServiceRequestStatus(id: string, status: string): Promise<ServiceRequest | undefined> {
    const serviceRequest = this.serviceRequests.get(id);
    if (serviceRequest) {
      const updated = { ...serviceRequest, status, updatedAt: new Date() };
      this.serviceRequests.set(id, updated);
      return updated;
    }
    return undefined;
  }
}

export const storage = new MemStorage();
