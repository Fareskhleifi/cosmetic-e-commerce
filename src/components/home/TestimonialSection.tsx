import React from 'react';

interface Testimonial {
  id: number;
  text: string;
  author: string;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    text: "J'ai essayé d'innombrables marques de soins de la peau, mais les produits de LUXEBEAUTY ont vraiment transformé ma peau. Leur Sérum Visage Hydratant fait désormais partie intégrante de ma routine quotidienne.",
    author: "Ahmed Tounsi.",
    image: "https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id: 2,
    text: "La Crème de Nuit Anti-Âge a fait une différence visible dans la texture de ma peau. Moins de rides, plus d'éclat - je ne pourrais pas être plus satisfaite des résultats !",
    author: "Sara ali.",
    image: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id: 3,
    text: "Ce qui distingue LUXEBEAUTY, c'est leur engagement envers des ingrédients de qualité. Ma peau sensible n'a jamais été aussi belle depuis que j'ai commencé à utiliser leurs produits.",
    author: "Mohamed trabelsi.",
    image: "https://images.pexels.com/photos/774095/pexels-photo-774095.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  }
];

const TestimonialSection: React.FC = () => {
  return (
    <section className="py-16 bg-pink-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-serif mb-3">Ce que disent nos clients</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Découvrez pourquoi nos clients aiment LUXEBEAUTY et comment nos produits ont transformé leurs routines de soins de la peau.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map(testimonial => (
            <div key={testimonial.id} className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.author} 
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <h3 className="font-medium">{testimonial.author}</h3>
              </div>
              <p className="text-gray-600 italic">"{testimonial.text}"</p>
              <div className="flex mt-4">
                {[...Array(5)].map((_, i) => (
                  <svg 
                    key={i}
                    className="w-5 h-5 text-amber-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;