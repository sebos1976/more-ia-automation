
export const Testimonials = () => {
  const testimonials = [
    {
      content: "Depuis que j'utilise l'agent IA de Sébastien, je dors tranquille ! Il gère 85% de mes conversations et mes invités adorent les livrets digitaux. Un gain de temps incroyable !",
      author: "Marie Dupont",
      role: "Propriétaire de 12 logements, Lyon",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?auto=format&fit=crop&w=150&q=80",
      rating: "⭐⭐⭐⭐⭐"
    },
    {
      content: "Le ROI est impressionnant : j'économise 300€ par mois en temps de gestion ! L'IA répond même mieux que moi parfois. Formation au top, je recommande vivement.",
      author: "Thomas Martin",
      role: "Gestionnaire de 5 logements, Paris",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&q=80",
      rating: "⭐⭐⭐⭐⭐"
    },
    {
      content: "Sébastien est un vrai expert ! Sa formation personnalisée et son suivi régulier m'ont permis d'automatiser complètement ma gestion. Mes notes Airbnb n'ont jamais été aussi bonnes.",
      author: "Sophie Moreau",
      role: "Investisseuse de 8 logements, Nice",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&q=80",
      rating: "⭐⭐⭐⭐⭐"
    }
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-semibold mb-4">Ce que disent mes clients</h2>
          <p className="section-subtitle">+200 propriétaires font confiance à mes solutions</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <div className="testimonial-content mb-6">
                <p className="text-gray-600 italic">"{testimonial.content}"</p>
              </div>
              <div className="testimonial-author flex items-center">
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.author}
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <div className="font-semibold">{testimonial.author}</div>
                  <div className="text-sm text-gray-500">{testimonial.role}</div>
                  <div className="rating mt-1">{testimonial.rating}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
