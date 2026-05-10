import GradientText from './GradientText';

const stats = [
  { value: '7j', label: 'Délai moyen' },
  { value: '3', label: 'Forfaits disponibles' },
  { value: '100%', label: 'Satisfaction client' },
];

export default function StatsBar() {
  return (
    <div className="max-w-3xl mx-auto mt-16 grid grid-cols-3 divide-x divide-white/10">
      {stats.map((stat) => (
        <div key={stat.label} className="text-center px-4">
          <div className="text-3xl md:text-4xl font-bold">
            <GradientText>{stat.value}</GradientText>
          </div>
          <div className="text-gray-400 text-sm mt-1">{stat.label}</div>
        </div>
      ))}
    </div>
  );
}
