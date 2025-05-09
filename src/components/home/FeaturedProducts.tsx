import React from 'react';
import { Link } from 'react-router-dom';
import ProductGrid from '../product/ProductGrid';
import { getFeaturedProducts } from '../../data/products';

const FeaturedProducts: React.FC = () => {
  const featuredProducts = getFeaturedProducts();
  
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-10">
          <div>
            <h2 className="text-3xl font-serif mb-3">Produits Phares</h2>
            <p className="text-gray-600 max-w-2xl">
              Notre sélection soigneusement choisie de produits haut de gamme qui transformeront votre routine de soins de la peau.
            </p>
          </div>
          <Link 
            to="/products" 
            className="mt-4 md:mt-0 text-pink-600 hover:text-pink-700 font-medium flex items-center"
          >
            Voir Tous les Produits
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </Link>
        </div>
        
        <ProductGrid products={featuredProducts} columns={4} />
      </div>
    </section>
  );
};

export default FeaturedProducts;