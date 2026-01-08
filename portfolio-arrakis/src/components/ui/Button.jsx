/**
 * Componente de Botão Reutilizável.
 * Suporta variantes visuais ('primary' ou 'secondary') e polimorfismo (pode ser <a> ou <button>).
 * * @param {Object} props
 * @param {React.ReactNode} props.children - O texto dentro do botão
 * @param {'primary' | 'secondary'} [props.variant='primary'] - Estilo visual
 * @param {string} [props.href] - Se fornecido, o botão vira um link
 * @param {string} [props.className] - Classes extras opcionais
 * @param {Object} [props.rest] - Outros atributos (onClick, target, etc)
 */
export default function Button({ children, variant = 'primary', href, className = '', ...rest }) {
  
  // 1. Definimos a base comum a todos os botões (padding, fonte, uppercase)
  const baseStyles = "px-8 py-3 uppercase tracking-widest font-bold transition-all duration-300 inline-block text-center text-sm cursor-pointer";
  
  // 2. Mapas de Estilos (Design System Token Mapping)
  const variants = {
    // O estilo "Laranja Brilhante"
    primary: "bg-transparent border border-arrakis-spice text-arrakis-spice hover:bg-arrakis-spice hover:text-black shadow-[0_0_20px_rgba(255,89,0,0.3)] hover:shadow-[0_0_40px_rgba(255,89,0,0.6)]",
    
    // O estilo "Dourado Sutil"
    secondary: "bg-transparent border border-arrakis-gold/30 text-arrakis-gold hover:bg-arrakis-gold/10"
  };

  // 3. Montagem da classe final string
  const finalClass = `${baseStyles} ${variants[variant]} ${className}`;

  // 4. Renderização Condicional
  if (href) {
    return (
      <a href={href} className={finalClass} {...rest}>
        {children}
      </a>
    );
  }

  return (
    <button className={finalClass} {...rest}>
      {children}
    </button>
  );
}