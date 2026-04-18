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
    type: 'standard', // or 'project'
  },
  {
    id: 'crm',
    title: sectionHeadings.crm,
    data: crmTools,
    type: 'standard',
  },
  {
    id: 'operations',
    title: sectionHeadings.operations,
    data: operationsTools,
    type: 'standard',
  },
  {
    id: 'clientRelations',
    title: sectionHeadings.clientRelations,
    data: clientRelationTools,
    type: 'standard',
  },
  {
    id: 'office',
    title: sectionHeadings.office,
    data: officeTools,
    type: 'standard',
  },
  {
    id: 'management',
    title: sectionHeadings.management,
    data: experienceManagement,
    type: 'standard',
  },
  {
    id: 'competencies',
    title: sectionHeadings.competencies,
    data: coreCompetencies,
    type: 'standard',
  },
  {
    id: 'experience',
    title: sectionHeadings.experience,
    data: experienceData,
    type: 'standard',
  },
  {
    id: 'achievements',
    title: sectionHeadings.achievements,
    data: achievementsData,
    type: 'standard',
  },
  {
    id: 'education',
    title: sectionHeadings.education,
    data: educationData,
    type: 'standard',
  },
];
