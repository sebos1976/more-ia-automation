
export const PartnersLogos = () => {
  return (
    <div className="flex flex-col items-center gap-8 mt-12 mb-8">
      {/* Logos avec bordure dégradée uniquement */}
      <div className="relative max-w-sm mx-auto">
        {/* Bordure dégradée uniquement */}
        <div className="border-2 border-transparent bg-gradient-to-br from-blue-500 to-purple-600 rounded-3xl p-[2px]">
          <div className="bg-transparent rounded-3xl p-6">
            <img 
              src="/lovable-uploads/4e0587fd-75f8-4176-a381-d1dee114f444.png" 
              alt="Booking.com et Airbnb" 
              className="w-64 h-auto object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
