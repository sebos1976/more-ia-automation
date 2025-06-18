
export const YouTubeSection = () => {
  return (
    <section className="youtube-section py-20 bg-gradient-to-r from-purple-600 to-blue-600 text-white text-center">
      <div className="container mx-auto px-4">
        <div className="youtube-content max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-4">Rejoignez + de 41 000 propriétaires Airbnb</h2>
          <p className="text-xl mb-8 opacity-90">Découvrez mes conseils exclusifs pour automatiser et optimiser vos locations</p>
          
          <a 
            href="https://www.youtube.com/@moresebastien" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn-youtube inline-flex items-center gap-3 bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:transform hover:-translate-y-1 hover:shadow-xl"
          >
            <svg className="youtube-icon w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
            </svg>
            Voir ma chaîne YouTube (41K abonnés)
          </a>
          
          <div className="youtube-stats flex justify-center gap-12 mt-12">
            <div className="stat-youtube text-center">
              <div className="text-3xl font-bold mb-2">41 000+</div>
              <div className="text-lg opacity-90">Abonnés</div>
            </div>
            <div className="stat-youtube text-center">
              <div className="text-3xl font-bold mb-2">200+</div>
              <div className="text-lg opacity-90">Vidéos</div>
            </div>
            <div className="stat-youtube text-center">
              <div className="text-3xl font-bold mb-2">3 ans</div>
              <div className="text-lg opacity-90">D'expertise</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
