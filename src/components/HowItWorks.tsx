
export const HowItWorks = () => {
  const steps = [
    {
      number: 1,
      icon: "🔗",
      title: "CONNEXION",
      description: "Connectez votre compte Airbnb en 2 clics grâce à notre intégration sécurisée"
    },
    {
      number: 2,
      icon: "🤖",
      title: "CONFIGURATION",
      description: "L'IA apprend votre style de communication et les spécificités de vos logements"
    },
    {
      number: 3,
      icon: "🚀",
      title: "AUTOMATISATION",
      description: "90% de vos conversations sont gérées automatiquement, 24h/24 et 7j/7"
    }
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-semibold mb-4">Comment ça fonctionne ?</h2>
          <p className="section-subtitle">En 3 étapes simples, automatisez votre gestion Airbnb</p>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-center space-y-8 lg:space-y-0 lg:space-x-8">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col lg:flex-row items-center">
              <div className="text-center max-w-xs">
                <div className="step-number mx-auto">{step.number}</div>
                <div className="text-4xl mb-4">{step.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden lg:block text-3xl font-bold mx-8" style={{color: 'var(--primary-pink)'}}>
                  →
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
