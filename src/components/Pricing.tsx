
export const Pricing = () => {
  const plans = [
    {
      name: "PACK DÉCOUVERTE",
      badge: "Idéal pour débuter",
      price: "47€",
      period: "/mois",
      features: [
        "✓ 1 Agent IA basique",
        "✓ 3 livrets d'accueil",
        "✓ Support par email",
        "✓ Formation vidéo 30min",
        "✓ Intégration Airbnb"
      ],
      rating: "⭐ 4.8/5 (23 avis clients)",
      note: "Engagement 3 mois minimum"
    },
    {
      name: "PACK CROISSANCE",
      badge: "Plus populaire",
      price: "97€",
      period: "/mois",
      features: [
        "✓ Agent IA avancé multilingue",
        "✓ Livrets d'accueil illimités",
        "✓ Support prioritaire",
        "✓ Formation personnalisée 2h",
        "✓ Analytics détaillés",
        "✓ Intégrations multiples"
      ],
      rating: "⭐ 4.9/5 (156 avis clients)",
      note: "Garantie satisfait ou remboursé",
      featured: true
    },
    {
      name: "PACK PROFESSIONNEL",
      badge: "Pour les experts",
      price: "197€",
      period: "/mois",
      features: [
        "✓ Multi-agents spécialisés",
        "✓ Livrets sur-mesure illimités",
        "✓ Support téléphonique",
        "✓ Coaching mensuel 1h",
        "✓ API personnalisée",
        "✓ Gestionnaire de compte dédié"
      ],
      rating: "⭐ 5.0/5 (89 avis clients)",
      note: "Facturation annuelle possible"
    },
    {
      name: "PACK ENTREPRISE",
      badge: "Solution sur-mesure",
      price: "Sur devis",
      period: "",
      features: [
        "✓ Solution 100% personnalisée",
        "✓ Développement spécifique",
        "✓ Support 24/7 dédié",
        "✓ Formation équipe complète",
        "✓ Intégrations avancées",
        "✓ SLA garantie"
      ],
      rating: "⭐ 4.9/5 (34 avis clients)",
      note: "Engagement annuel"
    }
  ];

  return (
    <section id="tarifs" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-semibold mb-4">Choisissez Votre Pack</h2>
          <p className="section-subtitle">Des solutions adaptées à tous les portefeuilles de locations</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {plans.map((plan, index) => (
            <div key={index} className={`plan-card ${plan.featured ? 'featured' : ''}`}>
              {plan.featured && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="px-6 py-2 rounded-full text-white text-sm font-semibold" style={{background: 'var(--gradient-main)'}}>
                    {plan.badge}
                  </div>
                </div>
              )}
              
              <div className="plan-header mb-6">
                <h3 className="text-xl font-semibold mb-2">{plan.name}</h3>
                {!plan.featured && (
                  <div className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full inline-block">
                    {plan.badge}
                  </div>
                )}
              </div>

              <div className="mb-6">
                <span className="text-4xl font-bold">{plan.price}</span>
                <span className="text-gray-500">{plan.period}</span>
              </div>

              <ul className="space-y-3 mb-6">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="text-sm text-gray-600">{feature}</li>
                ))}
              </ul>

              <div className="rating mb-4">{plan.rating}</div>
              
              <button className="gradient-btn w-full mb-4">Choisir ce pack</button>
              
              <p className="text-xs text-gray-500 text-center">{plan.note}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
