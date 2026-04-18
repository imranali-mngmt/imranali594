import { 
  Home, 
  GraduationCap, 
  Contact, 
  Github, 
  Database,
  Settings,
  Cpu
} from 'lucide-react';

export const navigationLinks = [
  {
    name: 'Home',
    icon: Home,
    type: 'link',
    href: '#home',
  },
  {
    name: 'Backend Tech',
    icon: Database,
    type: 'link',
    href: '#backend',
  },
  {
    name: 'Ops & CRM',
    icon: Settings,
    type: 'link',
    href: '#operations',
  },
  {
    name: 'Competencies',
    icon: Cpu,
    type: 'link',
    href: '#competencies',
  },
  {
    name: 'Qualifications',
    icon: GraduationCap,
    type: 'modal',
    modalType: 'qualification',
  },
  {
    name: 'Contact',
    icon: Contact,
    type: 'modal',
    modalType: 'contact',
  },
];

export const socialLinks = [
  {
    name: 'GitHub',
    icon: Github,
    href: 'https://github.com/imranali-dev',
    color: '#2a9d8f',
  },
];

export const sectionHeadings = {
  backend: 'Backend & Infrastructure',
  crm: 'CRM Tools',
  operations: 'Operations & Automation',
  clientRelations: 'Client Relations',
  office: 'Office Productivity',
  management: 'Experience Management',
  competencies: 'Core Competencies',
  experience: 'Professional Experience',
  achievements: 'Key Achievements',
  education: 'Education',
  projects: 'Featured Projects',
};
