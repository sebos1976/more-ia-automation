
export const Footer = () => {
  return (
    <footer className="footer-pro bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-16">
        <div className="footer-content grid md:grid-cols-4 gap-8 mb-12">
          <div className="footer-column">
            <h4 className="text-white font-semibold mb-4">Helphoster</h4>
            <p className="mb-4">Automatisation IA pour vos locations Airbnb</p>
            <div className="contact-info space-y-2">
              <p>📧 <a href="mailto:contact@helphoster.com" className="hover:text-pink-400 transition-colors">contact@helphoster.com</a></p>
              <p>🎥 <a href="https://www.youtube.com/@moresebastien" target="_blank" className="hover:text-pink-400 transition-colors">41K+ abonnés YouTube</a></p>
            </div>
          </div>
          
          <div className="footer-column">
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li><a href="#services" className="hover:text-pink-400 transition-colors">Agent IA Co-Host</a></li>
              <li><a href="#services" className="hover:text-pink-400 transition-colors">Automatisation Airbnb</a></li>
              <li><a href="#pricing" className="hover:text-pink-400 transition-colors">Tarifs</a></li>
            </ul>
          </div>
          
          <div className="footer-column">
            <h4 className="text-white font-semibold mb-4">Ressources</h4>
            <ul className="space-y-2">
              <li><a href="https://blog.helphoster.com" target="_blank" className="hover:text-pink-400 transition-colors">Blog</a></li>
              <li><a href="https://www.youtube.com/@moresebastien" target="_blank" className="hover:text-pink-400 transition-colors">YouTube</a></li>
              <li><a href="/guides" className="hover:text-pink-400 transition-colors">Guides</a></li>
            </ul>
          </div>
          
          <div className="footer-column">
            <h4 className="text-white font-semibold mb-4">Légal</h4>
            <ul className="space-y-2">
              <li><a href="/cgu" className="hover:text-pink-400 transition-colors">CGU</a></li>
              <li><a href="/mentions-legales" className="hover:text-pink-400 transition-colors">Mentions Légales</a></li>
              <li><a href="/confidentialite" className="hover:text-pink-400 transition-colors">Confidentialité</a></li>
              <li><a href="/cookies" className="hover:text-pink-400 transition-colors">Cookies</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 mb-8">
          <h4 className="text-white font-semibold mb-4 text-center">Restez informé des nouveautés</h4>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Votre adresse email"
              className="flex-1 px-4 py-3 rounded-lg bg-gray-800 border border-gray-600 focus:outline-none focus:border-pink-500"
            />
            <button className="btn-gradient-new">S'abonner</button>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <p>© 2025 Helphoster - Créé par Sébastien More</p>
            <p className="text-sm">Tous droits réservés - Made with ❤️ in France</p>
          </div>
          
          <div className="flex space-x-4">
            <a href="https://www.youtube.com/@moresebastien" target="_blank" className="text-gray-400 hover:text-pink-400 transition-colors">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
            </a>
            <a href="mailto:contact@helphoster.com" className="text-gray-400 hover:text-pink-400 transition-colors">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
