
export const WhySebastien = () => {
  return (
    <section className="about-sebastien-pro py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="about-container grid lg:grid-cols-2 gap-12 items-center">
          <div className="about-image-section">
            <div className="image-wrapper-pro relative">
              <div className="image-placeholder bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl p-8 text-center text-white relative overflow-hidden">
                <div className="image-decoration-1 absolute top-4 right-4 w-12 h-12 bg-white/20 rounded-full"></div>
                <div className="image-decoration-2 absolute bottom-4 left-4 w-8 h-8 bg-white/30 rounded-full"></div>
                <div className="image-glow-effect absolute inset-0 bg-gradient-to-br from-transparent to-white/10"></div>
                <div className="relative z-10 py-12">
                  <div className="w-24 h-24 bg-white/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 7.5V9M21 17V15L15 15.5V17M11 19C11 20.1 11.9 21 13 21S15 20.1 15 19 14.1 17 13 17 11 17.9 11 19M7 7V9L1 8.5V7M7 15V17L1 16.5V15M11 5C11 6.1 11.9 7 13 7S15 6.1 15 5 14.1 3 13 3 11 3.9 11 5Z"/>
                    </svg>
                  </div>
                  <span className="text-lg font-semibold">Photo de Sébastien à venir</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="about-content-section">
            <div className="about-header mb-8">
              <h2 className="text-4xl font-semibold mb-4">Pourquoi choisir Sébastien More ?</h2>
              <p className="about-subtitle text-gray-600 text-lg">Expert en automatisation Airbnb depuis 3 ans</p>
            </div>
            
            <div className="expertise-grid space-y-6">
              <div className="expertise-item flex items-start gap-4">
                <div className="expertise-icon w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M16,4C18.11,4 19.8,5.69 19.8,7.8C19.8,8.78 19.39,9.65 18.73,10.27L12,17L5.27,10.27C4.61,9.65 4.2,8.78 4.2,7.8C4.2,5.69 5.89,4 8,4C9.11,4 10.11,4.5 10.82,5.27L12,6.45L13.18,5.27C13.89,4.5 14.89,4 16,4M16,2C14.35,2 12.78,2.65 11.64,3.79L12,4.15L12.36,3.79C11.22,2.65 9.65,2 8,2C4.69,2 2,4.69 2,7.8C2,9.74 2.89,11.5 4.36,12.73L12,20.37L19.64,12.73C21.11,11.5 22,9.74 22,7.8C22,4.69 19.31,2 16,2Z"/>
                  </svg>
                </div>
                <div className="expertise-text">
                  <div className="font-semibold text-lg text-gray-900">200+ propriétaires accompagnés</div>
                  <div className="text-gray-600">avec 98% de satisfaction</div>
                </div>
              </div>
              
              <div className="expertise-item flex items-start gap-4">
                <div className="expertise-icon w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17,10.5V7A1,1 0 0,0 16,6H4A1,1 0 0,0 3,7V17A1,1 0 0,0 4,18H16A1,1 0 0,0 17,17V13.5L21,17.5V6.5L17,10.5Z"/>
                  </svg>
                </div>
                <div className="expertise-text">
                  <div className="font-semibold text-lg text-gray-900">Chaîne YouTube 15K+ abonnés</div>
                  <div className="text-gray-600">référence française IA pour Airbnb</div>
                </div>
              </div>
              
              <div className="expertise-item flex items-start gap-4">
                <div className="expertise-icon w-12 h-12 bg-gradient-to-br from-green-500 to-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23,12L20.56,9.22L20.9,5.54L17.29,4.72L15.4,1.54L12,3L8.6,1.54L6.71,4.72L3.1,5.53L3.44,9.21L1,12L3.44,14.78L3.1,18.47L6.71,19.29L8.6,22.47L12,21L15.4,22.46L17.29,19.28L20.9,18.46L20.56,14.78L23,12M10,17L6,13L7.41,11.59L10,14.17L16.59,7.58L18,9L10,17Z"/>
                  </svg>
                </div>
                <div className="expertise-text">
                  <div className="font-semibold text-lg text-gray-900">Expert certifié Eleven Labs</div>
                  <div className="text-gray-600">maîtrise des technologies IA</div>
                </div>
              </div>
            </div>
            
            <div className="cta-buttons-pro mt-8 flex gap-4">
              <button className="btn-gradient-new">Réserver un appel découverte</button>
              <button className="btn-outline-new">Voir mon parcours</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
