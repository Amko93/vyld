import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const projects = [
  { name: 'Villa Moderne', location: 'Bordeaux', year: '2025', emoji: '🏠' },
  { name: 'Loft Industriel', location: 'Paris 11e', year: '2024', emoji: '🏢' },
  { name: 'Maison Passive', location: 'Lyon', year: '2024', emoji: '🌿' },
  { name: 'Rénovation Haussmann', location: 'Paris 8e', year: '2023', emoji: '🏛️' },
];

export default function StudioArchi() {
  return (
    <div className="min-h-screen bg-[#0f0f0f] text-white font-[system-ui]">

      {/* Demo banner */}
      <div className="bg-gradient-to-r from-[#667eea] to-[#764ba2] text-white text-xs text-center py-2 px-4 flex items-center justify-center gap-3">
        <span>Site exemple réalisé par Vyld</span>
        <Link to="/" className="underline hover:no-underline inline-flex items-center gap-1">
          <ArrowLeft size={12} /> Retour à Vyld
        </Link>
      </div>

      {/* Nav */}
      <nav className="border-b border-white/10 px-8 py-5 flex items-center justify-between">
        <div>
          <p className="text-xl font-bold tracking-[0.2em] uppercase">Studio Archi</p>
          <p className="text-xs text-gray-500 tracking-widest uppercase">Architecture & Design</p>
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm text-gray-400">
          <a href="#" className="hover:text-white transition-colors">Projets</a>
          <a href="#" className="hover:text-white transition-colors">Studio</a>
          <a href="#" className="hover:text-white transition-colors">Services</a>
        </div>
        <button className="border border-white/20 text-white px-5 py-2 text-sm hover:bg-white hover:text-black transition-colors">
          Contact
        </button>
      </nav>

      {/* Hero */}
      <section className="min-h-[80vh] flex items-center px-8 md:px-16 relative overflow-hidden">
        <div className="absolute right-0 top-0 bottom-0 w-1/2 bg-gradient-to-l from-white/[0.02] to-transparent hidden md:block" />
        <div className="max-w-3xl">
          <p className="text-gray-500 text-xs tracking-[0.3em] uppercase mb-8">Paris — Fondé en 2018</p>
          <h1 className="text-6xl md:text-8xl font-bold leading-none mb-8 tracking-tight">
            Architecture<br />
            <span className="text-transparent" style={{ WebkitTextStroke: '1px white' }}>du vivant</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-md mb-10 leading-relaxed">
            Nous concevons des espaces qui allient esthétique, fonctionnalité et durabilité.
          </p>
          <a href="#" className="inline-flex items-center gap-3 text-white border-b border-white pb-1 hover:gap-5 transition-all">
            Découvrir nos projets <ArrowRight size={16} />
          </a>
        </div>
      </section>

      {/* Projects */}
      <section className="py-20 px-8 md:px-16 border-t border-white/10">
        <div className="flex items-end justify-between mb-12">
          <h2 className="text-3xl font-bold">Projets récents</h2>
          <p className="text-gray-500 text-sm">2023 — 2025</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/10">
          {projects.map((p, i) => (
            <div key={p.name} className="bg-[#0f0f0f] p-8 hover:bg-white/[0.03] transition-colors group cursor-pointer">
              <div className="flex items-start justify-between mb-6">
                <span className="text-gray-600 text-sm">0{i + 1}</span>
                <span className="text-3xl">{p.emoji}</span>
              </div>
              <h3 className="text-xl font-semibold mb-2 group-hover:text-white transition-colors">{p.name}</h3>
              <div className="flex items-center justify-between text-gray-500 text-sm">
                <span>{p.location}</span>
                <span>{p.year}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* About */}
      <section className="py-20 px-8 md:px-16 border-t border-white/10">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-gray-500 text-xs tracking-widest uppercase mb-4">Notre approche</p>
            <h2 className="text-3xl font-bold mb-6">Concevoir pour les gens, pas pour les prix</h2>
            <p className="text-gray-400 leading-relaxed">
              Chaque projet naît d'une écoute attentive. Nous travaillons en étroite collaboration avec nos clients pour créer des espaces qui leur ressemblent.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[['12', 'Années\nd\'expérience'], ['80+', 'Projets\nlivrés'], ['15', 'Prix\nd\'architecture'], ['98%', 'Clients\nsatisfaits']].map(([v, l]) => (
              <div key={l} className="border border-white/10 p-6">
                <p className="text-3xl font-bold mb-1">{v}</p>
                <p className="text-gray-500 text-xs whitespace-pre-line leading-relaxed">{l}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white text-black py-20 px-8 text-center">
        <h2 className="text-4xl font-bold mb-4">Votre projet nous intéresse</h2>
        <p className="text-gray-600 mb-8">Première consultation gratuite · Réponse sous 48h</p>
        <button className="bg-black text-white px-10 py-4 text-sm font-medium hover:bg-gray-800 transition-colors">
          Prendre rendez-vous →
        </button>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-8 px-8 flex items-center justify-between text-gray-600 text-sm">
        <p>© 2026 Studio Archi</p>
        <p>Paris, France</p>
      </footer>
    </div>
  );
}
