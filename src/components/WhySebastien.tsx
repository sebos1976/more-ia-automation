import { useState } from "react";
import { DemoForm } from "./DemoForm";

export const WhySebastien = () => {
  const [showDemoForm, setShowDemoForm] = useState(false);

  return (
    <>
      <section className="about-sebastien-pro py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="about-container grid lg:grid-cols-2 gap-12 items-center">
            <div className="about-image-section">
              <div className="image-wrapper-pro relative">
                {/* Subtle floating animation instead of flashing */}
                <div className="relative p-1 rounded-3xl bg-gradient-to-r from-pink-500 via-purple-500 to-violet-600 animate-float">
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-pink-500 via-purple-500 to-violet-600 opacity-20 blur-sm"></div>
                  <div className="relative bg-white rounded-3xl p-2">
                    <img 
                      src="/lovable-uploads/87683e11-cab8-47a2-bc64-df6f1caafd2d.png" 
                      alt="Sébastien More - Expert en automatisation Airbnb"
                      className="w-full h-auto rounded-2xl shadow-2xl relative z-10"
                    />
                  </div>
                </div>
              </div>
            </div>
            
            <div className="about-content-section">
              <div className="about-header mb-8">
                <h2 className="text-4xl font-semibold mb-4">Pourquoi choisir Helphoster ?</h2>
                <p className="about-subtitle text-gray-600 text-lg">Créé par Sébastien More, expert en automatisation Airbnb</p>
              </div>
              
              <div className="expertise-grid space-y-6">
                <div className="expertise-item flex items-start gap-4">
                  <div className="expertise-icon w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M16,4C18.11,4 19.8,5.69 19.8,7.8C19.8,8.78 19.39,9.65 18.73,10.27L12,17L5.27,10.27C4.61,9.65 4.2,8.78 4.2,7.8C4.2,5.69 5.89,4 8,4C9.11,4 10.11,4.5 10.82,5.27L12,6.45L13.18,5.27C13.89,4.5 14.89,4 16,4M16,2C14.35,2 12.78,2.65 11.64,3.79L12,4.15L12.36,3.79C11.22,2.65 9.65,2 8,2C4.69,2 2,4.69 2,7.8C2,9.74 2.89,11.5 4.36,12.73L12,20.37L19.64,12.73C21.11,11.5 22,9.74 22,7.8C22,4.69 19.31,2 16,2Z"/>
                    </svg>
                  </div>
                  <div className="expertise-text">
                    <div className="font-semibold text-lg text-gray-900">200+ propriétaires accompagnés</div>
                    <div className="text-gray-600">avec 98% de satisfaction client</div>
                  </div>
                </div>
                
                <div className="expertise-item flex items-start gap-4">
                  <div className="expertise-icon w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17,10.5V7A1,1 0 0,0 16,6H4A1,1 0 0,0 3,7V17A1,1 0 0,0 4,18H16A1,1 0 0,0 17,17V13.5L21,17.5V6.5L17,10.5Z"/>
                    </svg>
                  </div>
                  <div className="expertise-text">
                    <div className="font-semibold text-lg text-gray-900">Chaîne YouTube + de 41 000 abonnés</div>
                    <div className="text-gray-600">spécialiste IA pour l'automatisation Airbnb</div>
                  </div>
                </div>
                
                <div className="expertise-item flex items-start gap-4">
                  <div className="expertise-icon w-12 h-12 bg-gradient-to-br from-green-500 to-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23,12L20.56,9.22L20.9,5.54L17.29,4.72L15.4,1.54L12,3L8.6,1.54L6.71,4.72L3.1,5.53L3.44,9.21L1,12L3.44,14.78L3.1,18.47L6.71,19.29L8.6,22.47L12,21L15.4,22.46L17.29,19.28L20.9,18.46L20.56,14.78L23,12M10,17L6,13L7.41,11.59L10,14.17L16.59,7.58L18,9L10,17Z"/>
                    </svg>
                  </div>
                  <div className="expertise-text">
                    <div className="font-semibold text-lg text-gray-900">Expert en automatisation Airbnb avec l'IA</div>
                    <div className="text-gray-600">3 ans d'expérience spécialisée</div>
                  </div>
                </div>
              </div>
              
              <div className="cta-buttons-pro mt-8 flex gap-4">
                <button 
                  onClick={() => setShowDemoForm(true)}
                  className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-300"
                >
                  Obtenir une démo
                </button>
                <a 
                  href="https://www.youtube.com/@moresebastien" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="border border-purple-500 text-purple-500 px-6 py-3 rounded-lg font-semibold hover:bg-purple-50 transition-all duration-300"
                >
                  Voir ma chaîne YouTube
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Demo Form Modal */}
      <DemoForm isOpen={showDemoForm} onClose={() => setShowDemoForm(false)} />

      <style>
        {`
          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-10px); }
          }
          
          .animate-float {
            animation: float 3s ease-in-out infinite;
          }
        `}
      </style>
    </>
  );
};
