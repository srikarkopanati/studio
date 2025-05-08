export interface Car {
  id: string;
  make: string;
  model: string;
  year: number;
  price: number;
  imageUrl: string;
  description: string;
  features: string[];
  mileage: number;
  engineType: string;
  fuelType: string;
}

// For AI Car Finder form
export const budgetOptions = [
  { value: "under $10,000", label: "Under $10,000" },
  { value: "$10,000 - $20,000", label: "$10,000 - $20,000" },
  { value: "$20,000 - $30,000", label: "$20,000 - $30,000" },
  { value: "$30,000 - $50,000", label: "$30,000 - $50,000" },
  { value: "above $50,000", label: "Above $50,000" },
  { value: "flexible", label: "Flexible" },
];

export const familySizeOptions = [
  { value: "1-2 people", label: "1-2 people (Single/Couple)" },
  { value: "3-4 people", label: "3-4 people (Small Family)" },
  { value: "5+ people", label: "5+ people (Large Family)" },
];

export const usageOptions = [
  { value: "daily city commute", label: "Daily City Commute" },
  { value: "highway driving / long trips", label: "Highway Driving / Long Trips" },
  { value: "family vehicle / school runs", label: "Family Vehicle / School Runs" },
  { value: "off-road / adventure", label: "Off-road / Adventure" },
  { value: "performance / weekend drives", label: "Performance / Weekend Drives" },
  { value: "business / professional use", label: "Business / Professional Use" },
];
