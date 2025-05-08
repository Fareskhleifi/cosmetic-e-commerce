import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ProductGrid from '../components/product/ProductGrid';
import { products, getProductsByCategory, getBestSellers, getNewArrivals } from '../data/products';
import { categories } from '../data/categories';
import { Filter, Grid, List, ChevronDown } from 'lucide-react';

const ProductsPage: React.FC = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const categoryParam = queryParams.get('category');
  const filterParam = queryParams.get('filter');

  const [filteredProducts, setFilteredProducts] = useState(products);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(categoryParam);
  const [sortBy, setSortBy] = useState('featured');
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 100]);
  const [filtersVisible, setFiltersVisible] = useState(false);

  useEffect(() => {
    document.title = 'Shop - LUXEBEAUTY';
    window.scrollTo(0, 0);
    
    let filtered = [...products];
    
    // Filter by category if specified
    if (categoryParam) {
      setSelectedCategory(categoryParam);
      filtered = getProductsByCategory(categoryParam);
    } else if (filterParam === 'bestseller') {
      filtered = getBestSellers();
    } else if (filterParam === 'new') {
      filtered = getNewArrivals();
    }
    
    // Filter by price range
    filtered = filtered.filter(
      product => product.price >= priceRange[0] && product.price <= priceRange[1]
    );
    
    // Apply sorting
    if (sortBy === 'price-low-high') {
      filtered.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price-high-low') {
      filtered.sort((a, b) => b.price - a.price);
    } else if (sortBy === 'name-a-z') {
      filtered.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortBy === 'name-z-a') {
      filtered.sort((a, b) => b.name.localeCompare(a.name));
    }
    
    setFilteredProducts(filtered);
  }, [categoryParam, filterParam, sortBy, priceRange]);

  const handleCategoryChange = (category: string | null) => {
    setSelectedCategory(category);
    
    if (category) {
      setFilteredProducts(getProductsByCategory(category));
    } else {
      setFilteredProducts(products);
    }
  };

  const handlePriceChange = (min: number, max: number) => {
    setPriceRange([min, max]);
  };

  return (
    <div className="mt-16 pt-8 pb-16">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-3xl font-serif mb-2">Shop Our Collection</h1>
          <p className="text-gray-600">
            Discover our premium range of skincare and beauty products.
          </p>
        </div>
        
        {/* Mobile Filters Toggle */}
        <div className="lg:hidden mb-4">
          <button 
            className="w-full flex items-center justify-between bg-white p-4 border rounded-md"
            onClick={() => setFiltersVisible(!filtersVisible)}
          >
            <span className="flex items-center">
              <Filter size={18} className="mr-2" />
              Filters
            </span>
            <ChevronDown size={18} className={`transition-transform ${filtersVisible ? 'rotate-180' : ''}`} />
          </button>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Filters */}
          <div className={`lg:w-1/4 ${filtersVisible ? 'block' : 'hidden'} lg:block`}>
            <div className="bg-white p-6 rounded-lg shadow-sm sticky top-24">
              {/* Categories */}
              <div className="mb-6">
                <h3 className="text-lg font-medium mb-3">Categories</h3>
                <ul className="space-y-2">
                  <li>
                    <button 
                      className={`text-left w-full ${selectedCategory === null ? 'text-pink-600 font-medium' : 'text-gray-600'}`}
                      onClick={() => handleCategoryChange(null)}
                    >
                      All Products
                    </button>
                  </li>
                  {categories.map(category => (
                    <li key={category.id}>
                      <button 
                        className={`text-left w-full ${selectedCategory === category.name.toLowerCase() ? 'text-pink-600 font-medium' : 'text-gray-600'}`}
                        onClick={() => handleCategoryChange(category.name.toLowerCase())}
                      >
                        {category.name}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Price Range */}
              <div className="mb-6">
                <h3 className="text-lg font-medium mb-3">Price Range</h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>{priceRange[0]} DT</span>
                    <span>{priceRange[1]} DT</span>
                  </div>
                  <input 
                    type="range" 
                    min="0" 
                    max="100" 
                    value={priceRange[1]}
                    onChange={(e) => handlePriceChange(priceRange[0], parseInt(e.target.value))}
                    className="w-full"
                  />
                </div>
              </div>
              
              {/* Reset Filters */}
              <button 
                className="w-full bg-gray-100 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-200 transition-colors"
                onClick={() => {
                  setSelectedCategory(null);
                  setPriceRange([0, 100]);
                  setFilteredProducts(products);
                }}
              >
                Reset Filters
              </button>
            </div>
          </div>
          
          {/* Products */}
          <div className="lg:w-3/4">
            {/* Sorting Controls */}
            <div className="flex flex-col sm:flex-row justify-between items-center mb-6 gap-4">
              <div className="text-gray-600">
                Showing {filteredProducts.length} products
              </div>
              
              <div className="flex items-center space-x-4">
                <select 
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="border rounded-md p-2 bg-white focus:outline-none focus:ring-2 focus:ring-pink-300"
                >
                  <option value="featured">Featured</option>
                  <option value="price-low-high">Price: Low to High</option>
                  <option value="price-high-low">Price: High to Low</option>
                  <option value="name-a-z">Name: A to Z</option>
                  <option value="name-z-a">Name: Z to A</option>
                </select>
                
                <div className="hidden sm:flex space-x-2">
                  <button className="p-2 bg-white border rounded-md hover:bg-gray-50">
                    <Grid size={18} />
                  </button>
                  <button className="p-2 bg-white border rounded-md hover:bg-gray-50">
                    <List size={18} />
                  </button>
                </div>
              </div>
            </div>
            
            {/* Products Grid */}
            {filteredProducts.length > 0 ? (
              <ProductGrid products={filteredProducts} />
            ) : (
              <div className="text-center py-12 bg-gray-50 rounded-lg">
                <h3 className="text-xl font-medium mb-2">No products found</h3>
                <p className="text-gray-600">Try adjusting your filters to find what you're looking for.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;