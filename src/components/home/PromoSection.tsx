import React from 'react';
import { Link } from 'react-router-dom';

const PromoSection: React.FC = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Première Carte Promotionnelle */}
          <div className="relative rounded-lg overflow-hidden">
            <img 
              src="https://images.pexels.com/photos/5257627/pexels-photo-5257627.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
              alt="New Arrivals" 
              className="w-full h-96 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent flex items-center p-8">
              <div className="text-white max-w-xs">
                <h3 className="text-2xl font-serif mb-2">Nouveautés</h3>
                <p className="mb-4">Découvrez nos derniers produits, formulés avec des ingrédients de première qualité.</p>
                <Link 
                  to="/products?filter=new" 
                  className="bg-white text-pink-600 px-6 py-2 rounded-md hover:bg-pink-600 hover:text-white transition-colors inline-block"
                >
                  Acheter Maintenant
                </Link>
              </div>
            </div>
          </div>
          
          {/* Deuxième Carte Promotionnelle */}
          <div className="relative rounded-lg overflow-hidden">
            <img 
              src="https://images.pexels.com/photos/3786181/pexels-photo-3786181.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
              alt="Best Sellers" 
              className="w-full h-96 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent flex items-center p-8">
              <div className="text-white max-w-xs">
                <h3 className="text-2xl font-serif mb-2">Meilleures Ventes</h3>
                <p className="mb-4">Nos produits les plus appréciés dont les clients ne se lassent pas.</p>
                <Link 
                  to="/products?filter=bestseller" 
                  className="bg-white text-pink-600 px-6 py-2 rounded-md hover:bg-pink-600 hover:text-white transition-colors inline-block"
                >
                  Acheter Maintenant
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PromoSection;