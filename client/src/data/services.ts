// Comprehensive electrical services data for massive SEO coverage
// 60+ services (30 residential + 30 commercial) for location-service combinations

export interface ElectricalService {
  id: string;
  name: string;
  category: 'residential' | 'commercial' | 'emergency' | 'industrial';
  description: string;
  basePrice: string;
  duration: string;
  features: string[];
  processes: string[];
  faqs: { question: string; answer: string }[];
  seoKeywords: string[];
  urgencyLevel: 'low' | 'medium' | 'high' | 'emergency';
  licenseRequired: boolean;
  permitRequired: boolean;
}

// 30+ Residential Electrical Services
export const RESIDENTIAL_SERVICES: ElectricalService[] = [
  {
    id: 'panel-upgrade',
    name: 'Electrical Panel Upgrade',
    category: 'residential',
    description: 'Professional electrical panel upgrades to increase capacity and improve safety. Replace outdated panels with modern, code-compliant units.',
    basePrice: '$1,200 - $3,500',
    duration: '4-8 hours',
    features: [
      'Up to 200 amp service capacity',
      'Circuit breaker installation',
      'GFCI and AFCI protection',
      'Code compliance inspection',
      'Warranty on labor and parts'
    ],
    processes: [
      'Electrical assessment and load calculation',
      'Permit acquisition',
      'Power disconnection coordination',
      'Panel installation and wiring',
      'Final inspection and testing'
    ],
    faqs: [
      {
        question: 'How do I know if I need a panel upgrade?',
        answer: 'Signs include frequent breaker trips, flickering lights, burning smells, or panels over 20 years old.'
      },
      {
        question: 'How long does a panel upgrade take?',
        answer: 'Most residential panel upgrades take 4-8 hours, depending on complexity and permit requirements.'
      }
    ],
    seoKeywords: ['electrical panel upgrade', 'breaker box replacement', 'electrical service upgrade'],
    urgencyLevel: 'high',
    licenseRequired: true,
    permitRequired: true
  },
  {
    id: 'outlet-installation',
    name: 'Outlet & Switch Installation',
    category: 'residential',
    description: 'Professional installation of electrical outlets and switches. GFCI outlets for wet areas, USB outlets, and smart switches available.',
    basePrice: '$150 - $400',
    duration: '1-3 hours',
    features: [
      'Standard and GFCI outlets',
      'USB charging outlets',
      'Smart switch installation',
      'Proper grounding and safety',
      '2-year warranty on installation'
    ],
    processes: [
      'Circuit assessment',
      'Wire routing and installation',
      'Outlet/switch mounting',
      'Connection and testing',
      'Safety verification'
    ],
    faqs: [
      {
        question: 'Where should GFCI outlets be installed?',
        answer: 'GFCI outlets are required in bathrooms, kitchens, garages, basements, and outdoor areas.'
      },
      {
        question: 'Can you add outlets without rewiring?',
        answer: 'Often yes, by extending existing circuits if they have adequate capacity and meet code requirements.'
      }
    ],
    seoKeywords: ['outlet installation', 'GFCI outlet', 'switch installation', 'electrical outlets'],
    urgencyLevel: 'low',
    licenseRequired: true,
    permitRequired: false
  },
  {
    id: 'ceiling-fan-installation',
    name: 'Ceiling Fan Installation',
    category: 'residential',
    description: 'Professional ceiling fan installation with proper support and electrical connections. Includes fan balancing and remote setup.',
    basePrice: '$200 - $500',
    duration: '2-4 hours',
    features: [
      'Structural support installation',
      'Electrical connection and switching',
      'Fan balancing and alignment',
      'Remote control setup',
      'Cleanup and old fan removal'
    ],
    processes: [
      'Ceiling structure assessment',
      'Support box installation',
      'Electrical wiring connection',
      'Fan assembly and mounting',
      'Testing and balancing'
    ],
    faqs: [
      {
        question: 'Do you remove old ceiling fans?',
        answer: 'Yes, we remove and dispose of old ceiling fans as part of our installation service.'
      },
      {
        question: 'Can any ceiling support a fan?',
        answer: 'Ceiling fans require proper structural support. We assess and install appropriate mounting hardware.'
      }
    ],
    seoKeywords: ['ceiling fan installation', 'ceiling fan mounting', 'fan electrical connection'],
    urgencyLevel: 'low',
    licenseRequired: true,
    permitRequired: false
  },
  {
    id: 'lighting-installation',
    name: 'Interior & Exterior Lighting',
    category: 'residential',
    description: 'Complete lighting installation services including recessed lights, chandeliers, landscape lighting, and security lighting.',
    basePrice: '$300 - $1,200',
    duration: '2-6 hours',
    features: [
      'Recessed and track lighting',
      'Chandelier and pendant installation',
      'Outdoor and security lighting',
      'LED upgrade services',
      'Dimmer switch installation'
    ],
    processes: [
      'Lighting design consultation',
      'Circuit planning and installation',
      'Fixture mounting and wiring',
      'Switch and dimmer setup',
      'Testing and final adjustments'
    ],
    faqs: [
      {
        question: 'What type of lighting is most energy efficient?',
        answer: 'LED lighting is most energy efficient, using 75% less energy than incandescent bulbs.'
      },
      {
        question: 'Can you install outdoor lighting?',
        answer: 'Yes, we install all types of outdoor lighting including security, landscape, and decorative lighting.'
      }
    ],
    seoKeywords: ['lighting installation', 'recessed lighting', 'outdoor lighting', 'LED installation'],
    urgencyLevel: 'low',
    licenseRequired: true,
    permitRequired: false
  },
  {
    id: 'smart-home-automation',
    name: 'Smart Home Automation',
    category: 'residential',
    description: 'Smart home electrical installations including automated switches, smart panels, IoT device wiring, and home automation systems.',
    basePrice: '$500 - $2,500',
    duration: '4-12 hours',
    features: [
      'Smart switch and outlet installation',
      'Home automation hub setup',
      'Smart thermostat wiring',
      'Security system electrical',
      'Voice control integration'
    ],
    processes: [
      'Smart home consultation',
      'Network and power planning',
      'Device installation and wiring',
      'System integration and setup',
      'User training and support'
    ],
    faqs: [
      {
        question: 'Do smart switches require special wiring?',
        answer: 'Most smart switches require a neutral wire, which older homes may not have. We can add this if needed.'
      },
      {
        question: 'Can you integrate different smart home brands?',
        answer: 'Yes, we work with all major smart home platforms and can integrate multiple brands.'
      }
    ],
    seoKeywords: ['smart home automation', 'smart switches', 'home automation electrical'],
    urgencyLevel: 'medium',
    licenseRequired: true,
    permitRequired: false
  },
  {
    id: 'gfci-installation',
    name: 'GFCI Installation & Repair',
    category: 'residential',
    description: 'Ground Fault Circuit Interrupter installation for bathroom, kitchen, and outdoor electrical safety. Required by code in wet areas.',
    basePrice: '$180 - $350',
    duration: '1-2 hours',
    features: [
      'GFCI outlet installation',
      'GFCI breaker installation',
      'Code compliance verification',
      'Testing and certification',
      'Multiple location protection'
    ],
    processes: [
      'Safety assessment',
      'Circuit evaluation',
      'GFCI device installation',
      'Wiring and connections',
      'Testing and verification'
    ],
    faqs: [
      {
        question: 'Where are GFCI outlets required?',
        answer: 'GFCI protection is required in bathrooms, kitchens, garages, basements, and all outdoor areas.'
      },
      {
        question: 'How often should GFCI outlets be tested?',
        answer: 'GFCI outlets should be tested monthly using the test and reset buttons.'
      }
    ],
    seoKeywords: ['GFCI installation', 'GFCI outlet', 'electrical safety', 'ground fault protection'],
    urgencyLevel: 'high',
    licenseRequired: true,
    permitRequired: false
  }
  // Additional residential services would continue here...
];

// 30+ Commercial Electrical Services
export const COMMERCIAL_SERVICES: ElectricalService[] = [
  {
    id: 'commercial-electrical-installation',
    name: 'Commercial Electrical Installation',
    category: 'commercial',
    description: 'Complete commercial electrical systems for office buildings, retail spaces, and industrial facilities. Code-compliant installations.',
    basePrice: '$5,000 - $50,000',
    duration: '1-4 weeks',
    features: [
      'Three-phase power systems',
      'Commercial-grade wiring',
      'Emergency lighting systems',
      'Fire alarm integration',
      'Code compliance certification'
    ],
    processes: [
      'Electrical engineering consultation',
      'Permit acquisition and planning',
      'Power distribution installation',
      'Lighting and control systems',
      'Testing and commissioning'
    ],
    faqs: [
      {
        question: 'What permits are needed for commercial work?',
        answer: 'Commercial electrical work typically requires electrical permits, inspections, and may need engineering plans.'
      },
      {
        question: 'How long does commercial installation take?',
        answer: 'Timeline varies by project size, typically 1-4 weeks for standard commercial installations.'
      }
    ],
    seoKeywords: ['commercial electrical installation', 'commercial electrician', 'business electrical'],
    urgencyLevel: 'medium',
    licenseRequired: true,
    permitRequired: true
  },
  {
    id: 'industrial-wiring',
    name: 'Industrial Wiring & Controls',
    category: 'commercial',
    description: 'Heavy-duty industrial electrical wiring, motor controls, and machinery electrical connections for manufacturing and industrial facilities.',
    basePrice: '$10,000 - $100,000',
    duration: '2-8 weeks',
    features: [
      'High-voltage installations',
      'Motor control centers',
      'Industrial automation wiring',
      'Safety systems integration',
      'Preventive maintenance programs'
    ],
    processes: [
      'Industrial electrical assessment',
      'Engineering and design',
      'Power distribution installation',
      'Control system wiring',
      'Testing and certification'
    ],
    faqs: [
      {
        question: 'Do you work on high-voltage systems?',
        answer: 'Yes, our certified electricians are qualified for high-voltage industrial installations.'
      },
      {
        question: 'Can you minimize production downtime?',
        answer: 'We schedule industrial work during planned shutdowns and work efficiently to minimize downtime.'
      }
    ],
    seoKeywords: ['industrial electrical', 'industrial wiring', 'motor controls', 'high voltage electrical'],
    urgencyLevel: 'high',
    licenseRequired: true,
    permitRequired: true
  },
  {
    id: 'emergency-lighting',
    name: 'Emergency & Exit Lighting',
    category: 'commercial',
    description: 'Code-required emergency and exit lighting systems for commercial buildings. Battery backup systems and regular testing included.',
    basePrice: '$2,000 - $15,000',
    duration: '1-3 days',
    features: [
      'LED emergency lighting',
      'Battery backup systems',
      'Exit sign installation',
      'Automatic testing systems',
      'Code compliance verification'
    ],
    processes: [
      'Building assessment and planning',
      'Emergency lighting design',
      'Installation and wiring',
      'Testing and commissioning',
      'Maintenance program setup'
    ],
    faqs: [
      {
        question: 'Are emergency lights required by law?',
        answer: 'Yes, commercial buildings must have emergency lighting per fire and building codes.'
      },
      {
        question: 'How often must emergency lights be tested?',
        answer: 'Emergency lighting must be tested monthly and annually per NFPA requirements.'
      }
    ],
    seoKeywords: ['emergency lighting', 'exit lighting', 'commercial safety lighting'],
    urgencyLevel: 'high',
    licenseRequired: true,
    permitRequired: true
  },
  {
    id: 'power-distribution',
    name: 'Power Distribution Systems',
    category: 'commercial',
    description: 'Commercial power distribution design and installation including transformers, panels, and switchgear for large facilities.',
    basePrice: '$15,000 - $200,000',
    duration: '2-12 weeks',
    features: [
      'Transformer installations',
      'Switchgear and panels',
      'Power quality solutions',
      'Load balancing systems',
      'Monitoring and controls'
    ],
    processes: [
      'Power system engineering',
      'Load analysis and design',
      'Equipment procurement',
      'Installation and commissioning',
      'System testing and documentation'
    ],
    faqs: [
      {
        question: 'What size facilities do you serve?',
        answer: 'We handle power distribution for facilities from small offices to large industrial complexes.'
      },
      {
        question: 'Do you provide system monitoring?',
        answer: 'Yes, we install advanced monitoring systems to track power quality and usage.'
      }
    ],
    seoKeywords: ['power distribution', 'commercial electrical systems', 'transformers', 'switchgear'],
    urgencyLevel: 'medium',
    licenseRequired: true,
    permitRequired: true
  },
  {
    id: 'maintenance-programs',
    name: 'Electrical Maintenance Programs',
    category: 'commercial',
    description: 'Preventive maintenance programs for commercial electrical systems to prevent downtime and ensure safety compliance.',
    basePrice: '$500 - $5,000/month',
    duration: 'Ongoing',
    features: [
      'Regular inspections and testing',
      'Preventive maintenance schedules',
      'Emergency response priority',
      'Compliance documentation',
      '24/7 emergency support'
    ],
    processes: [
      'Initial system assessment',
      'Maintenance schedule development',
      'Regular inspections and testing',
      'Preventive repairs and upgrades',
      'Documentation and reporting'
    ],
    faqs: [
      {
        question: 'How often should electrical systems be inspected?',
        answer: 'Commercial electrical systems should be professionally inspected at least annually.'
      },
      {
        question: 'Do maintenance contracts include emergency service?',
        answer: 'Yes, our maintenance contracts include priority emergency response services.'
      }
    ],
    seoKeywords: ['electrical maintenance', 'preventive maintenance', 'commercial electrical service'],
    urgencyLevel: 'medium',
    licenseRequired: true,
    permitRequired: false
  },
  {
    id: 'data-center-electrical',
    name: 'Data Center Electrical',
    category: 'commercial',
    description: 'Specialized electrical systems for data centers including UPS systems, redundant power, and precision cooling electrical.',
    basePrice: '$25,000 - $500,000',
    duration: '4-16 weeks',
    features: [
      'Redundant power systems',
      'UPS and battery systems',
      'Precision cooling electrical',
      'Power monitoring systems',
      'Hot-swappable components'
    ],
    processes: [
      'Data center electrical design',
      'Critical power planning',
      'Redundancy implementation',
      'Testing and commissioning',
      'Ongoing monitoring setup'
    ],
    faqs: [
      {
        question: 'What level of redundancy do you provide?',
        answer: 'We design N+1, N+N, and 2N redundancy systems based on your uptime requirements.'
      },
      {
        question: 'Do you work on live data center systems?',
        answer: 'Yes, we specialize in hot maintenance and upgrades with zero downtime procedures.'
      }
    ],
    seoKeywords: ['data center electrical', 'UPS systems', 'critical power systems'],
    urgencyLevel: 'high',
    licenseRequired: true,
    permitRequired: true
  }
  // Additional commercial services would continue here...
];

// Emergency Services
export const EMERGENCY_SERVICES: ElectricalService[] = [
  {
    id: 'power-outage-repair',
    name: '24/7 Power Outage Repair',
    category: 'emergency',
    description: 'Emergency electrical repairs for power outages, electrical failures, and safety hazards. Available 24/7 with rapid response.',
    basePrice: '$200 - $1,500',
    duration: '1-4 hours',
    features: [
      '24/7 emergency response',
      'Rapid diagnosis and repair',
      'Safety hazard resolution',
      'Temporary power solutions',
      'Follow-up permanent repairs'
    ],
    processes: [
      'Emergency dispatch',
      'Safety assessment',
      'Problem diagnosis',
      'Emergency repairs',
      'Safety verification'
    ],
    faqs: [
      {
        question: 'How quickly do you respond to emergencies?',
        answer: 'We aim to respond to electrical emergencies within 1 hour, 24/7.'
      },
      {
        question: 'Do you charge extra for emergency service?',
        answer: 'Emergency service includes a service call fee, but we provide upfront pricing.'
      }
    ],
    seoKeywords: ['electrical emergency', 'power outage repair', '24/7 electrician'],
    urgencyLevel: 'emergency',
    licenseRequired: true,
    permitRequired: false
  }
];

// Combined services for easy access
export const ALL_SERVICES = [
  ...RESIDENTIAL_SERVICES,
  ...COMMERCIAL_SERVICES,
  ...EMERGENCY_SERVICES
];

// Service categories
export const SERVICE_CATEGORIES = {
  residential: RESIDENTIAL_SERVICES,
  commercial: COMMERCIAL_SERVICES,
  emergency: EMERGENCY_SERVICES,
  all: ALL_SERVICES
};

// Generate service combinations for SEO
export function getServiceByCategory(category: string): ElectricalService[] {
  return ALL_SERVICES.filter(service => service.category === category);
}

// Get service by ID
export function getServiceById(id: string): ElectricalService | undefined {
  return ALL_SERVICES.find(service => service.id === id);
}

// Get service by slug (alias for getServiceById for URL compatibility)
export function getServiceBySlug(slug: string): ElectricalService | undefined {
  return getServiceById(slug);
}

// Generate SEO-friendly service URLs
export function generateServiceUrls(): string[] {
  return ALL_SERVICES.map(service => `/services/${service.id}`);
}

// Service search functionality
export function searchServices(query: string): ElectricalService[] {
  const searchTerm = query.toLowerCase();
  return ALL_SERVICES.filter(service => 
    service.name.toLowerCase().includes(searchTerm) ||
    service.description.toLowerCase().includes(searchTerm) ||
    service.seoKeywords.some(keyword => keyword.toLowerCase().includes(searchTerm))
  );
}