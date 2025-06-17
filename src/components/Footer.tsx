
export const Footer = () => {
  return (
    <footer className="footer-pro bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-16">
        <div className="footer-content grid md:grid-cols-4 gap-8 mb-12">
          <div className="footer-column">
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li><a href="#services" className="hover:text-pink-400 transition-colors">Automatisation Airbnb</a></li>
              <li><a href="#services" className="hover:text-pink-400 transition-colors">Formation</a></li>
              <li><a href="#pricing" className="hover:text-pink-400 transition-colors">Tarifs</a></li>
            </ul>
          </div>
          
          <div className="footer-column">
            <h4 className="text-white font-semibold mb-4">Ressources</h4>
            <ul className="space-y-2">
              <li><a href="/blog" className="hover:text-pink-400 transition-colors">Blog</a></li>
              <li><a href="https://youtube.com/sebastienmore" className="hover:text-pink-400 transition-colors">YouTube</a></li>
              <li><a href="/guides" className="hover:text-pink-400 transition-colors">Guides</a></li>
            </ul>
          </div>
          
          <div className="footer-column">
            <h4 className="text-white font-semibold mb-4">Support</h4>
            <ul className="space-y-2">
              <li><a href="/contact" className="hover:text-pink-400 transition-colors">Contact</a></li>
              <li><a href="/faq" className="hover:text-pink-400 transition-colors">FAQ</a></li>
              <li><a href="/aide" className="hover:text-pink-400 transition-colors">Aide</a></li>
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
            <p>© 2024 Sébastien More - Expert en Intelligence Artificielle pour Airbnb</p>
            <p className="text-sm">Tous droits réservés - Made with ❤️ in France</p>
          </div>
          
          <div className="flex space-x-4">
            <a href="https://youtube.com/sebastienmore" className="text-gray-400 hover:text-pink-400 transition-colors">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
            </a>
            <a href="https://linkedin.com/in/sebastienmore" className="text-gray-400 hover:text-pink-400 transition-colors">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            <a href="https://twitter.com/sebastienmore" className="text-gray-400 hover:text-pink-400 transition-colors">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
