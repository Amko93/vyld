import { Link } from 'react-router-dom';
import { ArrowLeft, Check } from 'lucide-react';

const programs = [
  {
    name: 'Starter',
    duration: '4 semaines',
    features: ['Bilan nutritionnel', 'Plan alimentaire personnalisé', '2 consultations'],
  },
  {
    name: 'Transform',
    duration: '12 semaines',
    features: ['Tout du Starter', 'Suivi hebdomadaire', 'Recettes exclusives', 'Support WhatsApp'],
    popular: true,
  },
  {
    name: 'Elite',
    duration: '6 mois',
    features: ['Tout du Transform', 'Coaching sportif', 'Analyse sanguine', 'Accès communauté'],
  },
];

export default function NutriCoach() {
  return (
    <div className="min-h-screen bg-white text-[#1a2e1a] font-[system-ui]">

      {/* Demo banner */}
      <div className="bg-gradient-to-r from-[#667eea] to-[#764ba2] text-white text-xs text-center py-2 px-4 flex items-center justify-center gap-3">
        <span>Site exemple réalisé par Vyld</span>
        <Link to="/" className="underline hover:no-underline inline-flex items-center gap-1">
          <ArrowLeft size={12} /> Retour à Vyld
        </Link>
      </div>

      {/* Nav */}
      <nav className="border-b border-green-100 px-8 py-4 flex items-center justify-between bg-white sticky top-0 z-10">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white text-sm font-bold">N</div>
          <div>
            <p className="font-bold text-green-800 leading-none">NutriCoach</p>
            <p className="text-xs text-green-500">par Camille Dubois</p>
          </div>
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm text-gray-600">
          <a href="#" className="hover:text-green-600 transition-colors">Programmes</a>
          <a href="#" className="hover:text-green-600 transition-colors">À propos</a>
          <a href="#" className="hover:text-green-600 transition-colors">Blog</a>
        </div>
        <button className="bg-green-500 text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-green-600 transition-colors">
          Consultation gratuite
        </button>
      </nav>

      {/* Hero */}
      <section className="bg-gradient-to-br from-green-50 to-emerald-100 py-24 px-8">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block bg-green-100 text-green-700 text-xs font-semibold px-3 py-1 rounded-full mb-6">
              Diététicienne certifiée
            </span>
            <h1 className="text-5xl font-bold text-[#1a2e1a] leading-tight mb-6">
              Retrouvez<br />
              <span className="text-green-600">l'équilibre</span><br />
              alimentaire
            </h1>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              Un accompagnement personnalisé pour atteindre vos objectifs santé durablement. Sans frustration, sans régime.
            </p>
            <div className="flex gap-4">
              <button className="bg-green-600 text-white px-8 py-3.5 rounded-full font-medium hover:bg-green-700 transition-colors">
                Commencer
              </button>
              <button className="border border-green-300 text-green-700 px-8 py-3.5 rounded-full font-medium hover:bg-green-50 transition-colors">
                En savoir plus
              </button>
            </div>
          </div>
          <div className="bg-white rounded-3xl p-8 shadow-sm border border-green-100 text-center">
            <div className="text-8xl mb-4">🥗</div>
            <div className="grid grid-cols-2 gap-4 mt-4">
              {[['1200+', 'Clients accompagnés'], ['8 ans', 'D\'expérience'], ['95%', 'Taux de réussite'], ['4.9★', 'Note moyenne']].map(([v, l]) => (
                <div key={l} className="bg-green-50 rounded-xl p-3">
                  <p className="font-bold text-green-700 text-lg">{v}</p>
                  <p className="text-gray-500 text-xs">{l}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Programs */}
      <section className="py-20 px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold mb-3">Choisissez votre programme</h2>
            <p className="text-gray-500">Des formules adaptées à chaque objectif</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {programs.map((p) => (
              <div key={p.name} className={`rounded-2xl p-8 border ${p.popular ? 'border-green-400 bg-green-600 text-white' : 'border-gray-200 bg-white'}`}>
                {p.popular && <span className="inline-block bg-white/20 text-white text-xs px-3 py-1 rounded-full mb-4 font-semibold">Le plus populaire</span>}
                <h3 className={`text-xl font-bold mb-1 ${p.popular ? 'text-white' : 'text-[#1a2e1a]'}`}>{p.name}</h3>
                <p className={`text-sm mb-6 ${p.popular ? 'text-green-100' : 'text-gray-400'}`}>{p.duration}</p>
                <ul className="space-y-3 mb-8">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm">
                      <Check size={16} className={p.popular ? 'text-green-200' : 'text-green-500'} />
                      <span className={p.popular ? 'text-green-50' : 'text-gray-600'}>{f}</span>
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-3 rounded-xl font-medium text-sm transition-colors ${p.popular ? 'bg-white text-green-700 hover:bg-green-50' : 'bg-green-600 text-white hover:bg-green-700'}`}>
                  Choisir ce programme
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-green-600 text-white py-16 px-8 text-center">
        <h2 className="text-3xl font-bold mb-3">Première consultation offerte</h2>
        <p className="text-green-100 mb-8">30 minutes pour faire le point sur vos objectifs</p>
        <button className="bg-white text-green-700 font-semibold px-10 py-4 rounded-full hover:bg-green-50 transition-colors">
          Réserver maintenant →
        </button>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-100 py-8 px-8 text-center text-gray-400 text-sm">
        © 2026 NutriCoach — Camille Dubois, Diététicienne
      </footer>
    </div>
  );
}
