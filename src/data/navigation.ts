import { 
  Home, 
  User, 
  GraduationCap, 
  Contact, 
  Github, 
  Linkedin, 
  ScreenShare, 
  Layers,
  Briefcase,
  Trophy,
  Cpu,
  Database,
  Search,
  Settings
} from 'lucide-react';

export const navigationLinks = [
  {
    name: 'Home',
    icon: Home,
    type: 'link',
    href: '/',
  },
  {
    name: 'About Me',
    icon: Search,
    type: 'modal',
    modalType: 'about',
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
    name: 'Github',
    icon: Github,
    href: 'https://github.com/imranali-dev',
    color: '#2a9d8f',
  },
  {
    name: 'LinkedIn',
    icon: Linkedin,
    href: 'https://www.linkedin.com/in/imran-ali13/',
    color: '#0277b5',
  },
  {
    name: 'Check Out My Work',
    icon: ScreenShare,
    href: 'https://imranali.vercel.app/',
    color: '#e63946',
  },
  {
    name: 'Stack overflow',
    icon: Layers,
    href: 'https://stackoverflow.com/users/22816656/imran-ali',
    color: '#f77f00',
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
  projects: 'Projects',
};
