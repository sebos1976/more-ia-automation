
import { useState } from "react";

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "Qu'est-ce que Helphoster ?",
      answer: "Helphoster est votre copilote IA pour automatiser la gestion de vos locations Airbnb et Booking. Notre IA co-host répond automatiquement à vos voyageurs 24h/24 et simplifie votre quotidien."
    },
    {
      question: "À qui s'adresse Helphoster ?",
      answer: "Propriétaires de locations Airbnb et Booking ou conciergeries souhaitant optimiser la gestion de leurs logements. Que vous gériez un bien ou plusieurs, notre IA s'adapte à vos besoins."
    },
    {
      question: "Comment l'IA co-host m'aide-t-elle ?",
      answer: "Elle répond automatiquement à plus de 90 % des messages de vos voyageurs, gère les situations imprévues, et améliore l'expérience client. Résultat : moins de stress, plus de temps libre, plus de 5 étoiles."
    },
    {
      question: "Comment fonctionne l'IA co-host de Helphoster ?",
      answer: "L'IA se connecte à votre compte Airbnb et Booking via votre PMS (Beds24, Smoobu, Guestlucky) et répond instantanément aux messages, en tenant compte du contexte et de votre annonce."
    },
    {
      question: "Ai-je besoin d'un logiciel ou PMS pour utiliser Helphoster ?",
      answer: "Oui, Helphoster fonctionne avec les channel managers et PMS suivants : Beds24, Smoobu et Guestlucky. Ces logiciels permettent l'intégration avec Airbnb et Booking.com."
    },
    {
      question: "Mes voyageurs ont-ils besoin de télécharger une app ?",
      answer: "Non, tout se fait en ligne. Les voyageurs n'ont rien à installer."
    },
    {
      question: "Puis-je essayer le service gratuitement ?",
      answer: "Oui, nous proposons une période d'essai gratuite pour vous permettre de tester l'IA co-host sur votre annonce."
    },
    {
      question: "Comment me désinscrire de Helphoster ?",
      answer: "Simplement en envoyant une demande par email à : <a href='mailto:contact@helphoster.com'>contact@helphoster.com</a>"
    },
    {
      question: "Sur quelles zones géographiques opère Helphoster ?",
      answer: "Notre IA fonctionne avec tous les comptes Airbnb et Booking.com connectés via Beds24, Smoobu ou Guestlucky, en France comme à l'international."
    }
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-semibold mb-4">Questions Fréquemment Posées</h2>
          <p className="section-subtitle">Tout ce que vous devez savoir sur Helphoster</p>
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
                  <p className="text-gray-600" dangerouslySetInnerHTML={{ __html: faq.answer }}></p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
