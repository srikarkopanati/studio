export interface Car {
  id: string;
  make: string;
  model: string;
  year: number;
  price: number; // Price in INR
  imageUrl: string;
  description: string;
  features: string[];
  mileage: number; // Mileage in KMs
  engineType: string;
  fuelType: string;
}

// For AI Car Finder form
export const budgetOptions = [
  { value: "under ₹8,00,000", label: "Under ₹8,00,000" },
  { value: "₹8,00,000 - ₹15,00,000", label: "₹8,00,000 - ₹15,00,000" },
  { value: "₹15,00,000 - ₹25,00,000", label: "₹15,00,000 - ₹25,00,000" },
  { value: "₹25,00,000 - ₹40,00,000", label: "₹25,00,000 - ₹40,00,000" },
  { value: "above ₹40,00,000", label: "Above ₹40,00,000" },
  { value: "flexible", label: "Flexible (No specific budget)" },
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

```