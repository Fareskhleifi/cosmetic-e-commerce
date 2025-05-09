import React from 'react';
import { Link } from 'react-router-dom';
import { categories } from '../../data/categories';

const CategorySection: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-serif mb-3">Magasiner par Catégorie</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Parcourez notre collection de produits de beauté haut de gamme par catégorie pour trouver exactement ce que vous cherchez.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map(category => (
            <Link 
              key={category.id}
              to={`/products?category=${category.name.toLowerCase()}`}
              className="group"
            >
              <div className="relative rounded-lg overflow-hidden h-64">
                <img 
                  src={category.image} 
                  alt={category.name} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
                  <div className="text-white">
                    <h3 className="text-2xl font-serif mb-1">{category.name}</h3>
                    <p className="text-white/80 text-sm">{category.description}</p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;