
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

        {/* Étapes avec design iOS 18 amélioré */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          
          {/* Étape 1 */}
          <div className="group cursor-pointer">
            <div className="relative bg-white/90 backdrop-blur-xl rounded-3xl p-8 shadow-lg border border-white/30 transition-all duration-700 ease-out hover:scale-110 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/20">
              {/* Cercle animé avec effet de respiration */}
              <div className="relative w-20 h-20 mx-auto mb-6">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full transition-all duration-500 group-hover:scale-110"></div>
                <div className="relative w-20 h-20 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full flex items-center justify-center shadow-lg transition-all duration-500 group-hover:shadow-xl">
                  <span className="text-2xl font-bold text-white transition-transform duration-300 group-hover:scale-110">1</span>
                </div>
                {/* Effet de halo amélioré */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 to-cyan-300 opacity-0 group-hover:opacity-50 blur-2xl transition-all duration-500 scale-150"></div>
                {/* Effet de pulsation */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 to-cyan-300 opacity-0 group-hover:opacity-30 animate-ping"></div>
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center transition-colors duration-300 group-hover:text-blue-600">CONNEXION</h3>
              <p className="text-gray-600 text-center leading-relaxed transition-all duration-300 group-hover:text-gray-800">
                Connectez votre compte Airbnb en 2 clics grâce à notre intégration sécurisée
              </p>
              
              {/* Effet brillance sur hover amélioré */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-white/20 via-blue-100/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Bordure lumineuse */}
              <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-blue-300/50 transition-all duration-500"></div>
            </div>
          </div>

          {/* Étape 2 */}
          <div className="group cursor-pointer">
            <div className="relative bg-white/90 backdrop-blur-xl rounded-3xl p-8 shadow-lg border border-white/30 transition-all duration-700 ease-out hover:scale-110 hover:-translate-y-2 hover:shadow-2xl hover:shadow-purple-500/20">
              <div className="relative w-20 h-20 mx-auto mb-6">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-400 rounded-full transition-all duration-500 group-hover:scale-110"></div>
                <div className="relative w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-400 rounded-full flex items-center justify-center shadow-lg transition-all duration-500 group-hover:shadow-xl">
                  <span className="text-2xl font-bold text-white transition-transform duration-300 group-hover:scale-110">2</span>
                </div>
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-400 to-pink-300 opacity-0 group-hover:opacity-50 blur-2xl transition-all duration-500 scale-150"></div>
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-400 to-pink-300 opacity-0 group-hover:opacity-30 animate-ping"></div>
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center transition-colors duration-300 group-hover:text-purple-600">CONFIGURATION</h3>
              <p className="text-gray-600 text-center leading-relaxed transition-all duration-300 group-hover:text-gray-800">
                L'IA apprend votre style de communication et les spécificités de vos logements
              </p>
              
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-white/20 via-purple-100/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-purple-300/50 transition-all duration-500"></div>
            </div>
          </div>

          {/* Étape 3 */}
          <div className="group cursor-pointer">
            <div className="relative bg-white/90 backdrop-blur-xl rounded-3xl p-8 shadow-lg border border-white/30 transition-all duration-700 ease-out hover:scale-110 hover:-translate-y-2 hover:shadow-2xl hover:shadow-green-500/20">
              <div className="relative w-20 h-20 mx-auto mb-6">
                <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-emerald-400 rounded-full transition-all duration-500 group-hover:scale-110"></div>
                <div className="relative w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-400 rounded-full flex items-center justify-center shadow-lg transition-all duration-500 group-hover:shadow-xl">
                  <span className="text-2xl font-bold text-white transition-transform duration-300 group-hover:scale-110">3</span>
                </div>
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-green-400 to-emerald-300 opacity-0 group-hover:opacity-50 blur-2xl transition-all duration-500 scale-150"></div>
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-green-400 to-emerald-300 opacity-0 group-hover:opacity-30 animate-ping"></div>
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center transition-colors duration-300 group-hover:text-green-600">AUTOMATISATION</h3>
              <p className="text-gray-600 text-center leading-relaxed transition-all duration-300 group-hover:text-gray-800">
                90% de vos conversations sont gérées automatiquement, 24h/24 et 7j/7
              </p>
              
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-white/20 via-green-100/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-green-300/50 transition-all duration-500"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
