
export const Testimonials = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="section-header text-center mb-16">
          <h2 className="text-4xl font-semibold mb-4">Témoignages Clients</h2>
          <p className="section-subtitle">Retours d'expérience de nos utilisateurs</p>
        </div>

        <div className="testimonials-grid-pro">
          <div className="testimonial-card-pro">
            <div className="testimonial-content mb-6">
              <p className="text-gray-600 italic">"Excellent service d'automatisation. L'outil gère parfaitement mes réservations et mes invités sont très satisfaits de la réactivité."</p>
            </div>
            <div className="testimonial-author flex items-center">
              <div className="author-avatar w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full mr-4"></div>
              <div className="author-info flex-1">
                <div className="font-semibold">Marie D.</div>
                <div className="text-sm text-gray-500">Propriétaire, Lyon</div>
              </div>
              <div className="rating-stars text-yellow-500">★★★★★</div>
            </div>
          </div>
          
          <div className="testimonial-card-pro">
            <div className="testimonial-content mb-6">
              <p className="text-gray-600 italic">"Gain de temps considérable dans la gestion de mes locations. Solution professionnelle et support réactif."</p>
            </div>
            <div className="testimonial-author flex items-center">
              <div className="author-avatar w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full mr-4"></div>
              <div className="author-info flex-1">
                <div className="font-semibold">Thomas L.</div>
                <div className="text-sm text-gray-500">Gestionnaire, Paris</div>
              </div>
              <div className="rating-stars text-yellow-500">★★★★★</div>
            </div>
          </div>
          
          <div className="testimonial-card-pro">
            <div className="testimonial-content mb-6">
              <p className="text-gray-600 italic">"Formation complète et outil très efficace. Je recommande pour tous les propriétaires sérieux."</p>
            </div>
            <div className="testimonial-author flex items-center">
              <div className="author-avatar w-12 h-12 bg-gradient-to-br from-green-500 to-blue-500 rounded-full mr-4"></div>
              <div className="author-info flex-1">
                <div className="font-semibold">Sophie M.</div>
                <div className="text-sm text-gray-500">Investisseuse, Nice</div>
              </div>
              <div className="rating-stars text-yellow-500">★★★★★</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
