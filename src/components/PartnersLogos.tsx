

export const PartnersLogos = () => {
  const avantages = [
    "Essai gratuit 14 jours",
    "Sans engagement",
    "Support français", 
    "Mise à jour incluses"
  ];

  return (
    <div className="flex flex-col items-center gap-8 mt-12 mb-8">
      {/* Widget Avantages Animé */}
      <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-200/50 max-w-md mx-auto">
        <div className="space-y-4">
          {avantages.map((avantage, index) => (
            <div 
              key={index}
              className="flex items-center gap-3 opacity-0 animate-fade-in-up"
              style={{
                animationDelay: `${index * 0.2}s`,
                animationFillMode: 'forwards'
              }}
            >
              <div className="flex-shrink-0 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center animate-pulse">
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                </svg>
              </div>
              <span className="text-gray-700 font-medium text-sm">{avantage}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Logos des partenaires */}
      <div className="flex items-center justify-center gap-8 mt-6">
        <img 
          src="/lovable-uploads/c46c96bc-1684-4106-a074-97a6ab11b53e.png" 
          alt="Airbnb" 
          className="w-20 h-auto object-contain opacity-80 hover:opacity-100 transition-opacity duration-300"
        />
        <img 
          src="/lovable-uploads/65241fa1-11cd-430c-b7bf-6b6477753269.png" 
          alt="Booking.com" 
          className="w-24 h-auto object-contain opacity-80 hover:opacity-100 transition-opacity duration-300"
        />
      </div>
    </div>
  );
};

