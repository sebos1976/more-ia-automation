
export const Services = () => {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="section-header">
          <div className="section-badge">
            <div className="badge-icon"></div>
            <span>Nos Solutions</span>
          </div>
          <h2 className="text-4xl font-semibold mb-4">Automatisation Complète de Votre Airbnb</h2>
          <p className="section-subtitle">Des outils professionnels pour maximiser votre rentabilité</p>
        </div>
        
        <div className="services-grid">
          <div className="service-card-premium">
            <div className="service-visual">
              <div className="service-icon-container">
                <div className="service-icon ai-icon"></div>
                <div className="service-animation-ring"></div>
              </div>
            </div>
            
            <div className="service-content">
              <h3>Agent IA Conversationnel</h3>
              <p>Intelligence artificielle avancée qui gère vos conversations avec un taux de satisfaction de 96%</p>
              
              <div className="service-features">
                <div className="feature-item">
                  <div className="feature-icon check"></div>
                  <span>Réponse en moins de 30 secondes</span>
                </div>
                <div className="feature-item">
                  <div className="feature-icon languages"></div>
                  <span>Support multilingue (FR, EN, ES, IT)</span>
                </div>
                <div className="feature-item">
                  <div className="feature-icon integration"></div>
                  <span>Intégration native Airbnb & Booking</span>
                </div>
              </div>
              
              <div className="service-pricing">
                <span className="price-from">À partir de</span>
                <span className="price-amount">47€</span>
                <span className="price-period">/mois</span>
              </div>
            </div>
          </div>
          
          <div className="service-card-premium">
            <div className="service-visual">
              <div className="service-icon-container">
                <div className="service-icon booklet-icon"></div>
                <div className="service-animation-pulse"></div>
              </div>
            </div>
            
            <div className="service-content">
              <h3>Livrets d'Accueil Digitaux</h3>
              <p>Créez des guides d'accueil professionnels avec QR Code et mise à jour automatique</p>
              
              <div className="service-features">
                <div className="feature-item">
                  <div className="feature-icon design"></div>
                  <span>Design professionnel personnalisable</span>
                </div>
                <div className="feature-item">
                  <div className="feature-icon qr"></div>
                  <span>QR Code d'accès instantané</span>
                </div>
                <div className="feature-item">
                  <div className="feature-icon update"></div>
                  <span>Mise à jour en temps réel</span>
                </div>
              </div>
              
              <div className="service-pricing">
                <span className="price-from">À partir de</span>
                <span className="price-amount">27€</span>
                <span className="price-period">/mois</span>
              </div>
            </div>
          </div>
          
          <div className="service-card-premium">
            <div className="service-visual">
              <div className="service-icon-container">
                <div className="service-icon formation-icon"></div>
                <div className="service-animation-rotate"></div>
              </div>
            </div>
            
            <div className="service-content">
              <h3>Formation & Accompagnement</h3>
              <p>Onboarding personnalisé et suivi régulier pour optimiser vos résultats</p>
              
              <div className="service-features">
                <div className="feature-item">
                  <div className="feature-icon personal"></div>
                  <span>Formation personnalisée 1-to-1</span>
                </div>
                <div className="feature-item">
                  <div className="feature-icon support"></div>
                  <span>Support technique prioritaire</span>
                </div>
                <div className="feature-item">
                  <div className="feature-icon analytics"></div>
                  <span>Analyse de performance mensuelle</span>
                </div>
              </div>
              
              <div className="service-pricing special">
                <span className="price-included">Inclus dans tous les packs</span>
              </div>
            </div>
          </div>
          
          <div className="service-card-premium featured">
            <div className="featured-badge">Plus populaire</div>
            <div className="service-visual">
              <div className="service-icon-container">
                <div className="service-icon premium-icon"></div>
                <div className="service-animation-glow"></div>
              </div>
            </div>
            
            <div className="service-content">
              <h3>Solution Complète Premium</h3>
              <p>L'ensemble de nos outils avec analytics avancés et intégrations sur-mesure</p>
              
              <div className="service-features">
                <div className="feature-item">
                  <div className="feature-icon complete"></div>
                  <span>Tous les outils inclus</span>
                </div>
                <div className="feature-item">
                  <div className="feature-icon analytics-pro"></div>
                  <span>Analytics et reporting avancés</span>
                </div>
                <div className="feature-item">
                  <div className="feature-icon priority"></div>
                  <span>Support prioritaire 24/7</span>
                </div>
              </div>
              
              <div className="service-pricing premium">
                <span className="price-from">À partir de</span>
                <span className="price-amount">97€</span>
                <span className="price-period">/mois</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
