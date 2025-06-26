
export const Integrations = () => {
  const integrations = [
    { 
      name: "Airbnb", 
      logo: "/lovable-uploads/46595110-a9ea-45fa-926a-cadb2f047f32.png",
      description: "Plateforme de location"
    },
    { 
      name: "Booking.com", 
      logo: "/lovable-uploads/1d95916f-c4a9-4392-8579-78c0edb8629c.png",
      description: "Réservations en ligne"
    },
    { 
      name: "Beds24", 
      logo: "/lovable-uploads/5f79f5c2-a53d-41de-8983-c2e5dc76ce9f.png",
      description: "Channel Manager"
    },
    { 
      name: "Smoobu", 
      logo: "/lovable-uploads/97f2dc35-023f-4cd3-b7c4-1fd00ca7b35d.png",
      description: "Gestion locative"
    },
    { 
      name: "Guestlucky", 
      logo: "/lovable-uploads/78e143ae-f08a-4652-86c5-771c55d37c4f.png",
      description: "PMS intégré"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-semibold mb-4">Intégrations</h2>
          <p className="section-subtitle">Connectez vos outils existants</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
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
