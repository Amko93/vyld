import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import GradientText from '../components/GradientText';
import StatsBar from '../components/StatsBar';
import PricingCard from '../components/PricingCard';
import PortfolioCard from '../components/PortfolioCard';
import { forfaits } from '../data/forfaits';

const projects = [
  {
    title: 'Soparimex',
    category: 'Site vitrine · Industrie',
    url: 'soparimex.com',
    screenshot: 'https://image.thum.io/get/width/800/crop/600/https://soparimex.com',
    gradient: '',
  },
  {
    title: 'Bella Fleur',
    category: 'E-commerce · Fleuriste',
    gradient: 'bg-gradient-to-br from-pink-500/30 to-rose-600/30',
    mockupContent: (
      <div className="text-center px-6">
        <div className="w-10 h-10 rounded-full bg-pink-400/30 mx-auto mb-3 flex items-center justify-center">
          <span className="text-xl">🌸</span>
        </div>
        <p className="text-white font-bold text-sm">Bella Fleur</p>
        <p className="text-white/50 text-xs mt-1">Boutique en ligne</p>
      </div>
    ),
  },
  {
    title: 'Studio Archi',
    category: 'Site vitrine · Architecture',
    gradient: 'bg-gradient-to-br from-slate-600/40 to-blue-800/40',
    mockupContent: (
      <div className="text-center px-6">
        <div className="w-10 h-10 rounded-full bg-blue-400/20 mx-auto mb-3 flex items-center justify-center">
          <span className="text-xl">🏛️</span>
        </div>
        <p className="text-white font-bold text-sm">Studio Archi</p>
        <p className="text-white/50 text-xs mt-1">Portfolio & projets</p>
      </div>
    ),
  },
  {
    title: 'NutriCoach',
    category: 'Site vitrine · Santé & Bien-être',
    gradient: 'bg-gradient-to-br from-emerald-500/30 to-teal-700/30',
    mockupContent: (
      <div className="text-center px-6">
        <div className="w-10 h-10 rounded-full bg-emerald-400/20 mx-auto mb-3 flex items-center justify-center">
          <span className="text-xl">🥗</span>
        </div>
        <p className="text-white font-bold text-sm">NutriCoach</p>
        <p className="text-white/50 text-xs mt-1">Coaching nutrition</p>
      </div>
    ),
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="min-h-[90vh] flex items-center justify-center px-6">
        <div className="max-w-3xl text-center animate-fade-in-up">
          <p className="text-vyld-violet text-xs tracking-[0.25em] uppercase mb-6">
            Agence Web &middot; Sites Professionnels
          </p>
          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
            Votre site web{' '}
            <GradientText>professionnel</GradientText>
            <br />
            livré rapidement
          </h1>
          <p className="text-gray-400 text-lg mb-10 max-w-xl mx-auto">
            Sites vitrine, e-commerce et sur-mesure. Prix abordables, qualité
            premium, livraison rapide.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-gradient-vyld text-white font-medium hover:opacity-90 transition-opacity"
            >
              Demander un devis
              <ArrowRight size={18} />
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full border border-vyld-violet/40 text-white font-medium hover:bg-vyld-violet/10 transition-colors"
            >
              Voir les forfaits
            </Link>
          </div>

          <StatsBar />
        </div>
      </section>

      {/* Forfaits */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Nos forfaits
            </h2>
            <p className="text-gray-400">
              Choisissez la formule adaptée à vos besoins
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {forfaits.map((forfait) => (
              <PricingCard key={forfait.name} {...forfait} />
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-vyld-violet hover:text-vyld-rose transition-colors text-sm font-medium"
            >
              Voir tous les forfaits en détail
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Portfolio */}
      <section className="py-24 px-6 border-t border-white/5">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14 animate-fade-in-up">
            <p className="text-vyld-violet text-xs tracking-[0.25em] uppercase mb-4">
              Réalisations
            </p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Nos derniers <GradientText>projets</GradientText>
            </h2>
            <p className="text-gray-400">
              Des sites pensés pour convertir et impressionner
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {projects.map((project) => (
              <PortfolioCard key={project.title} {...project} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto bg-gradient-vyld rounded-2xl p-12 md:p-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Prêt à lancer votre site ?
          </h2>
          <p className="text-white/70 mb-8">
            Devis personnalisé gratuit &middot; Réponse sous 24h
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-white text-vyld-violet-dark font-semibold hover:bg-white/90 transition-colors"
          >
            Contactez-nous maintenant
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </>
  );
}
