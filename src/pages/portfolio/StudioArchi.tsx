import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from 'lucide-react';

type Page = 'accueil' | 'projets' | 'services' | 'contact';

const projects = [
  {
    id: 1, name: 'Villa Horizon', location: 'Bordeaux', year: '2025', type: 'Résidentiel',
    img: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=900&q=80&auto=format&fit=crop',
    desc: 'Villa contemporaine de 280m² avec piscine à débordement. Matériaux naturels, grandes ouvertures sur le paysage girondin.',
  },
  {
    id: 2, name: 'Loft Voltaire', location: 'Paris 11e', year: '2024', type: 'Rénovation',
    img: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=900&q=80&auto=format&fit=crop',
    desc: 'Transformation d\'un ancien atelier d\'artiste de 120m². Conservation du cachet industriel, modernisation complète des fluides et finitions.',
  },
  {
    id: 3, name: 'Maison Passive', location: 'Lyon', year: '2024', type: 'Neuf',
    img: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=900&q=80&auto=format&fit=crop',
    desc: 'Maison à énergie positive certifiée Passivhaus. Triple vitrage, isolation renforcée, panneaux solaires intégrés en toiture.',
  },
  {
    id: 4, name: 'Appartement Haussmann', location: 'Paris 8e', year: '2023', type: 'Rénovation',
    img: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=900&q=80&auto=format&fit=crop',
    desc: 'Restauration d\'un appartement haussmannien de 200m². Conservation des moulures d\'origine, cuisine et salle de bain contemporaines.',
  },
  {
    id: 5, name: 'Espace Coworking', location: 'Nantes', year: '2023', type: 'Commercial',
    img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=900&q=80&auto=format&fit=crop',
    desc: 'Aménagement d\'un espace de coworking de 400m² pour 80 postes. Zones de collaboration, cabines acoustiques, terrasse végétalisée.',
  },
  {
    id: 6, name: 'Chalet Alpin', location: 'Chamonix', year: '2022', type: 'Résidentiel',
    img: 'https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=900&q=80&auto=format&fit=crop',
    desc: 'Chalet contemporain de 350m² intégré dans le paysage alpin. Bois local, stone cladding, vue panoramique sur le Mont-Blanc.',
  },
];

const services = [
  { emoji: '📐', title: 'Architecture neuve', desc: 'Conception de A à Z — permis de construire, plans d\'exécution, suivi de chantier complet.' },
  { emoji: '🔨', title: 'Rénovation', desc: 'Réhabilitation, extension, transformation d\'espaces existants avec le soin du détail.' },
  { emoji: '🛋️', title: 'Design intérieur', desc: 'Conception des espaces intérieurs, sélection des matériaux, mobilier et luminaires.' },
  { emoji: '📊', title: 'Conseil & AMO', desc: 'Assistance à maîtrise d\'ouvrage, audit de bâtiments, conseil en réhabilitation énergétique.' },
];

export default function StudioArchi() {
  const [page, setPage] = useState<Page>('accueil');
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
  const [contactSent, setContactSent] = useState(false);

  const goTo = (p: Page) => { setPage(p); setSelectedProject(null); window.scrollTo(0, 0); };

  const nav = (
    <nav className="border-b border-white/10 px-6 sticky top-0 z-40 bg-[#0a0a0a]/95 backdrop-blur-md">
      <div className="max-w-6xl mx-auto h-16 flex items-center justify-between">
        <button onClick={() => goTo('accueil')} className="text-left">
          <p className="text-lg font-bold tracking-[0.15em] uppercase text-white">Studio Archi</p>
          <p className="text-[10px] text-gray-500 tracking-widest uppercase">Architecture & Design · Paris</p>
        </button>
        <div className="hidden md:flex items-center gap-8 text-sm text-gray-400">
          {(['accueil', 'projets', 'services', 'contact'] as Page[]).map(p => (
            <button key={p} onClick={() => goTo(p)}
              className={`capitalize hover:text-white transition-colors ${page === p ? 'text-white font-medium' : ''}`}>
              {p.charAt(0).toUpperCase() + p.slice(1)}
            </button>
          ))}
        </div>
        <button onClick={() => goTo('contact')}
          className="border border-white/20 text-white text-sm px-5 py-2 hover:bg-white hover:text-black transition-all duration-200">
          Nous contacter
        </button>
      </div>
    </nav>
  );

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white font-[system-ui]">
      {/* Vyld banner */}
      <div className="bg-gradient-to-r from-[#667eea] to-[#764ba2] text-white text-xs text-center py-2 px-4 flex items-center justify-center gap-3">
        <span>Exemple de réalisation Vyld</span>
        <Link to="/" className="underline inline-flex items-center gap-1"><ArrowLeft size={12} /> Retour à Vyld</Link>
      </div>

      {nav}

      {/* ── ACCUEIL ── */}
      {page === 'accueil' && !selectedProject && (
        <>
          {/* Hero */}
          <section className="relative h-[90vh] flex items-end overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=1600&q=80&auto=format&fit=crop"
              alt="Architecture"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
            <div className="relative max-w-6xl mx-auto px-6 pb-20 w-full">
              <p className="text-gray-400 text-xs tracking-[0.3em] uppercase mb-4">Paris — Fondé en 2012</p>
              <h1 className="text-6xl md:text-8xl font-bold leading-none mb-6 tracking-tight">
                Espaces<br />
                <span className="text-transparent" style={{ WebkitTextStroke: '1px white' }}>qui durent</span>
              </h1>
              <p className="text-gray-300 text-lg max-w-lg mb-8 leading-relaxed">
                Architecture neuve, rénovation et design intérieur. Nous concevons des lieux où esthétique, fonctionnalité et durabilité sont indissociables.
              </p>
              <div className="flex gap-6 flex-wrap">
                <button onClick={() => goTo('projets')}
                  className="flex items-center gap-3 bg-white text-black px-8 py-3.5 font-medium hover:bg-gray-100 transition-colors text-sm">
                  Voir nos projets <ArrowRight size={16} />
                </button>
                <button onClick={() => goTo('contact')}
                  className="flex items-center gap-3 border border-white/40 text-white px-8 py-3.5 hover:bg-white/10 transition-colors text-sm">
                  Consultation gratuite
                </button>
              </div>
            </div>
          </section>

          {/* Stats */}
          <section className="border-b border-white/10 py-8 px-6">
            <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 divide-x divide-white/10 text-center">
              {[['12 ans', 'd\'expérience'], ['80+', 'Projets livrés'], ['15', 'Récompenses'], ['98%', 'Satisfaction']].map(([v, l]) => (
                <div key={l} className="py-2 px-6">
                  <p className="text-2xl font-bold">{v}</p>
                  <p className="text-gray-500 text-xs mt-1">{l}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Projets récents */}
          <section className="py-20 px-6">
            <div className="max-w-6xl mx-auto">
              <div className="flex items-end justify-between mb-12">
                <div>
                  <p className="text-gray-500 text-xs tracking-widest uppercase mb-3">Portfolio</p>
                  <h2 className="text-3xl font-bold">Projets récents</h2>
                </div>
                <button onClick={() => goTo('projets')} className="text-gray-400 hover:text-white text-sm flex items-center gap-2 transition-colors">
                  Tout voir <ArrowRight size={14} />
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {projects.slice(0, 3).map(p => (
                  <button key={p.id} onClick={() => { setSelectedProject(p); setPage('projets'); }}
                    className="group relative overflow-hidden rounded-lg aspect-[4/3] text-left">
                    <img src={p.img} alt={p.name} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-5">
                      <p className="text-gray-300 text-xs mb-1">{p.type} · {p.year}</p>
                      <h3 className="text-white font-bold text-lg">{p.name}</h3>
                      <p className="text-gray-400 text-sm">{p.location}</p>
                    </div>
                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="bg-white text-black text-xs px-3 py-1.5 font-medium">Voir →</div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </section>

          {/* About strip */}
          <section className="py-20 px-6 border-t border-white/10">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              <div className="relative rounded-xl overflow-hidden aspect-[4/3]">
                <img
                  src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=900&q=80&auto=format&fit=crop"
                  alt="Notre atelier"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <p className="text-gray-500 text-xs tracking-widest uppercase mb-4">Notre approche</p>
                <h2 className="text-3xl font-bold mb-6">Concevoir pour les gens, pas pour les prix</h2>
                <p className="text-gray-400 leading-relaxed mb-6">
                  Chaque projet naît d'une écoute attentive. Nous travaillons en étroite collaboration avec nos clients pour créer des espaces qui leur ressemblent vraiment.
                </p>
                <p className="text-gray-400 leading-relaxed mb-8">
                  De la première esquisse à la remise des clés, notre équipe vous accompagne à chaque étape avec transparence et exigence.
                </p>
                <button onClick={() => goTo('services')}
                  className="flex items-center gap-3 text-white border-b border-white pb-1 hover:gap-5 transition-all text-sm">
                  Découvrir nos services <ArrowRight size={16} />
                </button>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="relative py-24 px-6 overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1600&q=80&auto=format&fit=crop"
              alt="Architecture"
              className="absolute inset-0 w-full h-full object-cover opacity-20"
            />
            <div className="relative max-w-3xl mx-auto text-center">
              <h2 className="text-4xl font-bold mb-4">Votre projet mérite le meilleur</h2>
              <p className="text-gray-400 mb-10">Première consultation offerte · Sans engagement · Réponse sous 48h</p>
              <button onClick={() => goTo('contact')}
                className="bg-white text-black px-12 py-4 text-sm font-semibold hover:bg-gray-100 transition-colors">
                Prendre rendez-vous →
              </button>
            </div>
          </section>
        </>
      )}

      {/* ── PROJETS ── */}
      {page === 'projets' && !selectedProject && (
        <section className="py-16 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="mb-12">
              <p className="text-gray-500 text-xs tracking-widest uppercase mb-3">Portfolio</p>
              <h1 className="text-4xl font-bold">Tous nos projets</h1>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {projects.map(p => (
                <button key={p.id} onClick={() => setSelectedProject(p)}
                  className="group relative overflow-hidden rounded-xl aspect-video text-left">
                  <img src={p.img} alt={p.name} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <p className="text-gray-300 text-xs mb-1">{p.type} · {p.year}</p>
                    <h3 className="text-white font-bold text-xl">{p.name}</h3>
                    <p className="text-gray-400 text-sm">{p.location}</p>
                  </div>
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="bg-white text-black text-xs px-3 py-1.5 font-semibold">Voir le projet →</div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── PROJET DETAIL ── */}
      {page === 'projets' && selectedProject && (
        <section className="py-16 px-6">
          <div className="max-w-4xl mx-auto">
            <button onClick={() => setSelectedProject(null)} className="flex items-center gap-2 text-gray-500 hover:text-white text-sm mb-10 transition-colors">
              <ArrowLeft size={16} /> Retour aux projets
            </button>
            <div className="rounded-2xl overflow-hidden aspect-video mb-10">
              <img src={selectedProject.img} alt={selectedProject.name} className="w-full h-full object-cover" />
            </div>
            <div className="grid grid-cols-3 gap-4 mb-10">
              {[['Type', selectedProject.type], ['Lieu', selectedProject.location], ['Année', selectedProject.year]].map(([l, v]) => (
                <div key={l} className="border border-white/10 p-4 rounded-lg">
                  <p className="text-gray-500 text-xs uppercase tracking-widest mb-1">{l}</p>
                  <p className="font-semibold">{v}</p>
                </div>
              ))}
            </div>
            <h1 className="text-4xl font-bold mb-4">{selectedProject.name}</h1>
            <p className="text-gray-400 leading-relaxed text-lg mb-10">{selectedProject.desc}</p>
            <button onClick={() => goTo('contact')}
              className="border border-white text-white px-8 py-3 hover:bg-white hover:text-black transition-colors text-sm">
              Discuter d'un projet similaire →
            </button>
          </div>
        </section>
      )}

      {/* ── SERVICES ── */}
      {page === 'services' && (
        <section className="py-16 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="mb-14">
              <p className="text-gray-500 text-xs tracking-widest uppercase mb-3">Ce que nous faisons</p>
              <h1 className="text-4xl font-bold max-w-lg">Des services complets pour votre projet</h1>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
              {services.map((s, i) => (
                <div key={s.title} className="relative group overflow-hidden rounded-xl">
                  <img
                    src={projects[i]?.img}
                    alt={s.title}
                    className="absolute inset-0 w-full h-full object-cover opacity-20 group-hover:opacity-30 transition-opacity"
                  />
                  <div className="relative border border-white/10 rounded-xl p-10 hover:border-white/30 transition-colors bg-white/[0.02]">
                    <div className="text-3xl mb-5">{s.emoji}</div>
                    <h3 className="text-xl font-semibold mb-3">{s.title}</h3>
                    <p className="text-gray-400 leading-relaxed">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="border border-white/10 rounded-xl p-10 text-center">
              <h2 className="text-2xl font-bold mb-3">Honoraires transparents</h2>
              <p className="text-gray-400 mb-6 max-w-md mx-auto">Nos honoraires sont calculés au pourcentage du coût des travaux, généralement entre 8% et 15% selon la complexité du projet.</p>
              <button onClick={() => goTo('contact')} className="bg-white text-black px-8 py-3 text-sm font-semibold hover:bg-gray-100 transition-colors">
                Obtenir un devis gratuit
              </button>
            </div>
          </div>
        </section>
      )}

      {/* ── CONTACT ── */}
      {page === 'contact' && (
        <section className="py-16 px-6">
          <div className="max-w-2xl mx-auto">
            <div className="mb-12">
              <p className="text-gray-500 text-xs tracking-widest uppercase mb-3">Contact</p>
              <h1 className="text-4xl font-bold mb-3">Parlons de votre projet</h1>
              <p className="text-gray-400">Première consultation offerte. Réponse sous 48h.</p>
            </div>
            {contactSent ? (
              <div className="border border-white/20 rounded-xl p-10 text-center">
                <div className="text-4xl mb-4">✓</div>
                <h3 className="text-xl font-bold mb-2">Message envoyé</h3>
                <p className="text-gray-400">Nous vous répondons sous 48h.</p>
              </div>
            ) : (
              <div className="space-y-5">
                <div className="grid grid-cols-2 gap-5">
                  <div><label className="block text-xs text-gray-500 mb-2 uppercase tracking-widest">Prénom</label><input type="text" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm text-white outline-none focus:border-white/30 transition-colors" placeholder="Jean" /></div>
                  <div><label className="block text-xs text-gray-500 mb-2 uppercase tracking-widest">Nom</label><input type="text" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm text-white outline-none focus:border-white/30 transition-colors" placeholder="Martin" /></div>
                </div>
                <div><label className="block text-xs text-gray-500 mb-2 uppercase tracking-widest">Email</label><input type="email" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm text-white outline-none focus:border-white/30 transition-colors" placeholder="jean@exemple.fr" /></div>
                <div>
                  <label className="block text-xs text-gray-500 mb-2 uppercase tracking-widest">Type de projet</label>
                  <select className="w-full bg-[#0a0a0a] border border-white/10 rounded-lg px-4 py-3 text-sm text-white outline-none focus:border-white/30 transition-colors">
                    <option>Maison individuelle</option>
                    <option>Appartement / Rénovation</option>
                    <option>Local commercial</option>
                    <option>Autre</option>
                  </select>
                </div>
                <div><label className="block text-xs text-gray-500 mb-2 uppercase tracking-widest">Votre projet</label><textarea rows={4} className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm text-white outline-none focus:border-white/30 transition-colors resize-none" placeholder="Décrivez votre projet..." /></div>
                <button onClick={() => setContactSent(true)} className="w-full bg-white text-black py-4 text-sm font-semibold hover:bg-gray-100 transition-colors rounded-lg">
                  Envoyer →
                </button>
              </div>
            )}
          </div>
        </section>
      )}

      {/* Footer */}
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
