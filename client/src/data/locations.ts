// Comprehensive location data for nationwide electrical service coverage
// This powers the massive SEO strategy with location-specific pages

export interface City {
  name: string;
  state: string;
  population: number;
  serviceAreas: string[];
  emergencyZones: string[];
  electricalCodes: string[];
  avgResponse: string;
  licenseRequirements: string[];
}

export interface State {
  name: string;
  code: string;
  cities: City[];
  electricalLicense: string;
  permitRequired: boolean;
  emergencyContacts: string[];
}

// Major cities data for SEO page generation
export const MAJOR_CITIES: City[] = [
  {
    name: "Los Angeles",
    state: "CA",
    population: 3979576,
    serviceAreas: ["Downtown", "Hollywood", "Beverly Hills", "Santa Monica", "Westwood", "Koreatown"],
    emergencyZones: ["Zone 1", "Zone 2", "Zone 3"],
    electricalCodes: ["NEC 2020", "CEC Title 24"],
    avgResponse: "45 minutes",
    licenseRequirements: ["C-10 License", "City Permit"]
  },
  {
    name: "New York",
    state: "NY", 
    population: 8336817,
    serviceAreas: ["Manhattan", "Brooklyn", "Queens", "Bronx", "Staten Island"],
    emergencyZones: ["Zone A", "Zone B", "Zone C"],
    electricalCodes: ["NYC Electrical Code", "NEC 2020"],
    avgResponse: "35 minutes",
    licenseRequirements: ["NYC Electrician License", "DOB Permit"]
  },
  {
    name: "Chicago",
    state: "IL",
    population: 2693976,
    serviceAreas: ["Loop", "North Side", "South Side", "West Side"],
    emergencyZones: ["North", "South", "Central"],
    electricalCodes: ["Chicago Electrical Code", "NEC 2020"],
    avgResponse: "40 minutes",
    licenseRequirements: ["City of Chicago License"]
  },
  {
    name: "Houston",
    state: "TX",
    population: 2320268,
    serviceAreas: ["Downtown", "Uptown", "Montrose", "Heights", "Galleria"],
    emergencyZones: ["Zone 1", "Zone 2", "Zone 3", "Zone 4"],
    electricalCodes: ["NEC 2020", "Texas Electrical Safety"],
    avgResponse: "50 minutes",
    licenseRequirements: ["Texas Master Electrician"]
  },
  {
    name: "Phoenix",
    state: "AZ",
    population: 1608139,
    serviceAreas: ["Central Phoenix", "Scottsdale", "Tempe", "Mesa", "Glendale"],
    emergencyZones: ["East", "West", "North", "South"],
    electricalCodes: ["NEC 2020", "Arizona Electrical Code"],
    avgResponse: "55 minutes",
    licenseRequirements: ["Arizona Electrical License"]
  },
  {
    name: "Philadelphia",
    state: "PA",
    population: 1584064,
    serviceAreas: ["Center City", "North Philly", "South Philly", "West Philly"],
    emergencyZones: ["Zone 1", "Zone 2", "Zone 3"],
    electricalCodes: ["Philadelphia Electrical Code", "NEC 2020"],
    avgResponse: "45 minutes",
    licenseRequirements: ["Philadelphia Electrical License"]
  }
];

// Complete states data with major cities
export const STATES: State[] = [
  {
    name: "California",
    code: "CA",
    electricalLicense: "C-10 Electrical Contractor",
    permitRequired: true,
    emergencyContacts: ["(800) AAA-ELEC"],
    cities: [
      {
        name: "Los Angeles",
        state: "CA",
        population: 3979576,
        serviceAreas: ["Downtown", "Hollywood", "Beverly Hills", "Santa Monica", "Westwood"],
        emergencyZones: ["Zone 1", "Zone 2", "Zone 3"],
        electricalCodes: ["NEC 2020", "CEC Title 24"],
        avgResponse: "45 minutes",
        licenseRequirements: ["C-10 License"]
      },
      {
        name: "San Francisco",
        state: "CA",
        population: 873965,
        serviceAreas: ["SOMA", "Mission", "Castro", "Nob Hill", "Chinatown"],
        emergencyZones: ["North", "South", "Central"],
        electricalCodes: ["NEC 2020", "SF Electrical Code"],
        avgResponse: "40 minutes",
        licenseRequirements: ["C-10 License", "SF Permit"]
      },
      {
        name: "San Diego",
        state: "CA",
        population: 1423851,
        serviceAreas: ["Downtown", "Balboa Park", "La Jolla", "Mission Valley"],
        emergencyZones: ["North County", "Central", "South Bay"],
        electricalCodes: ["NEC 2020", "California Electrical Code"],
        avgResponse: "50 minutes",
        licenseRequirements: ["C-10 License"]
      }
    ]
  },
  {
    name: "Texas",
    code: "TX",
    electricalLicense: "Master Electrician",
    permitRequired: true,
    emergencyContacts: ["(800) AAA-ELEC"],
    cities: [
      {
        name: "Houston",
        state: "TX",
        population: 2320268,
        serviceAreas: ["Downtown", "Uptown", "Montrose", "Heights", "Galleria"],
        emergencyZones: ["Zone 1", "Zone 2", "Zone 3", "Zone 4"],
        electricalCodes: ["NEC 2020", "Texas Electrical Safety"],
        avgResponse: "50 minutes",
        licenseRequirements: ["Texas Master Electrician"]
      },
      {
        name: "Dallas",
        state: "TX",
        population: 1343573,
        serviceAreas: ["Downtown", "Deep Ellum", "Bishop Arts", "Uptown"],
        emergencyZones: ["North Dallas", "South Dallas", "East Dallas"],
        electricalCodes: ["NEC 2020", "Dallas Electrical Code"],
        avgResponse: "45 minutes",
        licenseRequirements: ["Texas Master Electrician"]
      },
      {
        name: "Austin",
        state: "TX",
        population: 978908,
        serviceAreas: ["Downtown", "South Austin", "East Austin", "West Lake"],
        emergencyZones: ["Central", "North", "South"],
        electricalCodes: ["NEC 2020", "Austin Energy Code"],
        avgResponse: "40 minutes",
        licenseRequirements: ["Texas Master Electrician"]
      }
    ]
  },
  {
    name: "Florida",
    code: "FL",
    electricalLicense: "Certified Electrical Contractor",
    permitRequired: true,
    emergencyContacts: ["(800) AAA-ELEC"],
    cities: [
      {
        name: "Miami",
        state: "FL",
        population: 467963,
        serviceAreas: ["Downtown", "South Beach", "Coral Gables", "Wynwood"],
        emergencyZones: ["Zone A", "Zone B", "Zone C"],
        electricalCodes: ["NEC 2020", "Florida Building Code"],
        avgResponse: "45 minutes",
        licenseRequirements: ["Florida EC License"]
      },
      {
        name: "Tampa",
        state: "FL",
        population: 387050,
        serviceAreas: ["Downtown", "Ybor City", "Hyde Park", "Westshore"],
        emergencyZones: ["North Tampa", "South Tampa", "Central"],
        electricalCodes: ["NEC 2020", "Tampa Electrical Code"],
        avgResponse: "50 minutes",
        licenseRequirements: ["Florida EC License"]
      },
      {
        name: "Orlando",
        state: "FL",
        population: 287442,
        serviceAreas: ["Downtown", "Winter Park", "College Park", "Mills 50"],
        emergencyZones: ["Central", "North", "South"],
        electricalCodes: ["NEC 2020", "Orange County Code"],
        avgResponse: "45 minutes",
        licenseRequirements: ["Florida EC License"]
      }
    ]
  },
  {
    name: "New York",
    code: "NY",
    electricalLicense: "Master Electrician",
    permitRequired: true,
    emergencyContacts: ["(800) AAA-ELEC"],
    cities: [
      {
        name: "New York City",
        state: "NY",
        population: 8336817,
        serviceAreas: ["Manhattan", "Brooklyn", "Queens", "Bronx", "Staten Island"],
        emergencyZones: ["Zone A", "Zone B", "Zone C"],
        electricalCodes: ["NYC Electrical Code", "NEC 2020"],
        avgResponse: "35 minutes",
        licenseRequirements: ["NYC Electrician License"]
      },
      {
        name: "Buffalo",
        state: "NY",
        population: 278349,
        serviceAreas: ["Downtown", "Elmwood", "Allentown", "North Buffalo"],
        emergencyZones: ["East", "West", "North"],
        electricalCodes: ["NEC 2020", "NY State Code"],
        avgResponse: "40 minutes",
        licenseRequirements: ["NY State License"]
      }
    ]
  },
  {
    name: "Illinois",
    code: "IL",
    electricalLicense: "Master Electrician",
    permitRequired: true,
    emergencyContacts: ["(800) AAA-ELEC"],
    cities: [
      {
        name: "Chicago",
        state: "IL",
        population: 2693976,
        serviceAreas: ["Loop", "North Side", "South Side", "West Side"],
        emergencyZones: ["North", "South", "Central"],
        electricalCodes: ["Chicago Electrical Code", "NEC 2020"],
        avgResponse: "40 minutes",
        licenseRequirements: ["City of Chicago License"]
      }
    ]
  }
];

// Service combination generator for massive SEO page creation
export interface LocationServiceCombo {
  service: string;
  city: string;
  state: string;
  slug: string;
  localInfo: {
    population: number;
    avgResponse: string;
    codes: string[];
  };
}

// Generate location-service combinations for SEO pages
export function generateLocationServiceCombinations(services: string[]): LocationServiceCombo[] {
  const combinations: LocationServiceCombo[] = [];
  
  STATES.forEach(state => {
    state.cities.forEach(city => {
      services.forEach(service => {
        combinations.push({
          service,
          city: city.name,
          state: state.code,
          slug: `${service.toLowerCase().replace(/\s+/g, '-')}-${city.name.toLowerCase().replace(/\s+/g, '-')}-${state.code.toLowerCase()}`,
          localInfo: {
            population: city.population,
            avgResponse: city.avgResponse,
            codes: city.electricalCodes
          }
        });
      });
    });
  });
  
  return combinations;
}

// Get location data for a specific city/state
export function getLocationData(city: string, state: string): City | undefined {
  const stateData = STATES.find(s => s.code === state.toUpperCase());
  return stateData?.cities.find(c => c.name.toLowerCase() === city.toLowerCase());
}

// Get all cities for a specific state
export function getCitiesByState(stateCode: string): City[] {
  const state = STATES.find(s => s.code === stateCode.toUpperCase());
  return state?.cities || [];
}

// Generate SEO-friendly URLs for location pages
export function generateLocationUrls(): string[] {
  const urls: string[] = [];
  
  STATES.forEach(state => {
    state.cities.forEach(city => {
      const citySlug = city.name.toLowerCase().replace(/\s+/g, '-');
      const stateSlug = state.code.toLowerCase();
      urls.push(`/locations/${citySlug}-${stateSlug}`);
    });
  });
  
  return urls;
}