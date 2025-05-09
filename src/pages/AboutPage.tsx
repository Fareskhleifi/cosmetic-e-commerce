import React, { useEffect } from 'react';

const AboutPage: React.FC = () => {
  useEffect(() => {
    document.title = 'À Propos - LUXEBEAUTY';
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="mt-16 pt-12 pb-16">
      <div className="container mx-auto px-4">
        {/* Section Héros */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-serif mb-4">Notre Histoire</h1>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Découvrez la passion et le but derrière LUXEBEAUTY - où le luxe rencontre la beauté naturelle.
          </p>
        </div>
        
        {/* Section Mission */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16 items-center">
          <div>
            <img 
              src="https://images.pexels.com/photos/3735149/pexels-photo-3735149.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
              alt="Notre Mission" 
              className="rounded-lg shadow-md h-full w-full object-cover"
            />
          </div>
          <div>
            <h2 className="text-3xl font-serif mb-4">Notre Mission</h2>
            <p className="text-gray-600 mb-4">
              Chez LUXEBEAUTY, notre mission est de permettre à chacun de se sentir confiant dans sa propre peau. 
              Nous croyons que les produits de beauté doivent sublimer vos traits naturels, et non les masquer.
            </p>
            <p className="text-gray-600 mb-4">
              Nous nous engageons à créer des produits haut de gamme, sans cruauté, en utilisant les meilleurs ingrédients 
              pour des résultats concrets. Nos formulations sont développées en tenant compte de l'efficacité et de la durabilité.
            </p>
            <p className="text-gray-600">
              Nous nous efforçons d'être transparents concernant nos ingrédients et nos procédés, garantissant que vous pouvez 
              faire confiance à tout ce que vous appliquez sur votre peau.
            </p>
          </div>
        </div>
        
        {/* Section Valeurs */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif mb-4">Nos Valeurs</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Les principes qui guident tout ce que nous faisons chez LUXEBEAUTY.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                </svg>
              </div>
              <h3 className="text-xl font-serif mb-2">Qualité</h3>
              <p className="text-gray-600">
                Nous ne faisons jamais de compromis sur la qualité. Chaque produit est soigneusement formulé avec des ingrédients 
                de première qualité pour offrir des résultats exceptionnels.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.618 5.984A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016zM12 9v2m0 4h.01" />
                </svg>
              </div>
              <h3 className="text-xl font-serif mb-2">Sécurité</h3>
              <p className="text-gray-600">
                Nous priorisons votre sécurité avant tout. Nos produits sont rigoureusement testés pour garantir qu'ils répondent 
                aux normes de sécurité les plus élevées.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-serif mb-2">Durabilité</h3>
              <p className="text-gray-600">
                Nous nous engageons à réduire notre impact environnemental grâce à un approvisionnement durable et 
                des solutions d'emballage éco-responsables.
              </p>
            </div>
          </div>
        </div>
        
        {/* Section Équipe */}
        <div>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif mb-4">Rencontrez Notre Équipe</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Les individus passionnés derrière LUXEBEAUTY qui travaillent sans relâche pour vous offrir les meilleurs produits.
            </p>
          </div>
          <div className="mb-10 text-center">
              <div className="mb-4 rounded-full overflow-hidden w-48 h-48 mx-auto">
                <img 
                  src="https://i.postimg.cc/Vv33520d/aida.jpg" 
                  alt="Aida ben Ibrahim" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-serif mb-1">Aida ben Ibrahim</h3>
              <p className="text-pink-600 mb-2">Fondatrice & PDG</p>
            </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            
            <div className="text-center">
              <div className="mb-4 rounded-full overflow-hidden w-48 h-48 mx-auto">
                <img 
                  src="https://i.postimg.cc/QM0wcFWL/maha.jpg" 
                  alt="Maha ben hassine" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-serif mb-1">Maha ben hassine</h3>
              <p className="text-pink-600 mb-2">Formulatrice en Chef</p>
              <p className="text-gray-600 px-4">
                Une chimiste passionnée par les ingrédients naturels, Maha crée nos formulations innovantes.
              </p>
            </div>
            
            <div className="text-center">
              <div className="mb-4 rounded-full overflow-hidden w-48 h-48 mx-auto">
                <img 
                  src="https://i.postimg.cc/QdgRx48d/isra.jpg" 
                  alt="Isra ben hammed" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-serif mb-1">Isra ben hammed</h3>
              <p className="text-pink-600 mb-2">Directrice Créative</p>
              <p className="text-gray-600 px-4">
                Avec un œil pour le design, Isra veille à ce que chaque aspect de LUXEBEAUTY reflète notre vision esthétique.
              </p>
            </div>
            
            <div className="text-center">
              <div className="mb-4 rounded-full overflow-hidden w-48 h-48 mx-auto">
                <img 
                  src="https://i.postimg.cc/Qtzznvb0/rania.jpg" 
                  alt="Rania khemiri" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-serif mb-1">Rania khemiri</h3>
              <p className="text-pink-600 mb-2">Responsable Durabilité</p>
              <p className="text-gray-600 px-4">
                Rania défend nos initiatives écologiques, garantissant notre engagement envers la planète.
              </p>
            </div>

            <div className="text-center">
              <div className="mb-4 rounded-full overflow-hidden w-48 h-48 mx-auto">
                <img 
                  src="https://i.postimg.cc/mhf5TMK9/wafa.jpg" 
                  alt="Wafa beltaief" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-serif mb-1">Wafa beltaief</h3>
              <p className="text-pink-600 mb-2">Responsable Durabilité</p>
              <p className="text-gray-600 px-4">
                Wafa défend nos initiatives écologiques, garantissant notre engagement envers la planète.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;