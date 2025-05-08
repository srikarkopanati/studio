
import type { Car } from '@/lib/types';

export const cars: Car[] = [
  {
    id: '1',
    make: 'Maruti Suzuki',
    model: 'Swift',
    year: 2022, // Original: 2023 - 2 = 2021, then +1 = 2022
    price: 525000, 
    imageUrl: 'https://picsum.photos/seed/swift2022/600/400', 
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
    year: 2022, // Original: 2023 - 2 = 2021, then +1 = 2022
    price: 1050000, 
    imageUrl: 'https://picsum.photos/seed/creta2022/600/400',
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
    year: 2023, // Original: 2024 - 2 = 2022, then +1 = 2023
    price: 1155000, 
    imageUrl: 'https://picsum.photos/seed/seltos2023/600/400',
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
    year: 2022, // Original: 2023 - 2 = 2021, then +1 = 2022
    price: 1190000, 
    imageUrl: 'https://picsum.photos/seed/nexonev2022/600/400',
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
    year: 2022, // Original: 2023 - 2 = 2021, then +1 = 2022
    price: 1540000, 
    imageUrl: 'https://picsum.photos/seed/xuv7002022/600/400',
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
    year: 2021, // Original: 2022 - 2 = 2020, then +1 = 2021
    price: 1680000, 
    imageUrl: 'https://picsum.photos/seed/innovacrysta2021/600/400',
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
    year: 2022, // Original: 2023 - 2 = 2021, then +1 = 2022
    price: 980000, 
    imageUrl: 'https://picsum.photos/seed/city2022/600/400',
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
    year: 2023, // Original: 2024 - 2 = 2022, then +1 = 2023
    price: 1085000, 
    imageUrl: 'https://picsum.photos/seed/virtus2023/600/400',
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
    year: 2022, // Original: 2023 - 2 = 2021, then +1 = 2022
    price: 1120000, 
    imageUrl: 'https://picsum.photos/seed/kushaq2022/600/400',
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
    year: 2022, // Original: 2023 - 2 = 2021, then +1 = 2022
    price: 595000, 
    imageUrl: 'https://picsum.photos/seed/kiger2022/600/400',
    description: 'A compact and stylish SUV offering good value for money with a decent features list and engine options.',
    features: ['Wireless Smartphone Replication', 'PM2.5 Air Filter', 'Multi-Sense Drive Modes', 'LED Headlamps', 'Smart Access Card'],
    mileage: 10000, // KMs
    engineType: '1.0L Turbo Petrol',
    fuelType: 'Petrol',
  },
];
