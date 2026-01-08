import { HERO_DATA } from '../data/portfolio';
import Button from '../components/ui/Button';

export default function Hero() {
  return (
    <section id="about" className="min-h-[80vh] flex flex-col justify-center items-start gap-6 py-20 relative">
      
      {/* Kicker (Texto pequeno) */}
      <p className="text-arrakis-spice uppercase tracking-[0.3em] text-sm font-bold flex items-center gap-2 animate-pulse-slow">
        <i className="fa-solid fa-diamond text-[8px]"></i> {HERO_DATA.kicker}
      </p>
      
      {/* Título Principal */}
      <h1 className="font-imperial text-5xl md:text-8xl text-white font-black leading-none tracking-tighter mix-blend-screen">
        {HERO_DATA.title}
      </h1>
      
      {/* Subtítulo com borda lateral */}
      <h2 className="font-tech text-xl md:text-3xl text-arrakis-gold/80 uppercase tracking-widest border-l-4 border-arrakis-spice pl-4 my-2">
        {HERO_DATA.subtitle}
      </h2>
      
      {/* Descrição */}
      <p className="max-w-xl text-lg text-arrakis-sand/80 leading-relaxed mb-6 font-light">
        {HERO_DATA.description}
      </p>

      {/* Botões de Ação */}
      <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
        <Button href="#projects" variant="primary">Ver Projetos</Button>
        <Button href="https://linkedin.com/in/lorran-azarany" target="_blank" variant="secondary">LinkedIn</Button>
      </div>
    </section>
  );
}