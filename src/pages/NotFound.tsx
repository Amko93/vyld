import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import GradientText from '../components/GradientText';

export default function NotFound() {
  return (
    <section className="min-h-[80vh] flex items-center justify-center px-6">
      <div className="max-w-lg text-center">
        <p className="text-6xl font-bold mb-4">
          <GradientText>404</GradientText>
        </p>
        <h1 className="text-2xl font-bold text-white mb-3">Page introuvable</h1>
        <p className="text-gray-400 mb-8">
          Cette page n'existe pas ou a été déplacée.
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-gradient-vyld text-white font-medium hover:opacity-90 transition-opacity"
        >
          Retour à l'accueil
          <ArrowRight size={18} />
        </Link>
      </div>
    </section>
  );
}
