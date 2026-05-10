import type { Feature } from '../components/PricingCard';

export interface Forfait {
  name: string;
  badge: string;
  floatingBadge?: string;
  description: string;
  features: Feature[];
  highlighted?: boolean;
}

export const forfaits: Forfait[] = [
  {
    name: 'Essentiel',
    badge: 'Paiement unique',
    description:
      'Je crée votre site. Vous gérez ensuite l\'hébergement et la maintenance.',
    features: [
      { text: 'Conception & développement', included: true },
      { text: 'Design personnalisé', included: true },
      { text: 'Livraison du code source', included: true },
      { text: 'Hébergement inclus', included: false },
      { text: 'Maintenance incluse', included: false },
    ],
  },
  {
    name: 'Confort',
    badge: 'Unique + Annuel',
    floatingBadge: 'Le plus populaire',
    description:
      'Site + abonnement annuel incluant hébergement, domaine et support.',
    features: [
      { text: 'Conception & développement', included: true },
      { text: 'Design personnalisé', included: true },
      { text: 'Hébergement inclus', included: true },
      { text: 'Nom de domaine inclus', included: true },
      { text: 'Support en cas de problème', included: true },
    ],
    highlighted: true,
  },
  {
    name: 'Premium',
    badge: '12 ou 24 mois',
    description:
      'Tout inclus en mensualités. Site + hébergement + domaine + maintenance.',
    features: [
      { text: 'Tout du forfait Confort', included: true },
      { text: 'Paiement mensuel flexible', included: true },
      { text: 'Maintenance incluse', included: true },
      { text: 'Support prioritaire', included: true },
    ],
  },
];
