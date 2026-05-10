import { Lightbulb, ClipboardList, Palette, Code2, Rocket, HeadphonesIcon } from 'lucide-react';
import GradientText from '../components/GradientText';
import PricingCard from '../components/PricingCard';
import { forfaits } from '../data/forfaits';

const steps = [
  {
    icon: ClipboardList,
    title: 'Devis gratuit',
    description: 'Tu décris ton projet, on t\'envoie une proposition sous 24h, sans engagement.',
  },
  {
    icon: Palette,
    title: 'Design',
    description: 'On conçoit le design de ton site selon ton identité et tes préférences.',
  },
  {
    icon: Code2,
    title: 'Développement',
    description: 'On développe ton site avec les meilleures technologies modernes.',
  },
  {
    icon: Rocket,
    title: 'Livraison',
    description: 'Ton site est mis en ligne et prêt à accueillir tes premiers visiteurs.',
  },
  {
    icon: HeadphonesIcon,
    title: 'Support',
    description: 'On reste disponibles après la livraison pour toute question ou modification.',
  },
];

const faqs = [
  {
    q: 'Combien de temps pour livrer mon site ?',
    a: 'En moyenne 7 jours selon la complexité du projet. On te donne une date précise dès le devis.',
  },
  {
    q: 'Est-ce que je peux modifier mon site moi-même ?',
    a: 'Oui, on peut intégrer un système de gestion de contenu simple (CMS) pour que tu puisses modifier tes textes et images facilement.',
  },
  {
    q: 'Que se passe-t-il si je ne suis pas satisfait ?',
    a: 'On travaille ensemble jusqu\'à ce que le résultat te convienne. Des retouches sont incluses dans chaque forfait.',
  },
  {
    q: 'Mon site sera-t-il visible sur Google ?',
    a: 'Oui, tous nos sites sont optimisés pour le SEO de base : balises, vitesse, responsive mobile.',
  },
];

export default function Services() {
  return (
    <>
      {/* Header */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14 animate-fade-in-up">
            <p className="text-vyld-violet text-xs tracking-[0.25em] uppercase mb-4">
              Nos offres
            </p>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Choisissez votre <GradientText>formule</GradientText>
            </h1>
            <p className="text-gray-400">
              Devis personnalisé gratuit — réponse sous 24h
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {forfaits.map((forfait) => (
              <PricingCard key={forfait.name} {...forfait} />
            ))}
          </div>

          <div className="mt-12 bg-white/[0.03] border border-white/10 rounded-2xl p-6 flex items-start gap-3">
            <Lightbulb size={20} className="text-vyld-rose shrink-0 mt-0.5" />
            <p className="text-gray-400 text-sm leading-relaxed">
              Les tarifs sont personnalisés selon votre projet. Contactez-nous pour
              un devis gratuit et sans engagement.
            </p>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 px-6 border-t border-white/5">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-vyld-violet text-xs tracking-[0.25em] uppercase mb-4">
              Comment ça marche
            </p>
            <h2 className="text-3xl md:text-4xl font-bold">
              De l'idée à la <GradientText>mise en ligne</GradientText>
            </h2>
          </div>

          <div className="flex flex-col gap-6">
            {steps.map((step, i) => (
              <div
                key={step.title}
                className="flex items-start gap-5 bg-white/[0.02] border border-white/10 rounded-2xl p-6 hover:-translate-y-0.5 transition-transform"
              >
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-vyld-violet/10 shrink-0">
                  <step.icon size={18} className="text-vyld-violet" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 mb-1">Étape {i + 1}</p>
                  <h3 className="text-white font-semibold mb-1">{step.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-6 border-t border-white/5">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-vyld-violet text-xs tracking-[0.25em] uppercase mb-4">
              FAQ
            </p>
            <h2 className="text-3xl md:text-4xl font-bold">
              Questions <GradientText>fréquentes</GradientText>
            </h2>
          </div>

          <div className="flex flex-col gap-4">
            {faqs.map((faq) => (
              <div
                key={faq.q}
                className="bg-white/[0.02] border border-white/10 rounded-2xl p-6"
              >
                <h3 className="text-white font-semibold mb-2">{faq.q}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
