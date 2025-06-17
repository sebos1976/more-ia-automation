
export const FinalCTA = () => {
  return (
    <section className="py-20" style={{background: 'var(--gradient-hero)'}}>
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-3xl mx-auto text-white">
          <h2 className="text-4xl font-semibold mb-4">Prêt à automatiser votre Airbnb ?</h2>
          <p className="text-xl mb-8">Rejoignez les +200 propriétaires qui ont déjà transformé leur gestion locative</p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <button className="bg-white text-gray-900 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-colors">
              Réserver ma démo gratuite
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white hover:text-gray-900 transition-colors">
              Poser une question
            </button>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center text-sm">
            <span className="flex items-center justify-center">
              <span className="mr-2">✓</span>
              Démo gratuite 30min
            </span>
            <span className="flex items-center justify-center">
              <span className="mr-2">✓</span>
              Sans engagement
            </span>
            <span className="flex items-center justify-center">
              <span className="mr-2">✓</span>
              Réponse en 24h
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
