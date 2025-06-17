
export const HowItWorks = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="section-header text-center mb-16">
          <h2 className="text-4xl font-semibold mb-4">Comment ça fonctionne ?</h2>
          <p className="section-subtitle">Processus simple en 3 étapes</p>
        </div>

        <div className="steps-container-pro">
          <div className="step-card-pro">
            <div className="step-visual mb-6">
              <div className="step-number-circle">1</div>
              <div className="step-icon-container">
                <svg className="step-icon-svg" viewBox="0 0 24 24">
                  <path d="M10.59,13.41C11,13.8 11,14.4 10.59,14.81C10.2,15.2 9.6,15.2 9.19,14.81L7.79,13.41L6.38,14.81C5.99,15.2 5.39,15.2 4.98,14.81C4.57,14.4 4.57,13.8 4.98,13.41L6.38,12L4.98,10.59C4.57,10.2 4.57,9.6 4.98,9.19C5.39,8.8 5.99,8.8 6.38,9.19L7.79,10.59L9.19,9.19C9.6,8.8 10.2,8.8 10.59,9.19C11,9.6 11,10.2 10.59,10.59L9.19,12L10.59,13.41M15.5,4L14.5,6L16.5,7L14.5,8L15.5,10L13.5,9L12.5,11L11.5,9L9.5,10L10.5,8L8.5,7L10.5,6L9.5,4L11.5,5L12.5,3L13.5,5L15.5,4Z"/>
                </svg>
              </div>
            </div>
            <div className="step-content">
              <h3 className="text-xl font-semibold mb-3">CONNEXION</h3>
              <p className="text-gray-600">Connectez votre compte Airbnb en 2 clics grâce à notre intégration sécurisée</p>
            </div>
          </div>
          
          <div className="step-arrow-pro">
            <svg viewBox="0 0 24 24" className="w-8 h-8 text-gray-300">
              <path fill="currentColor" d="M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z"/>
            </svg>
          </div>
          
          <div className="step-card-pro">
            <div className="step-visual mb-6">
              <div className="step-number-circle">2</div>
              <div className="step-icon-container">
                <svg className="step-icon-svg" viewBox="0 0 24 24">
                  <path d="M12,15.5A3.5,3.5 0 0,1 8.5,12A3.5,3.5 0 0,1 12,8.5A3.5,3.5 0 0,1 15.5,12A3.5,3.5 0 0,1 12,15.5M19.43,12.97C19.47,12.65 19.5,12.33 19.5,12C19.5,11.67 19.47,11.34 19.43,11L21.54,9.37C21.73,9.22 21.78,8.95 21.66,8.73L19.66,5.27C19.54,5.05 19.27,4.96 19.05,5.05L16.56,6.05C16.04,5.66 15.5,5.32 14.87,5.07L14.5,2.42C14.46,2.18 14.25,2 14,2H10C9.75,2 9.54,2.18 9.5,2.42L9.13,5.07C8.5,5.32 7.96,5.66 7.44,6.05L4.95,5.05C4.73,4.96 4.46,5.05 4.34,5.27L2.34,8.73C2.22,8.95 2.27,9.22 2.46,9.37L4.57,11C4.53,11.34 4.5,11.67 4.5,12C4.5,12.33 4.53,12.65 4.57,12.97L2.46,14.63C2.27,14.78 2.22,15.05 2.34,15.27L4.34,18.73C4.46,18.95 4.73,19.03 4.95,18.95L7.44,17.94C7.96,18.34 8.5,18.68 9.13,18.93L9.5,21.58C9.54,21.82 9.75,22 10,22H14C14.25,22 14.46,21.82 14.5,21.58L14.87,18.93C15.5,18.68 16.04,18.34 16.56,17.94L19.05,18.95C19.27,19.03 19.54,18.95 19.66,18.73L21.66,15.27C21.78,15.05 21.73,14.78 21.54,14.63L19.43,12.97Z"/>
                </svg>
              </div>
            </div>
            <div className="step-content">
              <h3 className="text-xl font-semibold mb-3">CONFIGURATION</h3>
              <p className="text-gray-600">L'IA apprend votre style de communication et les spécificités de vos logements</p>
            </div>
          </div>
          
          <div className="step-arrow-pro">
            <svg viewBox="0 0 24 24" className="w-8 h-8 text-gray-300">
              <path fill="currentColor" d="M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z"/>
            </svg>
          </div>
          
          <div className="step-card-pro">
            <div className="step-visual mb-6">
              <div className="step-number-circle">3</div>
              <div className="step-icon-container">
                <svg className="step-icon-svg" viewBox="0 0 24 24">
                  <path d="M13,13H11V7H13M13,17H11V15H13M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z"/>
                </svg>
              </div>
            </div>
            <div className="step-content">
              <h3 className="text-xl font-semibold mb-3">AUTOMATISATION</h3>
              <p className="text-gray-600">90% de vos conversations sont gérées automatiquement, 24h/24 et 7j/7</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
