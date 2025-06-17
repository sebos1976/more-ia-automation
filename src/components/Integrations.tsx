
export const Integrations = () => {
  const integrations = [
    { 
      name: "Airbnb", 
      logo: "/lovable-uploads/46595110-a9ea-45fa-926a-cadb2f047f32.png",
      description: "Intégration native"
    },
    { 
      name: "Booking.com", 
      logo: "/lovable-uploads/1d95916f-c4a9-4392-8579-78c0edb8629c.png",
      description: "Synchronisation automatique"
    },
    { 
      name: "Beds24", 
      logo: "/lovable-uploads/e1576377-ca27-44bb-b15e-6df20eb89eb5.png",
      description: "Gestion centralisée"
    },
    { 
      name: "Eleven Labs", 
      logo: "/lovable-uploads/839d60ce-ceaa-4603-8159-97da8d1850ca.png",
      description: "IA vocale avancée"
    },
    { 
      name: "Vapi", 
      logo: "/lovable-uploads/81b91ce8-88bd-4c7f-bcc3-32541c1b4434.png",
      description: "API conversation"
    },
    { 
      name: "Make", 
      logo: "/lovable-uploads/acc1d049-d33e-48de-a7b6-f1c8493eeecf.png",
      description: "Automatisation workflows"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-semibold mb-4">Intégrations Natives</h2>
          <p className="section-subtitle">Connectez vos outils existants en quelques clics</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {integrations.map((integration, index) => (
            <div key={index} className="text-center">
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <img 
                  src={integration.logo} 
                  alt={integration.name}
                  className="h-12 w-auto mx-auto mb-3 opacity-60 hover:opacity-100 transition-opacity duration-300"
                />
                <span className="text-sm font-medium text-gray-600">{integration.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
