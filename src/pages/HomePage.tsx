import React, { useEffect } from 'react';
import HeroSection from '../components/home/HeroSection';
import CategorySection from '../components/home/CategorySection';
import FeaturedProducts from '../components/home/FeaturedProducts';
import PromoSection from '../components/home/PromoSection';
import TestimonialSection from '../components/home/TestimonialSection';

const HomePage: React.FC = () => {
  useEffect(() => {
    document.title = 'LUXEBEAUTY - Premium Cosmetics & Skincare';
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <HeroSection />
      <CategorySection />
      <FeaturedProducts />
      <PromoSection />
      <TestimonialSection />
    </div>
  );
};

export default HomePage;