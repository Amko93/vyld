import { MessageCircle, Mail } from 'lucide-react';
import GradientText from '../components/GradientText';
import ContactForm from '../components/ContactForm';

export default function Contact() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-14 animate-fade-in-up">
          <p className="text-vyld-violet text-xs tracking-[0.25em] uppercase mb-4">
            Contact
          </p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Votre <GradientText>devis gratuit</GradientText>
          </h1>
          <p className="text-gray-400">
            Réponse sous 24h &middot; Sans engagement
          </p>
        </div>

        <ContactForm />

        <div className="flex items-center gap-4 my-10">
          <div className="flex-1 h-px bg-white/10" />
          <span className="text-gray-500 text-sm">
            ou contactez-moi directement
          </span>
          <div className="flex-1 h-px bg-white/10" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <a
            href="https://wa.me/33668155383"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 bg-green-500/5 border border-green-500/20 rounded-2xl p-5 hover:bg-green-500/10 transition-colors"
          >
            <div className="w-10 h-10 rounded-full bg-green-500/10 flex items-center justify-center">
              <MessageCircle size={20} className="text-green-400" />
            </div>
            <div>
              <p className="text-white font-medium text-sm">WhatsApp</p>
              <p className="text-gray-400 text-xs">Réponse rapide</p>
            </div>
          </a>

          <a
            href="mailto:ghanemamir397@gmail.com"
            className="flex items-center gap-4 bg-vyld-violet/5 border border-vyld-violet/20 rounded-2xl p-5 hover:bg-vyld-violet/10 transition-colors"
          >
            <div className="w-10 h-10 rounded-full bg-vyld-violet/10 flex items-center justify-center">
              <Mail size={20} className="text-vyld-violet" />
            </div>
            <div>
              <p className="text-white font-medium text-sm">Email</p>
              <p className="text-gray-400 text-xs">ghanemamir397@gmail.com</p>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
