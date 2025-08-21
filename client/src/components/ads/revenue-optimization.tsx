// AdSense Revenue Optimization Configuration
export const AD_PLACEMENT_CONFIG = {
  // High-traffic pages get more ads for maximum revenue
  HOME: {
    slots: ['header-banner', 'in-content-1', 'sidebar', 'footer-banner'],
    priority: 'high'
  },
  SERVICE_AREAS: {
    slots: ['header-banner', 'in-content-1', 'in-content-2'],
    priority: 'high'
  },
  SERVICES: {
    slots: ['header-banner', 'in-content-1'],
    priority: 'medium'
  },
  LOCATION_SERVICE: {
    slots: ['header-banner', 'sidebar'],
    priority: 'high' // These are the 18,000+ SEO pages
  }
};

export const AD_SLOTS = {
  'header-banner': '1234567890',
  'in-content-1': '2345678901',
  'in-content-2': '3456789012',
  'sidebar': '4567890123',
  'footer-banner': '5678901234'
};

// Revenue optimization notes:
// 1. Home page gets maximum ads (4) as it's highest traffic
// 2. Service areas and location pages get high priority for SEO traffic
// 3. Strategic placement between content sections for better viewability
// 4. Responsive ads adapt to mobile/desktop for all 18,000+ pages
// 5. AdSense integration ready for immediate revenue generation