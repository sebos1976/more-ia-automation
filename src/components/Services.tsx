
export const Services = () => {
  return (
    <section id="services" className="py-20 bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Titre de section avec effet moderne */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-6">
            Nos Solutions d'Automatisation
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Technologie IA de pointe pour votre succès Airbnb
          </p>
        </div>

        {/* Grille de fonctionnalités modernisée */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          
          {/* Agent IA 24/7 */}
          <div className="group relative cursor-pointer">
            <div className="relative bg-white/90 backdrop-blur-xl rounded-3xl p-8 shadow-lg border border-white/30 transition-all duration-500 ease-out hover:scale-105 hover:-translate-y-3 hover:shadow-2xl hover:shadow-blue-500/20">
              
              {/* Icône moderne avec effets */}
              <div className="relative w-20 h-20 mx-auto mb-6">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-600 rounded-2xl transition-all duration-500 group-hover:scale-110 group-hover:rotate-3"></div>
                <div className="relative w-20 h-20 bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg transition-all duration-500 group-hover:shadow-xl">
                  {/* Icône Robot/IA moderne */}
                  <svg className="w-10 h-10 text-white transition-transform duration-300 group-hover:scale-110" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 7.5V9M9 7.5L3 7V9H9M12 6C14.21 6 16 7.79 16 10V12C16 12.55 15.55 13 15 13H9C8.45 13 8 12.55 8 12V10C8 7.79 9.79 6 12 6ZM10.5 10.5C10.5 11.33 9.83 12 9 12S7.5 11.33 7.5 10.5 8.17 9 9 9 10.5 9.67 10.5 10.5ZM15 12C15.83 12 16.5 11.33 16.5 10.5S15.83 9 15 9 13.5 9.67 13.5 10.5 14.17 12 15 12ZM12 14C12.55 14 13 14.45 13 15V17H11V15C11 14.45 11.45 14 12 14ZM12 18C11.45 18 11 18.45 11 19V21H13V19C13 18.45 12.55 18 12 18Z"/>
                  </svg>
                </div>
                {/* Effet de halo animé */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-400 to-cyan-300 opacity-0 group-hover:opacity-60 blur-xl transition-all duration-500 scale-150 animate-pulse"></div>
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center transition-colors duration-300 group-hover:text-blue-600">Agent IA 24/7</h3>
              <p className="text-gray-600 text-center leading-relaxed transition-all duration-300 group-hover:text-gray-800">
                Réponse automatique instantanée à tous vos voyageurs
              </p>
              
              {/* Bordure dégradée rose-violet au survol */}
              <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-gradient-to-r group-hover:from-pink-500 group-hover:via-purple-500 group-hover:to-pink-500 opacity-0 group-hover:opacity-100 transition-all duration-500 bg-gradient-to-r from-pink-500 via-purple-500 to-pink-500 bg-clip-border p-0.5">
                <div className="w-full h-full bg-white rounded-3xl"></div>
              </div>
              
              {/* Effet brillance */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-white/20 via-blue-100/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          </div>

          {/* Intégrations */}
          <div className="group relative cursor-pointer">
            <div className="relative bg-white/90 backdrop-blur-xl rounded-3xl p-8 shadow-lg border border-white/30 transition-all duration-500 ease-out hover:scale-105 hover:-translate-y-3 hover:shadow-2xl hover:shadow-purple-500/20">
              
              <div className="relative w-20 h-20 mx-auto mb-6">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-400 to-purple-600 rounded-2xl transition-all duration-500 group-hover:scale-110 group-hover:rotate-3"></div>
                <div className="relative w-20 h-20 bg-gradient-to-r from-purple-500 via-pink-400 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg transition-all duration-500 group-hover:shadow-xl">
                  {/* Icône Intégrations moderne */}
                  <svg className="w-10 h-10 text-white transition-transform duration-300 group-hover:scale-110" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M3,3H7V7H3V3M9,3H13V7H9V3M15,3H19V7H15V3M3,9H7V13H3V9M15,9H19V13H15V9M3,15H7V19H3V15M9,15H13V19H9V15M15,15H19V19H15V15M11,10H13V14H11V10M9,11V13H7V11H9M17,11V13H15V11H17M11,8H13V10H11V8M11,14H13V16H11V14Z"/>
                  </svg>
                </div>
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-400 to-pink-300 opacity-0 group-hover:opacity-60 blur-xl transition-all duration-500 scale-150 animate-pulse"></div>
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center transition-colors duration-300 group-hover:text-purple-600">Intégrations</h3>
              <p className="text-gray-600 text-center leading-relaxed transition-all duration-300 group-hover:text-gray-800">
                Compatible Airbnb, Booking via BEDS24
              </p>
              
              {/* Bordure dégradée rose-violet */}
              <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-gradient-to-r group-hover:from-pink-500 group-hover:via-purple-500 group-hover:to-pink-500 opacity-0 group-hover:opacity-100 transition-all duration-500 bg-gradient-to-r from-pink-500 via-purple-500 to-pink-500 bg-clip-border p-0.5">
                <div className="w-full h-full bg-white rounded-3xl"></div>
              </div>
              
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-white/20 via-purple-100/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          </div>

          {/* Support Multilingue */}
          <div className="group relative cursor-pointer">
            <div className="relative bg-white/90 backdrop-blur-xl rounded-3xl p-8 shadow-lg border border-white/30 transition-all duration-500 ease-out hover:scale-105 hover:-translate-y-3 hover:shadow-2xl hover:shadow-green-500/20">
              
              <div className="relative w-20 h-20 mx-auto mb-6">
                <div className="absolute inset-0 bg-gradient-to-r from-green-500 via-emerald-400 to-green-600 rounded-2xl transition-all duration-500 group-hover:scale-110 group-hover:rotate-3"></div>
                <div className="relative w-20 h-20 bg-gradient-to-r from-green-500 via-emerald-400 to-green-600 rounded-2xl flex items-center justify-center shadow-lg transition-all duration-500 group-hover:shadow-xl">
                  {/* Icône Globe/Langues moderne */}
                  <svg className="w-10 h-10 text-white transition-transform duration-300 group-hover:scale-110" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M11,3.05C7.5,3.5 4.8,6.37 4.34,10H7.03C7.13,7.87 8.04,5.94 9.5,4.5C10,4.15 10.5,3.85 11,3.6V3.05M13,3.05V3.6C13.5,3.85 14,4.15 14.5,4.5C15.96,5.94 16.87,7.87 16.97,10H19.66C19.2,6.37 16.5,3.5 13,3.05M11,13H4.34C4.8,16.63 7.5,19.5 11,19.95V19.4C10.5,19.15 10,18.85 9.5,18.5C8.04,17.06 7.13,15.13 7.03,13H11M19.66,13H16.97C16.87,15.13 15.96,17.06 14.5,18.5C14,18.85 13.5,19.15 13,19.4V19.95C16.5,19.5 19.2,16.63 19.66,13M4.34,11H7.03C7.13,8.87 8.04,6.94 9.5,5.5C10,5.15 10.5,4.85 11,4.6V3.05C7.5,3.5 4.8,6.37 4.34,11Z"/>
                  </svg>
                </div>
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-green-400 to-emerald-300 opacity-0 group-hover:opacity-60 blur-xl transition-all duration-500 scale-150 animate-pulse"></div>
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center transition-colors duration-300 group-hover:text-green-600">Support Multilingue</h3>
              <p className="text-gray-600 text-center leading-relaxed transition-all duration-300 group-hover:text-gray-800">
                Communication dans toutes les langues
              </p>
              
              {/* Bordure dégradée rose-violet */}
              <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-gradient-to-r group-hover:from-pink-500 group-hover:via-purple-500 group-hover:to-pink-500 opacity-0 group-hover:opacity-100 transition-all duration-500 bg-gradient-to-r from-pink-500 via-purple-500 to-pink-500 bg-clip-border p-0.5">
                <div className="w-full h-full bg-white rounded-3xl"></div>
              </div>
              
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-white/20 via-green-100/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
