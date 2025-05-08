
import type { Car } from '@/lib/types';

export const cars: Car[] = [
  {
    id: '1',
    make: 'Toyota',
    model: 'Camry',
    year: 2023,
    price: 2280000, // INR
    imageUrl: 'https://images.unsplash.com/photo-1582809709008-83875a4585e7?w=600&h=400&fit=crop&q=80',
    description: 'A reliable and fuel-efficient sedan, perfect for families and daily commutes.',
    features: ['Automatic', 'Sunroof', 'Lane Assist', 'Apple CarPlay'],
    mileage: 24000, // KMs
    engineType: '2.5L 4-Cylinder',
    fuelType: 'Petrol',
  },
  {
    id: '2',
    make: 'Honda',
    model: 'CR-V',
    year: 2022,
    price: 2560000, // INR
    imageUrl: 'https://images.unsplash.com/photo-1603580924162-e4b3479b0a09?w=600&h=400&fit=crop&q=80',
    description: 'Versatile SUV with ample space and advanced safety features.',
    features: ['AWD', 'Panoramic Roof', 'Heated Seats', 'Android Auto'],
    mileage: 35200, // KMs
    engineType: '1.5L Turbocharged',
    fuelType: 'Petrol',
  },
  {
    id: '3',
    make: 'Ford',
    model: 'Mustang',
    year: 2024,
    price: 3600000, // INR
    imageUrl: 'https://images.unsplash.com/photo-1549927681-0b674b309203?w=600&h=400&fit=crop&q=80',
    description: 'Iconic American muscle car with thrilling performance and modern tech.',
    features: ['V8 Engine', 'Performance Exhaust', 'Leather Seats', 'Digital Dash'],
    mileage: 8000, // KMs
    engineType: '5.0L V8',
    fuelType: 'Petrol',
  },
  {
    id: '4',
    make: 'Tesla',
    model: 'Model 3',
    year: 2023,
    price: 3360000, // INR
    imageUrl: 'https://images.unsplash.com/photo-1567808291548-fc3ee04dbcf0?w=600&h=400&fit=crop&q=80',
    description: 'Popular electric sedan with cutting-edge technology and impressive range.',
    features: ['Autopilot', 'Full Glass Roof', 'Premium Interior', 'Over-the-air updates'],
    mileage: 19200, // KMs
    engineType: 'Electric Motor',
    fuelType: 'Electric',
  },
  {
    id: '5',
    make: 'BMW',
    model: 'X5',
    year: 2022,
    price: 5200000, // INR
    imageUrl: 'https://images.unsplash.com/photo-1587962835187-969e0aa4911b?w=600&h=400&fit=crop&q=80',
    description: 'Luxury SUV offering a blend of comfort, performance, and technology.',
    features: ['xDrive AWD', 'Harman Kardon Sound', 'Heads-up Display', 'Gesture Control'],
    mileage: 28800, // KMs
    engineType: '3.0L 6-Cylinder Turbo',
    fuelType: 'Petrol',
  },
  {
    id: '6',
    make: 'Mercedes-Benz',
    model: 'C-Class',
    year: 2023,
    price: 4160000, // INR
    imageUrl: 'https://images.unsplash.com/photo-1617700191980-f756490118c1?w=600&h=400&fit=crop&q=80',
    description: 'Elegant and sophisticated sedan with a focus on luxury and refinement.',
    features: ['MBUX Infotainment', 'Ambient Lighting', 'Burmester Sound', 'Driver Assistance Package'],
    mileage: 14400, // KMs
    engineType: '2.0L 4-Cylinder Turbo',
    fuelType: 'Petrol',
  },
   {
    id: '7',
    make: 'Audi',
    model: 'A4',
    year: 2023,
    price: 3440000, // INR
    imageUrl: 'https://images.unsplash.com/photo-1610960095200-760759487386?w=600&h=400&fit=crop&q=80',
    description: 'A well-rounded compact luxury sedan with Quattro all-wheel drive.',
    features: ['Virtual Cockpit', 'Quattro AWD', 'Bang & Olufsen Sound', 'Matrix LED headlights'],
    mileage: 17600, // KMs
    engineType: '2.0L TFSI 4-Cylinder',
    fuelType: 'Petrol',
  },
  {
    id: '8',
    make: 'Jeep',
    model: 'Wrangler',
    year: 2024,
    price: 3840000, // INR
    imageUrl: 'https://images.unsplash.com/photo-1559095580-200dd00a1009?w=600&h=400&fit=crop&q=80',
    description: 'Legendary off-road SUV capable of tackling any terrain.',
    features: ['4x4 System', 'Removable Top', 'Uconnect Infotainment', 'Trail Rated'],
    mileage: 4800, // KMs
    engineType: '3.6L V6',
    fuelType: 'Petrol',
  },
  {
    id: '9',
    make: 'Subaru',
    model: 'Outback',
    year: 2022,
    price: 2800000, // INR
    imageUrl: 'https://images.unsplash.com/photo-1621007959082-9104de9fa289?w=600&h=400&fit=crop&q=80',
    description: 'Rugged and capable wagon perfect for outdoor adventures.',
    features: ['Symmetrical AWD', 'EyeSight Driver Assist', 'Starlink Multimedia', 'Roof Rails'],
    mileage: 40000, // KMs
    engineType: '2.5L Boxer Engine',
    fuelType: 'Petrol',
  },
  {
    id: '10',
    make: 'Kia',
    model: 'Telluride',
    year: 2023,
    price: 3760000, // INR
    imageUrl: 'https://images.unsplash.com/photo-1601593261929-c5788bf70770?w=600&h=400&fit=crop&q=80',
    description: 'Award-winning 3-row SUV with a spacious interior and premium features.',
    features: ['3rd Row Seating', 'Nappa Leather', 'Dual Sunroofs', 'Highway Driving Assist'],
    mileage: 22400, // KMs
    engineType: '3.8L V6',
    fuelType: 'Petrol',
  },
];
