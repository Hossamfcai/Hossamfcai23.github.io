export interface Project {
  id: string;
  title: string;
  tagline: string;
  role: string;
  category: 'Full-Stack' | 'React / TypeScript' | 'Angular / Node.js';
  featuredMetric?: string;
  description: string;
  detailedOverview: string;
  contribution: string[];
  architecture: {
    description: string;
    highlights: string[];
  };
  technologies: string[];
  coreTechBadge: string;
  repoLinks: {
    label: string;
    url: string;
  }[];
  liveUrl?: string;
  challengesSolved: string[];
  keyFeatures: string[];
}

export interface SkillCategory {
  id: string;
  title: string;
  description: string;
  skills: {
    name: string;
    level: 'Primary Focus' | 'Proficient' | 'Full-Stack Knowledge';
    isHighlight?: boolean;
    description?: string;
  }[];
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  companyDescription: string;
  employmentType: string;
  period: string;
  location: string;
  bullets: string[];
  technologies: string[];
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  grade?: string;
  period: string;
  description: string;
  highlights: string[];
}

export interface TrainingItem {
  id: string;
  program: string;
  institution: string;
  period: string;
  description: string;
  technologies: string[];
  graduationProject: string;
}

export interface EngineeringPillar {
  title: string;
  description: string;
  codeSnippetExample?: string;
  iconName: string;
  points: string[];
}
