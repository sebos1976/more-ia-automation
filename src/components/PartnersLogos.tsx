

export const PartnersLogos = () => {
  return (
    <div className="flex flex-col items-center gap-6 mt-8">
      <p className="text-lg font-medium text-gray-700">
        Compatible avec vos meilleures plateformes
      </p>
      
      <div className="relative flex items-center justify-center bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-white/20">
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 p-[2px]">
          <div className="w-full h-full bg-white rounded-3xl"></div>
        </div>
        <div className="relative z-10">
          <img 
            src="/lovable-uploads/955619de-e2dc-44e8-ad93-2b9242f2990f.png" 
            alt="Booking.com et Airbnb" 
            className="w-80 h-auto object-contain hover:scale-105 transition-transform duration-300"
          />
        </div>
      </div>
    </div>
  );
};

