import Navbar from './components/layout/Navbar';
import Hero from './sections/Hero';
import Stack from './sections/Stack';
import Projects from './sections/Projects';

function App() {
  return (
    // Container Principal: Controla o fundo base e a fonte padrão
    <div className="bg-arrakis-base min-h-screen relative overflow-x-hidden selection:bg-arrakis-spice selection:text-black">
      
      {/* === BACKGROUND FX LAYER === */}
      
      {/* 1. Efeito de Ruído (Noise/Grain) - Via SVG Base64 inline no CSS ou aqui direto */}
      <div className="fixed inset-0 pointer-events-none z-50 opacity-[0.03] mix-blend-overlay" 
           style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}>
      </div>

      {/* 2. Orbes Ambientais (Luzes de fundo) */}
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-arrakis-spice/10 rounded-full blur-[100px] animate-pulse-slow"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-arrakis-eyes/5 rounded-full blur-[120px]"></div>
      </div>

      {/* === LAYOUT LAYER === */}
      
      <Navbar />

      <main className="max-w-6xl mx-auto px-6 w-full pb-20">
        <Hero />
        
        {/* Divisor estético */}
        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-arrakis-gold/30 to-transparent my-16"></div>
        
        <Stack />
        <Projects />
        
        {/* Footer Simples Embutido (Ou extrair para componente depois) */}
        <footer className="py-12 text-center text-arrakis-sand/30 font-mono text-xs uppercase tracking-widest border-t border-arrakis-gold/10 mt-32">
          <p className="mb-2">The Code must flow.</p>
          <p>&copy; 2025 Lorran Azarany.</p>
        </footer>
      </main>

    </div>
  );
}

export default App;