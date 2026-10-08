import type { Project } from '../types';

export const projectsData: Project[] = [
  {
    id: 'hungry-spot',
    title: 'Hungry Spot',
    tagline: 'Restaurant Ordering Platform with Analytics & Multi-Role Authorization',
    role: 'Core Frontend Architect & UI Lead (Team Project)',
    category: 'React / TypeScript',
    featuredMetric: 'Multi-Role Auth & Analytics',
    description:
      'A full-featured restaurant ordering platform where users browse dishes by category, place orders, and track live order status through personal receipts, backed by an admin management suite and analytics dashboard.',
    detailedOverview:
      'Hungry Spot was developed to handle high-traffic restaurant customer ordering and back-office management. Hossam owned the core architectural foundation, designing a decoupled state layer and clean REST API services to manage dishes, orders, user authentication, and data visualization seamlessly.',
    contribution: [
      'Owned the core architecture and multi-role authorization flow (guest / user / admin) with protected routes.',
      'Designed and built the Login and Sign Up pages with React Hook Form and Zod schema validation.',
      'Developed the customer-facing restaurant page for category browsing, cart selection, ordering, and viewing real-time receipts.',
      'Designed a modular state management architecture using useReducer and useContext: separated reducers for auth, menu, orders, and users.',
      'Exposed context providers alongside custom action hooks for clean, predictable unidirectional data flow.',
      'Created a dedicated Axios services layer (auth, menu, orders, users) to completely decouple API interactions from UI components.'
    ],
    architecture: {
      description:
        'Clean multi-layer architecture separating UI presentation, custom action hooks, context-reducer state containers, and dedicated Axios service modules.',
      highlights: [
        'Dedicated Axios Services: /services/{auth, menu, orders, users}.ts',
        'Modular State Reducers: separate reducers for auth, menu, orders, and users',
        'Custom Hooks: clean state consumption avoiding context pollution',
        'Role-Based Route Guards: protecting guest, user, and admin views'
      ]
    },
    technologies: [
      'React',
      'useReducer',
      'useContext',
      'React Router DOM',
      'Axios',
      'React Hook Form',
      'Zod',
      'Recharts',
      'Framer Motion',
      'Lucide',
      'SweetAlert2',
      'Tailwind CSS',
      'Vite'
    ],
    coreTechBadge: 'React · useReducer · Recharts',
    repoLinks: [
      {
        label: 'GitHub Repository',
        url: 'https://github.com/Hossamfcai/Hungry_Spot'
      }
    ],
    liveUrl: 'https://hungry-spot.vercel.app',
    challengesSolved: [
      'Decoupled UI components from data fetching using isolated Axios service layers.',
      'Prevented state bloat by dividing complex state into 4 targeted reducers (auth, menu, orders, users).',
      'Protected sensitive administrative routes and user receipts with granular role checking.',
      'Integrated Recharts to present intuitive visual analytics on revenue, item sales, user activity, and order volume.'
    ],
    keyFeatures: [
      'Category-based dish browsing & cart management',
      'Live order status tracking through personal receipt',
      'Protected Admin Dashboard for menu items, orders, and users',
      'Interactive Analytics dashboard powered by Recharts (revenue, orders, items, users)',
      'Type-safe authentication with Zod & React Hook Form',
      'Custom alerts and feedback via SweetAlert2'
    ]
  },
  {
    id: 'local-business-hub',
    title: 'Local Business Hub',
    tagline: 'Marketplace Platform Connecting Local Businesses & Customers',
    role: 'Business Owner Dashboard Lead (College Graduation Project)',
    category: 'React / TypeScript',
    featuredMetric: '98.7% TypeScript Codebase',
    description:
      'A full-featured marketplace platform connecting local startup businesses with nearby customers, featuring an interactive geospatial business locator and comprehensive business owner suite.',
    detailedOverview:
      'Built collaboratively with a frontend engineering team as a college graduation project. Hossam owned and delivered the entire Business Owner Dashboard from the ground up, enforcing strict TypeScript type safety across every component and form.',
    contribution: [
      'Owned and delivered the complete Business Owner Dashboard end-to-end.',
      'Engineered the business registration flow and profile management interfaces.',
      'Implemented full product and service listing management with Add, Edit, and Delete operations.',
      'Integrated interactive geospatial mapping with Leaflet and React-Leaflet to let business owners pin precise physical locations.',
      'Built robust, type-safe forms combining Mantine Form with Zod schema validation.',
      'Constructed responsive, mobile-first layouts using Mantine UI v7 and Tailwind CSS.',
      'Configured Axios REST API integration and React Router v6 client-side routing with SweetAlert2 & Mantine Notifications.'
    ],
    architecture: {
      description:
        'Enforced a 98.7% strict TypeScript codebase with comprehensive types for business models, geospatial coordinates, product catalogs, and API response contracts.',
      highlights: [
        '98.7% TypeScript codebase with zero loose typing',
        'Leaflet & React-Leaflet map integration for location pinning',
        'Mantine UI v7 + Tailwind CSS responsive styling system',
        'Mantine Form + Zod schema validation for strict input integrity'
      ]
    },
    technologies: [
      'React 18',
      'TypeScript (98.7%)',
      'Mantine UI v7',
      'Tailwind CSS',
      'Leaflet',
      'React-Leaflet',
      'Zod',
      'Axios',
      'React Router v6',
      'SweetAlert2'
    ],
    coreTechBadge: 'React 18 · TypeScript · Leaflet',
    repoLinks: [
      {
        label: 'GitHub Frontend Repo',
        url: 'https://github.com/Hossamfcai/local-business-frontend'
      }
    ],
    challengesSolved: [
      'Synchronized map coordinate pinning with Leaflet and form state schema validation in Zod.',
      'Maintained 98.7% TypeScript coverage across complex nested business entities and product records.',
      'Created seamless responsive dashboards that provide identical productivity on mobile and desktop devices.'
    ],
    keyFeatures: [
      'Complete Business Owner Dashboard suite',
      'Interactive map location pinning (Leaflet & React-Leaflet)',
      'Product and service catalog CRUD management',
      'Business profile customization & verification onboarding',
      'Strict Zod schema form validation with real-time feedback',
      'Mobile-first responsive design system'
    ]
  },
  {
    id: 'arthouse',
    title: 'ArtHouse',
    tagline: 'Decoupled Full-Stack Artist Portfolio & Exhibition Management Platform',
    role: 'Full-Stack Developer (NTI Graduation Project)',
    category: 'Angular / Node.js',
    featuredMetric: '3 Decoupled Repositories',
    description:
      'A comprehensive full-stack platform for artists to showcase their work and manage inquiries, built with a decoupled multi-repo architecture spanning public portfolio, admin dashboard, and RESTful API.',
    detailedOverview:
      'Graduation project for the National Telecommunication Institute (NTI) MEAN Stack Intensive Programme. The application is architected across three independent repositories, demonstrating architectural separation of concerns and full-stack integration expertise.',
    contribution: [
      'Architected the end-to-end full-stack system across three decoupled repositories for scalability.',
      'Repo 1 (Artist Portfolio): Designed and developed the public portfolio in Angular with galleries, biography, and inquiry forms in a mobile-first UI.',
      'Repo 2 (Admin Dashboard): Built a complete administrative suite in Angular for artwork management, media uploads, and customer inquiry processing.',
      'Repo 3 (Backend API): Developed a RESTful API with Node.js and Express.js backed by MongoDB, implementing authentication and media management.'
    ],
    architecture: {
      description:
        'Architected as three decoupled repositories connected via RESTful API: Artist Portfolio Frontend (Angular) and Admin Dashboard (Angular) communicate with a Node.js/Express.js backend and MongoDB database.',
      highlights: [
        'Repo 1 — Artist Portfolio: Public Angular SPA with responsive galleries',
        'Repo 2 — Admin Dashboard: Angular administrative control suite',
        'Repo 3 — Backend API: Express.js & MongoDB REST service with JWT auth',
        'Independent deployment and maintenance per repository'
      ]
    },
    technologies: [
      'Angular',
      'TypeScript',
      'Node.js',
      'Express.js',
      'MongoDB',
      'REST API',
      'JWT Auth',
      'Decoupled Architecture'
    ],
    coreTechBadge: 'Angular · Node.js · MongoDB',
    repoLinks: [
      {
        label: 'Artist Portfolio Repo',
        url: 'https://github.com/Hossamfcai/artHouse_portfolio'
      },
      {
        label: 'Admin Dashboard Repo',
        url: 'https://github.com/Hossamfcai/ArtHouse_admin'
      },
      {
        label: 'Backend API Repo',
        url: 'https://github.com/Hossamfcai/artHouse_Backend'
      }
    ],
    challengesSolved: [
      'Separated administrative privileges and media upload pipelines from the public presentation layer.',
      'Structured MongoDB schemas to handle dynamic art collections, metadata, and visitor inquiries efficiently.',
      'Maintained consistent TypeScript contracts between Angular services and Express endpoints.'
    ],
    keyFeatures: [
      'Public responsive exhibition galleries & artwork showcase',
      'Complete administrative media upload & content curation suite',
      'Inquiry management workflow for prospective art buyers',
      'Secure authentication for gallery owners',
      'Decoupled multi-repo micro-frontend/backend architecture'
    ]
  }
];
