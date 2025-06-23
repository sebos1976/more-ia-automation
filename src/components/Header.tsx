
import { useState } from "react";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLogin = () => {
    // Redirection vers Bubble (à configurer avec Lloyd)
    window.open('https://helphoster.bubbleapps.io/login', '_blank');
  };

  const handleGetStarted = () => {
    // Redirection vers Bubble (à configurer avec Lloyd)
    window.open('https://helphoster.bubbleapps.io/signup', '_blank');
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <div className="flex items-center space-x-3">
              <img 
                src="/lovable-uploads/74bcdb43-2125-4bfb-b428-5d7c8c1be384.png" 
                alt="Helphoster" 
                className="w-10 h-10"
              />
              <div className="text-2xl font-bold text-gray-900">
                Helphoster
              </div>
            </div>
            <nav className="hidden lg:flex space-x-8">
              <a href="#accueil" className="text-gray-700 hover:text-pink-500 transition-colors font-medium">Accueil</a>
              <a href="#services" className="text-gray-700 hover:text-pink-500 transition-colors font-medium">Services</a>
              <a href="#tarifs" className="text-gray-700 hover:text-pink-500 transition-colors font-medium">Tarifs</a>
              <a href="https://blog.helphoster.com" target="_blank" className="text-gray-700 hover:text-pink-500 transition-colors font-medium">Blog</a>
              <a href="mailto:contact@helphoster.com" className="text-gray-700 hover:text-pink-500 transition-colors font-medium">Contact</a>
            </nav>
          </div>
          
          <div className="hidden lg:flex items-center space-x-4">
            <button onClick={handleLogin} className="btn-secondary">Se connecter</button>
            <button onClick={handleGetStarted} className="btn-gradient">Commencer</button>
          </div>

          <button 
            className="lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {isMenuOpen && (
          <div className="lg:hidden mt-4 pb-4">
            <nav className="flex flex-col space-y-4">
              <a href="#accueil" className="text-gray-700 hover:text-pink-500 transition-colors font-medium">Accueil</a>
              <a href="#services" className="text-gray-700 hover:text-pink-500 transition-colors font-medium">Services</a>
              <a href="#tarifs" className="text-gray-700 hover:text-pink-500 transition-colors font-medium">Tarifs</a>
              <a href="https://blog.helphoster.com" target="_blank" className="text-gray-700 hover:text-pink-500 transition-colors font-medium">Blog</a>
              <a href="mailto:contact@helphoster.com" className="text-gray-700 hover:text-pink-500 transition-colors font-medium">Contact</a>
            </nav>
            <div className="flex flex-col space-y-3 mt-4">
              <button onClick={handleLogin} className="btn-secondary">Se connecter</button>
              <button onClick={handleGetStarted} className="btn-gradient">Commencer</button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
