const properties = [
  {
    id: 1,
    title: "Modern Luxury Villa",
    location: "DHA Phase 6, Karachi",
    city: "Karachi",
    price: 85000000,
    priceLabel: "PKR 8.5 Crore",
    bedrooms: 5,
    bathrooms: 6,
    area: 3500,
    type: "Villa",
    purpose: "Sale",
    featured: true,

    images: [
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1400&q=85",
    ],

    description:
      "A beautifully designed luxury villa located in the heart of DHA Phase 6. This spacious property combines modern architecture, premium finishes and comfortable family living.",

    amenities: [
      "Swimming Pool",
      "Private Parking",
      "Modern Kitchen",
      "Central Air Conditioning",
      "Security System",
      "Garden",
      "Backup Generator",
      "Servant Room",
    ],

    agent: {
      name: "Ayesha Khan",
      role: "Senior Property Consultant",
      phone: "+92 300 1234567",
      email: "ayesha@estatepro.com",
      image:
        "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=400&q=80",
    },
  },

  {
    id: 2,
    title: "Elegant Clifton Apartment",
    location: "Clifton Block 5, Karachi",
    city: "Karachi",
    price: 32000000,
    priceLabel: "PKR 3.2 Crore",
    bedrooms: 3,
    bathrooms: 3,
    area: 1800,
    type: "Apartment",
    purpose: "Sale",
    featured: true,

    images: [
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1400&q=85",
    ],

    description:
      "A sophisticated apartment in Clifton offering spacious interiors, excellent natural light and convenient access to restaurants, shopping and major roads.",

    amenities: [
      "Covered Parking",
      "Elevator",
      "24/7 Security",
      "Modern Kitchen",
      "Balcony",
      "Backup Generator",
      "CCTV",
      "Intercom",
    ],

    agent: {
      name: "Hamza Ahmed",
      role: "Property Consultant",
      phone: "+92 301 7654321",
      email: "hamza@estatepro.com",
      image:
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80",
    },
  },

  {
    id: 3,
    title: "Contemporary Family Home",
    location: "Gulshan-e-Iqbal, Karachi",
    city: "Karachi",
    price: 45000000,
    priceLabel: "PKR 4.5 Crore",
    bedrooms: 4,
    bathrooms: 4,
    area: 2400,
    type: "House",
    purpose: "Sale",
    featured: false,

    images: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1400&q=85",
    ],

    description:
      "A contemporary family home featuring spacious rooms, modern interiors and a peaceful residential environment.",

    amenities: [
      "Private Parking",
      "Garden",
      "Modern Kitchen",
      "Security System",
      "Air Conditioning",
      "Laundry Area",
      "Storage Room",
      "Water Backup",
    ],

    agent: {
      name: "Sara Malik",
      role: "Real Estate Advisor",
      phone: "+92 302 5551234",
      email: "sara@estatepro.com",
      image:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80",
    },
  },

  {
    id: 4,
    title: "Premium DHA Residence",
    location: "DHA Phase 5, Karachi",
    city: "Karachi",
    price: 120000,
    priceLabel: "PKR 1.2 Lac / month",
    bedrooms: 4,
    bathrooms: 4,
    area: 2800,
    type: "House",
    purpose: "Rent",
    featured: true,

    images: [
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1400&q=85",
    ],

    description:
      "A premium rental residence in DHA Phase 5 with spacious living areas, elegant finishes and excellent access to nearby facilities.",

    amenities: [
      "Furnished",
      "Private Parking",
      "Central AC",
      "Security",
      "Modern Kitchen",
      "Garden",
      "Generator",
      "Servant Room",
    ],

    agent: {
      name: "Omar Siddiqui",
      role: "Rental Specialist",
      phone: "+92 303 9876543",
      email: "omar@estatepro.com",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80",
    },
  },

  {
    id: 5,
    title: "Sea View Luxury Penthouse",
    location: "Clifton Block 2, Karachi",
    city: "Karachi",
    price: 95000000,
    priceLabel: "PKR 9.5 Crore",
    bedrooms: 4,
    bathrooms: 5,
    area: 3200,
    type: "Penthouse",
    purpose: "Sale",
    featured: true,

    images: [
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1400&q=85",
    ],

    description:
      "An exclusive sea-view penthouse offering premium interiors, expansive living spaces and breathtaking views of Karachi's coastline.",

    amenities: [
      "Sea View",
      "Private Terrace",
      "Swimming Pool",
      "Covered Parking",
      "Elevator",
      "Smart Home",
      "Security",
      "Gym",
    ],

    agent: {
      name: "Mariam Ali",
      role: "Luxury Property Consultant",
      phone: "+92 304 4567890",
      email: "mariam@estatepro.com",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&q=80",
    },
  },

  {
    id: 6,
    title: "Stylish Bahria Town House",
    location: "Bahria Town Karachi",
    city: "Karachi",
    price: 38500000,
    priceLabel: "PKR 3.85 Crore",
    bedrooms: 4,
    bathrooms: 5,
    area: 2500,
    type: "House",
    purpose: "Sale",
    featured: false,

    images: [
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1400&q=85",
    ],

    description:
      "A stylish family home in Bahria Town Karachi with modern architecture, spacious bedrooms and a peaceful community environment.",

    amenities: [
      "Private Parking",
      "Garden",
      "Modern Kitchen",
      "Community Security",
      "Air Conditioning",
      "Laundry Area",
      "Storage",
      "Backup Water",
    ],

    agent: {
      name: "Bilal Raza",
      role: "Property Consultant",
      phone: "+92 305 6789012",
      email: "bilal@estatepro.com",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
    },
  },

  {
    id: 7,
    title: "Modern Korangi Commercial Building",
    location: "Korangi Industrial Area, Karachi",
    city: "Karachi",
    price: 65000000,
    priceLabel: "PKR 6.5 Crore",
    bedrooms: 0,
    bathrooms: 4,
    area: 5000,
    type: "Commercial",
    purpose: "Sale",
    featured: false,

    images: [
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1497366412874-3415097a27e7?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1497215842964-222b430dc094?auto=format&fit=crop&w=1400&q=85",
    ],

    description:
      "A spacious commercial property suitable for offices, warehouses, retail operations and growing businesses in a strategic location.",

    amenities: [
      "Large Parking Area",
      "Reception Area",
      "Multiple Offices",
      "Security System",
      "Generator",
      "CCTV",
      "Conference Room",
      "Storage Area",
    ],

    agent: {
      name: "Usman Tariq",
      role: "Commercial Property Specialist",
      phone: "+92 306 7890123",
      email: "usman@estatepro.com",
      image:
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80",
    },
  },

  {
    id: 8,
    title: "Cozy Gulistan-e-Johar Apartment",
    location: "Gulistan-e-Johar Block 15, Karachi",
    city: "Karachi",
    price: 85000,
    priceLabel: "PKR 85,000 / month",
    bedrooms: 2,
    bathrooms: 2,
    area: 1250,
    type: "Apartment",
    purpose: "Rent",
    featured: false,

    images: [
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=85",
    ],

    description:
      "A comfortable and well-maintained apartment ideal for a small family or working professionals, located close to schools, markets and public transport.",

    amenities: [
      "Covered Parking",
      "Elevator",
      "Security",
      "Balcony",
      "Modern Kitchen",
      "Backup Generator",
      "CCTV",
      "Water Supply",
    ],

    agent: {
      name: "Hina Shah",
      role: "Rental Consultant",
      phone: "+92 307 8901234",
      email: "hina@estatepro.com",
      image:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80",
    },
  },

  {
    id: 9,
    title: "Grand PECHS Family Residence",
    location: "PECHS Block 6, Karachi",
    city: "Karachi",
    price: 72000000,
    priceLabel: "PKR 7.2 Crore",
    bedrooms: 5,
    bathrooms: 5,
    area: 3300,
    type: "House",
    purpose: "Sale",
    featured: true,

    images: [
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1400&q=85",
    ],

    description:
      "A grand family residence in PECHS featuring spacious bedrooms, elegant interiors, landscaped outdoor areas and excellent connectivity.",

    amenities: [
      "Large Garden",
      "Private Parking",
      "Modern Kitchen",
      "Central AC",
      "Security System",
      "Servant Quarter",
      "Generator",
      "Study Room",
    ],

    agent: {
      name: "Danish Ahmed",
      role: "Senior Real Estate Advisor",
      phone: "+92 308 9012345",
      email: "danish@estatepro.com",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80",
    },
  },

  {
    id: 10,
    title: "Luxury DHA Furnished Apartment",
    location: "DHA Phase 8, Karachi",
    city: "Karachi",
    price: 175000,
    priceLabel: "PKR 1.75 Lac / month",
    bedrooms: 3,
    bathrooms: 3,
    area: 1900,
    type: "Apartment",
    purpose: "Rent",
    featured: true,

    images: [
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1400&q=85",
    ],

    description:
      "A fully furnished luxury apartment in DHA Phase 8 with premium furniture, modern appliances and excellent building facilities.",

    amenities: [
      "Fully Furnished",
      "Covered Parking",
      "Elevator",
      "Gym",
      "Swimming Pool",
      "Security",
      "CCTV",
      "Backup Generator",
    ],

    agent: {
      name: "Nadia Hassan",
      role: "Luxury Rental Advisor",
      phone: "+92 309 0123456",
      email: "nadia@estatepro.com",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&q=80",
    },
  },

  {
    id: 11,
    title: "Spacious North Nazimabad Villa",
    location: "North Nazimabad Block H, Karachi",
    city: "Karachi",
    price: 58000000,
    priceLabel: "PKR 5.8 Crore",
    bedrooms: 5,
    bathrooms: 5,
    area: 3000,
    type: "Villa",
    purpose: "Sale",
    featured: false,

    images: [
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1400&q=85",
    ],

    description:
      "A spacious villa in North Nazimabad offering a comfortable family lifestyle with generous rooms, outdoor space and modern facilities.",

    amenities: [
      "Private Parking",
      "Garden",
      "Modern Kitchen",
      "Air Conditioning",
      "Security",
      "Study Room",
      "Storage Room",
      "Generator",
    ],

    agent: {
      name: "Fahad Khan",
      role: "Property Consultant",
      phone: "+92 310 1234567",
      email: "fahad@estatepro.com",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
    },
  },

  {
    id: 12,
    title: "Premium Business Office",
    location: "Shahrah-e-Faisal, Karachi",
    city: "Karachi",
    price: 180000,
    priceLabel: "PKR 1.8 Lac / month",
    bedrooms: 0,
    bathrooms: 2,
    area: 2200,
    type: "Office",
    purpose: "Rent",
    featured: false,

    images: [
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1497366412874-3415097a27e7?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1497215842964-222b430dc094?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1400&q=85",
    ],

    description:
      "A professional office space located on Shahrah-e-Faisal, ideal for startups, established companies and professional service businesses.",

    amenities: [
      "Reception Area",
      "Meeting Room",
      "Parking",
      "Elevator",
      "Central AC",
      "High-Speed Internet",
      "Security",
      "Backup Generator",
    ],

    agent: {
      name: "Ali Hassan",
      role: "Commercial Property Consultant",
      phone: "+92 311 2345678",
      email: "ali@estatepro.com",
      image:
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80",
    },
  },
];

export default properties;