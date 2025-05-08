
import type { Car } from '@/lib/types';

const currentYear = new Date().getFullYear();
const priceReductionFactor = 0.7; // 30% reduction for used cars

export const cars: Car[] = [
  {
    id: '1',
    make: 'Maruti Suzuki',
    model: 'Swift',
    year: currentYear - 3,
    price: Math.round(750000 * priceReductionFactor), 
    imageUrl: 'https://images.unsplash.com/photo-1618064554083-397179A55543?q=80&w=600&auto=format&fit=crop', 
    description: 'A popular and fuel-efficient hatchback, known for its sporty handling and reliability. Ideal for city driving.',
    features: ['Automatic (AGS)', 'Touchscreen Infotainment', 'LED Projector Headlamps', 'Apple CarPlay', 'Android Auto'],
    mileage: 22000, // Adjusted mileage
    engineType: '1.2L K-Series Petrol',
    fuelType: 'Petrol',
    condition: 'used',
  },
  {
    id: '2',
    make: 'Hyundai',
    model: 'Creta',
    year: currentYear - 3, 
    price: Math.round(1500000 * priceReductionFactor), 
    imageUrl: 'https://images.unsplash.com/photo-1617001014869-1439e4a1306a?q=80&w=600&auto=format&fit=crop',
    description: 'A best-selling compact SUV offering a premium cabin, multiple engine options, and a comfortable ride.',
    features: ['Panoramic Sunroof', 'Ventilated Seats', 'Bose Sound System', 'Connected Car Tech', 'Air Purifier'],
    mileage: 18000, // Adjusted mileage
    engineType: '1.5L MPi Petrol',
    fuelType: 'Petrol',
    condition: 'used',
  },
  {
    id: '3',
    make: 'Kia',
    model: 'Seltos',
    year: currentYear - 3, 
    price: Math.round(1650000 * priceReductionFactor), 
    imageUrl: 'https://images.unsplash.com/photo-1581274050023-3e8a3d964e88?q=80&w=600&auto=format&fit=crop',
    description: 'A stylish and feature-rich compact SUV, a strong competitor to the Creta with a bold design.',
    features: ['Heads-up Display', '360-degree Camera', 'Ambient Lighting', 'Smart Air Purifier', 'Multiple Drive Modes'],
    mileage: 17500, // Adjusted mileage
    engineType: '1.5L Smartstream Petrol',
    fuelType: 'Petrol',
    condition: 'used',
  },
  {
    id: '4',
    make: 'Tata',
    model: 'Nexon EV',
    year: currentYear - 3, 
    price: Math.round(1700000 * priceReductionFactor), 
    imageUrl: 'https://images.unsplash.com/photo-1622171490902-11003a032680?q=80&w=600&auto=format&fit=crop',
    description: 'India\'s best-selling electric SUV, offering a good range, safety, and a comfortable driving experience.',
    features: ['Ziptron Technology', 'Regenerative Braking', 'Floating Touchscreen', 'iRA Connected Car Tech', 'Sunroof'],
    mileage: 15000, // Adjusted mileage
    engineType: 'Permanent Magnet Synchronous Motor',
    fuelType: 'Electric',
    condition: 'used',
  },
  {
    id: '5',
    make: 'Mahindra',
    model: 'XUV700',
    year: currentYear - 3, 
    price: Math.round(2200000 * priceReductionFactor), 
    imageUrl: 'https://images.unsplash.com/photo-1666656542450-39a3e66eba86?q=80&w=600&auto=format&fit=crop',
    description: 'A feature-packed and powerful SUV with advanced safety (ADAS) and luxurious interiors.',
    features: ['ADAS Level 2', 'Dual HD Superscreen', 'Skyroof (Panoramic Sunroof)', 'Sony 3D Sound System', 'All-Wheel Drive (Optional)'],
    mileage: 20000, // Adjusted mileage
    engineType: '2.0L mStallion Turbo-Petrol',
    fuelType: 'Petrol',
    condition: 'used',
  },
  {
    id: '6',
    make: 'Toyota',
    model: 'Innova Crysta',
    year: currentYear - 3, 
    price: Math.round(2400000 * priceReductionFactor), 
    imageUrl: 'https://images.unsplash.com/photo-1596093040315-5102086c1620?q=80&w=600&auto=format&fit=crop',
    description: 'A highly reliable and spacious MPV, known for its comfort, durability, and resale value.',
    features: ['Captain Seats (Optional)', 'Rear AC Vents', 'Eco & Power Drive Modes', '7 Airbags', 'Spacious Cabin'],
    mileage: 28000, // Adjusted mileage
    engineType: '2.7L Petrol',
    fuelType: 'Petrol',
    condition: 'used',
  },
   {
    id: '7',
    make: 'Honda',
    model: 'City',
    year: currentYear - 3, 
    price: Math.round(1400000 * priceReductionFactor), 
    imageUrl: 'https://images.unsplash.com/photo-1614366799084-dd780a5593a5?q=80&w=600&auto=format&fit=crop',
    description: 'A premium mid-size sedan known for its refined i-VTEC engine, spacious cabin, and comfortable ride.',
    features: ['LaneWatch Camera', 'Full LED Headlamps', 'Sunroof', 'Honda Connect', 'ASEAN NCAP 5-star'],
    mileage: 16500, // Adjusted mileage
    engineType: '1.5L i-VTEC Petrol',
    fuelType: 'Petrol',
    condition: 'used',
  },
  {
    id: '8',
    make: 'Volkswagen',
    model: 'Virtus',
    year: currentYear - 3, 
    price: Math.round(1550000 * priceReductionFactor), 
    imageUrl: 'https://images.unsplash.com/photo-1664378253030-502506890b04?q=80&w=600&auto=format&fit=crop',
    description: 'A sophisticated and fun-to-drive mid-size sedan with powerful TSI engines and solid build quality.',
    features: ['Digital Cockpit', 'Ventilated Front Seats', 'Wireless AppConnect', '6 Airbags', 'ESC'],
    mileage: 11000, // Adjusted mileage
    engineType: '1.0L TSI Petrol',
    fuelType: 'Petrol',
    condition: 'used',
  },
  {
    id: '9',
    make: 'Skoda',
    model: 'Kushaq',
    year: currentYear - 3, 
    price: Math.round(1600000 * priceReductionFactor), 
    imageUrl: 'https://images.unsplash.com/photo-1628878117334-ff000574e839?q=80&w=600&auto=format&fit=crop',
    description: 'A well-built compact SUV offering a strong performance, European design, and good safety features.',
    features: ['MySkoda Connect', 'Crystalline LED Headlights', 'Ventilated Leather Seats', 'Sunroof', 'TSI Engines'],
    mileage: 14000, // Adjusted mileage
    engineType: '1.0L TSI Petrol',
    fuelType: 'Petrol',
    condition: 'used',
  },
  {
    id: '10',
    make: 'Renault',
    model: 'Kiger',
    year: currentYear - 3, 
    price: Math.round(850000 * priceReductionFactor), 
    imageUrl: 'https://images.unsplash.com/photo-1620530763950-9e17c17174f0?q=80&w=600&auto=format&fit=crop',
    description: 'A compact and stylish SUV offering good value for money with a decent features list and engine options.',
    features: ['Wireless Smartphone Replication', 'PM2.5 Air Filter', 'Multi-Sense Drive Modes', 'LED Headlamps', 'Smart Access Card'],
    mileage: 13000, // Adjusted mileage
    engineType: '1.0L Turbo Petrol',
    fuelType: 'Petrol',
    condition: 'used',
  },
  // Adding New Cars
  {
    id: '11',
    make: 'Tata',
    model: 'Punch EV',
    year: currentYear,
    price: 1100000, // New car showroom price
    imageUrl: 'https://images.unsplash.com/photo-1699973617890-b6d78ac89390?q=80&w=600&auto=format&fit=crop',
    description: 'Brand new Tata Punch EV, a compact electric SUV perfect for city commutes with zero emissions.',
    features: ['Ziptron Technology', 'Multiple Driving Modes', 'Touchscreen Infotainment', 'Automatic Climate Control', 'Projector Headlamps'],
    mileage: 35, // Minimal delivery mileage
    engineType: 'Permanent Magnet Synchronous Motor',
    fuelType: 'Electric',
    condition: 'new',
  },
  {
    id: '12',
    make: 'Maruti Suzuki',
    model: 'Fronx',
    year: currentYear,
    price: 950000, // New car showroom price
    imageUrl: 'https://picsum.photos/seed/maruti-suzuki-fronx/600/400', // Changed to Picsum due to inaccurate Unsplash link
    description: 'The all-new Maruti Suzuki Fronx, a stylish crossover with a modern design and peppy engine options.',
    features: ['Heads-Up Display', '360 View Camera', 'Wireless Charger', 'SmartPlay Pro+ Infotainment', 'Paddle Shifters'],
    mileage: 15, // Minimal delivery mileage
    engineType: '1.0L Boosterjet Petrol',
    fuelType: 'Petrol',
    condition: 'new',
  },
  {
    id: '13',
    make: 'Hyundai',
    model: 'Exter',
    year: currentYear,
    price: 700000, // New car showroom price
    imageUrl: 'https://images.unsplash.com/photo-1689027439847-cecf5977c47f?q=80&w=600&auto=format&fit=crop',
    description: 'Get the brand new Hyundai Exter, an entry-level SUV with a bold stance and practical features.',
    features: ['Electric Sunroof', 'Dashcam with Dual Camera', '8-inch Touchscreen', 'Cruise Control', '6 Airbags Standard'],
    mileage: 25, // Minimal delivery mileage
    engineType: '1.2L Kappa Petrol',
    fuelType: 'Petrol',
    condition: 'new',
  }
];
