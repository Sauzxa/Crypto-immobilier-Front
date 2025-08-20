// Default Hero Section Content
export const DEFAULT_HERO_CONTENT = {
  title: "CHOSE. YOUR. OWN. HOME.",
  statistics: [
    {
      number: "5,200+",
      label: "Properties Listed"
    },
    {
      number: "1,800+",
      label: "Happy Clients Served"
    },
    {
      number: "Average 14",
      label: "Days to Close a Deal"
    }
  ],
  backgroundImage: "/assets/images/HeroImage.png"
};

// Default Description Section Content
export const DEFAULT_DESCRIPTION_CONTENT = {
  title: "Find Your Perfect Home in Algeria",
  description: "Explore verified listings across Algiers, Oran, Constantine, and beyond. From city apartments to coastal villas, we connect you directly with trusted agents and property owners — no middleman, no hidden fees.",
  apartments: [
    {
      id: 1,
      price: "DZD 34,100",
      period: "F3 | Per Month",
      image: "/assets/images/apartments/appartement1.png",
      zIndex: 30
    },
    {
      id: 2,
      price: "DZD 45,800",
      period: "F4 | Per Month", 
      image: "/assets/images/apartments/appartement2.png",
      zIndex: 20
    },
    {
      id: 3,
      price: "DZD 28,500",
      period: "F2 | Per Month",
      image: "/assets/images/apartments/appartement3.png",
      zIndex: 10
    }
  ]
};

// API Endpoints
export const API_ENDPOINTS = {
  HERO_CONTENT: '/api/hero-content',
  DESCRIPTION_CONTENT: '/api/description-content',
  // Add more endpoints here as needed
};