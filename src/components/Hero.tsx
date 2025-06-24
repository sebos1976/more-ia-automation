
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
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                  </div>
                  <span className="text-sm font-medium text-gray-700">Essai gratuit 14 jours</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                  </div>
                  <span className="text-sm font-medium text-gray-700">Sans engagement</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                  </div>
                  <span className="text-sm font-medium text-gray-700">Support français</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
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
              <div className="dashboard-mockup">
                <div className="mockup-header">
                  <div className="mockup-dots">
                    <span className="dot red"></span>
                    <span className="dot yellow"></span>
                    <span className="dot green"></span>
                  </div>
                  <div className="mockup-title">Dashboard IA - Helphoster</div>
                </div>
                
                <div className="mockup-content">
                  <div className="flex-1 relative max-w-2xl mx-auto">
                    <img 
                      src="/lovable-uploads/d59cd207-1942-4c0b-8905-81419458fcd6.png" 
                      alt="Interface IA Helphoster" 
                      className="w-full h-auto object-contain rounded-lg shadow-2xl"
                    />
                  </div>
                </div>
              </div>
            </div>
            
            {/* STATISTIQUES - JUSTE EN DESSOUS */}
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <div className="text-3xl font-bold text-blue-600">200+</div>
                <div className="text-sm text-gray-600">Propriétaires accompagnés</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-600">90%</div>
                <div className="text-sm text-gray-600">De temps économisé</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-600">24/7</div>
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
