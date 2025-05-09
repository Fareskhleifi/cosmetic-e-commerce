import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { User, Package, Heart, CreditCard, Settings, LogOut } from 'lucide-react';

const AccountPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('profil');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loginForm, setLoginForm] = useState({
    email: '',
    motDePasse: ''
  });
  const [registerForm, setRegisterForm] = useState({
    prenom: '',
    nom: '',
    email: '',
    motDePasse: '',
    confirmerMotDePasse: ''
  });
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  
  useEffect(() => {
    document.title = 'Mon Compte - LUXEBEAUTY';
    window.scrollTo(0, 0);
  }, []);
  
  const handleLoginChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLoginForm({
      ...loginForm,
      [name]: value
    });
    
    // Effacer l'erreur lorsque le champ est modifié
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
    
    // Effacer l'erreur lorsque le champ est modifié
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
      errors.email = 'L\'email est requis';
    } else if (!/\S+@\S+\.\S+/.test(loginForm.email)) {
      errors.email = 'L\'email est invalide';
    }
    if (!loginForm.motDePasse) errors.motDePasse = 'Le mot de passe est requis';
    
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };
  
  const validateRegisterForm = () => {
    const errors: Record<string, string> = {};
    
    if (!registerForm.prenom) errors.prenom = 'Le prénom est requis';
    if (!registerForm.nom) errors.nom = 'Le nom est requis';
    if (!registerForm.email) {
      errors.email = 'L\'email est requis';
    } else if (!/\S+@\S+\.\S+/.test(registerForm.email)) {
      errors.email = 'L\'email est invalide';
    }
    if (!registerForm.motDePasse) {
      errors.motDePasse = 'Le mot de passe est requis';
    } else if (registerForm.motDePasse.length < 6) {
      errors.motDePasse = 'Le mot de passe doit comporter au moins 6 caractères';
    }
    if (!registerForm.confirmerMotDePasse) {
      errors.confirmerMotDePasse = 'Veuillez confirmer votre mot de passe';
    } else if (registerForm.motDePasse !== registerForm.confirmerMotDePasse) {
      errors.confirmerMotDePasse = 'Les mots de passe ne correspondent pas';
    }
    
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };
  
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateLoginForm()) {
      // Simuler une connexion réussie
      setIsLoggedIn(true);
    }
  };
  
  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateRegisterForm()) {
      // Simuler une inscription et une connexion réussies
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
            <h1 className="text-3xl font-serif mb-8 text-center">Mon Compte</h1>
            
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="flex border-b">
                <button 
                  className={`w-1/2 py-4 font-medium ${activeTab === 'connexion' ? 'bg-pink-50 text-pink-600' : 'bg-white text-gray-600'}`}
                  onClick={() => setActiveTab('connexion')}
                >
                  Connexion
                </button>
                <button 
                  className={`w-1/2 py-4 font-medium ${activeTab === 'inscription' ? 'bg-pink-50 text-pink-600' : 'bg-white text-gray-600'}`}
                  onClick={() => setActiveTab('inscription')}
                >
                  Inscription
                </button>
              </div>
              
              <div className="p-8">
                {activeTab === 'connexion' ? (
                  <form onSubmit={handleLogin}>
                    <div className="mb-4">
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Adresse Email*
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
                          Mot de Passe*
                        </label>
                        <a href="#" className="text-sm text-pink-600 hover:text-pink-700">
                          Mot de passe oublié ?
                        </a>
                      </div>
                      <input 
                        type="password" 
                        name="motDePasse"
                        value={loginForm.motDePasse}
                        onChange={handleLoginChange}
                        className={`w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-pink-300 ${formErrors.motDePasse ? 'border-red-500' : 'border-gray-300'}`}
                      />
                      {formErrors.motDePasse && (
                        <p className="text-red-500 text-xs mt-1">{formErrors.motDePasse}</p>
                      )}
                    </div>
                    
                    <button 
                      type="submit" 
                      className="w-full bg-pink-600 text-white py-3 rounded-md hover:bg-pink-700 transition-colors"
                    >
                      Connexion
                    </button>
                    
                    <div className="mt-4 text-center">
                      <p className="text-gray-600">
                        Pas de compte ?{' '}
                        <button 
                          type="button"
                          className="text-pink-600 hover:text-pink-700 font-medium"
                          onClick={() => setActiveTab('inscription')}
                        >
                          Inscrivez-vous maintenant
                        </button>
                      </p>
                    </div>
                  </form>
                ) : (
                  <form onSubmit={handleRegister}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Prénom*
                        </label>
                        <input 
                          type="text" 
                          name="prenom"
                          value={registerForm.prenom}
                          onChange={handleRegisterChange}
                          className={`w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-pink-300 ${formErrors.prenom ? 'border-red-500' : 'border-gray-300'}`}
                        />
                        {formErrors.prenom && (
                          <p className="text-red-500 text-xs mt-1">{formErrors.prenom}</p>
                        )}
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Nom*
                        </label>
                        <input 
                          type="text" 
                          name="nom"
                          value={registerForm.nom}
                          onChange={handleRegisterChange}
                          className={`w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-pink-300 ${formErrors.nom ? 'border-red-500' : 'border-gray-300'}`}
                        />
                        {formErrors.nom && (
                          <p className="text-red-500 text-xs mt-1">{formErrors.nom}</p>
                        )}
                      </div>
                    </div>
                    
                    <div className="mb-4">
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Adresse Email*
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
                        Mot de Passe*
                      </label>
                      <input 
                        type="password" 
                        name="motDePasse"
                        value={registerForm.motDePasse}
                        onChange={handleRegisterChange}
                        className={`w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-pink-300 ${formErrors.motDePasse ? 'border-red-500' : 'border-gray-300'}`}
                      />
                      {formErrors.motDePasse && (
                        <p className="text-red-500 text-xs mt-1">{formErrors.motDePasse}</p>
                      )}
                    </div>
                    
                    <div className="mb-6">
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Confirmer le Mot de Passe*
                      </label>
                      <input 
                        type="password" 
                        name="confirmerMotDePasse"
                        value={registerForm.confirmerMotDePasse}
                        onChange={handleRegisterChange}
                        className={`w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-pink-300 ${formErrors.confirmerMotDePasse ? 'border-red-500' : 'border-gray-300'}`}
                      />
                      {formErrors.confirmerMotDePasse && (
                        <p className="text-red-500 text-xs mt-1">{formErrors.confirmerMotDePasse}</p>
                      )}
                    </div>
                    
                    <button 
                      type="submit" 
                      className="w-full bg-pink-600 text-white py-3 rounded-md hover:bg-pink-700 transition-colors"
                    >
                      Inscription
                    </button>
                    
                    <div className="mt-4 text-center">
                      <p className="text-gray-600">
                        Déjà un compte ?{' '}
                        <button 
                          type="button"
                          className="text-pink-600 hover:text-pink-700 font-medium"
                          onClick={() => setActiveTab('connexion')}
                        >
                          Connexion
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
        <h1 className="text-3xl font-serif mb-8 text-center">Mon Compte</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Navigation Latérale */}
          <div className="md:col-span-1">
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="p-6 border-b">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center mr-4">
                    <User size={20} className="text-pink-600" />
                  </div>
                  <div>
                    <h3 className="font-medium">Jean Dupont</h3>
                    <p className="text-gray-600 text-sm">jean.dupont@exemple.com</p>
                  </div>
                </div>
              </div>
              
              <nav className="p-4">
                <ul className="space-y-1">
                  <li>
                    <button 
                      onClick={() => setActiveTab('profil')}
                      className={`w-full text-left px-4 py-2 rounded-md flex items-center ${activeTab === 'profil' ? 'bg-pink-50 text-pink-600' : 'text-gray-600 hover:bg-gray-50'}`}
                    >
                      <User size={18} className="mr-3" />
                      Profil
                    </button>
                  </li>
                  <li>
                    <button 
                      onClick={() => setActiveTab('commandes')}
                      className={`w-full text-left px-4 py-2 rounded-md flex items-center ${activeTab === 'commandes' ? 'bg-pink-50 text-pink-600' : 'text-gray-600 hover:bg-gray-50'}`}
                    >
                      <Package size={18} className="mr-3" />
                      Commandes
                    </button>
                  </li>
                  <li>
                    <button 
                      onClick={() => setActiveTab('listeEnvies')}
                      className={`w-full text-left px-4 py-2 rounded-md flex items-center ${activeTab === 'listeEnvies' ? 'bg-pink-50 text-pink-600' : 'text-gray-600 hover:bg-gray-50'}`}
                    >
                      <Heart size={18} className="mr-3" />
                      Liste d'envies
                    </button>
                  </li>
                  <li>
                    <button 
                      onClick={() => setActiveTab('paiement')}
                      className={`w-full text-left px-4 py-2 rounded-md flex items-center ${activeTab === 'paiement' ? 'bg-pink-50 text-pink-600' : 'text-gray-600 hover:bg-gray-50'}`}
                    >
                      <CreditCard size={18} className="mr-3" />
                      Méthodes de Paiement
                    </button>
                  </li>
                  <li>
                    <button 
                      onClick={() => setActiveTab('parametres')}
                      className={`w-full text-left px-4 py-2 rounded-md flex items-center ${activeTab === 'parametres' ? 'bg-pink-50 text-pink-600' : 'text-gray-600 hover:bg-gray-50'}`}
                    >
                      <Settings size={18} className="mr-3" />
                      Paramètres du Compte
                    </button>
                  </li>
                  <li className="pt-2 border-t mt-2">
                    <button 
                      onClick={handleLogout}
                      className="w-full text-left px-4 py-2 rounded-md flex items-center text-gray-600 hover:bg-gray-50"
                    >
                      <LogOut size={18} className="mr-3" />
                      Déconnexion
                    </button>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
          
          {/* Zone de Contenu */}
          <div className="md:col-span-3">
            <div className="bg-white rounded-lg shadow-sm p-6">
              {activeTab === 'profil' && (
                <div>
                  <h2 className="text-2xl font-serif mb-6">Mon Profil</h2>
                  
                  <form>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Prénom
                        </label>
                        <input 
                          type="text" 
                          defaultValue="Jean"
                          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-300"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Nom
                        </label>
                        <input 
                          type="text" 
                          defaultValue="Dupont"
                          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-300"
                        />
                      </div>
                    </div>
                    
                    <div className="mb-4">
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Adresse Email
                      </label>
                      <input 
                        type="email" 
                        defaultValue="jean.dupont@exemple.com"
                        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-300"
                      />
                    </div>
                    
                    <div className="mb-4">
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Numéro de Téléphone
                      </label>
                      <input 
                        type="tel" 
                        defaultValue="+33 123 456 789"
                        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-300"
                      />
                    </div>
                    
                    <button 
                      type="submit" 
                      className="bg-pink-600 text-white px-6 py-2 rounded-md hover:bg-pink-700 transition-colors"
                    >
                      Mettre à jour le Profil
                    </button>
                  </form>
                </div>
              )}
              
              {activeTab === 'commandes' && (
                <div>
                  <h2 className="text-2xl font-serif mb-6">Historique des Commandes</h2>
                  
                  <div className="border rounded-md overflow-hidden">
                    <div className="grid grid-cols-12 bg-gray-50 p-4 border-b">
                      <div className="col-span-2">
                        <h3 className="font-medium">Commande</h3>
                      </div>
                      <div className="col-span-3">
                        <h3 className="font-medium">Date</h3>
                      </div>
                      <div className="col-span-2">
                        <h3 className="font-medium">Statut</h3>
                      </div>
                      <div className="col-span-3">
                        <h3 className="font-medium">Total</h3>
                      </div>
                      <div className="col-span-2 text-right">
                        <h3 className="font-medium">Actions</h3>
                      </div>
                    </div>
                    
                    <div className="p-4 text-center">
                      <p className="text-gray-600">Vous n'avez encore passé aucune commande.</p>
                      <Link 
                        to="/produits" 
                        className="inline-block mt-4 bg-pink-600 text-white px-6 py-2 rounded-md hover:bg-pink-700 transition-colors"
                      >
                        Acheter Maintenant
                      </Link>
                    </div>
                  </div>
                </div>
              )}
              
              {activeTab === 'listeEnvies' && (
                <div>
                  <h2 className="text-2xl font-serif mb-6">Ma Liste d'Envies</h2>
                  
                  <div className="text-center py-8">
                    <Heart size={64} className="mx-auto text-gray-300 mb-4" />
                    <p className="text-gray-600 mb-4">Votre liste d'envies est vide.</p>
                    <Link 
                      to="/produits" 
                      className="inline-block bg-pink-600 text-white px-6 py-2 rounded-md hover:bg-pink-700 transition-colors"
                    >
                      Parcourir les Produits
                    </Link>
                  </div>
                </div>
              )}
              
              {activeTab === 'paiement' && (
                <div>
                  <h2 className="text-2xl font-serif mb-6">Méthodes de Paiement</h2>
                  
                  <div className="text-center py-8">
                    <CreditCard size={64} className="mx-auto text-gray-300 mb-4" />
                    <p className="text-gray-600 mb-4">Vous n'avez encore enregistré aucune méthode de paiement.</p>
                    <button 
                      className="inline-block bg-pink-600 text-white px-6 py-2 rounded-md hover:bg-pink-700 transition-colors"
                    >
                      Ajouter une Méthode de Paiement
                    </button>
                  </div>
                </div>
              )}
              
              {activeTab === 'parametres' && (
                <div>
                  <h2 className="text-2xl font-serif mb-6">Paramètres du Compte</h2>
                  
                  <div className="mb-8">
                    <h3 className="text-lg font-medium mb-4">Changer le Mot de Passe</h3>
                    <form>
                      <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Mot de Passe Actuel
                        </label>
                        <input 
                          type="password" 
                          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-300"
                        />
                      </div>
                      <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Nouveau Mot de Passe
                        </label>
                        <input 
                          type="password" 
                          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-300"
                        />
                      </div>
                      <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Confirmer le Nouveau Mot de Passe
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
                        Mettre à jour le Mot de Passe
                      </button>
                    </form>
                  </div>
                  
                  <div className="border-t pt-6">
                    <h3 className="text-lg font-medium mb-4">Préférences Email</h3>
                    <div className="space-y-3">
                      <label className="flex items-start">
                        <input 
                          type="checkbox" 
                          className="mt-1 mr-3"
                          defaultChecked
                        />
                        <div>
                          <span className="font-medium">Newsletter</span>
                          <p className="text-sm text-gray-600">Recevez des mises à jour sur les nouveaux produits et promotions.</p>
                        </div>
                      </label>
                      <label className="flex items-start">
                        <input 
                          type="checkbox" 
                          className="mt-1 mr-3"
                          defaultChecked
                        />
                        <div>
                          <span className="font-medium">Mises à jour des Commandes</span>
                          <p className="text-sm text-gray-600">Recevez des emails sur vos commandes et l'état de l'expédition.</p>
                        </div>
                      </label>
                      <label className="flex items-start">
                        <input 
                          type="checkbox" 
                          className="mt-1 mr-3"
                        />
                        <div>
                          <span className="font-medium">Offres Spéciales</span>
                          <p className="text-sm text-gray-600">Recevez des offres exclusives et des réductions.</p>
                        </div>
                      </label>
                    </div>
                    <button 
                      className="mt-4 bg-pink-600 text-white px-6 py-2 rounded-md hover:bg-pink-700 transition-colors"
                    >
                      Enregistrer les Préférences
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