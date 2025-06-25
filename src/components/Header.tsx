
import { useState } from "react";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLogin = () => {
    window.open('https://app.helphoster.com/', '_blank');
  };

  const handleGetStarted = () => {
    window.open('https://app.helphoster.com/', '_blank');
  };

  const handleBlogClick = () => {
    window.open('https://blog.helphoster.com', '_blank');
  };

  return (
    <header className="w-full bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <nav className="flex items-center justify-between py-4">
          {/* Logo - TAILLE AGRANDIE */}
          <div className="flex-shrink-0">
            <img 
              src="/lovable-uploads/4a82c05f-3748-4d38-b263-3d870a64f4f1.png" 
              alt="Helphoster" 
              className="h-20 w-auto"
            />
          </div>
          
          {/* Navigation Desktop */}
          <div className="hidden md:flex items-center space-x-6">
            <a href="#accueil" className="text-gray-700 hover:text-blue-600 transition-colors font-medium text-sm">Accueil</a>
            <a href="#services" className="text-gray-700 hover:text-blue-600 transition-colors font-medium text-sm">Services</a>
            <a href="#tarifs" className="text-gray-700 hover:text-blue-600 transition-colors font-medium text-sm">Tarifs</a>
            <button onClick={handleBlogClick} className="text-gray-700 hover:text-blue-600 transition-colors font-medium text-sm">Blog</button>
            <a href="mailto:contact@helphoster.com" className="text-gray-700 hover:text-blue-600 transition-colors font-medium text-sm">Contact</a>
          </div>
          
          {/* Boutons CTA Desktop */}
          <div className="hidden md:flex items-center space-x-4">
            <button onClick={handleLogin} className="text-gray-700 hover:text-blue-600 transition-colors font-medium text-sm">Se connecter</button>
            <button onClick={handleGetStarted} className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium text-sm">Commencer</button>
          </div>

          {/* Menu Mobile */}
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </nav>

        {/* Menu Mobile Déroulant */}
        {isMenuOpen && (
          <div className="md:hidden pb-4">
            <nav className="flex flex-col space-y-4">
              <a href="#accueil" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Accueil</a>
              <a href="#services" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Services</a>
              <a href="#tarifs" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Tarifs</a>
              <button onClick={handleBlogClick} className="text-gray-700 hover:text-blue-600 transition-colors font-medium text-left">Blog</button>
              <a href="mailto:contact@helphoster.com" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Contact</a>
            </nav>
            <div className="flex flex-col space-y-3 mt-4">
              <button onClick={handleLogin} className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Se connecter</button>
              <button onClick={handleGetStarted} className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium">Commencer</button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
