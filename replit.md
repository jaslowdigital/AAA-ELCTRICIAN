# AAA Electrician Website

## Overview

AAA Electrician is a comprehensive electrical services website designed to provide nationwide electrical contracting services across all 50 states and 300+ major cities. The platform serves as a lead generation and service booking system for residential and commercial electrical work, featuring extensive service catalogs, location-based pages, and integrated quote request functionality. The website is optimized for SEO with structured data markup and Google AdSense integration for revenue generation.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **React 18** with TypeScript for type safety and modern component patterns
- **Wouter** for lightweight client-side routing instead of React Router
- **Vite** as the build tool and development server for fast hot module replacement
- **Tailwind CSS** with shadcn/ui components for consistent, responsive styling
- **React Hook Form** with Zod validation for form handling and data validation

### Backend Architecture
- **Express.js** server with TypeScript for API endpoints and static file serving
- **Custom storage interface** with in-memory implementation (easily replaceable with database)
- **RESTful API design** for quote requests, contact messages, newsletter subscriptions, and service requests
- **Vite SSR integration** for development with middleware mode

### Database Design
- **Drizzle ORM** with PostgreSQL configuration for type-safe database operations
- **Schema-first approach** with Zod validation schemas shared between client and server
- Tables for users, quote requests, contact messages, newsletter subscriptions, and service requests
- UUID primary keys and proper timestamp handling for audit trails

### SEO and Analytics
- **Dynamic meta tag management** with custom SEOHead component
- **JSON-LD structured data** for local business, services, and FAQ schema markup
- **Google Analytics 4** integration with custom event tracking
- **Sitemap and robots.txt** support for search engine optimization

### Content Management
- **Data-driven service catalog** with 30+ residential and 30+ commercial services
- **Location-based content** covering all 50 states and major cities
- **Template-based page generation** for service and location combinations
- **FAQ and process step management** for each service type

## External Dependencies

### Database and Hosting
- **PostgreSQL** database (configured via DATABASE_URL environment variable)
- **Neon Database** serverless PostgreSQL for cloud hosting
- **Drizzle Kit** for database migrations and schema management

### UI and Styling
- **Radix UI** component primitives for accessible, unstyled components
- **Tailwind CSS** utility-first CSS framework
- **Lucide React** for consistent icon library
- **shadcn/ui** component system based on Radix UI and Tailwind

### Forms and Validation
- **React Hook Form** for performant form handling
- **Zod** for runtime type validation and schema definition
- **@hookform/resolvers** for Zod integration with React Hook Form

### Analytics and Monetization
- **Google Analytics 4** for user behavior tracking and conversion measurement
- **Google AdSense** for advertising revenue with responsive ad units
- **Custom event tracking** for quote requests, phone calls, and service interactions

### Development Tools
- **TypeScript** for static type checking across the entire stack
- **ESBuild** for fast production builds
- **PostCSS** and Autoprefixer for CSS processing
- **Replit integrations** for development environment support