
export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h4 className="text-white font-semibold mb-2">Helphoster</h4>
            <p className="text-gray-400">© 2025 Helphoster. Tous droits réservés.</p>
          </div>
          <div className="flex gap-6">
            <a href="/cgu" className="text-gray-400 hover:text-white">CGU</a>
            <a href="/mentions-legales" className="text-gray-400 hover:text-white">Mentions légales</a>
            <a href="mailto:contact@helphoster.com" className="text-gray-400 hover:text-white">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
