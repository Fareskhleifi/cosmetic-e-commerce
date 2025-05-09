import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ShoppingBag, Heart, ArrowLeft, Star, Plus, Minus } from 'lucide-react';
import { getProductById } from '../data/products';
import { useCart } from '../context/CartContext';

const ProductDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { addToCart } = useCart();
  const product = getProductById(parseInt(id || '0'));
  
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  const [activeTab, setActiveTab] = useState('description');
  
  useEffect(() => {
    if (product) {
      document.title = `${product.name} - LUXEBEAUTY`;
    } else {
      document.title = 'Produit Non Trouvé - LUXEBEAUTY';
    }
    window.scrollTo(0, 0);
  }, [product]);
  
  if (!product) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-2xl font-serif mb-4">Produit Non Trouvé</h1>
        <p className="text-gray-600 mb-6">Le produit que vous cherchez n'existe pas ou a été supprimé.</p>
        <Link to="/products" className="bg-pink-600 text-white px-6 py-2 rounded-md hover:bg-pink-700 transition-colors">
          Retourner à la Boutique
        </Link>
      </div>
    );
  }
  
  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  
  const increaseQuantity = () => {
    if (quantity < product.stock) {
      setQuantity(quantity + 1);
    }
  };
  
  const handleAddToCart = () => {
    addToCart(product, quantity);
  };

  return (
    <div className="mt-16 pt-8 pb-16">
      <div className="container mx-auto px-4">
        {/* Fil d'Ariane */}
        <div className="mb-8">
          <Link to="/products" className="flex items-center text-gray-600 hover:text-pink-600 transition-colors">
            <ArrowLeft size={16} className="mr-2" />
            Retour aux Produits
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Images du Produit */}
          <div>
            <div className="mb-4 rounded-lg overflow-hidden h-96">
              <img 
                src={product.images[selectedImage]} 
                alt={product.name} 
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Vignettes des Images */}
            {product.images.length > 1 && (
              <div className="flex gap-2">
                {product.images.map((image, index) => (
                  <button 
                    key={index}
                    className={`border-2 rounded-md overflow-hidden h-24 w-24 ${index === selectedImage ? 'border-pink-600' : 'border-transparent'}`}
                    onClick={() => setSelectedImage(index)}
                  >
                    <img 
                      src={image} 
                      alt={`${product.name} vignette ${index + 1}`} 
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>
          
          {/* Détails du Produit */}
          <div>
            {/* Badge : Nouvelle Arrivée ou Meilleure Vente */}
            {product.newArrival && (
              <span className="inline-block bg-pink-600 text-white text-xs px-3 py-1 rounded-full mb-3">
                Nouvelle Arrivée
              </span>
            )}
            {product.bestSeller && !product.newArrival && (
              <span className="inline-block bg-amber-500 text-white text-xs px-3 py-1 rounded-full mb-3">
                Meilleure Vente
              </span>
            )}
            
            <h1 className="text-3xl font-serif mb-2">{product.name}</h1>
            
            {/* Évaluation */}
            {product.rating && (
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i}
                    size={16} 
                    className={`${i < Math.floor(product.rating) ? 'text-amber-400 fill-amber-400' : 'text-gray-300'}`}
                  />
                ))}
                <span className="text-sm text-gray-600 ml-2">({product.rating})</span>
              </div>
            )}
            
            {/* Prix */}
            <p className="text-2xl text-pink-600 font-medium mb-6">
              {product.price.toFixed(2)} DT
            </p>
            
            {/* Description Courte */}
            <p className="text-gray-600 mb-6">
              {product.description}
            </p>
            
            {/* Sélecteur de Quantité */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Quantité
              </label>
              <div className="flex items-center">
                <button 
                  onClick={decreaseQuantity}
                  className="bg-gray-100 p-2 rounded-l-md hover:bg-gray-200 transition-colors"
                  disabled={quantity <= 1}
                >
                  <Minus size={16} />
                </button>
                <input 
                  type="number" 
                  value={quantity}
                  onChange={(e) => {
                    const value = parseInt(e.target.value);
                    if (value > 0 && value <= product.stock) {
                      setQuantity(value);
                    }
                  }}
                  className="w-16 text-center border-y border-gray-200 p-2"
                />
                <button 
                  onClick={increaseQuantity}
                  className="bg-gray-100 p-2 rounded-r-md hover:bg-gray-200 transition-colors"
                  disabled={quantity >= product.stock}
                >
                  <Plus size={16} />
                </button>
                <span className="ml-3 text-sm text-gray-500">
                  {product.stock} disponible
                </span>
              </div>
            </div>
            
            {/* Bouton Ajouter au Panier */}
            <div className="flex gap-3 mb-8">
              <button 
                onClick={handleAddToCart}
                className="flex-1 bg-pink-600 text-white px-6 py-3 rounded-md hover:bg-pink-700 transition-colors flex items-center justify-center"
              >
                <ShoppingBag size={18} className="mr-2" />
                Ajouter au Panier
              </button>
              <button className="bg-gray-100 px-4 py-3 rounded-md hover:bg-gray-200 transition-colors">
                <Heart size={18} />
              </button>
            </div>
            
            {/* Onglets du Produit */}
            <div className="border-t border-gray-200 pt-8">
              <div className="flex border-b border-gray-200">
                <button 
                  className={`pb-2 px-4 ${activeTab === 'description' ? 'border-b-2 border-pink-600 text-pink-600' : 'text-gray-600'}`}
                  onClick={() => setActiveTab('description')}
                >
                  Description
                </button>
                {product.ingredients && (
                  <button 
                    className={`pb-2 px-4 ${activeTab === 'ingredients' ? 'border-b-2 border-pink-600 text-pink-600' : 'text-gray-600'}`}
                    onClick={() => setActiveTab('ingredients')}
                  >
                    Ingrédients
                  </button>
                )}
                {product.howToUse && (
                  <button 
                    className={`pb-2 px-4 ${activeTab === 'how-to-use' ? 'border-b-2 border-pink-600 text-pink-600' : 'text-gray-600'}`}
                    onClick={() => setActiveTab('how-to-use')}
                  >
                    Mode d'Emploi
                  </button>
                )}
              </div>
              
              <div className="py-4">
                {activeTab === 'description' && (
                  <p className="text-gray-600">
                    {product.description}
                  </p>
                )}
                {activeTab === 'ingredients' && product.ingredients && (
                  <p className="text-gray-600">
                    {product.ingredients}
                  </p>
                )}
                {activeTab === 'how-to-use' && product.howToUse && (
                  <p className="text-gray-600">
                    {product.howToUse}
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;