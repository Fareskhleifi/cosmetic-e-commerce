import React from 'react';
import { Link } from 'react-router-dom';

const HeroSection: React.FC = () => {
  return (
    <section className="relative h-screen">
      {/* Image de Fond */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.pexels.com/photos/2536965/pexels-photo-2536965.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
          alt="Hero background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-30"></div>
      </div>
      
      {/* Contenu */}
      <div className="relative z-10 h-full flex items-center px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="max-w-xl">
            <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-serif mb-4 leading-tight">
              Découvrez Votre Beauté Naturelle
            </h1>
            <p className="text-white text-lg md:text-xl mb-8 max-w-lg">
              Produits de soins de la peau haut de gamme, sans cruauté, qui rehaussent votre éclat naturel.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/products" 
                className="bg-pink-600 text-white px-8 py-3 rounded-md hover:bg-pink-700 transition-colors text-center"
              >
                Acheter Maintenant
              </Link>
              <Link 
                to="/about" 
                className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-md hover:bg-white hover:text-pink-600 transition-colors text-center"
              >
                En Savoir Plus
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;