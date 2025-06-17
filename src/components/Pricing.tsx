
export const Pricing = () => {
  return (
    <section id="tarifs" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="section-header text-center mb-16">
          <h2 className="text-4xl font-semibold mb-4">Tarification Simple et Transparente</h2>
          <p className="section-subtitle">Choisissez la formule qui correspond à vos besoins</p>
        </div>

        <div className="pricing-grid-two">
          <div className="plan-card-new">
            <div className="plan-header mb-8">
              <h3 className="text-2xl font-semibold mb-2">Pack Standard</h3>
              <div className="plan-description text-gray-600">Solution complète pour tous vos logements</div>
            </div>
            
            <div className="pricing-options mb-8">
              <div className="pricing-option">
                <div className="price-monthly">
                  <span className="price-amount text-3xl font-bold text-gray-900">5€</span>
                  <span className="price-period text-gray-600">/ mois / logement</span>
                </div>
                <div className="billing-type text-sm text-gray-500 mt-2">Facturation mensuelle</div>
              </div>
              
              <div className="pricing-option recommended">
                <div className="price-yearly">
                  <span className="price-amount text-3xl font-bold text-gray-900">50€</span>
                  <span className="price-period text-gray-600">/ an / logement</span>
                </div>
                <div className="billing-type text-sm text-gray-600 mt-2">2 mois offerts</div>
                <div className="savings-badge">Économisez 14€</div>
              </div>
            </div>
            
            <ul className="plan-features-clean mb-8 space-y-3">
              <li className="flex items-center text-gray-700">
                <div className="feature-check-icon mr-3"></div>
                Agent IA conversationnel 24/7
              </li>
              <li className="flex items-center text-gray-700">
                <div className="feature-check-icon mr-3"></div>
                Livrets d'accueil digitaux
              </li>
              <li className="flex items-center text-gray-700">
                <div className="feature-check-icon mr-3"></div>
                Intégrations Airbnb & Booking
              </li>
              <li className="flex items-center text-gray-700">
                <div className="feature-check-icon mr-3"></div>
                Support multilingue
              </li>
              <li className="flex items-center text-gray-700">
                <div className="feature-check-icon mr-3"></div>
                Formation incluse
              </li>
              <li className="flex items-center text-gray-700">
                <div className="feature-check-icon mr-3"></div>
                Analytics de base
              </li>
            </ul>
            
            <button className="btn-gradient-new w-full">Commencer maintenant</button>
          </div>
          
          <div className="plan-card-new enterprise">
            <div className="plan-header mb-8">
              <h3 className="text-2xl font-semibold mb-2">Solution Entreprise</h3>
              <div className="plan-description text-gray-600">Développement sur-mesure pour vos besoins spécifiques</div>
            </div>
            
            <div className="price-custom mb-8 py-12">
              <span className="price-text text-2xl font-semibold text-gray-900">Sur devis personnalisé</span>
            </div>
            
            <ul className="plan-features-clean mb-8 space-y-3">
              <li className="flex items-center text-gray-700">
                <div className="feature-check-icon mr-3"></div>
                Tout du pack Standard inclus
              </li>
              <li className="flex items-center text-gray-700">
                <div className="feature-check-icon mr-3"></div>
                Développement personnalisé
              </li>
              <li className="flex items-center text-gray-700">
                <div className="feature-check-icon mr-3"></div>
                Intégrations avancées
              </li>
              <li className="flex items-center text-gray-700">
                <div className="feature-check-icon mr-3"></div>
                Support prioritaire 24/7
              </li>
              <li className="flex items-center text-gray-700">
                <div className="feature-check-icon mr-3"></div>
                Gestionnaire de compte dédié
              </li>
              <li className="flex items-center text-gray-700">
                <div className="feature-check-icon mr-3"></div>
                Analytics avancés
              </li>
              <li className="flex items-center text-gray-700">
                <div className="feature-check-icon mr-3"></div>
                SLA garantie
              </li>
            </ul>
            
            <button className="btn-secondary-new w-full">Demander un devis</button>
          </div>
        </div>
      </div>
    </section>
  );
};
