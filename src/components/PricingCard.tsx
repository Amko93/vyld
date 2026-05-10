import { Link } from 'react-router-dom';
import { Check, X, Star } from 'lucide-react';

export interface Feature {
  text: string;
  included: boolean;
}

interface PricingCardProps {
  name: string;
  badge: string;
  floatingBadge?: string;
  description: string;
  features: Feature[];
  highlighted?: boolean;
}

export default function PricingCard({
  name,
  badge,
  floatingBadge,
  description,
  features,
  highlighted = false,
}: PricingCardProps) {
  return (
    <div className="relative flex flex-col">
      {floatingBadge && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
          <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-gradient-vyld text-white text-xs font-semibold">
            <Star size={14} />
            {floatingBadge}
          </span>
        </div>
      )}

      <div
        className={`flex-1 flex flex-col rounded-2xl border p-8 transition-transform hover:-translate-y-1 ${
          highlighted
            ? 'bg-vyld-violet/5 border-vyld-violet/30'
            : 'bg-white/[0.02] border-white/10'
        }`}
      >
        <span
          className={`inline-block self-start text-xs font-semibold px-3 py-1 rounded-full mb-4 ${
            highlighted
              ? 'bg-vyld-violet/20 text-vyld-violet'
              : 'bg-white/5 text-gray-400'
          }`}
        >
          {badge}
        </span>

        <h3 className="text-xl font-bold text-white mb-2">{name}</h3>
        <p className="text-gray-400 text-sm leading-relaxed mb-6">{description}</p>

        <ul className="space-y-3 mb-8 flex-1">
          {features.map((feature) => (
            <li key={feature.text} className="flex items-start gap-2.5 text-sm">
              {feature.included ? (
                <Check size={16} className="text-white mt-0.5 shrink-0" />
              ) : (
                <X size={16} className="text-gray-600 mt-0.5 shrink-0" />
              )}
              <span className={feature.included ? 'text-gray-300' : 'text-gray-600'}>
                {feature.text}
              </span>
            </li>
          ))}
        </ul>

        <Link
          to="/contact"
          className="inline-flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-gradient-vyld text-white text-sm font-medium hover:opacity-90 transition-opacity"
        >
          Demander un devis
          <span aria-hidden="true">&rarr;</span>
        </Link>
      </div>
    </div>
  );
}
