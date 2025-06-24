
import { useState } from "react";
import { DemoForm } from "./DemoForm";
import { DevisForm } from "./DevisForm";

export const FinalCTA = () => {
  const [isDemoFormOpen, setIsDemoFormOpen] = useState(false);
  const [isDevisFormOpen, setIsDevisFormOpen] = useState(false);

  return (
    <section className="py-20 bg-gradient-to-r from-pink-500 to-purple-600">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-3xl mx-auto text-white">
          <h2 className="text-4xl font-semibold mb-4">Prêt à automatiser votre Airbnb ?</h2>
          <p className="text-xl mb-8">Rejoignez les +200 propriétaires qui ont déjà transformé leur gestion locative</p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <button 
              onClick={() => setIsDemoFormOpen(true)}
              className="bg-white text-gray-900 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-colors"
            >
              Obtenir une démonstration gratuite
            </button>
            <button 
              onClick={() => setIsDevisFormOpen(true)}
              className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white hover:text-gray-900 transition-colors"
            >
              Demander un devis
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

      <DemoForm 
        isOpen={isDemoFormOpen}
        onClose={() => setIsDemoFormOpen(false)}
      />
      <DevisForm 
        isOpen={isDevisFormOpen}
        onClose={() => setIsDevisFormOpen(false)}
      />
    </section>
  );
};
