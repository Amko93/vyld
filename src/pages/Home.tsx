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
    externalUrl: 'https://soparimex.com',
    screenshot: 'https://image.thum.io/get/width/800/crop/600/https://soparimex.com',
    gradient: '',
  },
  {
    title: 'Bella Fleur',
    category: 'E-commerce · Fleuriste',
    internalUrl: '/portfolio/bella-fleur',
    screenshot: 'https://images.pexels.com/photos/931177/pexels-photo-931177.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    gradient: '',
  },
  {
    title: 'Studio Archi',
    category: 'Portfolio · Architecture',
    internalUrl: '/portfolio/studio-archi',
    screenshot: 'https://images.pexels.com/photos/1732414/pexels-photo-1732414.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    gradient: '',
  },
  {
    title: 'NutriCoach',
    category: 'Site vitrine · Bien-être',
    internalUrl: '/portfolio/nutricoach',
    screenshot: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    gradient: '',
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
              Réalisations & exemples
            </p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Des sites <GradientText>comme le vôtre</GradientText>
            </h2>
            <p className="text-gray-400">
              Exemples de projets réalisables — cliquez pour voir le rendu
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
