import { useState, type FormEvent } from 'react';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';

const EMAILJS_SERVICE  = 'service_3gislmu';
const EMAILJS_TEMPLATE = 'template_h7q8e5o';
const EMAILJS_KEY      = 'TUvqvJWWAmvJ9bKZ3';

const TG_TOKEN   = '8757643096:AAEWUA2xarRzGB5SPYGj0ik3l10hqjU5x54';
const TG_CHAT_ID = '1737123713';

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  forfait: string;
  siteType: string;
  project: string;
}

const initialForm: FormData = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  forfait: '',
  siteType: '',
  project: '',
};

const forfaitLabel: Record<string, string> = {
  essentiel: 'Essentiel',
  confort: 'Confort',
  premium: 'Premium',
  inconnu: 'Je ne sais pas encore',
};

const siteTypeLabel: Record<string, string> = {
  vitrine: 'Site vitrine',
  ecommerce: 'E-commerce',
  portfolio: 'Portfolio',
  autre: 'Autre',
};

export default function ContactForm() {
  const [form, setForm] = useState<FormData>(initialForm);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const update = (field: keyof FormData, value: string) =>
    setForm((prev) => ({ ...prev, [field]: value }));

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(false);
    try {
      await emailjs.send(
        EMAILJS_SERVICE,
        EMAILJS_TEMPLATE,
        {
          prenom: form.firstName,
          nom: form.lastName,
          email: form.email,
          telephone: form.phone || '—',
          forfait: forfaitLabel[form.forfait] || '—',
          type_de_site: siteTypeLabel[form.siteType] || '—',
          projet: form.project,
        },
        EMAILJS_KEY,
      );

      const text = `📩 Nouveau devis Vyld !\n\n👤 ${form.firstName} ${form.lastName}\n📧 ${form.email}${form.phone ? `\n📱 ${form.phone}` : ''}\n📦 ${forfaitLabel[form.forfait] || '—'}\n🌐 ${siteTypeLabel[form.siteType] || '—'}\n\n💬 ${form.project}`;
      fetch(`https://api.telegram.org/bot${TG_TOKEN}/sendMessage`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ chat_id: TG_CHAT_ID, text }),
      });

      setSubmitted(true);
    } catch {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-12 text-center">
        <CheckCircle size={48} className="mx-auto text-vyld-violet mb-4" />
        <h3 className="text-2xl font-bold text-white mb-2">Demande envoyée !</h3>
        <p className="text-gray-400">Nous vous répondons sous 24h.</p>
      </div>
    );
  }

  const inputClass =
    'w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-vyld-violet/50 transition-colors';

  const selectClass =
    'w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-vyld-violet/50 transition-colors appearance-none';

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white/[0.03] border border-white/10 rounded-2xl p-8 space-y-5"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm text-gray-400 mb-1.5">
            Prénom <span className="text-vyld-rose">*</span>
          </label>
          <input
            type="text"
            required
            value={form.firstName}
            onChange={(e) => update('firstName', e.target.value)}
            className={inputClass}
            placeholder="Jean"
          />
        </div>
        <div>
          <label className="block text-sm text-gray-400 mb-1.5">
            Nom <span className="text-vyld-rose">*</span>
          </label>
          <input
            type="text"
            required
            value={form.lastName}
            onChange={(e) => update('lastName', e.target.value)}
            className={inputClass}
            placeholder="Dupont"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm text-gray-400 mb-1.5">
          Email <span className="text-vyld-rose">*</span>
        </label>
        <input
          type="email"
          required
          value={form.email}
          onChange={(e) => update('email', e.target.value)}
          className={inputClass}
          placeholder="jean@exemple.fr"
        />
      </div>

      <div>
        <label className="block text-sm text-gray-400 mb-1.5">Téléphone / WhatsApp</label>
        <input
          type="tel"
          value={form.phone}
          onChange={(e) => update('phone', e.target.value)}
          className={inputClass}
          placeholder="+33 6 12 34 56 78"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm text-gray-400 mb-1.5">Forfait</label>
          <select
            value={form.forfait}
            onChange={(e) => update('forfait', e.target.value)}
            className={selectClass}
          >
            <option value="" className="bg-[#0d0d1a]">Choisir...</option>
            <option value="essentiel" className="bg-[#0d0d1a]">Essentiel</option>
            <option value="confort" className="bg-[#0d0d1a]">Confort</option>
            <option value="premium" className="bg-[#0d0d1a]">Premium</option>
            <option value="inconnu" className="bg-[#0d0d1a]">Je ne sais pas encore</option>
          </select>
        </div>
        <div>
          <label className="block text-sm text-gray-400 mb-1.5">Type de site</label>
          <select
            value={form.siteType}
            onChange={(e) => update('siteType', e.target.value)}
            className={selectClass}
          >
            <option value="" className="bg-[#0d0d1a]">Choisir...</option>
            <option value="vitrine" className="bg-[#0d0d1a]">Site vitrine</option>
            <option value="ecommerce" className="bg-[#0d0d1a]">E-commerce</option>
            <option value="portfolio" className="bg-[#0d0d1a]">Portfolio</option>
            <option value="autre" className="bg-[#0d0d1a]">Autre</option>
          </select>
        </div>
      </div>

      <div>
        <label className="block text-sm text-gray-400 mb-1.5">
          Décrivez votre projet <span className="text-vyld-rose">*</span>
        </label>
        <textarea
          required
          rows={4}
          value={form.project}
          onChange={(e) => update('project', e.target.value)}
          className={inputClass + ' resize-none'}
          placeholder="Décrivez votre projet en quelques lignes..."
        />
      </div>

      {error && (
        <div className="flex items-center gap-2 text-red-400 text-sm bg-red-500/10 border border-red-500/20 rounded-xl px-4 py-3">
          <AlertCircle size={16} className="shrink-0" />
          Une erreur est survenue. Réessaie ou contacte-nous directement.
        </div>
      )}

      <button
        type="submit"
        disabled={loading}
        className="inline-flex items-center justify-center gap-2 w-full py-3.5 rounded-xl bg-gradient-vyld text-white text-sm font-medium hover:opacity-90 transition-opacity disabled:opacity-60 disabled:cursor-not-allowed"
      >
        <Send size={16} />
        {loading ? 'Envoi en cours...' : 'Envoyer ma demande'}
        {!loading && <span aria-hidden="true">&rarr;</span>}
      </button>
    </form>
  );
}
