
export const Services = () => {
  const services = [
    {
      icon: "🤖",
      title: "Agent IA Conversationnel",
      description: "Réponses automatiques 24h/24, gestion check-in/check-out, support multilingue",
      features: ["✓ Réponse en 30 secondes", "✓ Français, anglais, espagnol", "✓ Intégration Airbnb native"],
      price: "À partir de 47€/mois"
    },
    {
      icon: "📱",
      title: "Livrets d'Accueil Digitaux",
      description: "Création automatique, QR Code, mise à jour en temps réel, branding personnalisé",
      features: ["✓ Design professionnel", "✓ QR Code d'accès", "✓ Mise à jour instantanée"],
      price: "À partir de 27€/mois"
    },
    {
      icon: "🎓",
      title: "Formation & Accompagnement",
      description: "Onboarding personnalisé, formation vidéo, suivi mensuel, support prioritaire",
      features: ["✓ Formation 1-to-1", "✓ Suivi personnalisé", "✓ Support français"],
      price: "Inclus dans tous les packs"
    },
    {
      icon: "🚀",
      title: "Pack Complet Premium",
      description: "Agent IA + Livrets + Formation + Analytics + Intégrations avancées",
      features: ["✓ Solution tout-en-un", "✓ Analytics détaillés", "✓ Support premium"],
      price: "À partir de 97€/mois",
      featured: true
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-semibold mb-4">Mes Solutions d'Automatisation</h2>
          <p className="section-subtitle">Des outils IA sur-mesure pour transformer votre gestion locative</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className={`service-card ${service.featured ? 'featured ring-2 ring-pink-500' : ''}`}>
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <div className="space-y-2 mb-4">
                {service.features.map((feature, idx) => (
                  <div key={idx} className="text-sm text-gray-500">{feature}</div>
                ))}
              </div>
              <div className="text-lg font-semibold" style={{color: 'var(--primary-pink)'}}>
                {service.price}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
