import React, { useEffect } from 'react';

const AboutPage: React.FC = () => {
  useEffect(() => {
    document.title = 'About Us - LUXEBEAUTY';
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="mt-16 pt-12 pb-16">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-serif mb-4">Our Story</h1>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Discover the passion and purpose behind LUXEBEAUTY - where luxury meets natural beauty.
          </p>
        </div>
        
        {/* Mission Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16 items-center">
          <div>
            <img 
              src="https://images.pexels.com/photos/3735149/pexels-photo-3735149.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
              alt="Our Mission" 
              className="rounded-lg shadow-md h-full w-full object-cover"
            />
          </div>
          <div>
            <h2 className="text-3xl font-serif mb-4">Our Mission</h2>
            <p className="text-gray-600 mb-4">
              At LUXEBEAUTY, our mission is to empower everyone to feel confident in their own skin. 
              We believe that beauty products should enhance your natural features, not mask them.
            </p>
            <p className="text-gray-600 mb-4">
              We are committed to creating premium, cruelty-free products using the finest ingredients 
              that deliver real results. Our formulations are developed with both effectiveness and 
              sustainability in mind.
            </p>
            <p className="text-gray-600">
              We strive to be transparent about our ingredients and processes, ensuring that you can 
              trust everything you put on your skin.
            </p>
          </div>
        </div>
        
        {/* Values Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif mb-4">Our Values</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do at LUXEBEAUTY.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                </svg>
              </div>
              <h3 className="text-xl font-serif mb-2">Quality</h3>
              <p className="text-gray-600">
                We never compromise on quality. Each product is carefully formulated with premium ingredients 
                to provide exceptional results.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.618 5.984A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016zM12 9v2m0 4h.01" />
                </svg>
              </div>
              <h3 className="text-xl font-serif mb-2">Safety</h3>
              <p className="text-gray-600">
                We prioritize your safety above all. Our products are rigorously tested to ensure they meet 
                the highest safety standards.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-serif mb-2">Sustainability</h3>
              <p className="text-gray-600">
                We are committed to reducing our environmental impact through sustainable sourcing and 
                eco-friendly packaging solutions.
              </p>
            </div>
          </div>
        </div>
        
        {/* Team Section */}
        <div>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif mb-4">Meet Our Team</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              The passionate individuals behind LUXEBEAUTY who work tirelessly to bring you the best products.
            </p>
          </div>
          <div className="mb-10 text-center">
              <div className="mb-4 rounded-full overflow-hidden w-48 h-48 mx-auto">
                <img 
                  src="src/assets/images/aida.jpeg" 
                  alt="Sofia Rodriguez" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-serif mb-1">Aida ben Ibrahim</h3>
              <p className="text-pink-600 mb-2">Founder & CEO</p>
            </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

            
            <div className="text-center">
              <div className="mb-4 rounded-full overflow-hidden w-48 h-48 mx-auto">
                <img 
                  src="src/assets/images/maha.jpeg" 
                  alt="Michael Chen" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-serif mb-1">Maha ben hassine</h3>
              <p className="text-pink-600 mb-2">Chief Formulator</p>
              <p className="text-gray-600 px-4">
                A chemist with a passion for natural ingredients, Michael creates our innovative formulations.
              </p>
            </div>
            
            <div className="text-center">
              <div className="mb-4 rounded-full overflow-hidden w-48 h-48 mx-auto">
                <img 
                  src="src/assets/images/isra.jpeg" 
                  alt="Aisha Johnson" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-serif mb-1">Isra ben hammed</h3>
              <p className="text-pink-600 mb-2">Creative Director</p>
              <p className="text-gray-600 px-4">
                With an eye for design, Aisha ensures every aspect of LUXEBEAUTY reflects our aesthetic vision.
              </p>
            </div>
            
            <div className="text-center">
              <div className="mb-4 rounded-full overflow-hidden w-48 h-48 mx-auto">
                <img 
                  src="src/assets/images/rania.jpeg" 
                  alt="David Kim" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-serif mb-1">Rania khemiri</h3>
              <p className="text-pink-600 mb-2">Sustainability Lead</p>
              <p className="text-gray-600 px-4">
                David champions our eco-initiatives, ensuring we maintain our commitment to the planet.
              </p>
            </div>

            <div className="text-center">
              <div className="mb-4 rounded-full overflow-hidden w-48 h-48 mx-auto">
                <img 
                  src="src/assets/images/wafa.jpeg" 
                  alt="David Kim" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-serif mb-1">Wafa beltaief</h3>
              <p className="text-pink-600 mb-2">Sustainability Lead</p>
              <p className="text-gray-600 px-4">
                David champions our eco-initiatives, ensuring we maintain our commitment to the planet.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;