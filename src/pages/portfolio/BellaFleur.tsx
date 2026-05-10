import { Link } from 'react-router-dom';
import { ShoppingBag, Star, ArrowLeft } from 'lucide-react';

const bouquets = [
  { name: 'Bouquet Romantique', price: '45€', tag: 'Bestseller' },
  { name: 'Composition Printanière', price: '38€', tag: null },
  { name: 'Roses Premium', price: '65€', tag: 'Nouveau' },
];

export default function BellaFleur() {
  return (
    <div className="min-h-screen bg-[#fff9f7] text-[#2d1b1b] font-[system-ui]">

      {/* Demo banner */}
      <div className="bg-gradient-to-r from-[#667eea] to-[#764ba2] text-white text-xs text-center py-2 px-4 flex items-center justify-center gap-3">
        <span>Site exemple réalisé par Vyld</span>
        <Link to="/" className="underline hover:no-underline inline-flex items-center gap-1">
          <ArrowLeft size={12} /> Retour à Vyld
        </Link>
      </div>

      {/* Nav */}
      <nav className="bg-white border-b border-pink-100 px-8 py-4 flex items-center justify-between">
        <div>
          <p className="text-2xl font-bold text-pink-700 tracking-wide">Bella Fleur</p>
          <p className="text-xs text-pink-400 tracking-widest uppercase">Fleuriste artisanale</p>
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm text-gray-600">
          <a href="#" className="hover:text-pink-600 transition-colors">Boutique</a>
          <a href="#" className="hover:text-pink-600 transition-colors">Sur mesure</a>
          <a href="#" className="hover:text-pink-600 transition-colors">À propos</a>
        </div>
        <button className="flex items-center gap-2 bg-pink-600 text-white px-5 py-2 rounded-full text-sm hover:bg-pink-700 transition-colors">
          <ShoppingBag size={16} />
          Panier
        </button>
      </nav>

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-pink-50 to-rose-100 py-24 px-8 text-center overflow-hidden">
        <div className="absolute inset-0 opacity-10 text-[180px] flex items-center justify-center select-none pointer-events-none">🌸</div>
        <div className="relative max-w-2xl mx-auto">
          <p className="text-pink-500 text-xs tracking-widest uppercase mb-4">Livraison à Paris & IDF</p>
          <h1 className="text-5xl md:text-6xl font-bold text-[#2d1b1b] leading-tight mb-6">
            Des fleurs qui<br />
            <span className="text-pink-600">racontent une histoire</span>
          </h1>
          <p className="text-gray-500 text-lg mb-10">
            Bouquets artisanaux, compositions sur mesure et abonnements floraux.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="px-8 py-3.5 bg-pink-600 text-white rounded-full font-medium hover:bg-pink-700 transition-colors">
              Voir la boutique
            </button>
            <button className="px-8 py-3.5 border border-pink-300 text-pink-700 rounded-full font-medium hover:bg-pink-50 transition-colors">
              Commander sur mesure
            </button>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-pink-600 text-white py-10 px-8">
        <div className="max-w-4xl mx-auto grid grid-cols-3 divide-x divide-pink-500 text-center">
          {[['500+', 'Clients satisfaits'], ['48h', 'Délai de livraison'], ['100%', 'Fleurs fraîches']].map(([v, l]) => (
            <div key={l} className="px-4">
              <p className="text-3xl font-bold">{v}</p>
              <p className="text-pink-200 text-sm mt-1">{l}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Bouquets */}
      <section className="py-20 px-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Nos créations du moment</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {bouquets.map((b) => (
              <div key={b.name} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-pink-100 hover:-translate-y-1 transition-transform">
                <div className="bg-gradient-to-br from-pink-100 to-rose-200 aspect-square flex items-center justify-center text-6xl">
                  💐
                </div>
                <div className="p-5">
                  {b.tag && (
                    <span className="text-xs bg-pink-100 text-pink-600 px-2 py-0.5 rounded-full font-medium">{b.tag}</span>
                  )}
                  <h3 className="font-semibold text-[#2d1b1b] mt-2">{b.name}</h3>
                  <div className="flex items-center justify-between mt-3">
                    <p className="text-pink-600 font-bold text-lg">{b.price}</p>
                    <button className="text-sm bg-pink-600 text-white px-4 py-1.5 rounded-full hover:bg-pink-700 transition-colors">
                      Ajouter
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="bg-pink-50 py-16 px-8 text-center">
        <div className="max-w-xl mx-auto">
          <div className="flex justify-center gap-1 mb-4">
            {[...Array(5)].map((_, i) => <Star key={i} size={18} className="text-pink-400 fill-pink-400" />)}
          </div>
          <p className="text-gray-600 italic text-lg mb-4">
            "Les bouquets sont magnifiques et la livraison toujours ponctuelle. Je commande pour chaque occasion."
          </p>
          <p className="text-pink-600 font-semibold text-sm">— Sophie M., cliente depuis 2022</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#2d1b1b] text-pink-200 py-8 text-center text-sm">
        © 2026 Bella Fleur — Tous droits réservés
      </footer>
    </div>
  );
}
