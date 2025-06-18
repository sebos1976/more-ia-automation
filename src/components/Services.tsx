
export const Services = () => {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="section-header text-center mb-16">
          <h2 className="text-4xl font-semibold mb-4">Nos Solutions d'Automatisation</h2>
          <p className="section-subtitle">Technologie IA de pointe pour votre succès Airbnb</p>
        </div>
        
        <div className="services-grid-clean">
          <div className="service-card-clean">
            <div className="service-icon-wrapper mb-6">
              <svg className="service-icon-svg" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-4">Agent IA Co-Host 24/7</h3>
            <p className="text-gray-600 mb-6">Intelligence artificielle qui gère vos conversations Airbnb avec un taux de satisfaction de 96%</p>
            
            <div className="features-list-clean space-y-3">
              <div className="feature-item-clean">
                <div className="feature-check"></div>
                <span>Réponse automatique en 30 secondes</span>
              </div>
              <div className="feature-item-clean">
                <div className="feature-check"></div>
                <span>Support multilingue (FR, EN, ES)</span>
              </div>
              <div className="feature-item-clean">
                <div className="feature-check"></div>
                <span>Intégration native Airbnb</span>
              </div>
            </div>
          </div>
          
          <div className="service-card-clean">
            <div className="service-icon-wrapper mb-6">
              <svg className="service-icon-svg" viewBox="0 0 24 24">
                <path d="M12,15.5A3.5,3.5 0 0,1 8.5,12A3.5,3.5 0 0,1 12,8.5A3.5,3.5 0 0,1 15.5,12A3.5,3.5 0 0,1 12,15.5M19.43,12.97C19.47,12.65 19.5,12.33 19.5,12C19.5,11.67 19.47,11.34 19.43,11L21.54,9.37C21.73,9.22 21.78,8.95 21.66,8.73L19.66,5.27C19.54,5.05 19.27,4.96 19.05,5.05L16.56,6.05C16.04,5.66 15.5,5.32 14.87,5.07L14.5,2.42C14.46,2.18 14.25,2 14,2H10C9.75,2 9.54,2.18 9.5,2.42L9.13,5.07C8.5,5.32 7.96,5.66 7.44,6.05L4.95,5.05C4.73,4.96 4.46,5.05 4.34,5.27L2.34,8.73C2.22,8.95 2.27,9.22 2.46,9.37L4.57,11C4.53,11.34 4.5,11.67 4.5,12C4.5,12.33 4.53,12.65 4.57,12.97L2.46,14.63C2.27,14.78 2.22,15.05 2.34,15.27L4.34,18.73C4.46,18.95 4.73,19.03 4.95,18.95L7.44,17.94C7.96,18.34 8.5,18.68 9.13,18.93L9.5,21.58C9.54,21.82 9.75,22 10,22H14C14.25,22 14.46,21.82 14.5,21.58L14.87,18.93C15.5,18.68 16.04,18.34 16.56,17.94L19.05,18.95C19.27,19.03 19.54,18.95 19.66,18.73L21.66,15.27C21.78,15.05 21.73,14.78 21.54,14.63L19.43,12.97Z"/>
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-4">Gestion Automatisée Complète</h3>
            <p className="text-gray-600 mb-6">Automatisation complète de votre gestion Airbnb : check-in, support client, gestion des urgences</p>
            
            <div className="features-list-clean space-y-3">
              <div className="feature-item-clean">
                <div className="feature-check"></div>
                <span>Gestion check-in/check-out</span>
              </div>
              <div className="feature-item-clean">
                <div className="feature-check"></div>
                <span>Support technique automatique</span>
              </div>
              <div className="feature-item-clean">
                <div className="feature-check"></div>
                <span>Gestion des urgences</span>
              </div>
            </div>
          </div>
          
          <div className="service-card-clean">
            <div className="service-icon-wrapper mb-6">
              <svg className="service-icon-svg" viewBox="0 0 24 24">
                <path d="M12,2A3,3 0 0,1 15,5V11A3,3 0 0,1 12,14A3,3 0 0,1 9,11V5A3,3 0 0,1 12,2M19,11C19,14.53 16.39,17.44 13,17.93V21H11V17.93C7.61,17.44 5,14.53 5,11H7A5,5 0 0,0 12,16A5,5 0 0,0 17,11H19Z"/>
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-4">Formation & Accompagnement</h3>
            <p className="text-gray-600 mb-6">Accompagnement personnalisé par Sébastien More pour optimiser vos résultats</p>
            
            <div className="features-list-clean space-y-3">
              <div className="feature-item-clean">
                <div className="feature-check"></div>
                <span>Formation personnalisée 1-to-1</span>
              </div>
              <div className="feature-item-clean">
                <div className="feature-check"></div>
                <span>Support technique prioritaire</span>
              </div>
              <div className="feature-item-clean">
                <div className="feature-check"></div>
                <span>Suivi mensuel inclus</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
