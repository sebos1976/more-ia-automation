
export const WhySebastien = () => {
  const benefits = [
    {
      icon: "👥",
      title: "+200 propriétaires accompagnés",
      description: "avec un taux de satisfaction de 98%"
    },
    {
      icon: "🎥",
      title: "Chaîne YouTube 15K+ abonnés",
      description: "référence française sur l'IA pour Airbnb"
    },
    {
      icon: "🏆",
      title: "Expert certifié Eleven Labs & Vapi",
      description: "maîtrise des meilleures technologies IA"
    },
    {
      icon: "⚡",
      title: "3 ans d'expertise IA conversationnelle",
      description: "pionnier de l'automatisation Airbnb"
    },
    {
      icon: "🛡️",
      title: "Garantie satisfait ou remboursé 30 jours",
      description: "prenez votre décision en toute sérénité"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="why-content">
            <h2 className="text-4xl font-semibold mb-4">Pourquoi choisir Sébastien More ?</h2>
            <p className="text-lg text-gray-600 mb-8">3 ans d'expertise en intelligence artificielle au service de votre réussite</p>
            
            <ul className="space-y-6 mb-8">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start">
                  <div className="text-3xl mr-4">{benefit.icon}</div>
                  <div>
                    <div className="font-semibold text-lg mb-1">{benefit.title}</div>
                    <div className="text-gray-600">{benefit.description}</div>
                  </div>
                </li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="gradient-btn">Réserver un appel découverte</button>
              <button className="secondary-btn">Voir mon parcours</button>
            </div>
          </div>

          <div className="why-image">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=600&q=80" 
                alt="Sébastien More" 
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute bottom-4 left-4 right-4">
                <div className="bg-white/90 backdrop-blur-sm rounded-lg p-3 flex items-center space-x-3">
                  <div className="text-2xl">▶️</div>
                  <div className="font-semibold">Voir la présentation vidéo</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
