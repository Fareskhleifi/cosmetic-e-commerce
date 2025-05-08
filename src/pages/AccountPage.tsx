import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { User, Package, Heart, CreditCard, Settings, LogOut } from 'lucide-react';

const AccountPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('profile');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loginForm, setLoginForm] = useState({
    email: '',
    password: ''
  });
  const [registerForm, setRegisterForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  
  useEffect(() => {
    document.title = 'My Account - LUXEBEAUTY';
    window.scrollTo(0, 0);
  }, []);
  
  const handleLoginChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLoginForm({
      ...loginForm,
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
  
  const handleRegisterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setRegisterForm({
      ...registerForm,
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
  
  const validateLoginForm = () => {
    const errors: Record<string, string> = {};
    
    if (!loginForm.email) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(loginForm.email)) {
      errors.email = 'Email is invalid';
    }
    if (!loginForm.password) errors.password = 'Password is required';
    
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };
  
  const validateRegisterForm = () => {
    const errors: Record<string, string> = {};
    
    if (!registerForm.firstName) errors.firstName = 'First name is required';
    if (!registerForm.lastName) errors.lastName = 'Last name is required';
    if (!registerForm.email) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(registerForm.email)) {
      errors.email = 'Email is invalid';
    }
    if (!registerForm.password) {
      errors.password = 'Password is required';
    } else if (registerForm.password.length < 6) {
      errors.password = 'Password must be at least 6 characters';
    }
    if (!registerForm.confirmPassword) {
      errors.confirmPassword = 'Please confirm your password';
    } else if (registerForm.password !== registerForm.confirmPassword) {
      errors.confirmPassword = 'Passwords do not match';
    }
    
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };
  
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateLoginForm()) {
      // Simulate successful login
      setIsLoggedIn(true);
    }
  };
  
  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateRegisterForm()) {
      // Simulate successful registration and login
      setIsLoggedIn(true);
    }
  };
  
  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  if (!isLoggedIn) {
    return (
      <div className="mt-16 pt-12 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl font-serif mb-8 text-center">My Account</h1>
            
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="flex border-b">
                <button 
                  className={`w-1/2 py-4 font-medium ${activeTab === 'login' ? 'bg-pink-50 text-pink-600' : 'bg-white text-gray-600'}`}
                  onClick={() => setActiveTab('login')}
                >
                  Login
                </button>
                <button 
                  className={`w-1/2 py-4 font-medium ${activeTab === 'register' ? 'bg-pink-50 text-pink-600' : 'bg-white text-gray-600'}`}
                  onClick={() => setActiveTab('register')}
                >
                  Register
                </button>
              </div>
              
              <div className="p-8">
                {activeTab === 'login' ? (
                  <form onSubmit={handleLogin}>
                    <div className="mb-4">
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Email Address*
                      </label>
                      <input 
                        type="email" 
                        name="email"
                        value={loginForm.email}
                        onChange={handleLoginChange}
                        className={`w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-pink-300 ${formErrors.email ? 'border-red-500' : 'border-gray-300'}`}
                      />
                      {formErrors.email && (
                        <p className="text-red-500 text-xs mt-1">{formErrors.email}</p>
                      )}
                    </div>
                    
                    <div className="mb-6">
                      <div className="flex justify-between mb-1">
                        <label className="block text-sm font-medium text-gray-700">
                          Password*
                        </label>
                        <a href="#" className="text-sm text-pink-600 hover:text-pink-700">
                          Forgot Password?
                        </a>
                      </div>
                      <input 
                        type="password" 
                        name="password"
                        value={loginForm.password}
                        onChange={handleLoginChange}
                        className={`w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-pink-300 ${formErrors.password ? 'border-red-500' : 'border-gray-300'}`}
                      />
                      {formErrors.password && (
                        <p className="text-red-500 text-xs mt-1">{formErrors.password}</p>
                      )}
                    </div>
                    
                    <button 
                      type="submit" 
                      className="w-full bg-pink-600 text-white py-3 rounded-md hover:bg-pink-700 transition-colors"
                    >
                      Login
                    </button>
                    
                    <div className="mt-4 text-center">
                      <p className="text-gray-600">
                        Don't have an account?{' '}
                        <button 
                          type="button"
                          className="text-pink-600 hover:text-pink-700 font-medium"
                          onClick={() => setActiveTab('register')}
                        >
                          Register now
                        </button>
                      </p>
                    </div>
                  </form>
                ) : (
                  <form onSubmit={handleRegister}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          First Name*
                        </label>
                        <input 
                          type="text" 
                          name="firstName"
                          value={registerForm.firstName}
                          onChange={handleRegisterChange}
                          className={`w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-pink-300 ${formErrors.firstName ? 'border-red-500' : 'border-gray-300'}`}
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
                          value={registerForm.lastName}
                          onChange={handleRegisterChange}
                          className={`w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-pink-300 ${formErrors.lastName ? 'border-red-500' : 'border-gray-300'}`}
                        />
                        {formErrors.lastName && (
                          <p className="text-red-500 text-xs mt-1">{formErrors.lastName}</p>
                        )}
                      </div>
                    </div>
                    
                    <div className="mb-4">
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Email Address*
                      </label>
                      <input 
                        type="email" 
                        name="email"
                        value={registerForm.email}
                        onChange={handleRegisterChange}
                        className={`w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-pink-300 ${formErrors.email ? 'border-red-500' : 'border-gray-300'}`}
                      />
                      {formErrors.email && (
                        <p className="text-red-500 text-xs mt-1">{formErrors.email}</p>
                      )}
                    </div>
                    
                    <div className="mb-4">
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Password*
                      </label>
                      <input 
                        type="password" 
                        name="password"
                        value={registerForm.password}
                        onChange={handleRegisterChange}
                        className={`w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-pink-300 ${formErrors.password ? 'border-red-500' : 'border-gray-300'}`}
                      />
                      {formErrors.password && (
                        <p className="text-red-500 text-xs mt-1">{formErrors.password}</p>
                      )}
                    </div>
                    
                    <div className="mb-6">
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Confirm Password*
                      </label>
                      <input 
                        type="password" 
                        name="confirmPassword"
                        value={registerForm.confirmPassword}
                        onChange={handleRegisterChange}
                        className={`w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-pink-300 ${formErrors.confirmPassword ? 'border-red-500' : 'border-gray-300'}`}
                      />
                      {formErrors.confirmPassword && (
                        <p className="text-red-500 text-xs mt-1">{formErrors.confirmPassword}</p>
                      )}
                    </div>
                    
                    <button 
                      type="submit" 
                      className="w-full bg-pink-600 text-white py-3 rounded-md hover:bg-pink-700 transition-colors"
                    >
                      Register
                    </button>
                    
                    <div className="mt-4 text-center">
                      <p className="text-gray-600">
                        Already have an account?{' '}
                        <button 
                          type="button"
                          className="text-pink-600 hover:text-pink-700 font-medium"
                          onClick={() => setActiveTab('login')}
                        >
                          Login
                        </button>
                      </p>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="mt-16 pt-12 pb-16">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-serif mb-8 text-center">My Account</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Sidebar Navigation */}
          <div className="md:col-span-1">
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="p-6 border-b">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center mr-4">
                    <User size={20} className="text-pink-600" />
                  </div>
                  <div>
                    <h3 className="font-medium">John Doe</h3>
                    <p className="text-gray-600 text-sm">john.doe@example.com</p>
                  </div>
                </div>
              </div>
              
              <nav className="p-4">
                <ul className="space-y-1">
                  <li>
                    <button 
                      onClick={() => setActiveTab('profile')}
                      className={`w-full text-left px-4 py-2 rounded-md flex items-center ${activeTab === 'profile' ? 'bg-pink-50 text-pink-600' : 'text-gray-600 hover:bg-gray-50'}`}
                    >
                      <User size={18} className="mr-3" />
                      Profile
                    </button>
                  </li>
                  <li>
                    <button 
                      onClick={() => setActiveTab('orders')}
                      className={`w-full text-left px-4 py-2 rounded-md flex items-center ${activeTab === 'orders' ? 'bg-pink-50 text-pink-600' : 'text-gray-600 hover:bg-gray-50'}`}
                    >
                      <Package size={18} className="mr-3" />
                      Orders
                    </button>
                  </li>
                  <li>
                    <button 
                      onClick={() => setActiveTab('wishlist')}
                      className={`w-full text-left px-4 py-2 rounded-md flex items-center ${activeTab === 'wishlist' ? 'bg-pink-50 text-pink-600' : 'text-gray-600 hover:bg-gray-50'}`}
                    >
                      <Heart size={18} className="mr-3" />
                      Wishlist
                    </button>
                  </li>
                  <li>
                    <button 
                      onClick={() => setActiveTab('payment')}
                      className={`w-full text-left px-4 py-2 rounded-md flex items-center ${activeTab === 'payment' ? 'bg-pink-50 text-pink-600' : 'text-gray-600 hover:bg-gray-50'}`}
                    >
                      <CreditCard size={18} className="mr-3" />
                      Payment Methods
                    </button>
                  </li>
                  <li>
                    <button 
                      onClick={() => setActiveTab('settings')}
                      className={`w-full text-left px-4 py-2 rounded-md flex items-center ${activeTab === 'settings' ? 'bg-pink-50 text-pink-600' : 'text-gray-600 hover:bg-gray-50'}`}
                    >
                      <Settings size={18} className="mr-3" />
                      Account Settings
                    </button>
                  </li>
                  <li className="pt-2 border-t mt-2">
                    <button 
                      onClick={handleLogout}
                      className="w-full text-left px-4 py-2 rounded-md flex items-center text-gray-600 hover:bg-gray-50"
                    >
                      <LogOut size={18} className="mr-3" />
                      Logout
                    </button>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
          
          {/* Content Area */}
          <div className="md:col-span-3">
            <div className="bg-white rounded-lg shadow-sm p-6">
              {activeTab === 'profile' && (
                <div>
                  <h2 className="text-2xl font-serif mb-6">My Profile</h2>
                  
                  <form>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          First Name
                        </label>
                        <input 
                          type="text" 
                          defaultValue="John"
                          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-300"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Last Name
                        </label>
                        <input 
                          type="text" 
                          defaultValue="Doe"
                          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-300"
                        />
                      </div>
                    </div>
                    
                    <div className="mb-4">
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Email Address
                      </label>
                      <input 
                        type="email" 
                        defaultValue="john.doe@example.com"
                        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-300"
                      />
                    </div>
                    
                    <div className="mb-4">
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Phone Number
                      </label>
                      <input 
                        type="tel" 
                        defaultValue="+1 (555) 123-4567"
                        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-300"
                      />
                    </div>
                    
                    <button 
                      type="submit" 
                      className="bg-pink-600 text-white px-6 py-2 rounded-md hover:bg-pink-700 transition-colors"
                    >
                      Update Profile
                    </button>
                  </form>
                </div>
              )}
              
              {activeTab === 'orders' && (
                <div>
                  <h2 className="text-2xl font-serif mb-6">Order History</h2>
                  
                  <div className="border rounded-md overflow-hidden">
                    <div className="grid grid-cols-12 bg-gray-50 p-4 border-b">
                      <div className="col-span-2">
                        <h3 className="font-medium">Order</h3>
                      </div>
                      <div className="col-span-3">
                        <h3 className="font-medium">Date</h3>
                      </div>
                      <div className="col-span-2">
                        <h3 className="font-medium">Status</h3>
                      </div>
                      <div className="col-span-3">
                        <h3 className="font-medium">Total</h3>
                      </div>
                      <div className="col-span-2 text-right">
                        <h3 className="font-medium">Actions</h3>
                      </div>
                    </div>
                    
                    <div className="p-4 text-center">
                      <p className="text-gray-600">You haven't placed any orders yet.</p>
                      <Link 
                        to="/products" 
                        className="inline-block mt-4 bg-pink-600 text-white px-6 py-2 rounded-md hover:bg-pink-700 transition-colors"
                      >
                        Shop Now
                      </Link>
                    </div>
                  </div>
                </div>
              )}
              
              {activeTab === 'wishlist' && (
                <div>
                  <h2 className="text-2xl font-serif mb-6">My Wishlist</h2>
                  
                  <div className="text-center py-8">
                    <Heart size={64} className="mx-auto text-gray-300 mb-4" />
                    <p className="text-gray-600 mb-4">Your wishlist is empty.</p>
                    <Link 
                      to="/products" 
                      className="inline-block bg-pink-600 text-white px-6 py-2 rounded-md hover:bg-pink-700 transition-colors"
                    >
                      Browse Products
                    </Link>
                  </div>
                </div>
              )}
              
              {activeTab === 'payment' && (
                <div>
                  <h2 className="text-2xl font-serif mb-6">Payment Methods</h2>
                  
                  <div className="text-center py-8">
                    <CreditCard size={64} className="mx-auto text-gray-300 mb-4" />
                    <p className="text-gray-600 mb-4">You haven't saved any payment methods yet.</p>
                    <button 
                      className="inline-block bg-pink-600 text-white px-6 py-2 rounded-md hover:bg-pink-700 transition-colors"
                    >
                      Add Payment Method
                    </button>
                  </div>
                </div>
              )}
              
              {activeTab === 'settings' && (
                <div>
                  <h2 className="text-2xl font-serif mb-6">Account Settings</h2>
                  
                  <div className="mb-8">
                    <h3 className="text-lg font-medium mb-4">Change Password</h3>
                    <form>
                      <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Current Password
                        </label>
                        <input 
                          type="password" 
                          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-300"
                        />
                      </div>
                      <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          New Password
                        </label>
                        <input 
                          type="password" 
                          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-300"
                        />
                      </div>
                      <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Confirm New Password
                        </label>
                        <input 
                          type="password" 
                          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-300"
                        />
                      </div>
                      <button 
                        type="submit" 
                        className="bg-pink-600 text-white px-6 py-2 rounded-md hover:bg-pink-700 transition-colors"
                      >
                        Update Password
                      </button>
                    </form>
                  </div>
                  
                  <div className="border-t pt-6">
                    <h3 className="text-lg font-medium mb-4">Email Preferences</h3>
                    <div className="space-y-3">
                      <label className="flex items-start">
                        <input 
                          type="checkbox" 
                          className="mt-1 mr-3"
                          defaultChecked
                        />
                        <div>
                          <span className="font-medium">Newsletter</span>
                          <p className="text-sm text-gray-600">Receive updates about new products and promotions.</p>
                        </div>
                      </label>
                      <label className="flex items-start">
                        <input 
                          type="checkbox" 
                          className="mt-1 mr-3"
                          defaultChecked
                        />
                        <div>
                          <span className="font-medium">Order Updates</span>
                          <p className="text-sm text-gray-600">Receive emails about your orders and shipping status.</p>
                        </div>
                      </label>
                      <label className="flex items-start">
                        <input 
                          type="checkbox" 
                          className="mt-1 mr-3"
                        />
                        <div>
                          <span className="font-medium">Special Offers</span>
                          <p className="text-sm text-gray-600">Receive exclusive offers and discounts.</p>
                        </div>
                      </label>
                    </div>
                    <button 
                      className="mt-4 bg-pink-600 text-white px-6 py-2 rounded-md hover:bg-pink-700 transition-colors"
                    >
                      Save Preferences
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountPage;