import { Product } from '../types';

export const products: Product[] = [
  {
    id: 1,
    name: "Hydrating Face Serum",
    price: 39.99,
    description: "Our best-selling hydrating face serum with hyaluronic acid provides 24-hour hydration and plumps skin for a youthful appearance.",
    images: [
      "https://images.pexels.com/photos/6621462/pexels-photo-6621462.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/5797999/pexels-photo-5797999.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    ],
    category: "face",
    featured: true,
    bestSeller: true,
    ingredients: "Water, Glycerin, Sodium Hyaluronate, Pentylene Glycol, Citric Acid, Sodium Citrate, Panthenol, Phenoxyethanol, Ethylhexylglycerin",
    howToUse: "Apply a few drops to clean, damp skin morning and night before moisturizer.",
    rating: 4.8,
    stock: 25
  },
  {
    id: 2,
    name: "Anti-Aging Night Cream",
    price: 49.99,
    description: "Rich night cream with retinol and peptides that works while you sleep to reduce fine lines and wrinkles.",
    images: [
      "https://images.pexels.com/photos/7290698/pexels-photo-7290698.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/7290715/pexels-photo-7290715.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    ],
    category: "face",
    featured: true,
    ingredients: "Water, Glycerin, Caprylic/Capric Triglyceride, Retinol, Ceramide NP, Peptides, Shea Butter, Dimethicone, Fragrance",
    howToUse: "Apply a small amount to clean face and neck in the evening. Avoid eye area.",
    rating: 4.6,
    stock: 18
  },
  {
    id: 3,
    name: "Vitamin C Brightening Serum",
    price: 44.99,
    description: "Powerful 15% vitamin C serum that brightens skin tone, reduces dark spots, and boosts collagen production.",
    images: [
      "https://i.postimg.cc/prnSNkcx/vc.jpg",
      "https://i.postimg.cc/j529cRzD/vc2.avif"
    ],
    category: "face",
    newArrival: true,
    ingredients: "Water, Ascorbic Acid, Ferulic Acid, Vitamin E, Glycerin, Propanediol, Laureth-23, Phenoxyethanol",
    howToUse: "Apply 3-4 drops to clean face and neck in the morning before sunscreen.",
    rating: 4.7,
    stock: 15
  },
  {
    id: 4,
    name: "Gentle Cleansing Foam",
    price: 24.99,
    description: "Sulfate-free foaming cleanser that effectively removes makeup and impurities without stripping skin's natural moisture.",
    images: [
      "https://i.postimg.cc/qRZfHNkc/clns.webp",
      "https://i.postimg.cc/Rh3kSvFk/clns2.jpg"
    ],
    category: "cleansers",
    bestSeller: true,
    ingredients: "Water, Glycerin, Coco-Betaine, Sodium Cocoyl Isethionate, Panthenol, Aloe Vera Extract, Chamomile Extract",
    howToUse: "Massage onto damp face morning and evening, then rinse thoroughly with water.",
    rating: 4.5,
    stock: 30
  },
  {
    id: 5,
    name: "Nourishing Body Butter",
    price: 28.99,
    description: "Rich, creamy body butter with shea and cocoa butter for deeply moisturized, soft skin.",
    images: [
      "https://images.pexels.com/photos/6621329/pexels-photo-6621329.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/5797994/pexels-photo-5797994.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    ],
    category: "body",
    featured: true,
    ingredients: "Butyrospermum Parkii (Shea) Butter, Theobroma Cacao (Cocoa) Seed Butter, Glycerin, Coconut Oil, Fragrance",
    howToUse: "Apply to clean, dry skin. Focus on dry areas like elbows, knees, and feet.",
    rating: 4.9,
    stock: 22
  },
  {
    id: 6,
    name: "Exfoliating Facial Scrub",
    price: 27.99,
    description: "Gentle exfoliating scrub with bamboo particles and fruit enzymes to reveal smoother, brighter skin.",
    images: [
      "https://images.pexels.com/photos/8128069/pexels-photo-8128069.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/5797990/pexels-photo-5797990.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    ],
    category: "face",
    ingredients: "Water, Bamboo Powder, Papaya Enzyme, Glycerin, Jojoba Beads, Aloe Vera, Green Tea Extract",
    howToUse: "Apply to damp skin and gently massage in circular motions. Use 2-3 times per week.",
    rating: 4.3,
    stock: 28
  },
  {
    id: 7,
    name: "Refreshing Rose Toner",
    price: 22.99,
    description: "Alcohol-free rose water toner that hydrates, soothes, and preps skin for better absorption of serums and moisturizers.",
    images: [
      "https://i.postimg.cc/SNMBHQH8/fresh.webp",
      "https://i.postimg.cc/YCB57KwP/fresh2.webp"
    ],
    category: "face",
    newArrival: true,
    ingredients: "Rosa Damascena Flower Water, Glycerin, Panthenol, Sodium Hyaluronate, Niacinamide, Allantoin",
    howToUse: "After cleansing, apply to face and neck using a cotton pad or by spritzing directly onto skin.",
    rating: 4.4,
    stock: 20
  },
  {
    id: 8,
    name: "Luxurious Bath Oil",
    price: 34.99,
    description: "Aromatic bath oil with lavender and chamomile essential oils for a relaxing, spa-like bathing experience.",
    images: [
      "https://i.postimg.cc/vmQC1rTL/both-oil.webp",
      "https://i.postimg.cc/DZzVNrKy/bath-oil-product.jpg"
    ],
    category: "bath",
    featured: true,
    ingredients: "Sweet Almond Oil, Jojoba Oil, Lavender Essential Oil, Chamomile Essential Oil, Vitamin E",
    howToUse: "Add 1-2 capfuls to running bath water. Soak for at least 15 minutes for maximum benefits.",
    rating: 4.8,
    stock: 15
  }
];

export const getProductById = (id: number): Product | undefined => {
  return products.find(product => product.id === id);
};

export const getFeaturedProducts = (): Product[] => {
  return products.filter(product => product.featured);
};

export const getBestSellers = (): Product[] => {
  return products.filter(product => product.bestSeller);
};

export const getNewArrivals = (): Product[] => {
  return products.filter(product => product.newArrival);
};

export const getProductsByCategory = (category: string): Product[] => {
  return products.filter(product => product.category === category);
};