import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [formSubmitted, setFormSubmitted] = useState(false);
  
  useEffect(() => {
    document.title = 'Nous Contacter - LUXEBEAUTY';
    window.scrollTo(0, 0);
  }, []);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    
    if (formErrors[name]) {
      setFormErrors({
        ...formErrors,
        [name]: ''
      });
    }
  };
  
  const validateForm = () => {
    const errors: Record<string, string> = {};
    
    if (!formData.name) errors.name = 'Le nom est requis';
    if (!formData.email) {
      errors.email = 'L\'email est requis';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'L\'email est invalide';
    }
    if (!formData.subject) errors.subject = 'L\'objet est requis';
    if (!formData.message) errors.message = 'Le message est requis';
    
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      setTimeout(() => {
        setFormSubmitted(true);
      }, 1000);
    }
  };

  return (
    <div className="mt-16 pt-12 pb-16">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-serif mb-4">Nous Contacter</h1>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Nous serions ravis d'avoir de vos nouvelles. Que vous ayez une question, un commentaire ou besoin d'assistance,
            notre équipe est là pour vous aider.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <div className="bg-white rounded-lg shadow-sm p-8">
              {formSubmitted ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h2 className="text-2xl font-serif mb-4">Merci !</h2>
                  <p className="text-gray-600">
                    Votre message a été envoyé avec succès. Nous vous répondrons dès que possible.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <h2 className="text-2xl font-serif mb-6">Envoyez-nous un Message</h2>
                  
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Votre Nom*
                    </label>
                    <input 
                      type="text" 
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-pink-300 ${formErrors.name ? 'border-red-500' : 'border-gray-300'}`}
                    />
                    {formErrors.name && (
                      <p className="text-red-500 text-xs mt-1">{formErrors.name}</p>
                    )}
                  </div>
                  
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Adresse Email*
                    </label>
                    <input 
                      type="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-pink-300 ${formErrors.email ? 'border-red-500' : 'border-gray-300'}`}
                    />
                    {formErrors.email && (
                      <p className="text-red-500 text-xs mt-1">{formErrors.email}</p>
                    )}
                  </div>
                  
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Objet*
                    </label>
                    <select 
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className={`w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-pink-300 ${formErrors.subject ? 'border-red-500' : 'border-gray-300'}`}
                    >
                      <option value="">Sélectionnez un objet</option>
                      <option value="product-inquiry">Demande de produit</option>
                      <option value="order-status">Statut de commande</option>
                      <option value="returns">Retours et remboursements</option>
                      <option value="feedback">Commentaires</option>
                      <option value="other">Autre</option>
                    </select>
                    {formErrors.subject && (
                      <p className="text-red-500 text-xs mt-1">{formErrors.subject}</p>
                    )}
                  </div>
                  
                  <div className="mb-6">
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Message*
                    </label>
                    <textarea 
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      className={`w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-pink-300 ${formErrors.message ? 'border-red-500' : 'border-gray-300'}`}
                    ></textarea>
                    {formErrors.message && (
                      <p className="text-red-500 text-xs mt-1">{formErrors.message}</p>
                    )}
                  </div>
                  
                  <button 
                    type="submit" 
                    className="w-full bg-pink-600 text-white py-3 rounded-md hover:bg-pink-700 transition-colors"
                  >
                    Envoyer le Message
                  </button>
                </form>
              )}
            </div>
          </div>
          
          {/* Contact Information */}
          <div>
            {/* Map */}
            <div className="rounded-lg overflow-hidden h-64 mb-8">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12754.385334174185!2d10.7452312!3d34.7405611!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13002c14e31e66c9%3A0x5ee377ffae2e6383!2sSfax%2C%20Tunisie!5e0!3m2!1sfr!2stn!4v1715176870000!5m2!1sfr!2stn"
                width="100%"
                height="100%"
                style={{ border: 0 }} 
                allowFullScreen
                loading="lazy"
                title="Emplacement LUXEBEAUTY"
              ></iframe>
            </div>
            
            {/* Contact Details */}
            <div className="bg-white rounded-lg shadow-sm p-8">
              <h2 className="text-2xl font-serif mb-6">Prenez Contact</h2>
              
              <ul className="space-y-6">
                <li className="flex">
                  <MapPin size={20} className="text-pink-600 flex-shrink-0 mr-4 mt-1" />
                  <div>
                    <h3 className="font-medium mb-1">Notre Adresse</h3>
                    <p className="text-gray-600">
                      Rte de l'aéroport, <br />
                      Sfax, <br />
                      Tunisie
                    </p>
                  </div>
                </li>
                
                <li className="flex">
                  <Phone size={20} className="text-pink-600 flex-shrink-0 mr-4 mt-1" />
                  <div>
                    <h3 className="font-medium mb-1">Téléphone</h3>
                    <p className="text-gray-600">
                      +216 12 345 678
                    </p>
                  </div>
                </li>
                
                <li className="flex">
                  <Mail size={20} className="text-pink-600 flex-shrink-0 mr-4 mt-1" />
                  <div>
                    <h3 className="font-medium mb-1">Email</h3>
                    <p className="text-gray-600">
                      info@luxebeauty.com
                    </p>
                  </div>
                </li>
                
                <li className="flex">
                  <Clock size={20} className="text-pink-600 flex-shrink-0 mr-4 mt-1" />
                  <div>
                    <h3 className="font-medium mb-1">Horaires d'Ouverture</h3>
                    <p className="text-gray-600">
                      Lundi - Vendredi : 9h00 - 18h00 <br />
                      Samedi : 10h00 - 16h00 <br />
                      Dimanche : Fermé
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            
            {/* FAQ Link */}
            <div className="mt-6 bg-pink-50 rounded-lg p-6 text-center">
              <h3 className="text-xl font-serif mb-2">Des Questions ?</h3>
              <p className="text-gray-600 mb-4">
                Consultez notre FAQ pour des réponses rapides aux questions courantes.
              </p>
              <a 
                href="#" 
                className="inline-block bg-white text-pink-600 border border-pink-600 px-6 py-2 rounded-md hover:bg-pink-600 hover:text-white transition-colors"
              >
                Visiter la FAQ
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;