import { useState } from "react";
import { DemoForm } from "./DemoForm";
import { DevisForm } from "./DevisForm";

export const Pricing = () => {
  const [isDemoFormOpen, setIsDemoFormOpen] = useState(false);
  const [isDevisFormOpen, setIsDevisFormOpen] = useState(false);

  return (
    <section id="tarifs" className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-semibold mb-4">Tarifs Transparents</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choisissez l'offre qui correspond à vos besoins. Pas d'engagement, résiliation à tout moment.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Plan Starter */}
          <div className="pricing-card">
            <div className="pricing-header">
              <h3 className="pricing-title">Starter</h3>
              <div className="pricing-price">
                <span className="text-5xl font-bold">97€</span>
                <span className="text-gray-600">/mois</span>
              </div>
              <p className="pricing-description">Idéal pour débuter avec l'IA</p>
            </div>

            <div className="pricing-features">
              <div className="feature-item">
                <span className="feature-check">✓</span>
                <span>Agent IA conversationnel 24/7</span>
              </div>
              <div className="feature-item">
                <span className="feature-check">✓</span>
                <span>Intégrations Airbnb & Booking</span>
              </div>
              <div className="feature-item">
                <span className="feature-check">✓</span>
                <span>Support multilingue</span>
              </div>
              <div className="feature-item">
                <span className="feature-check">✓</span>
                <span>Formation incluse</span>
              </div>
              <div className="feature-item">
                <span className="feature-check">✓</span>
                <span>Analytics de base</span>
              </div>
            </div>

            <button 
              onClick={() => setIsDemoFormOpen(true)}
              className="pricing-button"
            >
              Commencer maintenant
            </button>
          </div>

          {/* Plan Premium */}
          <div className="pricing-card featured">
            <div className="pricing-badge">Le plus populaire</div>
            <div className="pricing-header">
              <h3 className="pricing-title text-white">Premium</h3>
              <div className="pricing-price">
                <span className="text-5xl font-bold text-white">197€</span>
                <span className="text-blue-100">/mois</span>
              </div>
              <p className="pricing-description text-blue-100">Pour optimiser vos revenus</p>
            </div>

            <div className="pricing-features">
              <div className="feature-item">
                <span className="feature-check text-white">✓</span>
                <span className="text-white">Tout du plan Starter</span>
              </div>
              <div className="feature-item">
                <span className="feature-check text-white">✓</span>
                <span className="text-white">Support prioritaire 24/7</span>
              </div>
              <div className="feature-item">
                <span className="feature-check text-white">✓</span>
                <span className="text-white">Gestionnaire de compte dédié</span>
              </div>
              <div className="feature-item">
                <span className="feature-check text-white">✓</span>
                <span className="text-white">Analytics avancés</span>
              </div>
              <div className="feature-item">
                <span className="feature-check text-white">✓</span>
                <span className="text-white">SLA garantie</span>
              </div>
            </div>

            <button 
              onClick={() => setIsDemoFormOpen(true)}
              className="pricing-button-featured"
            >
              Commencer maintenant
            </button>
          </div>

          {/* Plan Enterprise */}
          <div className="pricing-card">
            <div className="pricing-header">
              <h3 className="pricing-title">Enterprise</h3>
              <div className="pricing-price">
                <span className="text-5xl font-bold">Sur mesure</span>
              </div>
              <p className="pricing-description">Solution personnalisée</p>
            </div>

            <div className="pricing-features">
              <div className="feature-item">
                <span className="feature-check">✓</span>
                <span>Tout du plan Premium</span>
              </div>
              <div className="feature-item">
                <span className="feature-check">✓</span>
                <span>Intégrations personnalisées</span>
              </div>
              <div className="feature-item">
                <span className="feature-check">✓</span>
                <span>Formation équipe complète</span>
              </div>
              <div className="feature-item">
                <span className="feature-check">✓</span>
                <span>Support technique dédié</span>
              </div>
              <div className="feature-item">
                <span className="feature-check">✓</span>
                <span>API accès complet</span>
              </div>
            </div>

            <button 
              onClick={() => setIsDevisFormOpen(true)}
              className="pricing-button"
            >
              Demander un devis
            </button>
          </div>
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">Tous les plans incluent :</p>
          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-600">
            <span>✓ Essai gratuit 14 jours</span>
            <span>✓ Sans engagement</span>
            <span>✓ Support français</span>
            <span>✓ Mise à jour incluses</span>
          </div>
        </div>
      </div>

      <DemoForm 
        isOpen={isDemoFormOpen}
        onClose={() => setIsDemoFormOpen(false)}
      />
      <DevisForm 
        isOpen={isDevisFormOpen}
        onClose={() => setIsDevisFormOpen(false)}
      />
    </section>
  );
};
