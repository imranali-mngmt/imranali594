import { Image, ImageIcon } from 'lucide-react';
import { FC } from 'react';
import { cn } from '../utils/utils';
import Button from '../ui/Button';

interface TechCardProps {
  title: string;
  className: string;
  tech: string[];
}

const TechCard: FC<TechCardProps> = ({ title, className, tech }) => {
  return (
    <div className="flex-1 flex flex-col gap-4 bg-cardPrimary p-4 rounded-md shadow-lg">
      <div className="text-primary font-medium text-lg tracking-wider">
        {title}
      </div>
      <div className="flex flex-wrap gap-2">
        {tech.map((item, i) => (
          <div
            key={i}
            className={cn(
              'rounded-md bg-body text-xs text-primary p-2',
              item.includes('Tailwind') && 'border border-blue-500/60',
              item.includes('Javascript') && 'border border-yellow-500/60',
              item.includes('React Js') && 'border border-blue-500/60',
              item.includes('Next Js') && 'border border-white/60',
              item.includes('Node Js') && 'border border-green-500/60',
              item.includes('Express Js') && 'border border-yellow-500/60',
              item.includes('Nest Js') && 'border border-red-500/60',
              item.includes('MySql') && 'border border-blue-500/60',
              item.includes('MongoDB') && 'border border-emerald-500/60',
              item.includes('PostgreSQL') && 'border border-sky-500/60',
              item.includes('SQL') && 'border border-indigo-500/60',
              item.includes('Typescript') && 'border border-blue-500/60',
              item.includes('team work') && 'border border-red-500/60',
              item.includes('next js') && 'border border-yellow-500/60',
              item.includes('HTML') && 'border border-white-500/60',
              item.includes('CSS') && 'border border-blue-500/60',
              item.includes('Docker') && 'border border-cyan-500/60',
              item.includes('Kubernetes') && 'border border-blue-600/60',
              item.includes('Linux') && 'border border-amber-500/60',
              item.includes('GIT') && 'border border-orange-500/60',
              item.includes('Backend developer') && 'border border-orange-500/60',
              item.includes('Salesforce') && 'border border-sky-400/60',
              item.includes('Zendesk') && 'border border-emerald-400/60',
              item.includes('Jira') && 'border border-blue-400/60',
              item.includes('Excel') && 'border border-green-600/60',

            )}
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechCard;

//this is for the color on the teact this is on the teact folder just change the name and go on
