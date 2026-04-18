import { FC } from 'react';
import { LucideIcon } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

interface ProjectsCardProps {
  title: string;
  src?: string;
  href?: string;
  techStack: string;
}

const ProjectsCard: FC<ProjectsCardProps> = ({
  title,
  src,
  href,
  techStack,
}) => {
  return (
    <Link target="_blank" href={href || '/'}>
      <div className="group flex flex-col overflow-hidden gap-3 bg-[#1a1921] border border-white/5 text-white rounded-2xl transition-all duration-500 hover:-translate-y-2 hover:border-brand/40 hover:shadow-2xl hover:shadow-brand/10">
        <div className="relative aspect-video w-full overflow-hidden">
          <Image
            src={src?.startsWith('http') ? src : `/projects/${src}`}
            alt={title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
            unoptimized={src?.startsWith('http')}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </div>
        <div className="flex flex-col px-5 py-4 min-h-[100px] gap-1">
          <div className="flex font-bold text-lg group-hover:text-brand transition-colors duration-300">
            {title}
          </div>
          <div className="flex text-zinc-400 text-sm">{techStack}</div>
        </div>
      </div>
    </Link>
  );
};

export default ProjectsCard;
