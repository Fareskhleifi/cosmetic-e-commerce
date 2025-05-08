export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  images: string[];
  category: string;
  featured?: boolean;
  newArrival?: boolean;
  bestSeller?: boolean;
  ingredients?: string;
  howToUse?: string;
  reviews?: Review[];
  rating?: number;
  stock: number;
}

export interface Review {
  id: number;
  author: string;
  rating: number;
  content: string;
  date: string;
}

export interface Category {
  id: number;
  name: string;
  image: string;
  description: string;
}