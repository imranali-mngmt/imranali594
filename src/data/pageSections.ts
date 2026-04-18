import { backendData } from './backend';
import { crmTools } from './crm';
import { operationsTools } from './operations';
import { clientRelationTools } from './clientRelations';
import { officeTools } from './office';
import { experienceManagement } from './management';
import { coreCompetencies } from './competencies';
import { experienceData } from './experience';
import { achievementsData } from './achievements';
import { educationData } from './education';
import { sectionHeadings } from './navigation';

export const pageSections = [
  {
    id: 'backend',
    title: sectionHeadings.backend,
    data: backendData,
  },
  {
    id: 'crm',
    title: sectionHeadings.crm,
    data: crmTools,
  },
  {
    id: 'operations',
    title: sectionHeadings.operations,
    data: operationsTools,
  },
  {
    id: 'clientRelations',
    title: sectionHeadings.clientRelations,
    data: clientRelationTools,
  },
  {
    id: 'office',
    title: sectionHeadings.office,
    data: officeTools,
  },
  {
    id: 'management',
    title: sectionHeadings.management,
    data: experienceManagement,
  },
  {
    id: 'competencies',
    title: sectionHeadings.competencies,
    data: coreCompetencies,
  },
  {
    id: 'experience',
    title: sectionHeadings.experience,
    data: experienceData,
  },
  {
    id: 'achievements',
    title: sectionHeadings.achievements,
    data: achievementsData,
  },
  {
    id: 'education',
    title: sectionHeadings.education,
    data: educationData,
  },
];
