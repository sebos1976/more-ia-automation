
export const Integrations = () => {
  const integrations = [
    { name: "Airbnb", logo: "/placeholder.svg" },
    { name: "Booking.com", logo: "/placeholder.svg" },
    { name: "Beds24", logo: "/placeholder.svg" },
    { name: "Eleven Labs", logo: "/placeholder.svg" },
    { name: "Vapi", logo: "/placeholder.svg" },
    { name: "Make", logo: "/placeholder.svg" }
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
