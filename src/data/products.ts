import { Product } from '../types';

export const products: Product[] = [
  {
    id: 1,
    name: "Sérum Hydratant Visage",
    price: 39.99,
    description: "Notre sérum hydratant visage le plus vendu, avec de l'acide hyaluronique, offre une hydratation de 24 heures et repulpe la peau pour une apparence jeune.",
    images: [
      "https://images.pexels.com/photos/6621462/pexels-photo-6621462.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/5797999/pexels-photo-5797999.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    ],
    category: "face",
    featured: true,
    bestSeller: true,
    ingredients: "Water, Glycerin, Sodium Hyaluronate, Pentylene Glycol, Citric Acid, Sodium Citrate, Panthenol, Phenoxyethanol, Ethylhexylglycerin",
    howToUse: "Appliquez quelques gouttes sur une peau propre et humide matin et soir avant votre crème hydratante.",
    rating: 4.8,
    stock: 25
  },
  {
    id: 2,
    name: "Crème de Nuit Anti-Âge",
    price: 49.99,
    description: "Crème de nuit riche avec du rétinol et des peptides qui agit pendant votre sommeil pour réduire les rides et ridules.",
    images: [
      "https://images.pexels.com/photos/7290698/pexels-photo-7290698.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/7290715/pexels-photo-7290715.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    ],
    category: "face",
    featured: true,
    ingredients: "Water, Glycerin, Caprylic/Capric Triglyceride, Retinol, Ceramide NP, Peptides, Shea Butter, Dimethicone, Fragrance",
    howToUse: "Appliquez une petite quantité sur le visage et le cou propres le soir. Évitez le contour des yeux.",
    rating: 4.6,
    stock: 18
  },
  {
    id: 3,
    name: "Sérum Éclatant Vitamine C",
    price: 44.99,
    description: "Sérum puissant à 15 % de vitamine C qui éclaircit le teint, réduit les taches brunes et stimule la production de collagène.",
    images: [
      "https://i.postimg.cc/prnSNkcx/vc.jpg",
      "https://i.postimg.cc/j529cRzD/vc2.avif"
    ],
    category: "face",
    newArrival: true,
    ingredients: "Water, Ascorbic Acid, Ferulic Acid, Vitamin E, Glycerin, Propanediol, Laureth-23, Phenoxyethanol",
    howToUse: "Appliquez 3 à 4 gouttes sur le visage et le cou propres le matin avant l'écran solaire.",
    rating: 4.7,
    stock: 15
  },
  {
    id: 4,
    name: "Mousse Nettoyante Douce",
    price: 24.99,
    description: "Nettoyant moussant sans sulfate qui élimine efficacement le maquillage et les impuretés sans priver la peau de son hydratation naturelle.",
    images: [
      "https://i.postimg.cc/qRZfHNkc/clns.webp",
      "https://i.postimg.cc/Rh3kSvFk/clns2.jpg"
    ],
    category: "cleansers",
    bestSeller: true,
    ingredients: "Water, Glycerin, Coco-Betaine, Sodium Cocoyl Isethionate, Panthenol, Aloe Vera Extract, Chamomile Extract",
    howToUse: "Massez sur le visage humide matin et soir, puis rincez abondamment à l'eau.",
    rating: 4.5,
    stock: 30
  },
  {
    id: 5,
    name: "Beurre Corporel Nourrissant",
    price: 28.99,
    description: "Beurre corporel riche et crémeux avec du beurre de karité et de cacao pour une peau profondément hydratée et douce.",
    images: [
      "https://images.pexels.com/photos/6621329/pexels-photo-6621329.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/5797994/pexels-photo-5797994.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    ],
    category: "body",
    featured: true,
    ingredients: "Butyrospermum Parkii (Shea) Butter, Theobroma Cacao (Cocoa) Seed Butter, Glycerin, Coconut Oil, Fragrance",
    howToUse: "Appliquez sur une peau propre et sèche. Concentrez-vous sur les zones sèches comme les coudes, les genoux et les pieds.",
    rating: 4.9,
    stock: 22
  },
  {
    id: 6,
    name: "Gommage Exfoliant Visage",
    price: 27.99,
    description: "Gommage exfoliant doux avec des particules de bambou et des enzymes de fruits pour révéler une peau plus lisse et lumineuse.",
    images: [
      "https://images.pexels.com/photos/8128069/pexels-photo-8128069.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/5797990/pexels-photo-5797990.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    ],
    category: "face",
    ingredients: "Water, Bamboo Powder, Papaya Enzyme, Glycerin, Jojoba Beads, Aloe Vera, Green Tea Extract",
    howToUse: "Appliquez sur une peau humide et massez doucement en mouvements circulaires. Utilisez 2 à 3 fois par semaine.",
    rating: 4.3,
    stock: 28
  },
  {
    id: 7,
    name: "Toner Rose Rafraîchissant",
    price: 22.99,
    description: "Toner à l'eau de rose sans alcool qui hydrate, apaise et prépare la peau pour une meilleure absorption des sérums et crèmes hydratantes.",
    images: [
      "https://i.postimg.cc/SNMBHQH8/fresh.webp",
      "https://i.postimg.cc/YCB57KwP/fresh2.webp"
    ],
    category: "face",
    newArrival: true,
    ingredients: "Rosa Damascena Flower Water, Glycerin, Panthenol, Sodium Hyaluronate, Niacinamide, Allantoin",
    howToUse: "Après le nettoyage, appliquez sur le visage et le cou à l'aide d'un coton ou en vaporisant directement sur la peau.",
    rating: 4.4,
    stock: 20
  },
  {
    id: 8,
    name: "Huile de Bain Luxueuse",
    price: 34.99,
    description: "Huile de bain aromatique avec des huiles essentielles de lavande et de camomille pour une expérience de bain relaxante, digne d'un spa.",
    images: [
      "https://i.postimg.cc/vmQC1rTL/both-oil.webp",
      "https://i.postimg.cc/DZzVNrKy/bath-oil-product.jpg"
    ],
    category: "bath",
    featured: true,
    ingredients: "Sweet Almond Oil, Jojoba Oil, Lavender Essential Oil, Chamomile Essential Oil, Vitamin E",
    howToUse: "Ajoutez 1 à 2 bouchons dans l'eau du bain. Laissez tremper pendant au moins 15 minutes pour un maximum de bienfaits.",
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