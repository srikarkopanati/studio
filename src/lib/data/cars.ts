
import type { Car } from '@/lib/types';

export const cars: Car[] = [
  {
    id: '1',
    make: 'Maruti Suzuki',
    model: 'Swift',
    year: 2023,
    price: 750000, // INR
    imageUrl: 'Maruti Suzuki Swift', 
    description: 'A popular and fuel-efficient hatchback, known for its sporty handling and reliability. Ideal for city driving.',
    features: ['Automatic (AGS)', 'Touchscreen Infotainment', 'LED Projector Headlamps', 'Apple CarPlay', 'Android Auto'],
    mileage: 12000, // KMs
    engineType: '1.2L K-Series Petrol',
    fuelType: 'Petrol',
  },
  {
    id: '2',
    make: 'Hyundai',
    model: 'Creta',
    year: 2023,
    price: 1500000, // INR
    imageUrl: 'Hyundai Creta white',
    description: 'A best-selling compact SUV offering a premium cabin, multiple engine options, and a comfortable ride.',
    features: ['Panoramic Sunroof', 'Ventilated Seats', 'Bose Sound System', 'Connected Car Tech', 'Air Purifier'],
    mileage: 18000, // KMs
    engineType: '1.5L MPi Petrol',
    fuelType: 'Petrol',
  },
  {
    id: '3',
    make: 'Kia',
    model: 'Seltos',
    year: 2024,
    price: 1650000, // INR
    imageUrl: 'Kia Seltos blue',
    description: 'A stylish and feature-rich compact SUV, a strong competitor to the Creta with a bold design.',
    features: ['Heads-up Display', '360-degree Camera', 'Ambient Lighting', 'Smart Air Purifier', 'Multiple Drive Modes'],
    mileage: 7500, // KMs
    engineType: '1.5L Smartstream Petrol',
    fuelType: 'Petrol',
  },
  {
    id: '4',
    make: 'Tata',
    model: 'Nexon EV',
    year: 2023,
    price: 1700000, // INR
    imageUrl: 'Tata Nexon EV teal',
    description: 'India\'s best-selling electric SUV, offering a good range, safety, and a comfortable driving experience.',
    features: ['Ziptron Technology', 'Regenerative Braking', 'Floating Touchscreen', 'iRA Connected Car Tech', 'Sunroof'],
    mileage: 15000, // KMs
    engineType: 'Permanent Magnet Synchronous Motor',
    fuelType: 'Electric',
  },
  {
    id: '5',
    make: 'Mahindra',
    model: 'XUV700',
    year: 2023,
    price: 2200000, // INR
    imageUrl: 'Mahindra XUV700 red',
    description: 'A feature-packed and powerful SUV with advanced safety (ADAS) and luxurious interiors.',
    features: ['ADAS Level 2', 'Dual HD Superscreen', 'Skyroof (Panoramic Sunroof)', 'Sony 3D Sound System', 'All-Wheel Drive (Optional)'],
    mileage: 20000, // KMs
    engineType: '2.0L mStallion Turbo-Petrol',
    fuelType: 'Petrol',
  },
  {
    id: '6',
    make: 'Toyota',
    model: 'Innova Crysta',
    year: 2022,
    price: 2400000, // INR
    imageUrl: 'Toyota Innova Crysta silver',
    description: 'A highly reliable and spacious MPV, known for its comfort, durability, and resale value.',
    features: ['Captain Seats (Optional)', 'Rear AC Vents', 'Eco & Power Drive Modes', '7 Airbags', 'Spacious Cabin'],
    mileage: 30000, // KMs
    engineType: '2.7L Petrol',
    fuelType: 'Petrol',
  },
   {
    id: '7',
    make: 'Honda',
    model: 'City',
    year: 2023,
    price: 1400000, // INR
    imageUrl: 'Honda City white sedan',
    description: 'A premium mid-size sedan known for its refined i-VTEC engine, spacious cabin, and comfortable ride.',
    features: ['LaneWatch Camera', 'Full LED Headlamps', 'Sunroof', 'Honda Connect', 'ASEAN NCAP 5-star'],
    mileage: 16000, // KMs
    engineType: '1.5L i-VTEC Petrol',
    fuelType: 'Petrol',
  },
  {
    id: '8',
    make: 'Volkswagen',
    model: 'Virtus',
    year: 2024,
    price: 1550000, // INR
    imageUrl: 'Volkswagen Virtus yellow',
    description: 'A sophisticated and fun-to-drive mid-size sedan with powerful TSI engines and solid build quality.',
    features: ['Digital Cockpit', 'Ventilated Front Seats', 'Wireless AppConnect', '6 Airbags', 'ESC'],
    mileage: 6000, // KMs
    engineType: '1.0L TSI Petrol',
    fuelType: 'Petrol',
  },
  {
    id: '9',
    make: 'Skoda',
    model: 'Kushaq',
    year: 2023,
    price: 1600000, // INR
    imageUrl: 'Skoda Kushaq orange',
    description: 'A well-built compact SUV offering a strong performance, European design, and good safety features.',
    features: ['MySkoda Connect', 'Crystalline LED Headlights', 'Ventilated Leather Seats', 'Sunroof', 'TSI Engines'],
    mileage: 13000, // KMs
    engineType: '1.0L TSI Petrol',
    fuelType: 'Petrol',
  },
  {
    id: '10',
    make: 'Renault',
    model: 'Kiger',
    year: 2023,
    price: 850000, // INR
    imageUrl: 'Renault Kiger red',
    description: 'A compact and stylish SUV offering good value for money with a decent features list and engine options.',
    features: ['Wireless Smartphone Replication', 'PM2.5 Air Filter', 'Multi-Sense Drive Modes', 'LED Headlamps', 'Smart Access Card'],
    mileage: 10000, // KMs
    engineType: '1.0L Turbo Petrol',
    fuelType: 'Petrol',
  },
];

