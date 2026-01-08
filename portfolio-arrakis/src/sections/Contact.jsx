/**
 * Seção de Contato (Footer Action).
 * Possui um elemento decorativo animado (Spinner) e links de conversão.
 */
export default function Contact() {
  return (
    <section id="contact" className="relative bg-arrakis-deep border-t border-arrakis-gold/20 p-12 text-center overflow-hidden mb-0">
        
        {/* ELEMENTO DECORATIVO: Círculo Giratório*/}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] border border-arrakis-gold/10 rounded-full animate-spin-slow pointer-events-none"></div>

        <div className="relative z-10">
            <h3 className="font-imperial text-3xl text-white mb-6">
                Iniciar Contato
            </h3>
            
            <p className="font-tech text-arrakis-sand/60 mb-8 max-w-md mx-auto">
                Atualmente aberto a novas oportunidades em Engenharia de Software e Análise de Dados.
            </p>

            <div className="flex justify-center gap-6">
                <a 
                    href="mailto:lorrandavi@gmail.com" 
                    className="flex items-center gap-3 text-arrakis-sand hover:text-arrakis-spice transition-colors uppercase tracking-widest text-sm font-bold"
                >
                    <i className="fa-solid fa-envelope"></i> Email
                </a>
                
                <a 
                    href="https://linkedin.com/in/lorran-azarany" 
                    target="_blank"
                    className="flex items-center gap-3 text-arrakis-sand hover:text-arrakis-eyes transition-colors uppercase tracking-widest text-sm font-bold"
                >
                    <i className="fa-brands fa-linkedin"></i> LinkedIn
                </a>
            </div>
        </div>
    </section>
  );
}