import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { useEffect } from "react";
import { initGA } from "@/lib/analytics";
import { useAnalytics } from "@/hooks/use-analytics";
import NotFound from "@/pages/not-found";
import Home from "@/pages/home";
import ResidentialServices from "@/pages/residential-services";
import CommercialServices from "@/pages/commercial-services";
import ServiceAreas from "@/pages/service-areas";
import About from "@/pages/about";
import Contact from "@/pages/contact";
import LocationService from "@/pages/location-service";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import MobileContactBar from "@/components/layout/mobile-contact-bar";

function Router() {
  // Track page views when routes change
  useAnalytics();
  
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/residential-services" component={ResidentialServices} />
        <Route path="/commercial-services" component={CommercialServices} />
        <Route path="/service-areas" component={ServiceAreas} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        {/* Dynamic location-service pages for SEO */}
        <Route path="/services/:serviceSlug/:locationSlug" component={LocationService} />
        <Route component={NotFound} />
      </Switch>
      <Footer />
      <MobileContactBar />
    </div>
  );
}

function App() {
  // Initialize Google Analytics when app loads
  useEffect(() => {
    // Verify required environment variable is present
    if (!import.meta.env.VITE_GA_MEASUREMENT_ID) {
      console.warn('Missing required Google Analytics key: VITE_GA_MEASUREMENT_ID');
    } else {
      initGA();
    }
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Router />
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
