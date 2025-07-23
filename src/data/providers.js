export const categories = [
  {
    id: 'restaurants',
    name: 'Restaurants',
    icon: 'Utensils',
    color: 'bg-orange-500',
    count: 245
  },
  {
    id: 'beauty',
    name: 'Beauty & Spa',
    icon: 'Sparkles',
    color: 'bg-pink-500',
    count: 156
  },
  {
    id: 'fitness',
    name: 'Fitness',
    icon: 'Dumbbell',
    color: 'bg-green-500',
    count: 89
  },
  {
    id: 'automotive',
    name: 'Automotive',
    icon: 'Car',
    color: 'bg-blue-500',
    count: 134
  },
  {
    id: 'home',
    name: 'Home Services',
    icon: 'Home',
    color: 'bg-purple-500',
    count: 198
  },
  {
    id: 'health',
    name: 'Healthcare',
    icon: 'Heart',
    color: 'bg-red-500',
    count: 167
  },
  {
    id: 'education',
    name: 'Education',
    icon: 'BookOpen',
    color: 'bg-indigo-500',
    count: 78
  },
  {
    id: 'technology',
    name: 'Technology',
    icon: 'Smartphone',
    color: 'bg-gray-600',
    count: 112
  }
];

export const providers = [
  {
    id: 1,
    name: 'Bella Vista Restaurant',
    category: 'restaurants',
    rating: 4.8,
    reviewCount: 324,
    distance: '0.5 miles',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=300&fit=crop',
    description: 'Authentic Italian cuisine with a modern twist',
    phone: '(555) 123-4567',
    address: '123 Main St, New York, NY 10001',
    hours: 'Mon-Sun: 11:00 AM - 10:00 PM',
    priceRange: '$$$',
    features: ['Outdoor Seating', 'Delivery', 'Reservations'],
    gallery: [
      'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=300&fit=crop',
      'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=300&fit=crop',
      'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=400&h=300&fit=crop'
    ]
  },
  {
    id: 2,
    name: 'Zen Spa & Wellness',
    category: 'beauty',
    rating: 4.9,
    reviewCount: 198,
    distance: '1.2 miles',
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=400&h=300&fit=crop',
    description: 'Luxury spa treatments and wellness services',
    phone: '(555) 234-5678',
    address: '456 Oak Ave, New York, NY 10002',
    hours: 'Mon-Sat: 9:00 AM - 8:00 PM, Sun: 10:00 AM - 6:00 PM',
    priceRange: '$$$$',
    features: ['Massage Therapy', 'Facial Treatments', 'Wellness Packages'],
    gallery: [
      'https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=400&h=300&fit=crop',
      'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop',
      'https://images.unsplash.com/photo-1596178065887-1198b6148b2b?w=400&h=300&fit=crop'
    ]
  },
  {
    id: 3,
    name: 'FitZone Gym',
    category: 'fitness',
    rating: 4.7,
    reviewCount: 156,
    distance: '0.8 miles',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=400&h=300&fit=crop',
    description: 'State-of-the-art fitness equipment and personal training',
    phone: '(555) 345-6789',
    address: '789 Fitness Blvd, New York, NY 10003',
    hours: 'Mon-Fri: 5:00 AM - 11:00 PM, Sat-Sun: 6:00 AM - 10:00 PM',
    priceRange: '$$',
    features: ['Personal Training', '24/7 Access', 'Group Classes'],
    gallery: [
      'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=400&h=300&fit=crop',
      'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop',
      'https://images.unsplash.com/photo-1583500178690-f7d24219f8d2?w=400&h=300&fit=crop'
    ]
  },
  {
    id: 4,
    name: 'Elite Auto Service',
    category: 'automotive',
    rating: 4.6,
    reviewCount: 89,
    distance: '2.1 miles',
    image: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=400&h=300&fit=crop',
    description: 'Professional automotive repair and maintenance services',
    phone: '(555) 456-7890',
    address: '321 Auto Row, New York, NY 10004',
    hours: 'Mon-Fri: 7:00 AM - 6:00 PM, Sat: 8:00 AM - 4:00 PM',
    priceRange: '$$',
    features: ['Oil Changes', 'Brake Service', 'Engine Diagnostics'],
    gallery: [
      'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=400&h=300&fit=crop',
      'https://images.unsplash.com/photo-1632823471565-1ecdf5c0e7e8?w=400&h=300&fit=crop',
      'https://images.unsplash.com/photo-1609500542482-9daa5b8ae3d1?w=400&h=300&fit=crop'
    ]
  },
  {
    id: 5,
    name: 'Home Fix Pro',
    category: 'home',
    rating: 4.8,
    reviewCount: 234,
    distance: '1.5 miles',
    image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=400&h=300&fit=crop',
    description: 'Complete home repair and renovation services',
    phone: '(555) 567-8901',
    address: '654 Service St, New York, NY 10005',
    hours: 'Mon-Fri: 8:00 AM - 6:00 PM, Emergency 24/7',
    priceRange: '$$$',
    features: ['Plumbing', 'Electrical', 'Carpentry'],
    gallery: [
      'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=400&h=300&fit=crop',
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop',
      'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=400&h=300&fit=crop'
    ]
  },
  {
    id: 6,
    name: 'City Medical Center',
    category: 'health',
    rating: 4.9,
    reviewCount: 445,
    distance: '0.3 miles',
    image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop',
    description: 'Comprehensive healthcare services and specialists',
    phone: '(555) 678-9012',
    address: '987 Health Plaza, New York, NY 10006',
    hours: 'Mon-Fri: 7:00 AM - 8:00 PM, Sat-Sun: 8:00 AM - 6:00 PM',
    priceRange: '$$$$',
    features: ['Emergency Care', 'Specialists', 'Lab Services'],
    gallery: [
      'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop',
      'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400&h=300&fit=crop',
      'https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=400&h=300&fit=crop'
    ]
  }
];

export const featuredProviders = providers.slice(0, 3);