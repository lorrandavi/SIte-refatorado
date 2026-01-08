import { STACK_DATA } from '../data/portfolio';
import SectionTitle from '../components/ui/SectionTitle';
import Card from '../components/ui/Card';

export default function Stack() {
  return (
    <section id="stack" className="mb-32 scroll-mt-24">
      <SectionTitle title="Arsenal Tecnológico" subtitle="/// STATUS: OPERATIONAL" />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {STACK_DATA.map((item, index) => (
          <Card key={index} className="hover:border-opacity-50 h-full">
            
            {/* Ícone de fundo (Absolute) */}
            <div className="absolute top-0 right-0 p-4 opacity-20 group-hover:opacity-100 transition-opacity">
               <i className={`${item.icon} text-4xl text-${item.colorToken.split('-')[1] === 'spice' ? 'arrakis-spice' : item.colorToken.split('-')[1] === 'eyes' ? 'arrakis-eyes' : 'arrakis-gold'}`}></i>
            </div>

            <h4 className="font-imperial text-xl text-white mb-6 relative z-10">
              {item.title}
            </h4>

            <ul className="space-y-3 text-arrakis-sand/70 font-mono text-sm relative z-10">
              {item.skills.map((skill, idx) => (
                <li key={idx} className="flex items-center gap-3">
                  {/* Quadrado colorido decorativo */}
                  <span className={`w-1.5 h-1.5 bg-${item.colorToken.replace('arrakis-', 'arrakis-')}`}></span> 
                  <span>{skill}</span>
                </li>
              ))}
            </ul>
          </Card>
        ))}
      </div>
    </section>
  );
}