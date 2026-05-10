import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Check, Star } from 'lucide-react';

type Page = 'accueil' | 'programmes' | 'blog' | 'apropos' | 'contact';

const programs = [
  { name: 'Découverte', duration: '4 semaines', price: '149€', features: ['Bilan nutritionnel complet', 'Plan alimentaire personnalisé', '2 consultations visio', 'Recettes adaptées'], popular: false },
  { name: 'Transform', duration: '12 semaines', price: '349€', features: ['Tout du Découverte', 'Suivi hebdomadaire', 'Support WhatsApp 7j/7', 'Recettes exclusives (50+)', 'Analyse des prises de sang'], popular: true },
  { name: 'Elite', duration: '6 mois', price: '599€', features: ['Tout du Transform', 'Coaching sportif inclus', 'Accès communauté privée', 'Consultations illimitées', 'Garantie résultats'], popular: false },
];

const articles = [
  { title: '5 erreurs qui sabotent votre perte de poids', category: 'Conseils', date: '5 mai 2026', emoji: '⚡', desc: 'Les erreurs les plus courantes que je vois chez mes clients, et comment les éviter définitivement.' },
  { title: 'Le mythe des calories : ce que la science dit vraiment', category: 'Science', date: '28 avr. 2026', emoji: '🔬', desc: 'Tout ce qu\'on vous a appris sur les calories est-il vrai ? Démêlons le vrai du faux.' },
  { title: 'Manger sainement sans se ruiner : mon guide pratique', category: 'Budget', date: '18 avr. 2026', emoji: '💡', desc: 'Manger équilibré avec 50€/semaine, c\'est possible. Voici comment je fais et comment vous pouvez faire pareil.' },
];

const testimonials = [
  { name: 'Aurélie B.', result: '-12 kg en 3 mois', note: 5, text: 'Camille a totalement changé ma relation avec la nourriture. Je ne me suis jamais sentie autant en forme de ma vie.' },
  { name: 'Marc T.', result: 'Objectif marathon atteint', note: 5, text: 'Le programme Elite m\'a permis d\'optimiser mon alimentation pour mes performances sportives. Résultats bluffants.' },
  { name: 'Isabelle R.', result: 'Cholestérol normalisé', note: 5, text: 'Mon médecin était impressionné par l\'évolution de mes analyses en 6 semaines. Je recommande les yeux fermés.' },
];

export default function NutriCoach() {
  const [page, setPage] = useState<Page>('accueil');
  const [contactSent, setContactSent] = useState(false);
  const [selectedArticle, setSelectedArticle] = useState<typeof articles[0] | null>(null);

  const goTo = (p: Page) => { setPage(p); setSelectedArticle(null); window.scrollTo(0, 0); };

  const nav = (
    <nav className="bg-white border-b border-gray-100 px-6 sticky top-0 z-40 shadow-sm">
      <div className="max-w-6xl mx-auto h-16 flex items-center justify-between">
        <button onClick={() => goTo('accueil')} className="flex items-center gap-2.5">
          <div className="w-9 h-9 bg-green-500 rounded-xl flex items-center justify-center text-white font-bold text-sm">NC</div>
          <div className="text-left">
            <p className="font-bold text-green-800 leading-none text-sm">NutriCoach</p>
            <p className="text-[10px] text-green-400">par Camille Dubois, Diététicienne</p>
          </div>
        </button>
        <div className="hidden md:flex items-center gap-8 text-sm text-gray-600">
          {(['accueil', 'programmes', 'blog', 'apropos', 'contact'] as Page[]).map(p => (
            <button key={p} onClick={() => goTo(p)}
              className={`capitalize hover:text-green-600 transition-colors ${page === p ? 'text-green-600 font-medium' : ''}`}>
              {p === 'apropos' ? 'À propos' : p.charAt(0).toUpperCase() + p.slice(1)}
            </button>
          ))}
        </div>
        <button onClick={() => goTo('contact')} className="bg-green-500 text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-green-600 transition-colors">
          Consultation gratuite
        </button>
      </div>
    </nav>
  );

  return (
    <div className="min-h-screen bg-white text-[#1a2e1a] font-[system-ui]">
      <div className="bg-gradient-to-r from-[#667eea] to-[#764ba2] text-white text-xs text-center py-2 px-4 flex items-center justify-center gap-3">
        <span>Exemple de réalisation Vyld</span>
        <Link to="/" className="underline inline-flex items-center gap-1"><ArrowLeft size={12} /> Retour à Vyld</Link>
      </div>

      {nav}

      {/* ACCUEIL */}
      {page === 'accueil' && (
        <>
          <section className="bg-gradient-to-br from-green-50 via-emerald-50 to-white py-20 px-6">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center gap-2 mb-6">
                  <span className="bg-green-100 text-green-700 text-xs font-semibold px-3 py-1 rounded-full">✓ Certifiée AFDIAG</span>
                  <span className="bg-green-100 text-green-700 text-xs font-semibold px-3 py-1 rounded-full">⭐ 4.9/5</span>
                </div>
                <h1 className="text-5xl font-bold text-[#1a2e1a] leading-tight mb-6">
                  Retrouvez<br /><span className="text-green-600">l'équilibre</span><br />sans frustration
                </h1>
                <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                  Un accompagnement personnalisé pour atteindre vos objectifs santé durablement. Perte de poids, performance sportive, pathologies — je m'adapte à vous.
                </p>
                <div className="flex flex-wrap gap-4">
                  <button onClick={() => goTo('contact')} className="flex items-center gap-2 px-8 py-3.5 bg-green-600 text-white rounded-full font-medium hover:bg-green-700 transition-colors">
                    Consultation gratuite <ArrowRight size={16} />
                  </button>
                  <button onClick={() => goTo('programmes')} className="px-8 py-3.5 border border-green-300 text-green-700 rounded-full font-medium hover:bg-green-50 transition-colors">
                    Voir les programmes
                  </button>
                </div>
              </div>
              <div className="bg-white rounded-3xl p-8 shadow-sm border border-green-100">
                <div className="text-center mb-6">
                  <div className="w-24 h-24 bg-gradient-to-br from-green-400 to-emerald-600 rounded-full mx-auto mb-4 flex items-center justify-center text-4xl">👩‍⚕️</div>
                  <h3 className="font-bold text-lg">Camille Dubois</h3>
                  <p className="text-gray-500 text-sm">Diététicienne-Nutritionniste</p>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  {[['1200+', 'Clients accompagnés'], ['8 ans', 'D\'expérience'], ['95%', 'Taux de réussite'], ['4.9★', 'Note moyenne']].map(([v, l]) => (
                    <div key={l} className="bg-green-50 rounded-xl p-3 text-center">
                      <p className="font-bold text-green-700">{v}</p>
                      <p className="text-gray-500 text-xs">{l}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section className="py-6 bg-green-600">
            <div className="max-w-4xl mx-auto grid grid-cols-3 divide-x divide-green-500 text-center text-white">
              {[['🎯', 'Résultats garantis', 'Remboursé si non satisfait'], ['💬', 'Suivi personnalisé', 'WhatsApp inclus dans tous les plans'], ['📋', 'Approche scientifique', 'Basée sur les dernières études']].map(([e, t, s]) => (
                <div key={t} className="py-4 px-6">
                  <div className="text-2xl mb-1">{e}</div>
                  <p className="font-semibold text-sm">{t}</p>
                  <p className="text-green-100 text-xs mt-0.5">{s}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="py-20 px-6">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-14">
                <p className="text-green-500 text-xs uppercase tracking-widest mb-3">Témoignages</p>
                <h2 className="text-3xl font-bold">Ils ont transformé leur vie</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {testimonials.map(t => (
                  <div key={t.name} className="bg-green-50 rounded-2xl p-6 border border-green-100">
                    <div className="flex gap-0.5 mb-3">{[...Array(t.note)].map((_, i) => <Star key={i} size={14} className="text-green-500 fill-green-500" />)}</div>
                    <p className="text-gray-700 text-sm italic mb-4">"{t.text}"</p>
                    <div>
                      <p className="font-semibold text-sm text-[#1a2e1a]">{t.name}</p>
                      <p className="text-green-600 text-xs font-medium">{t.result}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="py-16 px-6 bg-gradient-to-br from-green-600 to-emerald-700 text-white text-center">
            <h2 className="text-3xl font-bold mb-3">Première consultation offerte</h2>
            <p className="text-green-100 mb-8">30 minutes pour faire le point sur vos objectifs et définir votre programme idéal.</p>
            <button onClick={() => goTo('contact')} className="bg-white text-green-700 font-semibold px-10 py-4 rounded-full hover:bg-green-50 transition-colors">
              Réserver maintenant →
            </button>
          </section>
        </>
      )}

      {/* PROGRAMMES */}
      {page === 'programmes' && (
        <section className="py-16 px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-14">
              <p className="text-green-500 text-xs uppercase tracking-widest mb-3">Tarifs</p>
              <h1 className="text-4xl font-bold mb-3">Choisissez votre programme</h1>
              <p className="text-gray-500">Tous les programmes incluent un bilan initial et un plan personnalisé</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {programs.map(p => (
                <div key={p.name} className={`rounded-2xl p-8 border ${p.popular ? 'border-green-500 bg-green-600 text-white relative' : 'border-gray-200 bg-white'}`}>
                  {p.popular && <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-green-800 text-white text-xs px-4 py-1.5 rounded-full font-semibold">⭐ Le plus choisi</span>}
                  <h3 className={`text-xl font-bold mb-1 ${p.popular ? 'text-white' : ''}`}>{p.name}</h3>
                  <p className={`text-sm mb-3 ${p.popular ? 'text-green-100' : 'text-gray-400'}`}>{p.duration}</p>
                  <p className={`text-3xl font-bold mb-6 ${p.popular ? 'text-white' : 'text-green-700'}`}>{p.price}</p>
                  <ul className="space-y-3 mb-8">
                    {p.features.map(f => (
                      <li key={f} className="flex items-start gap-2 text-sm">
                        <Check size={16} className={`shrink-0 mt-0.5 ${p.popular ? 'text-green-200' : 'text-green-500'}`} />
                        <span className={p.popular ? 'text-green-50' : 'text-gray-600'}>{f}</span>
                      </li>
                    ))}
                  </ul>
                  <button onClick={() => goTo('contact')}
                    className={`w-full py-3 rounded-xl font-medium text-sm transition-colors ${p.popular ? 'bg-white text-green-700 hover:bg-green-50' : 'bg-green-600 text-white hover:bg-green-700'}`}>
                    Choisir ce programme
                  </button>
                </div>
              ))}
            </div>
            <div className="bg-green-50 border border-green-200 rounded-2xl p-6 text-center">
              <p className="text-green-800 font-semibold mb-1">🎁 Consultation initiale offerte pour tous les programmes</p>
              <p className="text-gray-500 text-sm">Pas de CB requise · Annulation gratuite · Satisfait ou remboursé</p>
            </div>
          </div>
        </section>
      )}

      {/* BLOG */}
      {page === 'blog' && !selectedArticle && (
        <section className="py-16 px-6">
          <div className="max-w-4xl mx-auto">
            <div className="mb-12">
              <p className="text-green-500 text-xs uppercase tracking-widest mb-3">Blog</p>
              <h1 className="text-4xl font-bold">Conseils & actualités</h1>
            </div>
            <div className="space-y-6">
              {articles.map(a => (
                <button key={a.title} onClick={() => setSelectedArticle(a)}
                  className="w-full bg-green-50 border border-green-100 rounded-2xl p-6 hover:border-green-300 transition-colors text-left group">
                  <div className="flex items-start gap-5">
                    <div className="w-14 h-14 bg-green-200 rounded-xl flex items-center justify-center text-2xl shrink-0">{a.emoji}</div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-xs bg-green-200 text-green-700 px-2.5 py-0.5 rounded-full font-medium">{a.category}</span>
                        <span className="text-xs text-gray-400">{a.date}</span>
                      </div>
                      <h3 className="font-bold text-[#1a2e1a] mb-2 group-hover:text-green-700 transition-colors">{a.title}</h3>
                      <p className="text-gray-500 text-sm leading-relaxed">{a.desc}</p>
                    </div>
                    <ArrowRight size={18} className="text-gray-300 group-hover:text-green-500 transition-colors shrink-0 mt-1" />
                  </div>
                </button>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ARTICLE */}
      {page === 'blog' && selectedArticle && (
        <section className="py-16 px-6">
          <div className="max-w-2xl mx-auto">
            <button onClick={() => setSelectedArticle(null)} className="flex items-center gap-2 text-gray-400 hover:text-green-600 text-sm mb-8 transition-colors">
              <ArrowLeft size={16} /> Retour au blog
            </button>
            <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center text-3xl mb-6">{selectedArticle.emoji}</div>
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs bg-green-100 text-green-700 px-2.5 py-0.5 rounded-full font-medium">{selectedArticle.category}</span>
              <span className="text-xs text-gray-400">{selectedArticle.date}</span>
            </div>
            <h1 className="text-3xl font-bold mb-6">{selectedArticle.title}</h1>
            <p className="text-gray-600 leading-relaxed mb-6">{selectedArticle.desc}</p>
            <p className="text-gray-600 leading-relaxed mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <p className="text-gray-600 leading-relaxed mb-10">
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <div className="bg-green-50 border border-green-200 rounded-2xl p-6 text-center">
              <p className="font-bold text-[#1a2e1a] mb-2">Vous voulez aller plus loin ?</p>
              <p className="text-gray-500 text-sm mb-4">Réservez une consultation gratuite pour un accompagnement personnalisé.</p>
              <button onClick={() => goTo('contact')} className="bg-green-600 text-white px-8 py-3 rounded-full text-sm font-medium hover:bg-green-700 transition-colors">
                Consultation gratuite →
              </button>
            </div>
          </div>
        </section>
      )}

      {/* À PROPOS */}
      {page === 'apropos' && (
        <section className="py-16 px-6">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-16">
              <div className="bg-gradient-to-br from-green-100 to-emerald-200 rounded-3xl aspect-square flex items-center justify-center text-8xl">👩‍⚕️</div>
              <div>
                <p className="text-green-500 text-xs uppercase tracking-widest mb-4">À propos</p>
                <h1 className="text-3xl font-bold mb-4">Camille Dubois</h1>
                <p className="text-green-600 font-medium mb-6">Diététicienne-Nutritionniste D.E. · 8 ans d'expérience</p>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Diplômée de l'ISUPNAT Paris et spécialisée en nutrition sportive et prise en charge des troubles du comportement alimentaire, j'accompagne mes clients vers une alimentation équilibrée et durable.
                </p>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Mon approche : bienveillante, scientifique, et adaptée à votre vie réelle. Pas de régimes draconiens, pas d'interdits — juste des changements concrets qui durent.
                </p>
                <div className="flex flex-wrap gap-2">
                  {['Nutrition sportive', 'Perte de poids', 'Diabète & Cholestérol', 'TCA', 'Femme enceinte'].map(t => (
                    <span key={t} className="bg-green-100 text-green-700 text-xs px-3 py-1 rounded-full">{t}</span>
                  ))}
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
              {[['Master 2', 'Nutrition clinique', 'Université Paris VI'], ['DU', 'Nutrition sportive', 'INSEP Paris'], ['Membre', 'AFDIAG', 'Association officielle'], ['Formation', 'TCC alimentaires', 'Certifiée 2021']].map(([type, title, sub]) => (
                <div key={title} className="bg-green-50 rounded-xl p-4 text-center">
                  <p className="text-xs text-green-500 uppercase tracking-widest mb-1">{type}</p>
                  <p className="font-bold text-sm text-[#1a2e1a]">{title}</p>
                  <p className="text-gray-400 text-xs mt-1">{sub}</p>
                </div>
              ))}
            </div>
            <div className="bg-green-600 rounded-3xl p-10 text-white text-center">
              <h2 className="text-2xl font-bold mb-3">Prête à changer votre vie ?</h2>
              <p className="text-green-100 mb-8">Première consultation offerte, sans engagement.</p>
              <button onClick={() => goTo('contact')} className="bg-white text-green-700 font-semibold px-10 py-3.5 rounded-full hover:bg-green-50 transition-colors">
                Réserver ma consultation gratuite
              </button>
            </div>
          </div>
        </section>
      )}

      {/* CONTACT */}
      {page === 'contact' && (
        <section className="py-16 px-6">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-green-500 text-xs uppercase tracking-widest mb-3">Contact</p>
              <h1 className="text-4xl font-bold mb-3">Réservez votre consultation</h1>
              <p className="text-gray-400">Première séance offerte · En visio ou en cabinet · Réponse sous 2h</p>
            </div>
            {contactSent ? (
              <div className="bg-green-50 border border-green-200 rounded-3xl p-12 text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Check size={28} className="text-green-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">Demande reçue !</h3>
                <p className="text-gray-500">Je vous contacte sous 2h pour confirmer votre rendez-vous.</p>
              </div>
            ) : (
              <div className="bg-white border border-gray-100 rounded-3xl p-8 shadow-sm">
                <div className="grid grid-cols-2 gap-5 mb-5">
                  <div><label className="block text-sm text-gray-500 mb-1.5">Prénom</label><input type="text" placeholder="Marie" className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-green-400 transition-colors" /></div>
                  <div><label className="block text-sm text-gray-500 mb-1.5">Nom</label><input type="text" placeholder="Dupont" className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-green-400 transition-colors" /></div>
                </div>
                <div className="mb-5"><label className="block text-sm text-gray-500 mb-1.5">Email</label><input type="email" placeholder="marie@exemple.fr" className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-green-400 transition-colors" /></div>
                <div className="mb-5">
                  <label className="block text-sm text-gray-500 mb-1.5">Objectif principal</label>
                  <select className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-green-400 transition-colors appearance-none">
                    <option>Perte de poids</option>
                    <option>Performance sportive</option>
                    <option>Problème de santé (diabète, cholestérol…)</option>
                    <option>Rééquilibrage alimentaire</option>
                    <option>Autre</option>
                  </select>
                </div>
                <div className="mb-5">
                  <label className="block text-sm text-gray-500 mb-1.5">Format préféré</label>
                  <div className="grid grid-cols-2 gap-3">
                    {['Visio (Zoom)', 'En cabinet Paris'].map(f => (
                      <label key={f} className="flex items-center gap-2 border border-gray-200 rounded-xl px-4 py-3 cursor-pointer hover:border-green-400 transition-colors">
                        <input type="radio" name="format" className="text-green-600" /> <span className="text-sm">{f}</span>
                      </label>
                    ))}
                  </div>
                </div>
                <div className="mb-6"><label className="block text-sm text-gray-500 mb-1.5">Message (optionnel)</label><textarea rows={3} placeholder="Décrivez brièvement votre situation..." className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-green-400 transition-colors resize-none" /></div>
                <button onClick={() => setContactSent(true)} className="w-full bg-green-600 text-white py-4 rounded-full font-medium hover:bg-green-700 transition-colors">
                  Réserver ma consultation gratuite →
                </button>
                <p className="text-xs text-gray-400 text-center mt-3">Aucune CB requise · Annulation libre · 100% confidentiel</p>
              </div>
            )}
          </div>
        </section>
      )}

      <footer className="bg-[#1a2e1a] text-green-200 py-10 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <p className="font-bold text-white mb-2">NutriCoach</p>
            <p className="text-green-300 text-sm">Camille Dubois · Diététicienne D.E.<br />Paris & consultations en visio</p>
          </div>
          <div>
            <p className="font-semibold text-white mb-3">Navigation</p>
            <div className="space-y-2 text-sm">
              {(['accueil', 'programmes', 'blog', 'apropos', 'contact'] as Page[]).map(p => (
                <button key={p} onClick={() => goTo(p)} className="block text-green-300 hover:text-white transition-colors capitalize">
                  {p === 'apropos' ? 'À propos' : p.charAt(0).toUpperCase() + p.slice(1)}
                </button>
              ))}
            </div>
          </div>
          <div>
            <p className="font-semibold text-white mb-3">Cabinet</p>
            <p className="text-green-300 text-sm">8 avenue de la République<br />75011 Paris · Métro Oberkampf</p>
          </div>
        </div>
        <div className="border-t border-green-900 mt-8 pt-6 text-center text-green-500 text-xs">
          © 2026 NutriCoach — Camille Dubois, Diététicienne
        </div>
      </footer>
    </div>
  );
}
