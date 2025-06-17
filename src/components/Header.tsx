
import { useState } from "react";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <div className="text-2xl font-bold text-gray-900">
              Sébastien More
            </div>
            <nav className="hidden lg:flex space-x-8">
              <a href="#accueil" className="text-gray-700 hover:text-pink-500 transition-colors">Accueil</a>
              <a href="#services" className="text-gray-700 hover:text-pink-500 transition-colors">Services</a>
              <a href="#tarifs" className="text-gray-700 hover:text-pink-500 transition-colors">Tarifs</a>
              <a href="#blog" className="text-gray-700 hover:text-pink-500 transition-colors">Blog</a>
              <a href="#contact" className="text-gray-700 hover:text-pink-500 transition-colors">Contact</a>
            </nav>
          </div>
          
          <div className="hidden lg:flex items-center space-x-4">
            <div className="flex items-center space-x-6 mr-6">
              <img src="/placeholder.svg" alt="Airbnb" className="h-6 w-auto opacity-60" />
              <img src="/placeholder.svg" alt="Booking.com" className="h-6 w-auto opacity-60" />
              <img src="/placeholder.svg" alt="Beds24" className="h-6 w-auto opacity-60" />
              <img src="/placeholder.svg" alt="Eleven Labs" className="h-6 w-auto opacity-60" />
            </div>
            <button className="secondary-btn">Se connecter</button>
            <button className="gradient-btn">Commencer</button>
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
              <a href="#accueil" className="text-gray-700 hover:text-pink-500 transition-colors">Accueil</a>
              <a href="#services" className="text-gray-700 hover:text-pink-500 transition-colors">Services</a>
              <a href="#tarifs" className="text-gray-700 hover:text-pink-500 transition-colors">Tarifs</a>
              <a href="#blog" className="text-gray-700 hover:text-pink-500 transition-colors">Blog</a>
              <a href="#contact" className="text-gray-700 hover:text-pink-500 transition-colors">Contact</a>
            </nav>
            <div className="flex flex-col space-y-3 mt-4">
              <button className="secondary-btn">Se connecter</button>
              <button className="gradient-btn">Commencer</button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
