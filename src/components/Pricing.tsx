
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
            Une tarification simple et transparente. Pas d'engagement, résiliation à tout moment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Plan Principal */}
          <div className="bg-blue-600 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-shadow relative border-2 border-blue-500">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
              Le plus populaire
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">Helphoster</h3>
            <div className="mb-4">
              <span className="text-5xl font-bold text-white">5€</span>
              <span className="text-lg text-blue-100">/ logement / mois</span>
            </div>
            <p className="text-blue-100 mb-6">Facturation mensuelle</p>

            <div className="space-y-3 mb-8">
              <div className="flex items-center">
                <span className="text-green-300 font-bold mr-3">✓</span>
                <span className="text-white">Agent IA conversationnel 24/7</span>
              </div>
              <div className="flex items-center">
                <span className="text-green-300 font-bold mr-3">✓</span>
                <span className="text-white">Intégrations Airbnb & Booking</span>
              </div>
              <div className="flex items-center">
                <span className="text-green-300 font-bold mr-3">✓</span>
                <span className="text-white">Support multilingue</span>
              </div>
              <div className="flex items-center">
                <span className="text-green-300 font-bold mr-3">✓</span>
                <span className="text-white">Analytics de base</span>
              </div>
              <div className="flex items-center">
                <span className="text-green-300 font-bold mr-3">✓</span>
                <span className="text-white">Formation incluse</span>
              </div>
              <div className="flex items-center">
                <span className="text-green-300 font-bold mr-3">✓</span>
                <span className="text-white">Support français</span>
              </div>
            </div>

            <button 
              onClick={handleStartNow}
              className="w-full bg-white text-blue-600 py-3 px-6 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
            >
              Commencer maintenant
            </button>
          </div>

          {/* Plan Sur Mesure avec dégradé rose iOS 18 */}
          <div className="bg-gradient-to-br from-pink-400 via-rose-400 to-pink-500 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-shadow relative">
            <h3 className="text-2xl font-bold text-white mb-2">Sur mesure</h3>
            <div className="mb-4">
              <span className="text-4xl font-bold text-white">Sur devis</span>
            </div>
            <p className="text-pink-100 mb-6">Solution personnalisée</p>

            <div className="space-y-3 mb-8">
              <div className="flex items-center">
                <span className="text-white font-bold mr-3">✓</span>
                <span className="text-white">Tout du plan standard</span>
              </div>
              <div className="flex items-center">
                <span className="text-white font-bold mr-3">✓</span>
                <span className="text-white">Intégrations personnalisées</span>
              </div>
              <div className="flex items-center">
                <span className="text-white font-bold mr-3">✓</span>
                <span className="text-white">Support prioritaire</span>
              </div>
              <div className="flex items-center">
                <span className="text-white font-bold mr-3">✓</span>
                <span className="text-white">Gestionnaire dédié</span>
              </div>
              <div className="flex items-center">
                <span className="text-white font-bold mr-3">✓</span>
                <span className="text-white">Formation équipe complète</span>
              </div>
              <div className="flex items-center">
                <span className="text-white font-bold mr-3">✓</span>
                <span className="text-white">API accès complet</span>
              </div>
            </div>

            <button 
              onClick={() => setIsDevisFormOpen(true)}
              className="w-full bg-white/20 backdrop-blur-sm border-2 border-white/30 text-white py-3 px-6 rounded-lg font-semibold hover:bg-white/30 transition-colors"
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
