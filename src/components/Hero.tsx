
import { useState } from "react";
import { ContactForm } from "./ContactForm";
import { PartnersLogos } from "./PartnersLogos";

export const Hero = () => {
  const [isContactFormOpen, setIsContactFormOpen] = useState(false);

  return (
    <section id="accueil" className="py-8 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          
          {/* COLONNE GAUCHE */}
          <div className="space-y-6">
            
            {/* TITRE */}
            <h1 className="text-4xl lg:text-5xl font-bold">
              Automatisez Votre Airbnb avec <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">l'Intelligence Artificielle</span>
            </h1>
            
            {/* SOUS-TITRE */}
            <p className="text-xl text-gray-600">
              Agent IA conversationnel = 90% de temps économisé dans la gestion de vos locations
            </p>
            
            {/* LOGOS AIRBNB/BOOKING */}
            <PartnersLogos />
            
            {/* WIDGET AVANTAGES - AGRANDI EN GRID 2 COLONNES */}
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-200/50">
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <span className="text-sm font-medium text-gray-700">Essai gratuit 14 jours</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <span className="text-sm font-medium text-gray-700">Sans engagement</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <span className="text-sm font-medium text-gray-700">Support français</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <span className="text-sm font-medium text-gray-700">Mise à jour incluses</span>
                </div>
              </div>
            </div>
            
            {/* BOUTON CTA - PLEINE LARGEUR */}
            <button 
              onClick={() => setIsContactFormOpen(true)}
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-2xl text-xl font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              Obtenir une démonstration gratuite
            </button>
          </div>
          
          {/* COLONNE DROITE */}
          <div className="space-y-4">
            
            {/* IMAGE DASHBOARD */}
            <div className="relative">
              <div className="bg-white rounded-lg shadow-xl p-4">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="ml-4 text-sm text-gray-600">Dashboard IA - Helphoster</span>
                </div>
                
                <div className="relative">
                  <img 
                    src="/lovable-uploads/d59cd207-1942-4c0b-8905-81419458fcd6.png" 
                    alt="Interface IA Helphoster" 
                    className="w-full h-auto object-contain rounded-lg"
                  />
                </div>
              </div>
            </div>
            
            {/* STATISTIQUES SIMPLES */}
            <div className="grid grid-cols-3 gap-4 mt-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">200+</div>
                <div className="text-sm text-gray-600">Propriétaires</div>
              </div>
              
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-600">90%</div>
                <div className="text-sm text-gray-600">Temps économisé</div>
              </div>
              
              <div className="text-center">
                <div className="text-2xl font-bold text-indigo-600">24/7</div>
                <div className="text-sm text-gray-600">Disponibilité</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ContactForm 
        isOpen={isContactFormOpen}
        onClose={() => setIsContactFormOpen(false)}
      />
    </section>
  );
};
