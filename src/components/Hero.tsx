
export const Hero = () => {
  return (
    <section id="accueil" className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-badge">
            <div className="badge-icon"></div>
            <span>Expert IA certifié</span>
          </div>
          
          <h1 className="hero-title">
            Automatisez Votre Airbnb avec <span className="gradient-text">l'Intelligence Artificielle</span>
          </h1>
          
          <p className="hero-subtitle">
            Agent IA conversationnel + Livrets d'accueil digitaux = 90% de temps économisé
          </p>
          
          <div className="hero-search-widget">
            <div className="search-input-group">
              <div className="input-wrapper">
                <select className="search-input">
                  <option>Type de service</option>
                  <option>Agent IA seul</option>
                  <option>Livrets d'accueil</option>
                  <option>Solution complète</option>
                </select>
              </div>
              
              <div className="input-wrapper">
                <select className="search-input">
                  <option>Nombre de logements</option>
                  <option>1-3 logements</option>
                  <option>4-10 logements</option>
                  <option>+10 logements</option>
                </select>
              </div>
              
              <div className="input-wrapper">
                <select className="search-input">
                  <option>Budget mensuel</option>
                  <option>50-100€</option>
                  <option>100-200€</option>
                  <option>+200€</option>
                </select>
              </div>
              
              <button className="search-btn-gradient">
                <span>Obtenir ma démo gratuite</span>
              </button>
            </div>
          </div>
          
          <div className="hero-stats-widget">
            <div className="stat-card">
              <div className="stat-icon-gradient stat-users"></div>
              <div className="stat-content">
                <div className="stat-number">200+</div>
                <div className="stat-label">Propriétaires accompagnés</div>
              </div>
            </div>
            
            <div className="stat-card">
              <div className="stat-icon-gradient stat-time"></div>
              <div className="stat-content">
                <div className="stat-number">90%</div>
                <div className="stat-label">De temps économisé</div>
              </div>
            </div>
            
            <div className="stat-card">
              <div className="stat-icon-gradient stat-support"></div>
              <div className="stat-content">
                <div className="stat-number">24/7</div>
                <div className="stat-label">Disponibilité</div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="hero-visual">
          <div className="dashboard-mockup">
            <div className="mockup-header">
              <div className="mockup-dots">
                <span className="dot red"></span>
                <span className="dot yellow"></span>
                <span className="dot green"></span>
              </div>
              <div className="mockup-title">Dashboard IA - Sébastien More</div>
            </div>
            
            <div className="mockup-content">
              <div className="chat-widget">
                <div className="chat-header">
                  <div className="chat-avatar"></div>
                  <div className="chat-info">
                    <div className="chat-name">Agent IA - Villa Cannes</div>
                    <div className="chat-status">En ligne • Répond en 30s</div>
                  </div>
                </div>
                
                <div className="chat-messages">
                  <div className="message guest">
                    <div>
                      <div className="message-bubble">À quelle heure est le check-in ?</div>
                      <div className="message-time">14:32</div>
                    </div>
                  </div>
                  <div className="message ai">
                    <div>
                      <div className="message-bubble">Le check-in est à partir de 16h. Je vous enverrai le code d'accès 1h avant votre arrivée 😊</div>
                      <div className="message-time">14:32</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
