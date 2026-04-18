import { FC } from 'react';
import ProjectsCard from '../ui/ProjectsCard';
import { IProjectSectionCardData } from '../utils/Data';

interface ProjectCardSectionProps {
  title: string;
  data: IProjectSectionCardData[];
}

const ProjectCardSection: FC<ProjectCardSectionProps> = ({ title, data }) => {
    const getGridCols = (count: number) => {
        if (count === 1) return 'grid-cols-1';
        if (count === 2) return 'grid-cols-1 sm:grid-cols-2';
        if (count === 3) return 'grid-cols-1 sm:grid-cols-3';
        if (count === 4) return 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4';
        return 'grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4';
    };

    return (
        <section className="grid gap-8 p-5 mt-5 md:p-0">
            <div className="text-xl font-medium text-zinc-200">{title}</div>
            <div className={`grid ${getGridCols(data.length)} gap-5`}>
        {data.map((card) => (
          <ProjectsCard
            href={card.href}
            key={card.id}
            title={card.title}
            src={card.imageUrl}
            techStack={card.techStack}
          />
        ))}
      </div>
    </section>
  );
};

export default ProjectCardSection;
