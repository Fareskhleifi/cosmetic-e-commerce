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
    document.title = 'Contact Us - LUXEBEAUTY';
    window.scrollTo(0, 0);
  }, []);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
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
    
    if (!formData.name) errors.name = 'Name is required';
    if (!formData.email) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Email is invalid';
    }
    if (!formData.subject) errors.subject = 'Subject is required';
    if (!formData.message) errors.message = 'Message is required';
    
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      // Simulate form submission
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
          <h1 className="text-4xl md:text-5xl font-serif mb-4">Contact Us</h1>
          <p className="text-gray-600 max-w-3xl mx-auto">
            We'd love to hear from you. Whether you have a question, feedback, or need assistance,
            our team is here to help.
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
                  <h2 className="text-2xl font-serif mb-4">Thank You!</h2>
                  <p className="text-gray-600">
                    Your message has been sent successfully. We'll get back to you as soon as possible.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <h2 className="text-2xl font-serif mb-6">Send Us a Message</h2>
                  
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Your Name*
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
                      Email Address*
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
                      Subject*
                    </label>
                    <select 
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className={`w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-pink-300 ${formErrors.subject ? 'border-red-500' : 'border-gray-300'}`}
                    >
                      <option value="">Select a subject</option>
                      <option value="product-inquiry">Product Inquiry</option>
                      <option value="order-status">Order Status</option>
                      <option value="returns">Returns & Refunds</option>
                      <option value="feedback">Feedback</option>
                      <option value="other">Other</option>
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
                    Send Message
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
                title="LUXEBEAUTY Location"
              ></iframe>
            </div>
            
            {/* Contact Details */}
            <div className="bg-white rounded-lg shadow-sm p-8">
              <h2 className="text-2xl font-serif mb-6">Get in Touch</h2>
              
              <ul className="space-y-6">
                <li className="flex">
                  <MapPin size={20} className="text-pink-600 flex-shrink-0 mr-4 mt-1" />
                  <div>
                    <h3 className="font-medium mb-1">Our Address</h3>
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
                    <h3 className="font-medium mb-1">Phone</h3>
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
                    <h3 className="font-medium mb-1">Business Hours</h3>
                    <p className="text-gray-600">
                      Monday - Friday: 9:00 AM - 6:00 PM <br />
                      Saturday: 10:00 AM - 4:00 PM <br />
                      Sunday: Closed
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            
            {/* FAQ Link */}
            <div className="mt-6 bg-pink-50 rounded-lg p-6 text-center">
              <h3 className="text-xl font-serif mb-2">Have Questions?</h3>
              <p className="text-gray-600 mb-4">
                Check our Frequently Asked Questions for quick answers to common questions.
              </p>
              <a 
                href="#" 
                className="inline-block bg-white text-pink-600 border border-pink-600 px-6 py-2 rounded-md hover:bg-pink-600 hover:text-white transition-colors"
              >
                Visit FAQ
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;