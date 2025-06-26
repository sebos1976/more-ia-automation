
import { useState } from "react";
import { DemoForm } from "./DemoForm";
import { PartnersLogos } from "./PartnersLogos";

export const Hero = () => {
  const [isDemoFormOpen, setIsDemoFormOpen] = useState(false);

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
            
            {/* LOGOS AIRBNB/BOOKING - AGRANDIS */}
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
              onClick={() => setIsDemoFormOpen(true)}
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

            {/* STATISTIQUES SOUS L'IMAGE - ALIGNÉES ET CENTRÉES */}
            <div className="flex justify-center items-center">
              <div className="grid grid-cols-3 gap-6 mt-6">
                <div className="group cursor-pointer flex flex-col items-center">
                  <div className="relative">
                    <div className="w-20 h-20 bg-gradient-to-br from-pink-500 via-purple-500 to-indigo-600 rounded-2xl flex items-center justify-center shadow-lg transform transition-all duration-300 group-hover:scale-110 group-hover:shadow-2xl group-hover:rotate-3">
                      <span className="text-xl font-bold text-white">200+</span>
                    </div>
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <p className="text-sm text-gray-600 mt-2 text-center font-medium">Propriétaires</p>
                </div>

                <div className="group cursor-pointer flex flex-col items-center">
                  <div className="relative">
                    <div className="w-20 h-20 bg-gradient-to-br from-purple-500 via-pink-500 to-red-500 rounded-2xl flex items-center justify-center shadow-lg transform transition-all duration-300 group-hover:scale-110 group-hover:shadow-2xl group-hover:rotate-3">
                      <span className="text-xl font-bold text-white">90%</span>
                    </div>
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <p className="text-sm text-gray-600 mt-2 text-center font-medium">Temps économisé</p>
                </div>

                <div className="group cursor-pointer flex flex-col items-center">
                  <div className="relative">
                    <div className="w-20 h-20 bg-gradient-to-br from-indigo-600 via-purple-500 to-pink-500 rounded-2xl flex items-center justify-center shadow-lg transform transition-all duration-300 group-hover:scale-110 group-hover:shadow-2xl group-hover:rotate-3">
                      <span className="text-xl font-bold text-white">24/7</span>
                    </div>
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <p className="text-sm text-gray-600 mt-2 text-center font-medium">Disponibilité</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <DemoForm 
        isOpen={isDemoFormOpen}
        onClose={() => setIsDemoFormOpen(false)}
      />
    </section>
  );
};
