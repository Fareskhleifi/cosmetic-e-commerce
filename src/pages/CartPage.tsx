import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Trash2, ShoppingBag, Plus, Minus } from 'lucide-react';
import { useCart } from '../context/CartContext';

const CartPage: React.FC = () => {
  const { items, removeFromCart, updateQuantity, totalPrice } = useCart();
  
  useEffect(() => {
    document.title = 'Shopping Cart - LUXEBEAUTY';
    window.scrollTo(0, 0);
  }, []);

  if (items.length === 0) {
    return (
      <div className="mt-16 pt-12 pb-16">
        <div className="container mx-auto px-4 text-center">
          <div className="bg-white p-8 rounded-lg shadow-sm max-w-md mx-auto">
            <ShoppingBag size={64} className="mx-auto text-gray-300 mb-4" />
            <h1 className="text-2xl font-serif mb-4">Your Cart is Empty</h1>
            <p className="text-gray-600 mb-6">
              Looks like you haven't added any products to your cart yet.
            </p>
            <Link 
              to="/products" 
              className="bg-pink-600 text-white px-6 py-2 rounded-md hover:bg-pink-700 transition-colors inline-block"
            >
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="mt-16 pt-12 pb-16">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-serif mb-8 text-center">Shopping Cart</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="hidden md:grid grid-cols-12 bg-gray-50 p-4 border-b">
                <div className="col-span-6">
                  <h3 className="font-medium">Product</h3>
                </div>
                <div className="col-span-2 text-center">
                  <h3 className="font-medium">Price</h3>
                </div>
                <div className="col-span-2 text-center">
                  <h3 className="font-medium">Quantity</h3>
                </div>
                <div className="col-span-2 text-right">
                  <h3 className="font-medium">Total</h3>
                </div>
              </div>
              
              {items.map(item => (
                <div key={item.product.id} className="border-b last:border-b-0 p-4">
                  <div className="md:grid md:grid-cols-12 md:items-center gap-4">
                    {/* Product (mobile view is stacked, desktop is grid) */}
                    <div className="md:col-span-6 flex items-center mb-4 md:mb-0">
                      <div className="w-20 h-20 rounded-md overflow-hidden mr-4 flex-shrink-0">
                        <img 
                          src={item.product.images[0]} 
                          alt={item.product.name} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <h3 className="font-medium mb-1">
                          <Link to={`/products/${item.product.id}`} className="hover:text-pink-600 transition-colors">
                            {item.product.name}
                          </Link>
                        </h3>
                        <button 
                          className="text-sm text-gray-500 hover:text-red-500 transition-colors flex items-center"
                          onClick={() => removeFromCart(item.product.id)}
                        >
                          <Trash2 size={14} className="mr-1" />
                          Remove
                        </button>
                      </div>
                    </div>
                    
                    {/* Price */}
                    <div className="md:col-span-2 md:text-center flex justify-between mb-2 md:mb-0">
                      <span className="md:hidden">Price:</span>
                      <span>{item.product.price.toFixed(2)} DT</span>
                    </div>
                    
                    {/* Quantity */}
                    <div className="md:col-span-2 md:text-center flex justify-between items-center mb-2 md:mb-0">
                      <span className="md:hidden">Quantity:</span>
                      <div className="flex items-center">
                        <button 
                          onClick={() => updateQuantity(item.product.id, Math.max(1, item.quantity - 1))}
                          className="bg-gray-100 p-1 rounded-l hover:bg-gray-200 transition-colors"
                        >
                          <Minus size={14} />
                        </button>
                        <span className="w-8 text-center">{item.quantity}</span>
                        <button 
                          onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                          className="bg-gray-100 p-1 rounded-r hover:bg-gray-200 transition-colors"
                        >
                          <Plus size={14} />
                        </button>
                      </div>
                    </div>
                    
                    {/* Total */}
                    <div className="md:col-span-2 md:text-right flex justify-between mb-2 md:mb-0">
                      <span className="md:hidden">Total:</span>
                      <span className="font-medium">{(item.product.price * item.quantity).toFixed(2)} DT</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-6">
              <Link 
                to="/products" 
                className="flex items-center text-pink-600 hover:text-pink-700 transition-colors"
              >
                <ShoppingBag size={16} className="mr-2" />
                Continue Shopping
              </Link>
            </div>
          </div>
          
          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-xl font-serif mb-4">Order Summary</h2>
              
              <div className="space-y-3 mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-600">Subtotal</span>
                  <span>{totalPrice.toFixed(2)} DT</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Shipping</span>
                  <span>Calculated at checkout</span>
                </div>
                <div className="border-t pt-3">
                  <div className="flex justify-between font-medium">
                    <span>Estimated Total</span>
                    <span>{totalPrice.toFixed(2)} DT</span>
                  </div>
                </div>
              </div>
              
              <Link 
                to="/checkout" 
                className="w-full bg-pink-600 text-white py-3 rounded-md hover:bg-pink-700 transition-colors flex items-center justify-center"
              >
                Proceed to Checkout
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;