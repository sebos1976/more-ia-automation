
export const Testimonials = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-semibold mb-4">Témoignages Clients</h2>
          <p className="text-xl text-gray-600">Retours d'expérience de nos utilisateurs</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="mb-6">
              <p className="text-gray-600 italic text-lg leading-relaxed">"Excellent service d'automatisation. L'outil gère parfaitement mes réservations et mes invités sont très satisfaits de la réactivité."</p>
            </div>
            <div className="flex items-center">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full mr-4"></div>
              <div className="flex-1">
                <div className="font-semibold text-gray-900">Marie D.</div>
                <div className="text-sm text-gray-500">Propriétaire, Lyon</div>
              </div>
              <div className="text-yellow-500 text-lg">★★★★★</div>
            </div>
          </div>
          
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="mb-6">
              <p className="text-gray-600 italic text-lg leading-relaxed">"Gain de temps considérable dans la gestion de mes locations. Solution professionnelle et support réactif."</p>
            </div>
            <div className="flex items-center">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full mr-4"></div>
              <div className="flex-1">
                <div className="font-semibold text-gray-900">Thomas L.</div>
                <div className="text-sm text-gray-500">Gestionnaire, Paris</div>
              </div>
              <div className="text-yellow-500 text-lg">★★★★★</div>
            </div>
          </div>
          
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="mb-6">
              <p className="text-gray-600 italic text-lg leading-relaxed">"Formation complète et outil très efficace. Je recommande pour tous les propriétaires sérieux."</p>
            </div>
            <div className="flex items-center">
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-blue-500 rounded-full mr-4"></div>
              <div className="flex-1">
                <div className="font-semibold text-gray-900">Sophie M.</div>
                <div className="text-sm text-gray-500">Investisseuse, Nice</div>
              </div>
              <div className="text-yellow-500 text-lg">★★★★★</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
