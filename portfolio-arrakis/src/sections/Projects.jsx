import { PROJECTS_DATA } from '../data/portfolio';
import SectionTitle from '../components/ui/SectionTitle';

export default function Projects() {
  return (
    <section id="projects" className="mb-32 scroll-mt-24">
      <SectionTitle title="Projetos Selecionados" subtitle="VIEWING: PRIORITY ITEMS" />

      <div className="space-y-8">
        {PROJECTS_DATA.map((project, index) => (
          <div 
            key={index}
            className="group border-l-2 border-arrakis-gold/30 hover:border-arrakis-spice pl-6 py-4 transition-all duration-300"
          >
            <div className="flex flex-col md:justify-between md:items-start gap-2">
              <div>
                <span className="text-xs font-mono text-arrakis-eyes mb-2 block tracking-widest">
                  {project.category}
                </span>
                
                <h4 className="text-2xl font-imperial text-white group-hover:text-arrakis-spice transition-colors hover-spice-glow cursor-pointer">
                  {project.title}
                </h4>
                
                <p className="mt-3 text-arrakis-sand/60 max-w-2xl text-sm leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="text-[10px] uppercase border border-arrakis-gold/20 px-2 py-1 text-arrakis-gold/80">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}