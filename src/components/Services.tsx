
export const Services = () => {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="section-header text-center mb-16">
          <h2 className="text-4xl font-semibold mb-4">Nos Solutions d'Automatisation</h2>
          <p className="section-subtitle">Technologie de pointe pour votre succès</p>
        </div>
        
        <div className="services-grid-clean">
          <div className="service-card-clean">
            <div className="service-icon-wrapper mb-6">
              <svg className="service-icon-svg" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-4">Agent IA Conversationnel</h3>
            <p className="text-gray-600 mb-6">Intelligence artificielle avancée qui gère vos conversations avec un taux de satisfaction de 96%</p>
            
            <div className="features-list-clean space-y-3">
              <div className="feature-item-clean">
                <div className="feature-check"></div>
                <span>Réponse en moins de 30 secondes</span>
              </div>
              <div className="feature-item-clean">
                <div className="feature-check"></div>
                <span>Support multilingue</span>
              </div>
              <div className="feature-item-clean">
                <div className="feature-check"></div>
                <span>Intégration native</span>
              </div>
            </div>
          </div>
          
          <div className="service-card-clean">
            <div className="service-icon-wrapper mb-6">
              <svg className="service-icon-svg" viewBox="0 0 24 24">
                <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z"/>
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-4">Livrets d'Accueil</h3>
            <p className="text-gray-600 mb-6">Guides d'accueil professionnels avec QR Code et mise à jour automatique</p>
            
            <div className="features-list-clean space-y-3">
              <div className="feature-item-clean">
                <div className="feature-check"></div>
                <span>Design professionnel</span>
              </div>
              <div className="feature-item-clean">
                <div className="feature-check"></div>
                <span>QR Code d'accès</span>
              </div>
              <div className="feature-item-clean">
                <div className="feature-check"></div>
                <span>Mise à jour temps réel</span>
              </div>
            </div>
          </div>
          
          <div className="service-card-clean">
            <div className="service-icon-wrapper mb-6">
              <svg className="service-icon-svg" viewBox="0 0 24 24">
                <path d="M12,2A3,3 0 0,1 15,5V11A3,3 0 0,1 12,14A3,3 0 0,1 9,11V5A3,3 0 0,1 12,2M19,11C19,14.53 16.39,17.44 13,17.93V21H11V17.93C7.61,17.44 5,14.53 5,11H7A5,5 0 0,0 12,16A5,5 0 0,0 17,11H19Z"/>
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-4">Formation & Support</h3>
            <p className="text-gray-600 mb-6">Accompagnement personnalisé pour optimiser vos résultats</p>
            
            <div className="features-list-clean space-y-3">
              <div className="feature-item-clean">
                <div className="feature-check"></div>
                <span>Formation personnalisée</span>
              </div>
              <div className="feature-item-clean">
                <div className="feature-check"></div>
                <span>Support prioritaire</span>
              </div>
              <div className="feature-item-clean">
                <div className="feature-check"></div>
                <span>Suivi mensuel</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
