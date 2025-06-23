
import { useState } from "react";
import { ContactForm } from "./ContactForm";
import { PartnersLogos } from "./PartnersLogos";

export const Hero = () => {
  const [isContactFormOpen, setIsContactFormOpen] = useState(false);

  return (
    <section id="accueil" className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-badge">
            <div className="badge-icon"></div>
            <span>Expert en automatisation Airbnb</span>
          </div>
          
          <h1 className="hero-title">
            Automatisez Votre Airbnb avec <span className="gradient-text">l'Intelligence Artificielle</span>
          </h1>
          
          <p className="hero-subtitle">
            Agent IA conversationnel = 90% de temps économisé dans la gestion de vos locations
          </p>
          
          <PartnersLogos />
          
          <div className="mt-8">
            <button 
              onClick={() => setIsContactFormOpen(true)}
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-2xl text-xl font-semibold min-w-[320px] min-h-[64px] hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              Obtenir une démonstration gratuite
            </button>
          </div>
          
          <div className="hero-stats-improved">
            <div className="stat-card-improved">
              <div className="stat-number-large">200+</div>
              <div className="stat-label-clear">Propriétaires accompagnés</div>
            </div>
            
            <div className="stat-card-improved">
              <div className="stat-number-large">90%</div>
              <div className="stat-label-clear">De temps économisé</div>
            </div>
            
            <div className="stat-card-improved">
              <div className="stat-number-large">24/7</div>
              <div className="stat-label-clear">Disponibilité</div>
            </div>
          </div>
        </div>
        
        <div className="hero-visual">
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
              <div className="flex-1 relative max-w-xl mx-auto">
                <img 
                  src="/lovable-uploads/d59cd207-1942-4c0b-8905-81419458fcd6.png" 
                  alt="Interface IA Helphoster" 
                  className="w-full h-auto object-contain rounded-lg shadow-2xl"
                />
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
