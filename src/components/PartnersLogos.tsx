
export const PartnersLogos = () => {
  return (
    <div className="flex flex-col items-center gap-8 mt-12 mb-8">
      {/* Container logos simplifié avec bordure dégradée fine */}
      <div className="relative max-w-sm mx-auto">
        <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-3xl p-[2px]">
          <div className="bg-white rounded-3xl p-6 flex items-center justify-center gap-8">
            <img 
              src="/lovable-uploads/955619de-e2dc-44e8-ad93-2b9242f2990f.png" 
              alt="Booking.com et Airbnb" 
              className="w-64 h-auto object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
