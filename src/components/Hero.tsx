
export const Hero = () => {
  return (
    <section id="accueil" className="hero py-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="hero-content">
            <h1 className="text-4xl lg:text-6xl font-semibold mb-6 leading-tight">
              Automatisez Votre Airbnb avec l'Intelligence Artificielle
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Agent IA conversationnel + Livrets d'accueil digitaux = 90% de temps économisé
            </p>
            
            <div className="bg-white rounded-2xl p-6 shadow-lg mb-8">
              <div className="grid md:grid-cols-4 gap-4">
                <input 
                  type="text" 
                  placeholder="Type de service" 
                  className="px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                />
                <input 
                  type="text" 
                  placeholder="Nombre de logements" 
                  className="px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                />
                <input 
                  type="text" 
                  placeholder="Budget mensuel" 
                  className="px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                />
                <button className="gradient-btn">OBTENIR MA DÉMO GRATUITE</button>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-8 text-center">
              <div className="stat">
                <div className="text-3xl font-bold text-gray-900 mb-1">200+</div>
                <div className="text-gray-600">Propriétaires accompagnés</div>
              </div>
              <div className="stat">
                <div className="text-3xl font-bold text-gray-900 mb-1">90%</div>
                <div className="text-gray-600">De temps économisé</div>
              </div>
              <div className="stat">
                <div className="text-3xl font-bold text-gray-900 mb-1">24/7</div>
                <div className="text-gray-600">Disponibilité</div>
              </div>
            </div>
          </div>

          <div className="hero-image">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80" 
                alt="Dashboard IA pour Airbnb" 
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-pink-500/20 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
