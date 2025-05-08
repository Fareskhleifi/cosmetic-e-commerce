import React, { createContext, useContext, useState, useEffect } from 'react';
import { Product } from '../types';

interface WishlistContextType {
  items: Product[];
  addToWishlist: (product: Product) => void;
  removeFromWishlist: (productId: number) => void;
  isInWishlist: (productId: number) => boolean;
}

const WishlistContext = createContext<WishlistContextType | undefined>(undefined);

export const useWishlist = () => {
  const context = useContext(WishlistContext);
  if (!context) {
    throw new Error('useWishlist must be used within a WishlistProvider');
  }
  return context;
};

export const WishlistProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [items, setItems] = useState<Product[]>([]);
  
  useEffect(() => {
    const savedWishlist = localStorage.getItem('wishlist');
    if (savedWishlist) {
      try {
        setItems(JSON.parse(savedWishlist));
      } catch (e) {
        console.error('Failed to parse wishlist from localStorage', e);
      }
    }
  }, []);
  
  useEffect(() => {
    localStorage.setItem('wishlist', JSON.stringify(items));
  }, [items]);

  const addToWishlist = (product: Product) => {
    setItems(prevItems => {
      if (!prevItems.find(item => item.id === product.id)) {
        return [...prevItems, product];
      }
      return prevItems;
    });
  };

  const removeFromWishlist = (productId: number) => {
    setItems(prevItems => prevItems.filter(item => item.id !== productId));
  };

  const isInWishlist = (productId: number) => {
    return items.some(item => item.id === productId);
  };

  return (
    <WishlistContext.Provider 
      value={{ 
        items,
        addToWishlist,
        removeFromWishlist,
        isInWishlist
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
};