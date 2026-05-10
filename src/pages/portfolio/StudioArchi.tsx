import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, X } from 'lucide-react';

type Page = 'accueil' | 'projets' | 'services' | 'contact';

const projects = [
  { id: 1, name: 'Villa Horizon', location: 'Bordeaux', year: '2025', type: 'Résidentiel', emoji: '🏠', desc: 'Villa contemporaine de 280m² avec piscine à débordement. Matériaux naturels, grandes ouvertures sur le paysage.' },
  { id: 2, name: 'Loft Voltaire', location: 'Paris 11e', year: '2024', type: 'Rénovation', emoji: '🏢', desc: 'Transformation d\'un ancien atelier d\'artiste en loft de 120m². Conservation du cachet industriel, modernisation complète.' },
  { id: 3, name: 'Maison Passive', location: 'Lyon', year: '2024', type: 'Neuf', emoji: '🌿', desc: 'Maison à énergie positive certifiée Passivhaus. Triple vitrage, isolation renforcée, panneaux solaires intégrés.' },
  { id: 4, name: 'Rénovation Haussmann', location: 'Paris 8e', year: '2023', type: 'Rénovation', emoji: '🏛️', desc: 'Restauration d\'un appartement haussmannien de 200m². Conservation des moulures d\'origine, cuisine et salle de bain contemporaines.' },
  { id: 5, name: 'Espace Coworking', location: 'Nantes', year: '2023', type: 'Commercial', emoji: '💼', desc: 'Aménagement d\'un espace de coworking de 400m² pour 80 postes. Zones de collaboration, cabines acoustiques, terrasse.' },
  { id: 6, name: 'Chalet Alpin', location: 'Chamonix', year: '2022', type: 'Résidentiel', emoji: '⛰️', desc: 'Chalet contemporain de 350m² intégré dans le paysage alpin. Bois local, stone cladding, vue panoramique sur le Mont-Blanc.' },
];

const services = [
  { emoji: '📐', title: 'Architecture neuve', desc: 'Conception de A à Z — permis de construire, plans d\'exécution, suivi de chantier.' },
  { emoji: '🔨', title: 'Rénovation', desc: 'Réhabilitation, extension, transformation d\'espaces existants avec le soin du détail.' },
  { emoji: '🛋️', title: 'Design intérieur', desc: 'Conception des espaces intérieurs, sélection des matériaux, mobilier et luminaires.' },
  { emoji: '📊', title: 'Conseil & AMO', desc: 'Assistance à maîtrise d\'ouvrage, audit de bâtiments, conseil en réhabilitation.' },
];

export default function StudioArchi() {
  const [page, setPage] = useState<Page>('accueil');
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
  const [contactSent, setContactSent] = useState(false);

  const goTo = (p: Page) => { setPage(p); setSelectedProject(null); window.scrollTo(0, 0); };

  const nav = (
    <nav className="border-b border-white/10 px-6 sticky top-0 z-40 bg-[#0f0f0f]/95 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto h-16 flex items-center justify-between">
        <button onClick={() => goTo('accueil')} className="text-left">
          <p className="text-lg font-bold tracking-[0.15em] uppercase text-white">Studio Archi</p>
          <p className="text-[10px] text-gray-500 tracking-widest uppercase">Architecture & Design</p>
        </button>
        <div className="hidden md:flex items-center gap-8 text-sm text-gray-400">
          {(['accueil', 'projets', 'services', 'contact'] as Page[]).map(p => (
            <button key={p} onClick={() => goTo(p)}
              className={`capitalize hover:text-white transition-colors ${page === p ? 'text-white' : ''}`}>
              {p.charAt(0).toUpperCase() + p.slice(1)}
            </button>
          ))}
        </div>
        <button onClick={() => goTo('contact')} className="border border-white/20 text-white text-sm px-5 py-2 hover:bg-white hover:text-black transition-colors">
          Nous contacter
        </button>
      </div>
    </nav>
  );

  return (
    <div className="min-h-screen bg-[#0f0f0f] text-white font-[system-ui]">
      <div className="bg-gradient-to-r from-[#667eea] to-[#764ba2] text-white text-xs text-center py-2 px-4 flex items-center justify-center gap-3">
        <span>Exemple de réalisation Vyld</span>
        <Link to="/" className="underline inline-flex items-center gap-1"><ArrowLeft size={12} /> Retour à Vyld</Link>
      </div>

      {nav}

      {/* ACCUEIL */}
      {page === 'accueil' && !selectedProject && (
        <>
          <section className="min-h-[85vh] flex items-center px-6 md:px-16 relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%23ffffff%22 fill-opacity=%220.02%22%3E%3Cpath d=%22M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30" />
            <div className="max-w-4xl relative">
              <p className="text-gray-500 text-xs tracking-[0.3em] uppercase mb-8">Paris — Fondé en 2012</p>
              <h1 className="text-6xl md:text-8xl font-bold leading-none mb-8 tracking-tight">
                Espaces<br />
                <span className="text-transparent" style={{ WebkitTextStroke: '1px white' }}>qui durent</span>
              </h1>
              <p className="text-gray-400 text-lg max-w-lg mb-10 leading-relaxed">
                Nous concevons des bâtiments et des intérieurs où l'esthétique, la fonctionnalité et la durabilité sont indissociables.
              </p>
              <div className="flex gap-6">
                <button onClick={() => goTo('projets')} className="flex items-center gap-3 text-white border-b border-white pb-1 hover:gap-5 transition-all text-sm">
                  Voir nos projets <ArrowRight size={16} />
                </button>
                <button onClick={() => goTo('contact')} className="flex items-center gap-3 text-gray-400 border-b border-gray-600 pb-1 hover:text-white hover:border-white transition-all text-sm">
                  Consultation gratuite <ArrowRight size={16} />
                </button>
              </div>
            </div>
          </section>

          <section className="border-t border-white/10 py-6 px-6">
            <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 divide-x divide-white/10 text-center">
              {[['12 ans', 'd\'expérience'], ['80+', 'Projets livrés'], ['15', 'Récompenses'], ['98%', 'Satisfaction']].map(([v, l]) => (
                <div key={l} className="py-4 px-6">
                  <p className="text-2xl font-bold">{v}</p>
                  <p className="text-gray-500 text-xs mt-1">{l}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="py-20 px-6 md:px-16">
            <div className="max-w-6xl mx-auto">
              <div className="flex items-end justify-between mb-12">
                <div>
                  <p className="text-gray-500 text-xs tracking-widest uppercase mb-3">Sélection</p>
                  <h2 className="text-3xl font-bold">Projets récents</h2>
                </div>
                <button onClick={() => goTo('projets')} className="text-gray-400 hover:text-white text-sm flex items-center gap-2 transition-colors">
                  Tous les projets <ArrowRight size={14} />
                </button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/10">
                {projects.slice(0, 3).map((p, i) => (
                  <button key={p.id} onClick={() => { setSelectedProject(p); setPage('projets'); }}
                    className="bg-[#0f0f0f] p-8 hover:bg-white/[0.04] transition-colors group text-left">
                    <div className="flex items-start justify-between mb-8">
                      <span className="text-gray-600 text-sm">0{i + 1}</span>
                      <span className="text-4xl">{p.emoji}</span>
                    </div>
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-white transition-colors">{p.name}</h3>
                    <div className="flex items-center justify-between text-gray-500 text-sm">
                      <span>{p.location}</span>
                      <span>{p.year}</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </section>

          <section className="py-20 px-6 border-t border-white/10 bg-white text-black">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl font-bold mb-4">Votre projet mérite le meilleur</h2>
              <p className="text-gray-600 mb-10">Première consultation offerte · Sans engagement · Réponse sous 48h</p>
              <button onClick={() => goTo('contact')} className="bg-black text-white px-12 py-4 text-sm font-medium hover:bg-gray-800 transition-colors">
                Prendre rendez-vous →
              </button>
            </div>
          </section>
        </>
      )}

      {/* PROJETS */}
      {page === 'projets' && !selectedProject && (
        <section className="py-16 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="mb-12">
              <p className="text-gray-500 text-xs tracking-widest uppercase mb-3">Nos réalisations</p>
              <h1 className="text-4xl font-bold">Tous les projets</h1>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/10">
              {projects.map((p, i) => (
                <button key={p.id} onClick={() => setSelectedProject(p)}
                  className="bg-[#0f0f0f] p-8 hover:bg-white/[0.04] transition-colors group text-left">
                  <div className="flex items-start justify-between mb-6">
                    <span className="text-gray-600 text-sm">0{i + 1} — {p.type}</span>
                    <span className="text-4xl">{p.emoji}</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{p.name}</h3>
                  <p className="text-gray-500 text-sm line-clamp-2 mb-4">{p.desc}</p>
                  <div className="flex items-center justify-between text-gray-600 text-sm">
                    <span>{p.location}</span>
                    <span className="flex items-center gap-1 text-white opacity-0 group-hover:opacity-100 transition-opacity">Voir <ArrowRight size={14} /></span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* PROJET DETAIL */}
      {page === 'projets' && selectedProject && (
        <section className="py-16 px-6">
          <div className="max-w-4xl mx-auto">
            <button onClick={() => setSelectedProject(null)} className="flex items-center gap-2 text-gray-500 hover:text-white text-sm mb-10 transition-colors">
              <ArrowLeft size={16} /> Retour aux projets
            </button>
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl aspect-video flex items-center justify-center text-[120px] mb-10">
              {selectedProject.emoji}
            </div>
            <div className="grid grid-cols-3 gap-4 mb-10">
              {[['Type', selectedProject.type], ['Lieu', selectedProject.location], ['Année', selectedProject.year]].map(([l, v]) => (
                <div key={l} className="border border-white/10 p-4">
                  <p className="text-gray-500 text-xs uppercase tracking-widest mb-1">{l}</p>
                  <p className="font-semibold">{v}</p>
                </div>
              ))}
            </div>
            <h1 className="text-4xl font-bold mb-4">{selectedProject.name}</h1>
            <p className="text-gray-400 leading-relaxed text-lg mb-8">{selectedProject.desc}</p>
            <button onClick={() => goTo('contact')} className="border border-white text-white px-8 py-3 hover:bg-white hover:text-black transition-colors text-sm">
              Discuter d'un projet similaire →
            </button>
          </div>
        </section>
      )}

      {/* SERVICES */}
      {page === 'services' && (
        <section className="py-16 px-6">
          <div className="max-w-5xl mx-auto">
            <div className="mb-14">
              <p className="text-gray-500 text-xs tracking-widest uppercase mb-3">Ce que nous faisons</p>
              <h1 className="text-4xl font-bold max-w-lg">Des services complets pour votre projet</h1>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/10 mb-20">
              {services.map(s => (
                <div key={s.title} className="bg-[#0f0f0f] p-10 hover:bg-white/[0.03] transition-colors">
                  <div className="text-3xl mb-5">{s.emoji}</div>
                  <h3 className="text-xl font-semibold mb-3">{s.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>
            <div className="border border-white/10 p-10 text-center">
              <h2 className="text-2xl font-bold mb-3">Honoraires transparents</h2>
              <p className="text-gray-400 mb-6 max-w-md mx-auto">Nos honoraires sont calculés au pourcentage du coût des travaux, généralement entre 8% et 15% selon la complexité.</p>
              <button onClick={() => goTo('contact')} className="bg-white text-black px-8 py-3 text-sm font-medium hover:bg-gray-100 transition-colors">
                Obtenir un devis gratuit
              </button>
            </div>
          </div>
        </section>
      )}

      {/* CONTACT */}
      {page === 'contact' && (
        <section className="py-16 px-6">
          <div className="max-w-2xl mx-auto">
            <div className="mb-12">
              <p className="text-gray-500 text-xs tracking-widest uppercase mb-3">Contact</p>
              <h1 className="text-4xl font-bold mb-3">Parlons de votre projet</h1>
              <p className="text-gray-400">Première consultation offerte. Réponse sous 48h.</p>
            </div>
            {contactSent ? (
              <div className="border border-white/20 p-10 text-center">
                <div className="text-4xl mb-4">✓</div>
                <h3 className="text-xl font-bold mb-2">Message envoyé</h3>
                <p className="text-gray-400">Nous vous répondons sous 48h.</p>
              </div>
            ) : (
              <div className="space-y-5">
                <div className="grid grid-cols-2 gap-5">
                  <div><label className="block text-xs text-gray-500 mb-2 uppercase tracking-widest">Prénom</label><input type="text" className="w-full bg-white/5 border border-white/10 px-4 py-3 text-sm text-white outline-none focus:border-white/30 transition-colors" placeholder="Jean" /></div>
                  <div><label className="block text-xs text-gray-500 mb-2 uppercase tracking-widest">Nom</label><input type="text" className="w-full bg-white/5 border border-white/10 px-4 py-3 text-sm text-white outline-none focus:border-white/30 transition-colors" placeholder="Martin" /></div>
                </div>
                <div><label className="block text-xs text-gray-500 mb-2 uppercase tracking-widest">Email</label><input type="email" className="w-full bg-white/5 border border-white/10 px-4 py-3 text-sm text-white outline-none focus:border-white/30 transition-colors" placeholder="jean@exemple.fr" /></div>
                <div>
                  <label className="block text-xs text-gray-500 mb-2 uppercase tracking-widest">Type de projet</label>
                  <select className="w-full bg-[#0f0f0f] border border-white/10 px-4 py-3 text-sm text-white outline-none focus:border-white/30 transition-colors">
                    <option>Maison individuelle</option>
                    <option>Appartement / Rénovation</option>
                    <option>Local commercial</option>
                    <option>Autre</option>
                  </select>
                </div>
                <div><label className="block text-xs text-gray-500 mb-2 uppercase tracking-widest">Votre projet</label><textarea rows={4} className="w-full bg-white/5 border border-white/10 px-4 py-3 text-sm text-white outline-none focus:border-white/30 transition-colors resize-none" placeholder="Décrivez votre projet..." /></div>
                <button onClick={() => setContactSent(true)} className="w-full bg-white text-black py-4 text-sm font-medium hover:bg-gray-100 transition-colors">
                  Envoyer →
                </button>
              </div>
            )}
          </div>
        </section>
      )}

      <footer className="border-t border-white/10 py-10 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <p className="font-bold text-white tracking-widest uppercase mb-2">Studio Archi</p>
            <p className="text-gray-500 text-sm">Architecture & Design — Paris</p>
          </div>
          <div>
            <p className="text-xs text-gray-500 uppercase tracking-widest mb-3">Navigation</p>
            <div className="space-y-2 text-sm">
              {(['accueil', 'projets', 'services', 'contact'] as Page[]).map(p => (
                <button key={p} onClick={() => goTo(p)} className="block text-gray-400 hover:text-white transition-colors capitalize">{p.charAt(0).toUpperCase() + p.slice(1)}</button>
              ))}
            </div>
          </div>
          <div>
            <p className="text-xs text-gray-500 uppercase tracking-widest mb-3">Adresse</p>
            <p className="text-gray-400 text-sm">24 rue du Faubourg Saint-Antoine<br />75012 Paris · France</p>
          </div>
        </div>
        <div className="border-t border-white/10 mt-8 pt-6 text-center text-gray-600 text-xs">© 2026 Studio Archi</div>
      </footer>
    </div>
  );
}
