
export const PartnersLogos = () => {
  return (
    <div className="flex flex-col items-center gap-6 mt-8">
      <p className="text-lg font-medium text-gray-700">
        Compatible avec vos plateformes favorites
      </p>
      
      <div className="flex items-center gap-8 bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
        <img 
          src="/lovable-uploads/46595110-a9ea-45fa-926a-cadb2f047f32.png" 
          alt="Airbnb" 
          className="w-20 h-20 object-contain hover:scale-105 transition-transform duration-300"
        />
        <div className="w-px h-12 bg-gray-300"></div>
        <img 
          src="/lovable-uploads/1d95916f-c4a9-4392-8579-78c0edb8629c.png" 
          alt="Booking.com" 
          className="w-20 h-20 object-contain hover:scale-105 transition-transform duration-300"
        />
      </div>
    </div>
  );
};
