/**
 * Container genérico com efeito de vidro (Glassmorphism) e bordas.
 * Usa o padrão 'Composition' do React (props.children).
 */
export default function Card({ children, className = '' }) {
  return (
    // A classe 'group' aqui permite que os filhos saibam quando o pai está em hover
    <div className={`bg-arrakis-deep/50 border border-arrakis-gold/10 p-8 transition-all duration-500 relative overflow-hidden group ${className}`}>
      {children}
    </div>
  );
}