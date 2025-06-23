
export const PartnersLogos = () => {
  return (
    <div className="flex items-center justify-center gap-8 mt-8 mb-4">
      <div className="flex items-center gap-2 text-gray-600 text-sm font-medium">
        <span>Intégrations natives :</span>
      </div>
      
      <div className="flex items-center gap-6">
        <img 
          src="/lovable-uploads/46595110-a9ea-45fa-926a-cadb2f047f32.png" 
          alt="Airbnb"
          className="h-8 opacity-70 hover:opacity-100 transition-opacity duration-300"
        />
        <img 
          src="/lovable-uploads/1d95916f-c4a9-4392-8579-78c0edb8629c.png" 
          alt="Booking.com"
          className="h-8 opacity-70 hover:opacity-100 transition-opacity duration-300"
        />
      </div>
    </div>
  );
};
