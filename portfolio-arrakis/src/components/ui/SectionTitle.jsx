/**
 * Título padronizado para manter consistência entre as seções.
 */
export default function SectionTitle({ title, subtitle }) {
  return (
    <div className="flex flex-col md:flex-row md:items-end gap-4 mb-12 border-b border-arrakis-gold/20 pb-4">
      <h3 className="font-imperial text-4xl text-arrakis-sand">
        {title}
      </h3>
      
      {/* Só renderiza o subtitle se ele for passado (Renderização Condicional) */}
      {subtitle && (
        <span className="text-arrakis-spice font-mono text-xs mb-2 md:mb-1">
          {subtitle}
        </span>
      )}
    </div>
  );
}