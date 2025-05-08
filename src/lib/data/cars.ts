
import type { Car } from '@/lib/types';

export const cars: Car[] = [
  {
    id: '1',
    make: 'Maruti Suzuki',
    model: 'Swift',
    year: 2023,
    price: 525000, // INR, Original: 750000
    imageUrl: 'Swift official', 
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
    price: 1050000, // INR, Original: 1500000
    imageUrl: 'Creta official',
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
    price: 1155000, // INR, Original: 1650000
    imageUrl: 'Seltos official',
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
    price: 1190000, // INR, Original: 1700000
    imageUrl: 'NexonEV official',
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
    price: 1540000, // INR, Original: 2200000
    imageUrl: 'XUV700 official',
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
    price: 1680000, // INR, Original: 2400000
    imageUrl: 'InnovaCrysta official',
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
    price: 980000, // INR, Original: 1400000
    imageUrl: 'HondaCity official',
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
    price: 1085000, // INR, Original: 1550000
    imageUrl: 'Virtus official',
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
    price: 1120000, // INR, Original: 1600000
    imageUrl: 'Kushaq official',
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
    price: 595000, // INR, Original: 850000
    imageUrl: 'Kiger official',
    description: 'A compact and stylish SUV offering good value for money with a decent features list and engine options.',
    features: ['Wireless Smartphone Replication', 'PM2.5 Air Filter', 'Multi-Sense Drive Modes', 'LED Headlamps', 'Smart Access Card'],
    mileage: 10000, // KMs
    engineType: '1.0L Turbo Petrol',
    fuelType: 'Petrol',
  },
];
