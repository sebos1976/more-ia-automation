
import { useState } from "react";
import { DemoForm } from "./DemoForm";
import { DevisForm } from "./DevisForm";

export const Pricing = () => {
  const [isDemoFormOpen, setIsDemoFormOpen] = useState(false);
  const [isDevisFormOpen, setIsDevisFormOpen] = useState(false);

  const handleStartNow = () => {
    window.open('https://app.helphoster.com/', '_blank');
  };

  return (
    <section id="tarifs" className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-semibold mb-4">Tarifs Transparents</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choisissez l'offre qui correspond à vos besoins. Pas d'engagement, résiliation à tout moment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Plan Starter */}
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
            <h3 className="text-xl font-bold text-gray-900 mb-2">Starter</h3>
            <div className="mb-4">
              <span className="text-4xl font-bold text-gray-900">97€</span>
              <span className="text-lg text-gray-600">/mois</span>
            </div>
            <p className="text-gray-600 mb-6">Idéal pour débuter avec l'IA</p>

            <div className="space-y-3 mb-8">
              <div className="flex items-center">
                <span className="text-green-500 font-bold mr-3">✓</span>
                <span className="text-gray-700">Agent IA conversationnel 24/7</span>
              </div>
              <div className="flex items-center">
                <span className="text-green-500 font-bold mr-3">✓</span>
                <span className="text-gray-700">Intégrations Airbnb & Booking</span>
              </div>
              <div className="flex items-center">
                <span className="text-green-500 font-bold mr-3">✓</span>
                <span className="text-gray-700">Support multilingue</span>
              </div>
              <div className="flex items-center">
                <span className="text-green-500 font-bold mr-3">✓</span>
                <span className="text-gray-700">Formation incluse</span>
              </div>
              <div className="flex items-center">
                <span className="text-green-500 font-bold mr-3">✓</span>
                <span className="text-gray-700">Analytics de base</span>
              </div>
            </div>

            <button 
              onClick={handleStartNow}
              className="w-full bg-white border-2 border-blue-600 text-blue-600 py-3 px-6 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
            >
              Commencer maintenant
            </button>
          </div>

          {/* Plan Premium */}
          <div className="bg-blue-600 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-shadow relative border-2 border-blue-500">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
              Le plus populaire
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Premium</h3>
            <div className="mb-4">
              <span className="text-4xl font-bold text-white">197€</span>
              <span className="text-lg text-blue-100">/mois</span>
            </div>
            <p className="text-blue-100 mb-6">Pour optimiser vos revenus</p>

            <div className="space-y-3 mb-8">
              <div className="flex items-center">
                <span className="text-green-300 font-bold mr-3">✓</span>
                <span className="text-white">Tout du plan Starter</span>
              </div>
              <div className="flex items-center">
                <span className="text-green-300 font-bold mr-3">✓</span>
                <span className="text-white">Support prioritaire 24/7</span>
              </div>
              <div className="flex items-center">
                <span className="text-green-300 font-bold mr-3">✓</span>
                <span className="text-white">Gestionnaire de compte dédié</span>
              </div>
              <div className="flex items-center">
                <span className="text-green-300 font-bold mr-3">✓</span>
                <span className="text-white">Analytics avancés</span>
              </div>
              <div className="flex items-center">
                <span className="text-green-300 font-bold mr-3">✓</span>
                <span className="text-white">SLA garantie</span>
              </div>
            </div>

            <button 
              onClick={handleStartNow}
              className="w-full bg-white text-blue-600 py-3 px-6 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
            >
              Commencer maintenant
            </button>
          </div>

          {/* Plan Enterprise */}
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
            <h3 className="text-xl font-bold text-gray-900 mb-2">Enterprise</h3>
            <div className="mb-4">
              <span className="text-4xl font-bold text-gray-900">Sur mesure</span>
            </div>
            <p className="text-gray-600 mb-6">Solution personnalisée</p>

            <div className="space-y-3 mb-8">
              <div className="flex items-center">
                <span className="text-green-500 font-bold mr-3">✓</span>
                <span className="text-gray-700">Tout du plan Premium</span>
              </div>
              <div className="flex items-center">
                <span className="text-green-500 font-bold mr-3">✓</span>
                <span className="text-gray-700">Intégrations personnalisées</span>
              </div>
              <div className="flex items-center">
                <span className="text-green-500 font-bold mr-3">✓</span>
                <span className="text-gray-700">Formation équipe complète</span>
              </div>
              <div className="flex items-center">
                <span className="text-green-500 font-bold mr-3">✓</span>
                <span className="text-gray-700">Support technique dédié</span>
              </div>
              <div className="flex items-center">
                <span className="text-green-500 font-bold mr-3">✓</span>
                <span className="text-gray-700">API accès complet</span>
              </div>
            </div>

            <button 
              onClick={() => setIsDevisFormOpen(true)}
              className="w-full bg-white border-2 border-blue-600 text-blue-600 py-3 px-6 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
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
