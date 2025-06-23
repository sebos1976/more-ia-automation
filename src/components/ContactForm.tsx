
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

interface FormData {
  prenom: string;
  nom: string;
  email: string;
  telephone: string;
}

interface ContactFormProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactForm = ({ isOpen, onClose }: ContactFormProps) => {
  const [formData, setFormData] = useState<FormData>({
    prenom: '',
    nom: '',
    email: '',
    telephone: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const validateForm = () => {
    const { prenom, nom, email, telephone } = formData;
    
    if (!prenom.trim() || !nom.trim() || !email.trim() || !telephone.trim()) {
      toast({
        title: "Erreur",
        description: "Tous les champs sont obligatoires",
        variant: "destructive",
      });
      return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast({
        title: "Erreur",
        description: "Veuillez saisir un email valide",
        variant: "destructive",
      });
      return false;
    }

    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      // Créer l'objet avec le nom complet (prénom + nom)
      const fullName = `${formData.prenom.trim()} ${formData.nom.trim()}`;
      
      const { error } = await supabase
        .from('HELPHOSTER')
        .insert([{
          nom: fullName,
          email: formData.email.trim(),
          Téléphone: formData.telephone.trim()
        }]);

      if (error) {
        console.error('Erreur Supabase:', error);
        throw error;
      }
      
      toast({
        title: "Merci !",
        description: "Nous vous enverrons un devis personnalisé par email",
      });

      // Reset form
      setFormData({
        prenom: '',
        nom: '',
        email: '',
        telephone: ''
      });
      
      onClose();
    } catch (error) {
      console.error('Erreur lors de l\'envoi:', error);
      toast({
        title: "Erreur",
        description: "Une erreur est survenue. Veuillez réessayer plus tard.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl p-8 max-w-md w-full max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-2xl font-semibold text-gray-900">
            Obtenir une démonstration gratuite
          </h3>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 text-2xl font-bold"
          >
            ×
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Input
              type="text"
              placeholder="Prénom *"
              value={formData.prenom}
              onChange={(e) => handleInputChange('prenom', e.target.value)}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-pink-500"
              required
            />
          </div>

          <div>
            <Input
              type="text"
              placeholder="Nom *"
              value={formData.nom}
              onChange={(e) => handleInputChange('nom', e.target.value)}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-pink-500"
              required
            />
          </div>

          <div>
            <Input
              type="email"
              placeholder="Adresse email *"
              value={formData.email}
              onChange={(e) => handleInputChange('email', e.target.value)}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-pink-500"
              required
            />
          </div>

          <div>
            <Input
              type="tel"
              placeholder="Numéro de téléphone *"
              value={formData.telephone}
              onChange={(e) => handleInputChange('telephone', e.target.value)}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-pink-500"
              required
            />
          </div>

          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-300"
          >
            {isSubmitting ? "Envoi en cours..." : "Envoyer ma demande"}
          </Button>
        </form>

        <p className="text-sm text-gray-500 text-center mt-4">
          * Tous les champs sont obligatoires
        </p>
      </div>
    </div>
  );
};
