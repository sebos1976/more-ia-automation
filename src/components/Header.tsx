
import { useState } from "react";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500"></div>
              <div className="text-2xl font-bold text-gray-900">
                Sébastien More
              </div>
            </div>
            <nav className="hidden lg:flex space-x-8">
              <a href="#accueil" className="text-gray-700 hover:text-pink-500 transition-colors font-medium">Accueil</a>
              <a href="#services" className="text-gray-700 hover:text-pink-500 transition-colors font-medium">Services</a>
              <a href="#tarifs" className="text-gray-700 hover:text-pink-500 transition-colors font-medium">Tarifs</a>
              <a href="#blog" className="text-gray-700 hover:text-pink-500 transition-colors font-medium">Blog</a>
              <a href="#contact" className="text-gray-700 hover:text-pink-500 transition-colors font-medium">Contact</a>
            </nav>
          </div>
          
          <div className="hidden lg:flex items-center space-x-4">
            <button className="btn-secondary">Se connecter</button>
            <button className="btn-gradient">Commencer</button>
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
              <a href="#blog" className="text-gray-700 hover:text-pink-500 transition-colors font-medium">Blog</a>
              <a href="#contact" className="text-gray-700 hover:text-pink-500 transition-colors font-medium">Contact</a>
            </nav>
            <div className="flex flex-col space-y-3 mt-4">
              <button className="btn-secondary">Se connecter</button>
              <button className="btn-gradient">Commencer</button>
            </div>
          </div>
        )}
      </div>

      <div className="partners-strip">
        <span className="partners-label">Intégrations natives :</span>
        <div className="partners-logos">
          <img src="https://logos-world.net/wp-content/uploads/2020/10/Airbnb-Symbol.png" alt="Airbnb" className="partner-logo" />
          <img src="https://logos-world.net/wp-content/uploads/2021/08/Booking-Logo.png" alt="Booking.com" className="partner-logo" />
          <img src="https://bed24.com/pics/logo.png" alt="Beds24" className="partner-logo" />
          <img src="/placeholder.svg" alt="Eleven Labs" className="partner-logo" />
        </div>
      </div>
    </header>
  );
};
