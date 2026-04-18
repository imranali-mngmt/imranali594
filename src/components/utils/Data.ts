import {
  Gamepad2,
  Headphones,
  Image,
  LucideIcon,
  Share2,
  Shirt,
  ShoppingCart,
  Ticket,
} from 'lucide-react';

export interface ISectionCardData {
  id: number;
  title: string;
  src: string;
  exp: string;
  snippetCount: number;
  progress: number;
  href?: string;
  
}

export interface IProjectSectionCardData {
  id: number;
  imageUrl?: string;
  icon?: string;
  title: string;
  techStack: string;
  href?: string;
}

export const projectCard: IProjectSectionCardData[] = [
  {
    id: 1,
    title: 'Authentication System',
    techStack: 'Node.js, Express.js, JWT, MongoDB',
    imageUrl: 'https://images.unsplash.com/photo-1614064641938-3bbee52942c7?auto=format&fit=crop&w=800&q=80',
    href: 'https://github.com/imranali-dev/Backend',
  },
  {
    id: 2,
    title: 'Real-time Backend',
    techStack: 'Node.js, Socket.io, Express, MongoDB',
    imageUrl: 'https://images.unsplash.com/photo-1627398242454-45a1465c2479?auto=format&fit=crop&w=800&q=80',
    href: 'https://github.com/imranali-dev/chat-app',
  },
];

export const moreProjects = [
  {
    id: 1,
    title: 'API Gateway',
    techStack: 'Node.js, Express, Nginx',
    icon: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc51?auto=format&fit=crop&w=800&q=80',
    href: '',
  },
];

export const backendCard: ISectionCardData[] = [
  
  {
    id: 1,
    title: 'NodeJs',
    src: 'https://images.unsplash.com/photo-1627398242454-45a1465c2479?auto=format&fit=crop&w=800&q=80',
    exp: 'Committed to Finding Solutions',
    snippetCount: 0 ,
    progress: 80,
    href:'https://github.com/imranali-dev/complet-Guideto-Rest-Api'
  },
  {
    id: 2,
    title: 'ExpressJs',
    src: 'https://images.unsplash.com/photo-1627398242454-45a1465c2479?auto=format&fit=crop&w=800&q=80',
    exp: 'Enthusiastic about Problem-Solving',
    snippetCount: 0 ,
    progress: 90,
    href:'https://github.com/imranali-dev/Realtimechat'
  },
  {
    id: 3,
    title: 'NestJs',
    src: 'https://images.unsplash.com/photo-1627398242454-45a1465c2479?auto=format&fit=crop&w=800&q=80',
    exp: 'Enthusiastic about Problem-Solving',
    snippetCount: 0 ,
    progress: 90,
    href:'https://github.com/imranali-dev/Realtimechat'
  }
];

export const databaseCard: ISectionCardData[] = [
  {
    id: 1,
    title: 'MySQL',
    src: 'https://images.unsplash.com/photo-1544383835-bda2bc66a55d?auto=format&fit=crop&w=800&q=80',
    exp: 'Relational Database Management',
    snippetCount: 0,
    progress: 70,
  },
  {
    id: 2,
    title: 'MongoDB',
    src: 'https://images.unsplash.com/photo-1544383835-bda2bc66a55d?auto=format&fit=crop&w=800&q=80',
    exp: 'Dedicated to Troubleshooting',
    snippetCount: 0,
    progress: 90,
    href:''
  },
  {
    id: 4,
    title: 'PostgreSQL',
    src: 'https://images.unsplash.com/photo-1544383835-bda2bc66a55d?auto=format&fit=crop&w=800&q=80',
    exp: 'Favourit Database',
    snippetCount: 0 ,
    progress: 100,
    href:'https://github.com/imranali-dev/Next-js-learning'
  },
];

export const devopsCards: ISectionCardData[] = [
  {
    id: 1,
    title: 'Docker',
    src: 'https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?auto=format&fit=crop&w=800&q=80',
    exp: 'Containerization & Orchestration',
    snippetCount: 0,
    progress: 90,
  },
  {
    id: 2,
    title: 'Kubernetes',
    src: 'https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?auto=format&fit=crop&w=800&q=80',
    exp: 'Scaling & Management',
    snippetCount: 0,
    progress: 10,
  },
  {
    id: 3,
    title: 'GIT',
    src: 'https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?auto=format&fit=crop&w=800&q=80',
    exp: 'Version Control',
    snippetCount: 0,
    progress: 60,
  },
  {
    id: 4,
    title: 'Redis',
    src: 'https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?auto=format&fit=crop&w=800&q=80',
    exp: '1 day ago',
    snippetCount: 1128,
    progress: 70,
  },
  {
    id: 5,
    title: 'Terraform',
    src: '/tech/devops/terraform.png',
    exp: '1 day ago start learning',
    snippetCount: 0,
    progress: 10,
  },
];

export const web3Cards: ISectionCardData[] = [
  {
    id: 1,
    title: 'Solidity',
    src: '/tech/web3/solidity.jfif',
    exp: '1 day ago',
    snippetCount: 1128,
    progress: 90,
  },
  {
    id: 2,
    title: 'Hardhat',
    src: '/tech/web3/hardhat.jpeg',
    exp: '1 day ago',
    snippetCount: 1128,
    progress: 80,
  },
  {
    id: 3,
    title: 'Metamask',
    src: '/tech/web3/metamask.webp',
    exp: '1 day ago',
    snippetCount: 1128,
    progress: 90,
  },
  {
    id: 4,
    title: 'Chainlink',
    src: '/tech/web3/chainlink.png',
    exp: '1 day ago',
    snippetCount: 1128,
    progress: 80,
  },
  {
    id: 5,
    title: 'OpenZeppelin',
    src: '/tech/web3/openzeppelin.png',
    exp: '1 day ago',
    snippetCount: 1128,
    progress: 70,
  },
];

export const otherCards: ISectionCardData[] = [
  {
    id: 1,
    title: 'REST API Using Node JS',
    src: '/tech/others/rest.png',
    exp: 'Forever Curious and Exploring',
    snippetCount: 80,
    progress: 80,
    href:'https://github.com/imranali-dev/complet-Guideto-Rest-Api'
  },
  {
    id: 2,
    title: 'NIGIX',
    src: '/tech/others/soap.jpg',
    exp: 'Forever Curious and Exploring',
    snippetCount: 70,
    progress: 70,
    href:""
  },
  {
    id: 3,
    title: 'GraphQl',
    src: '/tech/others/graphql.png',
    exp: 'when Using Graphql with relational Database i give greate experince',
    snippetCount: 8,
    progress: 85,
    href:'https://github.com/imranali-dev/Next-js-learning'
  },
];
