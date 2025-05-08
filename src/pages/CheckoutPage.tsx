import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const CheckoutPage: React.FC = () => {
  const { items, totalPrice, clearCart } = useCart();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zip: '',
    country: 'US',
    paymentMethod: 'credit-card',
    cardName: '',
    cardNumber: '',
    expiryDate: '',
    cvv: ''
  });
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [orderPlaced, setOrderPlaced] = useState(false);
  
  useEffect(() => {
    document.title = 'Checkout - LUXEBEAUTY';
    window.scrollTo(0, 0);
    
    // Redirect to cart if cart is empty
    if (items.length === 0 && !orderPlaced) {
      window.location.href = '/cart';
    }
  }, [items, orderPlaced]);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    
    // Clear error when field is changed
    if (formErrors[name]) {
      setFormErrors({
        ...formErrors,
        [name]: ''
      });
    }
  };
  
  const validateForm = () => {
    const errors: Record<string, string> = {};
    
    // Basic validations
    if (!formData.firstName) errors.firstName = 'First name is required';
    if (!formData.lastName) errors.lastName = 'Last name is required';
    if (!formData.email) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Email is invalid';
    }
    if (!formData.phone) errors.phone = 'Phone number is required';
    if (!formData.address) errors.address = 'Address is required';
    if (!formData.city) errors.city = 'City is required';
    if (!formData.state) errors.state = 'State is required';
    if (!formData.zip) errors.zip = 'ZIP code is required';
    
    // Payment validations
    if (formData.paymentMethod === 'credit-card') {
      if (!formData.cardName) errors.cardName = 'Name on card is required';
      if (!formData.cardNumber) {
        errors.cardNumber = 'Card number is required';
      } else if (!/^\d{16}$/.test(formData.cardNumber.replace(/\s/g, ''))) {
        errors.cardNumber = 'Card number is invalid';
      }
      if (!formData.expiryDate) {
        errors.expiryDate = 'Expiry date is required';
      } else if (!/^(0[1-9]|1[0-2])\/\d{2}$/.test(formData.expiryDate)) {
        errors.expiryDate = 'Format should be MM/YY';
      }
      if (!formData.cvv) {
        errors.cvv = 'CVV is required';
      } else if (!/^\d{3,4}$/.test(formData.cvv)) {
        errors.cvv = 'CVV is invalid';
      }
    }
    
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      // Simulate order processing
      setTimeout(() => {
        setOrderPlaced(true);
        clearCart();
      }, 1500);
    }
  };
  
  if (orderPlaced) {
    return (
      <div className="mt-16 pt-12 pb-16">
        <div className="container mx-auto px-4 text-center">
          <div className="bg-white p-8 rounded-lg shadow-sm max-w-md mx-auto">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h1 className="text-2xl font-serif mb-4">Order Successful!</h1>
            <p className="text-gray-600 mb-6">
              Thank you for your order. We've received your payment and will process your order shortly.
            </p>
            <Link 
              to="/" 
              className="bg-pink-600 text-white px-6 py-2 rounded-md hover:bg-pink-700 transition-colors inline-block"
            >
              Return to Home
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="mt-16 pt-12 pb-16">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-serif mb-8 text-center">Checkout</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Checkout Form */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit}>
              {/* Customer Information */}
              <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
                <h2 className="text-xl font-serif mb-4">Customer Information</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      First Name*
                    </label>
                    <input 
                      type="text" 
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      className={`w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-pink-300 ${formErrors.firstName ? 'border-red-500' : 'border-gray-300'}`}
                    />
                    {formErrors.firstName && (
                      <p className="text-red-500 text-xs mt-1">{formErrors.firstName}</p>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Last Name*
                    </label>
                    <input 
                      type="text" 
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      className={`w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-pink-300 ${formErrors.lastName ? 'border-red-500' : 'border-gray-300'}`}
                    />
                    {formErrors.lastName && (
                      <p className="text-red-500 text-xs mt-1">{formErrors.lastName}</p>
                    )}
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address*
                    </label>
                    <input 
                      type="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-pink-300 ${formErrors.email ? 'border-red-500' : 'border-gray-300'}`}
                    />
                    {formErrors.email && (
                      <p className="text-red-500 text-xs mt-1">{formErrors.email}</p>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Phone Number*
                    </label>
                    <input 
                      type="tel" 
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className={`w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-pink-300 ${formErrors.phone ? 'border-red-500' : 'border-gray-300'}`}
                    />
                    {formErrors.phone && (
                      <p className="text-red-500 text-xs mt-1">{formErrors.phone}</p>
                    )}
                  </div>
                </div>
              </div>
              
              {/* Shipping Address */}
              <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
                <h2 className="text-xl font-serif mb-4">Shipping Address</h2>
                
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Street Address*
                  </label>
                  <input 
                    type="text" 
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    className={`w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-pink-300 ${formErrors.address ? 'border-red-500' : 'border-gray-300'}`}
                  />
                  {formErrors.address && (
                    <p className="text-red-500 text-xs mt-1">{formErrors.address}</p>
                  )}
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      City*
                    </label>
                    <input 
                      type="text" 
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      className={`w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-pink-300 ${formErrors.city ? 'border-red-500' : 'border-gray-300'}`}
                    />
                    {formErrors.city && (
                      <p className="text-red-500 text-xs mt-1">{formErrors.city}</p>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      State/Province*
                    </label>
                    <input 
                      type="text" 
                      name="state"
                      value={formData.state}
                      onChange={handleChange}
                      className={`w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-pink-300 ${formErrors.state ? 'border-red-500' : 'border-gray-300'}`}
                    />
                    {formErrors.state && (
                      <p className="text-red-500 text-xs mt-1">{formErrors.state}</p>
                    )}
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      ZIP/Postal Code*
                    </label>
                    <input 
                      type="text" 
                      name="zip"
                      value={formData.zip}
                      onChange={handleChange}
                      className={`w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-pink-300 ${formErrors.zip ? 'border-red-500' : 'border-gray-300'}`}
                    />
                    {formErrors.zip && (
                      <p className="text-red-500 text-xs mt-1">{formErrors.zip}</p>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Country*
                    </label>
                    <select 
                      name="country"
                      value={formData.country}
                      onChange={handleChange}
                      className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-300"
                    >
                      <option value="US">Tunisia</option>
                      <option value="US">United States</option>
                      <option value="CA">Canada</option>
                      <option value="UK">United Kingdom</option>
                      <option value="AU">Australia</option>
                    </select>
                  </div>
                </div>
              </div>
              
              {/* Payment Information */}
              <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
                <h2 className="text-xl font-serif mb-4">Payment Method</h2>
                
                <div className="mb-4">
                  <div className="flex items-center space-x-4">
                    <label className="flex items-center">
                      <input 
                        type="radio" 
                        name="paymentMethod"
                        value="credit-card"
                        checked={formData.paymentMethod === 'credit-card'}
                        onChange={handleChange}
                        className="mr-2"
                      />
                      Credit Card
                    </label>
                    <label className="flex items-center">
                      <input 
                        type="radio" 
                        name="paymentMethod"
                        value="face-to-face"
                        checked={formData.paymentMethod === 'face-to-face'}
                        onChange={handleChange}
                        className="mr-2"
                      />
                      Face to Face
                    </label>
                  </div>
                </div>
                
                {formData.paymentMethod === 'credit-card' && (
                  <div>
                    <div className="mb-4">
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Name on Card*
                      </label>
                      <input 
                        type="text" 
                        name="cardName"
                        value={formData.cardName}
                        onChange={handleChange}
                        className={`w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-pink-300 ${formErrors.cardName ? 'border-red-500' : 'border-gray-300'}`}
                      />
                      {formErrors.cardName && (
                        <p className="text-red-500 text-xs mt-1">{formErrors.cardName}</p>
                      )}
                    </div>
                    
                    <div className="mb-4">
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Card Number*
                      </label>
                      <input 
                        type="text" 
                        name="cardNumber"
                        value={formData.cardNumber}
                        onChange={handleChange}
                        placeholder="XXXX XXXX XXXX XXXX"
                        className={`w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-pink-300 ${formErrors.cardNumber ? 'border-red-500' : 'border-gray-300'}`}
                      />
                      {formErrors.cardNumber && (
                        <p className="text-red-500 text-xs mt-1">{formErrors.cardNumber}</p>
                      )}
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Expiry Date*
                        </label>
                        <input 
                          type="text" 
                          name="expiryDate"
                          value={formData.expiryDate}
                          onChange={handleChange}
                          placeholder="MM/YY"
                          className={`w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-pink-300 ${formErrors.expiryDate ? 'border-red-500' : 'border-gray-300'}`}
                        />
                        {formErrors.expiryDate && (
                          <p className="text-red-500 text-xs mt-1">{formErrors.expiryDate}</p>
                        )}
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          CVV*
                        </label>
                        <input 
                          type="text" 
                          name="cvv"
                          value={formData.cvv}
                          onChange={handleChange}
                          placeholder="XXX"
                          className={`w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-pink-300 ${formErrors.cvv ? 'border-red-500' : 'border-gray-300'}`}
                        />
                        {formErrors.cvv && (
                          <p className="text-red-500 text-xs mt-1">{formErrors.cvv}</p>
                        )}
                      </div>
                    </div>
                  </div>
                )}
                
                {formData.paymentMethod === 'face-to-face' && (
                  <p className="text-gray-600">
                    You will pay in person at delivery. Our representative will contact you to arrange a convenient meeting time.
                  </p>
                )}
              </div>
              
              <div className="lg:hidden">
                <button 
                  type="submit" 
                  className="w-full bg-pink-600 text-white py-3 rounded-md hover:bg-pink-700 transition-colors"
                >
                  Place Order
                </button>
              </div>
            </form>
          </div>
          
          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm p-6 sticky top-24">
              <h2 className="text-xl font-serif mb-4">Order Summary</h2>
              
              {/* Cart Items */}
              <div className="mb-6 max-h-64 overflow-y-auto">
                {items.map(item => (
                  <div key={item.product.id} className="flex items-start py-3 border-b last:border-b-0">
                    <div className="w-16 h-16 rounded-md overflow-hidden mr-3 flex-shrink-0">
                      <img 
                        src={item.product.images[0]} 
                        alt={item.product.name} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-grow">
                      <h4 className="text-sm font-medium">{item.product.name}</h4>
                      <p className="text-gray-500 text-xs">Qty: {item.quantity}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-medium">{(item.product.price * item.quantity).toFixed(2)} DT</p>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Totals */}
              <div className="space-y-3 mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-600">Subtotal</span>
                  <span>{totalPrice.toFixed(2)} DT</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Shipping</span>
                  <span>Free</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Taxes</span>
                  <span>{(totalPrice * 0.2).toFixed(2)} DT</span>
                </div>
                <div className="border-t pt-3">
                  <div className="flex justify-between font-medium">
                    <span>Total</span>
                    <span>{(totalPrice + totalPrice * 0.1).toFixed(2)} DT</span>
                  </div>
                </div>
              </div>
              
              {/* Place Order Button - Desktop */}
              <div className="hidden lg:block">
                <button 
                  onClick={handleSubmit}
                  className="w-full bg-pink-600 text-white py-3 rounded-md hover:bg-pink-700 transition-colors"
                >
                  Place Order
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;