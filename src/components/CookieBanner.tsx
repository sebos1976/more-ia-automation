
import { useState, useEffect } from "react";

export const CookieBanner = () => {
  const [showCookieBanner, setShowCookieBanner] = useState(false);

  const handleCookieChoice = (choice: 'accept' | 'decline') => {
    localStorage.setItem('cookieConsent', choice);
    setShowCookieBanner(false);
  };

  // Vérifier au chargement
  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      setShowCookieBanner(true);
    }
  }, []);

  if (!showCookieBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg z-50 p-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex-1">
          <p className="text-sm text-gray-600">
            Nous utilisons des cookies pour améliorer votre expérience sur notre site. 
            En continuant à naviguer, vous acceptez notre utilisation des cookies.
          </p>
        </div>
        <div className="flex gap-3">
          <button 
            className="px-4 py-2 text-sm border border-gray-300 rounded-lg hover:bg-gray-50"
            onClick={() => handleCookieChoice('decline')}
          >
            Refuser
          </button>
          <button 
            className="px-4 py-2 text-sm bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            onClick={() => handleCookieChoice('accept')}
          >
            Accepter
          </button>
        </div>
      </div>
    </div>
  );
};
