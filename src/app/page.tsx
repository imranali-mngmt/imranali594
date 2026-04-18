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
    <div>
      <Cover />
      <div className="flex flex-col gap-10 lg:px-10">
        <Hero />
        <TechStack />
        
        {pageSections.map((section) => (
          <CardSection 
            key={section.id}
            title={section.title} 
            data={section.data} 
          />
        ))}

        <ProjectCardSection title={sectionHeadings.projects} data={projectCard} />
      </div>
    </div>
  );
}
