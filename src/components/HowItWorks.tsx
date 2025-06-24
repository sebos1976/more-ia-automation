
export const HowItWorks = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Titre principal */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Comment ça fonctionne ?
          </h2>
          <p className="text-xl text-gray-600">
            Processus simple en 3 étapes
          </p>
        </div>

        {/* Les 3 étapes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          
          {/* Étape 1 */}
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-2xl font-bold text-blue-600">1</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">CONNEXION</h3>
            <p className="text-gray-600 text-lg leading-relaxed">
              Connectez votre compte Airbnb en 2 clics grâce à notre intégration sécurisée
            </p>
          </div>

          {/* Étape 2 */}
          <div className="text-center">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-2xl font-bold text-purple-600">2</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">CONFIGURATION</h3>
            <p className="text-gray-600 text-lg leading-relaxed">
              L'IA apprend votre style de communication et les spécificités de vos logements
            </p>
          </div>

          {/* Étape 3 */}
          <div className="text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-2xl font-bold text-green-600">3</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">AUTOMATISATION</h3>
            <p className="text-gray-600 text-lg leading-relaxed">
              90% de vos conversations sont gérées automatiquement, 24h/24 et 7j/7
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
