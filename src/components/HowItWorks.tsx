
export const HowItWorks = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-purple-50 to-pink-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Titre avec effet */}
        <div className="text-center mb-20">
          <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-red-500 bg-clip-text text-transparent mb-6">
            Comment ça fonctionne ?
          </h2>
          <p className="text-xl text-gray-600">
            Processus simple en 3 étapes
          </p>
        </div>

        {/* Étapes avec design iOS 18 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          
          {/* Étape 1 */}
          <div className="group cursor-pointer">
            <div className="relative bg-white/80 backdrop-blur-xl rounded-3xl p-8 shadow-xl border border-white/20 transform transition-all duration-500 hover:scale-105 hover:rotate-1 hover:shadow-2xl">
              {/* Cercle animé */}
              <div className="relative w-20 h-20 mx-auto mb-6">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full animate-pulse"></div>
                <div className="relative w-20 h-20 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-2xl font-bold text-white">1</span>
                </div>
                {/* Effet de halo */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 to-cyan-300 opacity-0 group-hover:opacity-30 blur-xl transition-opacity duration-300"></div>
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">CONNEXION</h3>
              <p className="text-gray-600 text-center leading-relaxed">
                Connectez votre compte Airbnb en 2 clics grâce à notre intégration sécurisée
              </p>
              
              {/* Effet brillance sur hover */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </div>

          {/* Étape 2 */}
          <div className="group cursor-pointer">
            <div className="relative bg-white/80 backdrop-blur-xl rounded-3xl p-8 shadow-xl border border-white/20 transform transition-all duration-500 hover:scale-105 hover:rotate-1 hover:shadow-2xl">
              <div className="relative w-20 h-20 mx-auto mb-6">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-400 rounded-full animate-pulse"></div>
                <div className="relative w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-400 rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-2xl font-bold text-white">2</span>
                </div>
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-400 to-pink-300 opacity-0 group-hover:opacity-30 blur-xl transition-opacity duration-300"></div>
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">CONFIGURATION</h3>
              <p className="text-gray-600 text-center leading-relaxed">
                L'IA apprend votre style de communication et les spécificités de vos logements
              </p>
              
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </div>

          {/* Étape 3 */}
          <div className="group cursor-pointer">
            <div className="relative bg-white/80 backdrop-blur-xl rounded-3xl p-8 shadow-xl border border-white/20 transform transition-all duration-500 hover:scale-105 hover:rotate-1 hover:shadow-2xl">
              <div className="relative w-20 h-20 mx-auto mb-6">
                <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-emerald-400 rounded-full animate-pulse"></div>
                <div className="relative w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-400 rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-2xl font-bold text-white">3</span>
                </div>
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-green-400 to-emerald-300 opacity-0 group-hover:opacity-30 blur-xl transition-opacity duration-300"></div>
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">AUTOMATISATION</h3>
              <p className="text-gray-600 text-center leading-relaxed">
                90% de vos conversations sont gérées automatiquement, 24h/24 et 7j/7
              </p>
              
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
