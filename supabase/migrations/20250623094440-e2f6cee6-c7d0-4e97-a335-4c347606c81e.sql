
-- Créer la table pour les demandes de démonstration
CREATE TABLE IF NOT EXISTS public.helphoster_demo (
  id BIGSERIAL PRIMARY KEY,
  prenom TEXT,
  nom TEXT, 
  email TEXT,
  telephone TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Créer la table pour les demandes de devis
CREATE TABLE IF NOT EXISTS public.devis (
  id BIGSERIAL PRIMARY KEY,
  nom TEXT,
  prenom TEXT,
  email TEXT,
  projet TEXT,
  nombre_logements INTEGER,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
