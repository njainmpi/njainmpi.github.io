export default function Card({ title, subtitle, date, description }) {
  return (
    <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-5 my-4 border border-white/20 hover:bg-white/20 transition-all">
      <h3 className="text-xl font-semibold text-white">{title}</h3>
      {subtitle && <p className="text-cyan-200 text-sm">{subtitle}</p>}
      {date && <p className="text-gray-300 text-xs mb-2">{date}</p>}
      {description && <p className="text-gray-100 text-sm">{description}</p>}
    </div>
  );
}
