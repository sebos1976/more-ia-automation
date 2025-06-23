
const MentionsLegales = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Mentions Légales</h1>
        
        <div className="bg-white rounded-lg shadow-lg p-8 prose prose-lg max-w-none">
          <h2>Éditeur du site</h2>
          <p>
            <strong>Helphoster</strong><br />
            Créé par Sébastien More<br />
            Email : <a href="mailto:contact@helphoster.com">contact@helphoster.com</a>
          </p>
          
          <h2>Hébergement</h2>
          <p>
            Site hébergé par Lovable<br />
            Service de développement d'applications web
          </p>
          
          <h2>Propriété intellectuelle</h2>
          <p>
            Le contenu du site Helphoster (textes, images, logos) est protégé par le droit d'auteur. 
            Toute reproduction sans autorisation est interdite.
          </p>
          
          <h2>Données personnelles</h2>
          <p>
            Les données collectées sont utilisées uniquement pour le fonctionnement du service. 
            Voir notre <a href="/confidentialite">politique de confidentialité</a>.
          </p>
          
          <h2>Cookies</h2>
          <p>
            Le site utilise des cookies pour améliorer l'expérience utilisateur. 
            Voir notre <a href="/cookies">politique cookies</a>.
          </p>
          
          <h2>Contact</h2>
          <p>
            Pour toute question concernant ces mentions légales : 
            <a href="mailto:contact@helphoster.com">contact@helphoster.com</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default MentionsLegales;
