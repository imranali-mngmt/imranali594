import Cover from '@/components/Cover';
import CardSection from '@/components/sections/CardSection';
import Hero from '@/components/sections/Hero';
import ProjectCardSection from '@/components/sections/ProjectCardSection';
import TechStack from '@/components/TechStack';
import { projectCard } from '@/components/utils/Data';
import { sectionHeadings } from '@/data/navigation';
import { pageSections } from '@/data/pageSections';

export default function Home() {
  return (
    <div className="pb-24">
      <Cover />
      <div className="flex flex-col gap-20 lg:px-10 mt-12 max-w-7xl mx-auto">
        <div id="home"><Hero /></div>
        <TechStack />
        
        <div className="flex flex-col gap-24">
          {pageSections.map((section) => (
            <CardSection 
              key={section.id}
              id={section.id}
              title={section.title} 
              data={section.data} 
            />
          ))}
        </div>

        <div id="projects" className="pt-8 border-t border-white/5">
          <ProjectCardSection title={sectionHeadings.projects} data={projectCard} />
        </div>
      </div>
    </div>
  );
}
