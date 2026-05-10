import { ExternalLink } from 'lucide-react';

interface PortfolioCardProps {
  title: string;
  category: string;
  url?: string;
  screenshot?: string;
  gradient: string;
  mockupContent?: React.ReactNode;
}

export default function PortfolioCard({
  title,
  category,
  url,
  screenshot,
  gradient,
  mockupContent,
}: PortfolioCardProps) {
  return (
    <div className="group relative bg-white/[0.02] border border-white/10 rounded-2xl overflow-hidden hover:-translate-y-1 transition-transform">
      {/* Browser mockup */}
      <div className="relative bg-[#1a1a2e] p-3">
        {/* Browser chrome */}
        <div className="flex items-center gap-1.5 mb-2">
          <div className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
          <div className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
          <div className="flex-1 mx-2 bg-white/5 rounded-md px-3 py-1">
            <p className="text-gray-500 text-[10px] truncate">{url ?? 'exemple.fr'}</p>
          </div>
        </div>

        {/* Screenshot or gradient mockup */}
        <div className="rounded-lg overflow-hidden aspect-[16/9]">
          {screenshot ? (
            <img
              src={screenshot}
              alt={title}
              className="w-full h-full object-cover object-top"
            />
          ) : (
            <div className={`w-full h-full ${gradient} flex items-center justify-center`}>
              {mockupContent}
            </div>
          )}
        </div>
      </div>

      {/* Info */}
      <div className="p-5 flex items-center justify-between">
        <div>
          <h3 className="text-white font-semibold text-sm">{title}</h3>
          <p className="text-gray-500 text-xs mt-0.5">{category}</p>
        </div>
        {url && (
          <a
            href={`https://${url}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-vyld-violet transition-colors"
            aria-label={`Voir ${title}`}
          >
            <ExternalLink size={16} />
          </a>
        )}
      </div>
    </div>
  );
}
