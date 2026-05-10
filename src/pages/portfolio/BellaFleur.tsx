import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Star, ArrowLeft, ArrowRight, X, Plus, Minus, Check, Search, Heart } from 'lucide-react';

type Page = 'accueil' | 'boutique' | 'produit' | 'histoire' | 'contact';

interface Product {
  id: number;
  name: string;
  price: number;
  oldPrice?: number;
  emoji: string;
  tag?: string;
  category: string;
  desc: string;
  colors: string;
}

const products: Product[] = [
  { id: 1, name: 'Bouquet Romantique', price: 45, emoji: '💐', tag: 'Bestseller', category: 'Bouquets', desc: 'Un bouquet généreux de pivoines, roses et renoncules dans des tons roses et bordeaux. Livré avec ruban satiné et carte personnalisée.', colors: 'from-pink-300 to-rose-400' },
  { id: 2, name: 'Roses Premium', price: 65, oldPrice: 80, emoji: '🌹', tag: 'Promo', category: 'Roses', desc: 'Une sélection de 12 roses longues tiges de variété Éden. Symbole d\'élégance, idéal pour les grandes occasions.', colors: 'from-red-400 to-rose-600' },
  { id: 3, name: 'Composition Printanière', price: 38, emoji: '🌸', category: 'Compositions', desc: 'Un mélange coloré de fleurs de saison : tulipes, jonquilles et marguerites. Parfait pour égayer une pièce.', colors: 'from-yellow-300 to-orange-400' },
  { id: 4, name: 'Bouquet Mariée', price: 120, emoji: '🤍', tag: 'Sur commande', category: 'Mariage', desc: 'Bouquet de mariée sur mesure en pivoines blanches et eucalyptus. Consultation offerte pour adapter au thème de votre mariage.', colors: 'from-gray-100 to-gray-300' },
  { id: 5, name: 'Plante Tropicale', price: 29, emoji: '🌿', category: 'Plantes', desc: 'Monstera deliciosa dans un cache-pot en céramique beige. Facile d\'entretien, idéale pour la maison ou le bureau.', colors: 'from-green-400 to-emerald-600' },
  { id: 6, name: 'Orchidée Blanche', price: 55, emoji: '🌺', tag: 'Premium', category: 'Orchidées', desc: 'Orchidée Phalaenopsis blanche à 2 tiges en pot céramique noir mat. Fleurit jusqu\'à 3 mois avec peu d\'entretien.', colors: 'from-purple-200 to-pink-300' },
];

const testimonials = [
  { name: 'Sophie M.', note: 5, text: 'Commande pour un anniversaire, les fleurs étaient magnifiques et livrées à l\'heure. Je recommande vivement !' },
  { name: 'Thomas L.', note: 5, text: 'Bouquet de mariage parfait, exactement ce que je voulais. L\'équipe est très à l\'écoute.' },
  { name: 'Claire D.', note: 4, text: 'Belle qualité, fleurs très fraîches. Je suis cliente depuis 2 ans et je n\'ai jamais été déçue.' },
];

export default function BellaFleur() {
  const [page, setPage] = useState<Page>('accueil');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [cart, setCart] = useState<{ product: Product; qty: number }[]>([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [qty, setQty] = useState(1);
  const [orderSent, setOrderSent] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  const cartCount = cart.reduce((s, i) => s + i.qty, 0);
  const cartTotal = cart.reduce((s, i) => s + i.product.price * i.qty, 0);

  const addToCart = (product: Product) => {
    setCart(prev => {
      const existing = prev.find(i => i.product.id === product.id);
      if (existing) return prev.map(i => i.product.id === product.id ? { ...i, qty: i.qty + qty } : i);
      return [...prev, { product, qty }];
    });
    setQty(1);
    setCartOpen(true);
  };

  const removeFromCart = (id: number) => setCart(prev => prev.filter(i => i.product.id !== id));

  const openProduct = (p: Product) => { setSelectedProduct(p); setQty(1); setPage('produit'); };
  const goTo = (p: Page) => { setPage(p); setMobileMenu(false); window.scrollTo(0, 0); };

  const nav = (
    <nav className="bg-white border-b border-pink-100 px-6 sticky top-0 z-40">
      <div className="max-w-6xl mx-auto h-16 flex items-center justify-between">
        <button onClick={() => goTo('accueil')} className="text-left">
          <p className="text-xl font-bold text-pink-700 leading-none">Bella Fleur</p>
          <p className="text-[10px] text-pink-400 tracking-widest uppercase">Fleuriste artisanale · Paris</p>
        </button>

        <div className="hidden md:flex items-center gap-8 text-sm text-gray-600">
          {(['accueil', 'boutique', 'histoire', 'contact'] as Page[]).map(p => (
            <button key={p} onClick={() => goTo(p)}
              className={`capitalize hover:text-pink-600 transition-colors ${page === p ? 'text-pink-600 font-medium' : ''}`}>
              {p === 'histoire' ? 'Notre histoire' : p.charAt(0).toUpperCase() + p.slice(1)}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <button onClick={() => setCartOpen(true)} className="relative flex items-center gap-2 bg-pink-600 text-white px-4 py-2 rounded-full text-sm hover:bg-pink-700 transition-colors">
            <ShoppingBag size={16} />
            <span className="hidden sm:inline">Panier</span>
            {cartCount > 0 && <span className="absolute -top-2 -right-2 w-5 h-5 bg-pink-900 text-white text-xs rounded-full flex items-center justify-center">{cartCount}</span>}
          </button>
          <button className="md:hidden text-gray-600" onClick={() => setMobileMenu(!mobileMenu)}>☰</button>
        </div>
      </div>
      {mobileMenu && (
        <div className="md:hidden bg-white border-t border-pink-100 py-4 flex flex-col gap-3 px-6 text-sm text-gray-600">
          {(['accueil', 'boutique', 'histoire', 'contact'] as Page[]).map(p => (
            <button key={p} onClick={() => goTo(p)} className="text-left capitalize hover:text-pink-600 transition-colors">
              {p === 'histoire' ? 'Notre histoire' : p.charAt(0).toUpperCase() + p.slice(1)}
            </button>
          ))}
        </div>
      )}
    </nav>
  );

  const cartDrawer = (
    <div className={`fixed inset-0 z-50 ${cartOpen ? '' : 'pointer-events-none'}`}>
      <div className={`absolute inset-0 bg-black/40 transition-opacity ${cartOpen ? 'opacity-100' : 'opacity-0'}`} onClick={() => setCartOpen(false)} />
      <div className={`absolute right-0 top-0 bottom-0 w-full max-w-sm bg-white shadow-2xl transition-transform ${cartOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex items-center justify-between p-6 border-b border-pink-100">
          <h2 className="font-bold text-lg text-[#2d1b1b]">Mon panier ({cartCount})</h2>
          <button onClick={() => setCartOpen(false)} className="text-gray-400 hover:text-gray-600"><X size={20} /></button>
        </div>
        <div className="flex-1 overflow-y-auto p-6 space-y-4" style={{ maxHeight: 'calc(100vh - 200px)' }}>
          {cart.length === 0 ? (
            <div className="text-center py-12 text-gray-400">
              <ShoppingBag size={40} className="mx-auto mb-3 opacity-30" />
              <p>Votre panier est vide</p>
            </div>
          ) : cart.map(({ product, qty }) => (
            <div key={product.id} className="flex items-center gap-4 p-3 bg-pink-50 rounded-xl">
              <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${product.colors} flex items-center justify-center text-xl shrink-0`}>{product.emoji}</div>
              <div className="flex-1 min-w-0">
                <p className="font-medium text-sm text-[#2d1b1b] truncate">{product.name}</p>
                <p className="text-pink-600 text-sm font-bold">{product.price * qty}€</p>
              </div>
              <button onClick={() => removeFromCart(product.id)} className="text-gray-400 hover:text-red-400"><X size={16} /></button>
            </div>
          ))}
        </div>
        {cart.length > 0 && (
          <div className="p-6 border-t border-pink-100">
            <div className="flex justify-between mb-4">
              <span className="text-gray-600">Total</span>
              <span className="font-bold text-lg text-[#2d1b1b]">{cartTotal}€</span>
            </div>
            <button onClick={() => { setOrderSent(true); setCart([]); setCartOpen(false); }}
              className="w-full bg-pink-600 text-white py-3.5 rounded-full font-medium hover:bg-pink-700 transition-colors">
              Commander — {cartTotal}€
            </button>
            <p className="text-xs text-gray-400 text-center mt-3">Livraison gratuite dès 60€ · Paris & IDF</p>
          </div>
        )}
      </div>
    </div>
  );

  if (orderSent) return (
    <div className="min-h-screen bg-[#fff9f7] flex items-center justify-center px-6">
      <div className="text-center max-w-md">
        <div className="w-20 h-20 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <Check size={36} className="text-pink-600" />
        </div>
        <h2 className="text-2xl font-bold text-[#2d1b1b] mb-3">Commande confirmée !</h2>
        <p className="text-gray-500 mb-6">Merci pour votre commande. Vous recevrez un email de confirmation sous peu.</p>
        <button onClick={() => { setOrderSent(false); setPage('accueil'); }} className="bg-pink-600 text-white px-8 py-3 rounded-full hover:bg-pink-700 transition-colors">
          Retour à la boutique
        </button>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-[#fff9f7] text-[#2d1b1b] font-[system-ui]">
      <div className="bg-gradient-to-r from-[#667eea] to-[#764ba2] text-white text-xs text-center py-2 px-4 flex items-center justify-center gap-3">
        <span>Exemple de réalisation Vyld</span>
        <Link to="/" className="underline inline-flex items-center gap-1"><ArrowLeft size={12} /> Retour à Vyld</Link>
      </div>

      {nav}
      {cartDrawer}

      {/* ACCUEIL */}
      {page === 'accueil' && (
        <>
          <section className="bg-gradient-to-br from-pink-50 via-rose-50 to-white py-20 px-6">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <span className="inline-block bg-pink-100 text-pink-600 text-xs font-semibold px-3 py-1 rounded-full mb-6">🚚 Livraison Paris & IDF sous 24h</span>
                <h1 className="text-5xl md:text-6xl font-bold text-[#2d1b1b] leading-tight mb-6">
                  Des fleurs qui<br /><span className="text-pink-600">vous ressemblent</span>
                </h1>
                <p className="text-gray-500 text-lg mb-8 leading-relaxed">Bouquets artisanaux, compositions sur mesure et abonnements floraux. Chaque création est unique, comme vous.</p>
                <div className="flex flex-wrap gap-4">
                  <button onClick={() => goTo('boutique')} className="flex items-center gap-2 px-8 py-3.5 bg-pink-600 text-white rounded-full font-medium hover:bg-pink-700 transition-colors">
                    Voir la boutique <ArrowRight size={16} />
                  </button>
                  <button onClick={() => goTo('contact')} className="px-8 py-3.5 border border-pink-300 text-pink-700 rounded-full font-medium hover:bg-pink-50 transition-colors">
                    Commande sur mesure
                  </button>
                </div>
                <div className="flex items-center gap-6 mt-10">
                  {[['500+', 'Clients'], ['24h', 'Livraison'], ['100%', 'Frais']].map(([v, l]) => (
                    <div key={l} className="text-center">
                      <p className="font-bold text-xl text-pink-700">{v}</p>
                      <p className="text-xs text-gray-400">{l}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {products.slice(0, 4).map(p => (
                  <button key={p.id} onClick={() => openProduct(p)}
                    className={`rounded-2xl bg-gradient-to-br ${p.colors} aspect-square flex flex-col items-center justify-center hover:scale-105 transition-transform cursor-pointer shadow-sm`}>
                    <span className="text-4xl mb-2">{p.emoji}</span>
                    <span className="text-white font-semibold text-sm px-2 text-center">{p.name}</span>
                    <span className="text-white/80 text-xs mt-1">{p.price}€</span>
                  </button>
                ))}
              </div>
            </div>
          </section>

          <section className="py-6 bg-pink-600">
            <div className="max-w-4xl mx-auto grid grid-cols-3 divide-x divide-pink-500 text-center text-white">
              {[['🌸', 'Fleurs fraîches', 'Approvisionnement quotidien'], ['📦', 'Emballage soigné', 'Boîtes recyclables premium'], ['⭐', 'Note 4.9/5', 'Plus de 300 avis clients']].map(([icon, t, s]) => (
                <div key={t} className="py-4 px-6">
                  <div className="text-2xl mb-1">{icon}</div>
                  <p className="font-semibold text-sm">{t}</p>
                  <p className="text-pink-200 text-xs">{s}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="py-20 px-6">
            <div className="max-w-6xl mx-auto">
              <div className="flex items-end justify-between mb-10">
                <div>
                  <p className="text-pink-500 text-xs uppercase tracking-widest mb-2">Nos créations</p>
                  <h2 className="text-3xl font-bold">Bestsellers du moment</h2>
                </div>
                <button onClick={() => goTo('boutique')} className="text-pink-600 text-sm hover:underline flex items-center gap-1">Tout voir <ArrowRight size={14} /></button>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {products.slice(0, 3).map(p => (
                  <div key={p.id} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-pink-100 hover:-translate-y-1 transition-transform">
                    <div className={`bg-gradient-to-br ${p.colors} aspect-[4/3] flex items-center justify-center relative`}>
                      <span className="text-7xl">{p.emoji}</span>
                      {p.tag && <span className="absolute top-3 left-3 bg-white text-pink-600 text-xs font-semibold px-2.5 py-1 rounded-full">{p.tag}</span>}
                      <button className="absolute top-3 right-3 w-8 h-8 bg-white rounded-full flex items-center justify-center text-pink-400 hover:text-pink-600"><Heart size={14} /></button>
                    </div>
                    <div className="p-5">
                      <h3 className="font-semibold text-[#2d1b1b] mb-1">{p.name}</h3>
                      <p className="text-gray-400 text-sm mb-4">{p.category}</p>
                      <div className="flex items-center justify-between">
                        <div>
                          <span className="text-pink-700 font-bold text-lg">{p.price}€</span>
                          {p.oldPrice && <span className="text-gray-400 text-sm line-through ml-2">{p.oldPrice}€</span>}
                        </div>
                        <div className="flex gap-2">
                          <button onClick={() => openProduct(p)} className="text-xs text-pink-600 border border-pink-200 px-3 py-1.5 rounded-full hover:bg-pink-50 transition-colors">Détails</button>
                          <button onClick={() => { setQty(1); addToCart(p); }} className="text-xs bg-pink-600 text-white px-3 py-1.5 rounded-full hover:bg-pink-700 transition-colors">Ajouter</button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="bg-pink-50 py-16 px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold text-center mb-10">Ce que disent nos clients</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {testimonials.map(t => (
                  <div key={t.name} className="bg-white rounded-2xl p-6 shadow-sm border border-pink-100">
                    <div className="flex gap-0.5 mb-3">{[...Array(t.note)].map((_, i) => <Star key={i} size={14} className="text-pink-400 fill-pink-400" />)}</div>
                    <p className="text-gray-600 text-sm italic mb-4">"{t.text}"</p>
                    <p className="text-pink-700 font-semibold text-sm">— {t.name}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="py-16 px-6 bg-gradient-to-br from-pink-600 to-rose-700 text-white text-center">
            <h2 className="text-3xl font-bold mb-3">Abonnement floral mensuel</h2>
            <p className="text-pink-100 mb-8 max-w-md mx-auto">Recevez chaque mois un bouquet de saison à domicile. Dès 35€/mois, sans engagement.</p>
            <button onClick={() => goTo('contact')} className="bg-white text-pink-700 font-semibold px-10 py-3.5 rounded-full hover:bg-pink-50 transition-colors">
              Découvrir l'abonnement →
            </button>
          </section>
        </>
      )}

      {/* BOUTIQUE */}
      {page === 'boutique' && (
        <section className="py-12 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h1 className="text-3xl font-bold">Boutique</h1>
                <p className="text-gray-400 text-sm mt-1">{products.length} créations disponibles</p>
              </div>
              <div className="flex items-center gap-2 bg-white border border-pink-200 rounded-full px-4 py-2">
                <Search size={16} className="text-gray-400" />
                <input type="text" placeholder="Rechercher..." className="text-sm outline-none text-gray-600 w-36" />
              </div>
            </div>
            <div className="flex gap-2 flex-wrap mb-8">
              {['Tout', 'Bouquets', 'Roses', 'Compositions', 'Mariage', 'Plantes', 'Orchidées'].map(cat => (
                <button key={cat} className="px-4 py-1.5 rounded-full text-sm border border-pink-200 hover:bg-pink-600 hover:text-white hover:border-pink-600 transition-colors">
                  {cat}
                </button>
              ))}
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map(p => (
                <div key={p.id} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-pink-100 hover:-translate-y-1 transition-transform">
                  <div className={`bg-gradient-to-br ${p.colors} aspect-[4/3] flex items-center justify-center relative cursor-pointer`} onClick={() => openProduct(p)}>
                    <span className="text-7xl">{p.emoji}</span>
                    {p.tag && <span className="absolute top-3 left-3 bg-white text-pink-600 text-xs font-semibold px-2.5 py-1 rounded-full">{p.tag}</span>}
                    <button className="absolute top-3 right-3 w-8 h-8 bg-white rounded-full flex items-center justify-center text-pink-400 hover:text-pink-600"><Heart size={14} /></button>
                  </div>
                  <div className="p-5">
                    <h3 className="font-semibold text-[#2d1b1b] mb-1">{p.name}</h3>
                    <p className="text-gray-400 text-sm mb-4">{p.category}</p>
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-pink-700 font-bold text-lg">{p.price}€</span>
                        {p.oldPrice && <span className="text-gray-400 text-sm line-through ml-2">{p.oldPrice}€</span>}
                      </div>
                      <div className="flex gap-2">
                        <button onClick={() => openProduct(p)} className="text-xs text-pink-600 border border-pink-200 px-3 py-1.5 rounded-full hover:bg-pink-50 transition-colors">Détails</button>
                        <button onClick={() => { setQty(1); addToCart(p); }} className="text-xs bg-pink-600 text-white px-3 py-1.5 rounded-full hover:bg-pink-700 transition-colors">Ajouter</button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* PRODUIT */}
      {page === 'produit' && selectedProduct && (
        <section className="py-12 px-6">
          <div className="max-w-5xl mx-auto">
            <button onClick={() => goTo('boutique')} className="flex items-center gap-2 text-gray-400 hover:text-pink-600 text-sm mb-8 transition-colors">
              <ArrowLeft size={16} /> Retour à la boutique
            </button>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
              <div className={`bg-gradient-to-br ${selectedProduct.colors} rounded-3xl aspect-square flex items-center justify-center text-[120px]`}>
                {selectedProduct.emoji}
              </div>
              <div>
                {selectedProduct.tag && <span className="inline-block bg-pink-100 text-pink-600 text-xs font-semibold px-3 py-1 rounded-full mb-4">{selectedProduct.tag}</span>}
                <h1 className="text-3xl font-bold text-[#2d1b1b] mb-2">{selectedProduct.name}</h1>
                <p className="text-gray-400 text-sm mb-4">{selectedProduct.category}</p>
                <div className="flex items-center gap-2 mb-6">
                  <span className="text-3xl font-bold text-pink-700">{selectedProduct.price}€</span>
                  {selectedProduct.oldPrice && <span className="text-gray-400 text-lg line-through">{selectedProduct.oldPrice}€</span>}
                </div>
                <p className="text-gray-600 leading-relaxed mb-8">{selectedProduct.desc}</p>
                <div className="flex items-center gap-3 mb-6">
                  <div className="flex items-center border border-pink-200 rounded-full overflow-hidden">
                    <button onClick={() => setQty(q => Math.max(1, q - 1))} className="px-4 py-2 hover:bg-pink-50 text-pink-600"><Minus size={14} /></button>
                    <span className="px-4 py-2 font-semibold text-sm">{qty}</span>
                    <button onClick={() => setQty(q => q + 1)} className="px-4 py-2 hover:bg-pink-50 text-pink-600"><Plus size={14} /></button>
                  </div>
                  <button onClick={() => addToCart(selectedProduct)}
                    className="flex-1 flex items-center justify-center gap-2 bg-pink-600 text-white py-3 rounded-full font-medium hover:bg-pink-700 transition-colors">
                    <ShoppingBag size={16} /> Ajouter au panier — {selectedProduct.price * qty}€
                  </button>
                </div>
                <div className="space-y-2 text-sm text-gray-500">
                  <p>🚚 Livraison Paris & IDF sous 24h (dès 60€ offerte)</p>
                  <p>🌸 Fleurs fraîches garanties — remplacées si nécessaire</p>
                  <p>💳 Paiement sécurisé — CB, PayPal, Virement</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* HISTOIRE */}
      {page === 'histoire' && (
        <section className="py-16 px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <p className="text-pink-500 text-xs uppercase tracking-widest mb-4">À propos</p>
              <h1 className="text-4xl font-bold mb-4">Notre histoire</h1>
              <p className="text-gray-500 max-w-lg mx-auto">Une passion pour les fleurs, transmise de génération en génération.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-16">
              <div className="bg-gradient-to-br from-pink-100 to-rose-200 rounded-3xl aspect-square flex items-center justify-center text-9xl">🌸</div>
              <div>
                <h2 className="text-2xl font-bold mb-4">Fondée en 2015 par Marie Leclerc</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Après 10 ans passés dans les plus grandes maisons florales parisiennes, Marie a ouvert Bella Fleur avec une conviction simple : les fleurs doivent raconter une histoire.
                </p>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Aujourd'hui, notre atelier reçoit ses approvisionnements directement des producteurs locaux et hollandais chaque matin, garantissant une fraîcheur incomparable.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  {[['2015', 'Année de création'], ['500+', 'Clients fidèles'], ['12', 'Prix floraux'], ['100%', 'Fleurs fraîches']].map(([v, l]) => (
                    <div key={l} className="bg-pink-50 rounded-xl p-4 text-center">
                      <p className="text-2xl font-bold text-pink-700">{v}</p>
                      <p className="text-xs text-gray-500 mt-1">{l}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="bg-pink-600 rounded-3xl p-10 text-white text-center">
              <h2 className="text-2xl font-bold mb-3">Venez nous rendre visite</h2>
              <p className="text-pink-100 mb-2">12 rue des Fleurs, 75011 Paris</p>
              <p className="text-pink-100 mb-6">Lun-Sam : 9h-19h · Dim : 10h-14h</p>
              <button onClick={() => goTo('contact')} className="bg-white text-pink-700 font-semibold px-8 py-3 rounded-full hover:bg-pink-50 transition-colors">
                Nous contacter
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
              <p className="text-pink-500 text-xs uppercase tracking-widest mb-4">Contact</p>
              <h1 className="text-4xl font-bold mb-3">Parlons de votre projet</h1>
              <p className="text-gray-400">Mariage, événement, abonnement ou simple question — on vous répond sous 2h.</p>
            </div>
            <div className="bg-white border border-pink-100 rounded-3xl p-8 shadow-sm">
              <div className="grid grid-cols-2 gap-5 mb-5">
                <div><label className="block text-sm text-gray-500 mb-1.5">Prénom</label><input type="text" placeholder="Marie" className="w-full border border-pink-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-pink-400 transition-colors" /></div>
                <div><label className="block text-sm text-gray-500 mb-1.5">Nom</label><input type="text" placeholder="Dupont" className="w-full border border-pink-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-pink-400 transition-colors" /></div>
              </div>
              <div className="mb-5"><label className="block text-sm text-gray-500 mb-1.5">Email</label><input type="email" placeholder="marie@exemple.fr" className="w-full border border-pink-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-pink-400 transition-colors" /></div>
              <div className="mb-5">
                <label className="block text-sm text-gray-500 mb-1.5">Sujet</label>
                <select className="w-full border border-pink-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-pink-400 transition-colors appearance-none">
                  <option>Commande sur mesure</option>
                  <option>Mariage / Événement</option>
                  <option>Abonnement floral</option>
                  <option>Autre</option>
                </select>
              </div>
              <div className="mb-6"><label className="block text-sm text-gray-500 mb-1.5">Message</label><textarea rows={4} placeholder="Décrivez votre projet..." className="w-full border border-pink-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-pink-400 transition-colors resize-none" /></div>
              <button className="w-full bg-pink-600 text-white py-3.5 rounded-full font-medium hover:bg-pink-700 transition-colors">
                Envoyer le message →
              </button>
            </div>
            <div className="mt-8 grid grid-cols-3 gap-4 text-center text-sm text-gray-500">
              <div><p className="text-lg mb-1">📍</p><p>12 rue des Fleurs, Paris 11e</p></div>
              <div><p className="text-lg mb-1">📞</p><p>01 23 45 67 89</p></div>
              <div><p className="text-lg mb-1">🕐</p><p>Lun-Sam 9h-19h</p></div>
            </div>
          </div>
        </section>
      )}

      <footer className="bg-[#2d1b1b] text-pink-200 py-10 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <p className="text-xl font-bold text-white mb-2">Bella Fleur</p>
            <p className="text-pink-300 text-sm leading-relaxed">Fleuriste artisanale à Paris depuis 2015. Des fleurs fraîches, des créations uniques.</p>
          </div>
          <div>
            <p className="font-semibold text-white mb-3">Navigation</p>
            <div className="space-y-2 text-sm">
              {(['accueil', 'boutique', 'histoire', 'contact'] as Page[]).map(p => (
                <button key={p} onClick={() => goTo(p)} className="block text-pink-300 hover:text-white transition-colors capitalize">
                  {p === 'histoire' ? 'Notre histoire' : p.charAt(0).toUpperCase() + p.slice(1)}
                </button>
              ))}
            </div>
          </div>
          <div>
            <p className="font-semibold text-white mb-3">Livraison</p>
            <p className="text-pink-300 text-sm">Paris & Île-de-France · Sous 24h · Gratuite dès 60€</p>
          </div>
        </div>
        <div className="border-t border-pink-900 mt-8 pt-6 text-center text-pink-400 text-xs">
          © 2026 Bella Fleur — Tous droits réservés
        </div>
      </footer>
    </div>
  );
}
