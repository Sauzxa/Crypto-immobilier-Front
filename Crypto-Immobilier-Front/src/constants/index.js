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

// Default Sellers Section Content
export const DEFAULT_SELLERS_CONTENT = {
  // Available regions with their apartments
  regions: [
    {
      id: "hydra",
      name: "Hydra",
      apartments: [
        {
          id: 1,
          name: "Appartement 3chambres séjour",
          image: "/assets/images/regions/hydra/Appartement-3chambres-séjour.png",
          availability: "Available"
        },
        {
          id: 2,
          name: "Appartement Charmant",
          image: "/assets/images/regions/hydra/Appartement-Charmant.png",
          availability: "Available"
        },
        {
          id: 3,
          name: "Majestueux Appartement 2pièces",
          image: "/assets/images/regions/hydra/Majestueux-Appartement-2pièces.png",
          availability: "Unavailable"
        },
        {
          id: 4,
          name: "Somptueux appartement",
          image: "/assets/images/regions/hydra/Somptueux-appartement.png",
          availability: "Available"
        }
      ]
    },
    {
      id: "bab-ezzouar",
      name: "Bab Ezzouar",
      apartments: [
        {
          id: 5,
          name: "Appartement Bordj El Kiffan",
          image: "/assets/images/regions/bbz/Appartement-Bordj-El-Kiffan-bbz.png",
          availability: "Available"
        },
        {
          id: 6,
          name: "Appartement Draria",
          image: "/assets/images/regions/bbz/Appartement-Draria-bbz.png",
          availability: "Available"
        },
        {
          id: 7,
          name: "Au refuge de Nadia",
          image: "/assets/images/regions/bbz/Au-refuge-de-Nadia-bbz.png",
          availability: "Unavailable"
        }
      ]
    },
    {
      id: "cheraga",
      name: "Cheraga",
      apartments: [
        {
          id: 8,
          name: "Apartment bénimessous",
          image: "/assets/images/regions/cheraga/Apartment-bénimessous1-cheraga.png",
          availability: "Available"
        },
        {
          id: 9,
          name: "Appartement F4 Chraga",
          image: "/assets/images/regions/cheraga/appartementF4-chraga.png",
          availability: "Available"
        },
        {
          id: 10,
          name: "Sweet Home Chraga",
          image: "/assets/images/regions/cheraga/sweetHome-Chraga.png",
          availability: "Available"
        }
      ]
    }
  ]
};

// API Endpoints
export const API_ENDPOINTS = {
  HERO_CONTENT: '/api/hero-content',
  DESCRIPTION_CONTENT: '/api/description-content',
  SELLERS_CONTENT: '/api/sellers-content',
  // Add more endpoints here as needed
};