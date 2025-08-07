-- Créer des politiques RLS pour permettre les insertions publiques sur les tables de formulaires

-- Pour la table helphoster_demo (formulaire démo)
ALTER TABLE public.helphoster_demo ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow public inserts on helphoster_demo" 
ON public.helphoster_demo 
FOR INSERT 
WITH CHECK (true);

-- Pour la table devis (formulaire devis)
ALTER TABLE public.devis ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow public inserts on devis" 
ON public.devis 
FOR INSERT 
WITH CHECK (true);

-- Pour la table CONTACTS (formulaire contact)
ALTER TABLE public.CONTACTS ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow public inserts on CONTACTS" 
ON public.CONTACTS 
FOR INSERT 
WITH CHECK (true);