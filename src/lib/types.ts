
export interface Car {
  id: string;
  make: string;
  model: string;
  year: number;
  price: number; // Price in INR
  imageUrl: string;
  description: string;
  features: string[];
  mileage: number; // Mileage in KMs (total distance driven)
  engineType: string;
  fuelType: string;
  condition: 'new' | 'used'; // Added car condition
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

export const mileagePreferenceOptions = [
  { value: "20+ kmpl (High)", label: "20+ kmpl (High)" },
  { value: "15-20 kmpl (Average)", label: "15-20 kmpl (Average)" },
  { value: "10-15 kmpl (Moderate)", label: "10-15 kmpl (Moderate)" },
  { value: "Below 10 kmpl (Performance Focus)", label: "Below 10 kmpl (Performance Focus)" },
  { value: "not a primary concern", label: "Not a primary concern" },
];

// For Advanced Search Form
export const carConditionOptions = [
  { value: "new", label: "New Cars" },
  { value: "used", label: "Used Cars" },
];
