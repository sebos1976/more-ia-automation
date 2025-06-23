
export const PartnersLogos = () => {
  return (
    <div className="flex flex-col items-center gap-6 mt-8">
      <p className="text-lg font-medium text-gray-700">
        Compatible avec vos plateformes favorites
      </p>
      
      <div className="flex items-center justify-center bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
        <img 
          src="/lovable-uploads/955619de-e2dc-44e8-ad93-2b9242f2990f.png" 
          alt="Booking.com et Airbnb" 
          className="w-64 h-auto object-contain hover:scale-105 transition-transform duration-300"
        />
      </div>
    </div>
  );
};
