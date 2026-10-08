import type { EducationItem, TrainingItem } from '../types';

export const educationData: EducationItem[] = [
  {
    id: 'helwan-university',
    degree: 'Bachelor of Computing and Artificial Intelligence',
    institution: 'Helwan University',
    grade: 'Very Good',
    period: 'Graduated: 2024',
    description:
      'Rigorous computer science curriculum emphasizing software engineering fundamentals, algorithmic efficiency, and artificial intelligence.',
    highlights: [
      'Data Structures & Algorithms',
      'Object-Oriented Programming (OOP)',
      'Database Systems & Relational Modeling',
      'Web Development & Software Engineering',
      'Artificial Intelligence & Computing Principles'
    ]
  }
];

export const trainingData: TrainingItem[] = [
  {
    id: 'nti-mean-stack',
    program: 'MEAN Stack Web Development — Intensive Programme',
    institution: 'National Telecommunication Institute (NTI)',
    period: '07/2024 – 09/2024',
    description:
      'Immersive full-time technical training focused on modern full-stack JavaScript architectures, TypeScript integration, and RESTful API engineering.',
    technologies: ['Angular', 'TypeScript', 'RESTful APIs', 'Express.js', 'Node.js', 'MongoDB'],
    graduationProject: 'ArtHouse — Full-Stack Artist Portfolio Platform (Angular, Node.js, Express, MongoDB)'
  }
];
