
import { useState } from "react";

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "Comment l'agent IA apprend-il mon style de communication ?",
      answer: "L'IA analyse vos conversations passées et vos réponses habituelles pour reproduire votre ton naturel. Je configure personnellement chaque agent lors de l'onboarding pour qu'il reflète parfaitement votre personnalité."
    },
    {
      question: "Les livrets d'accueil sont-ils vraiment personnalisables ?",
      answer: "Absolument ! Chaque livret est 100% personnalisable : couleurs, logo, contenus, recommandations locales. Vous gardez le contrôle total sur l'image de marque de vos locations."
    },
    {
      question: "Quelles plateformes de réservation sont supportées ?",
      answer: "Airbnb et Booking.com en natif, plus tous les principaux PMS (Beds24, Smoobu, Lodgify, etc.) via API. Si vous utilisez un autre système, contactez-moi pour étudier l'intégration."
    },
    {
      question: "Que se passe-t-il si l'IA ne peut pas répondre à une question ?",
      answer: "L'agent IA est configuré pour vous transférer automatiquement les conversations complexes. Vous recevez une notification immédiate et pouvez prendre la main quand nécessaire."
    },
    {
      question: "Y a-t-il un engagement de durée ?",
      answer: "Les packs Découverte et Croissance ont un engagement de 3 mois. Le pack Professionnel peut être annuel pour bénéficier de réductions. Le pack Entreprise est sur mesure."
    },
    {
      question: "Puis-je tester avant de m'engager ?",
      answer: "Oui ! Je propose une démonstration gratuite de 30 minutes où vous pourrez voir l'agent IA en action sur vos propres données. De plus, tous les packs incluent une garantie de 30 jours."
    }
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-semibold mb-4">Questions Fréquemment Posées</h2>
        </div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-4">
              <button
                className="accordion-trigger w-full"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span>{faq.question}</span>
                <span className={`transform transition-transform ${openIndex === index ? 'rotate-180' : ''}`}>
                  ▼
                </span>
              </button>
              {openIndex === index && (
                <div className="accordion-content">
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
