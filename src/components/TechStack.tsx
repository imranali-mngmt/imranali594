import { FC } from 'react';
import TechCard from './Card/TechCard';

interface TechStackProps {}

const TechStack: FC<TechStackProps> = ({}) => {
  return (
    <div className="col-span-2 p-6 md:col-span-2 lg:col-span-3">
      <div className="text-xl font-medium mt-2 text-zinc-200 mb-5 text-center md:text-left">
        What I Know
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        <TechCard
          title="Backend"
          className="bg-[#f37c36]"
          tech={['Node Js', 'Express Js', 'NoSQL', 'SQL', 'PostgreSQL', 'Docker', 'Kubernetes', 'Linux']}
        />
        <TechCard
          title="Databse"
          className="bg-[#e0558a]"
          tech={['MongoDB', 'NoSQL', 'SQL', 'PostgreSQL', 'MySQL']}
        />
        <TechCard
          title="DevOps & OS"
          className="bg-[#f37c36]"
          tech={['Docker', 'Kubernetes', 'Linux']}
        />
        <TechCard
          title="CRM Tools"
          className="bg-[#4f91f2]"
          tech={['Salesforce', 'Zendesk', 'Zoho CRM']}
        />
        <TechCard
          title="Operations"
          className="bg-[#10c0a2]"
          tech={['Jira', 'Trello', 'Slack', 'n8n', 'Make']}
        />
        <TechCard
          title="Client Relations"
          className="bg-[#e0558a]"
          tech={['Intercom', 'HubSpot', 'Social Media Monitoring']}
        />
        <TechCard
          title="Office Tools"
          className="bg-[#f37c36]"
          tech={['Advanced Excel', 'Google Workspace', 'Microsoft 365']}
        />
        <TechCard
          title="Management"
          className="bg-[#4f91f2]"
          tech={['Quality Auditing', 'SLA Compliance', 'Team Training', 'Escalations']}
        />
      </div>
    </div>
  );
};

export default TechStack;
