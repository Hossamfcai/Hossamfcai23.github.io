import type { SkillCategory } from '../types';

export const skillsCategories: SkillCategory[] = [
  {
    id: 'frontend-core',
    title: 'Frontend Core',
    description: 'Primary frameworks and modern client-side languages.',
    skills: [
      {
        name: 'React.js',
        level: 'Primary Focus',
        isHighlight: true,
        description: 'Hooks, custom hooks, Context API, performance optimization, and modular UI structure.'
      },
      {
        name: 'TypeScript',
        level: 'Primary Focus',
        isHighlight: true,
        description: 'Strict type safety, typed generics, interface contracts, and schema validation (98.7% in production).'
      },
      {
        name: 'JavaScript (ES6+)',
        level: 'Primary Focus',
        isHighlight: true,
        description: 'Modern asynchronous programming, closures, array methods, event loop, and modular JS.'
      },
      {
        name: 'Angular',
        level: 'Proficient',
        isHighlight: false,
        description: 'Components, dependency injection, RxJS observables, services, and routing.'
      },
      {
        name: 'Vue.js',
        level: 'Proficient',
        isHighlight: false,
        description: 'Template adaptation, reactivity, components, and educational page delivery.'
      },
      {
        name: 'HTML5 & CSS3',
        level: 'Primary Focus',
        isHighlight: false,
        description: 'Semantic markup, modern CSS grid/flexbox, accessibility standards, and clean typography.'
      }
    ]
  },
  {
    id: 'state-architecture',
    title: 'State & Architecture',
    description: 'Predictable unidirectional data flow and modular architecture.',
    skills: [
      {
        name: 'useReducer + useContext',
        level: 'Primary Focus',
        isHighlight: true,
        description: 'Custom domain reducers (auth, menu, orders, users) combined with lightweight Context providers.'
      },
      {
        name: 'Redux Toolkit',
        level: 'Proficient',
        isHighlight: false,
        description: 'Centralized state management, slices, and immutable data flow.'
      },
      {
        name: 'Component-Based Architecture',
        level: 'Primary Focus',
        isHighlight: true,
        description: 'Reusable, atomic components with single-responsibility design.'
      },
      {
        name: 'Decoupled / Multi-Repo Architecture',
        level: 'Proficient',
        isHighlight: false,
        description: 'Separation of client presentation, administrative suites, and API services.'
      }
    ]
  },
  {
    id: 'apis-routing',
    title: 'Routing & HTTP Services',
    description: 'Robust asynchronous networking and client-side navigation.',
    skills: [
      {
        name: 'RESTful API Integration',
        level: 'Primary Focus',
        isHighlight: true,
        description: 'Connecting frontend clients to RESTful endpoints with consistent error handling and payloads.'
      },
      {
        name: 'Axios Services Layer',
        level: 'Primary Focus',
        isHighlight: true,
        description: 'Dedicated Axios instances, request/response interceptors, and decoupled domain services.'
      },
      {
        name: 'React Router v6',
        level: 'Primary Focus',
        isHighlight: false,
        description: 'Nested routing, role-protected routes, navigation loaders, and dynamic route params.'
      }
    ]
  },
  {
    id: 'forms-validation',
    title: 'Forms & Validation',
    description: 'Bulletproof client-side input validation and error handling.',
    skills: [
      {
        name: 'React Hook Form',
        level: 'Primary Focus',
        isHighlight: true,
        description: 'Performant uncontrolled forms, controlled inputs, and state tracking.'
      },
      {
        name: 'Zod Schema Validation',
        level: 'Primary Focus',
        isHighlight: true,
        description: 'Strict schema-first validation inferring TypeScript types directly from schemas.'
      },
      {
        name: 'Mantine Form',
        level: 'Proficient',
        isHighlight: false,
        description: 'Integrated form validation with visual feedback for UI library ecosystems.'
      }
    ]
  },
  {
    id: 'styling-ui',
    title: 'UI & Styling Systems',
    description: 'Responsive, accessible, and cross-browser user interfaces.',
    skills: [
      {
        name: 'Tailwind CSS',
        level: 'Primary Focus',
        isHighlight: true,
        description: 'Utility-first modern styling, responsive breakpoints, design systems, and animations.'
      },
      {
        name: 'Mantine UI v7',
        level: 'Proficient',
        isHighlight: false,
        description: 'Accessible component libraries, color schemes, hooks, and notifications.'
      },
      {
        name: 'Bootstrap 5',
        level: 'Proficient',
        isHighlight: false,
        description: 'Responsive grids, utility classes, and rapid prototyping.'
      },
      {
        name: 'Responsive & Mobile-First Design',
        level: 'Primary Focus',
        isHighlight: true,
        description: 'Pixel-perfect fluid layouts across mobile (375px), tablet, laptop, and desktop viewports.'
      },
      {
        name: 'Cross-Browser Compatibility',
        level: 'Proficient',
        isHighlight: false,
        description: 'Tested rendering and interactive consistency across Chromium, Safari, Firefox, and Edge.'
      }
    ]
  },
  {
    id: 'backend-tools',
    title: 'Tooling & Full-Stack Awareness',
    description: 'Modern developer workflow and full-stack backend understanding.',
    skills: [
      {
        name: 'Vite & npm',
        level: 'Primary Focus',
        isHighlight: false,
        description: 'Modern lightning-fast bundler configuration, module resolution, and dependency management.'
      },
      {
        name: 'Git & GitHub',
        level: 'Primary Focus',
        isHighlight: false,
        description: 'Branching strategies, multi-repo workflows, pull requests, and version control.'
      },
      {
        name: 'Node.js & Express.js',
        level: 'Full-Stack Knowledge',
        isHighlight: false,
        description: 'Backend REST API endpoints, routing, middleware, and JWT authentication.'
      },
      {
        name: 'MongoDB & Compass',
        level: 'Full-Stack Knowledge',
        isHighlight: false,
        description: 'Document database modeling, CRUD operations, indexing, and GUI data inspection.'
      }
    ]
  }
];
