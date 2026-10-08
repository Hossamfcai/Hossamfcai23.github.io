export interface EngineeringPillar {
  id: string;
  title: string;
  tagline: string;
  description: string;
  icon: string;
  points: string[];
  codeHighlight?: {
    filename: string;
    code: string;
  };
}

export const engineeringPillars: EngineeringPillar[] = [
  {
    id: 'component-architecture',
    title: 'Component-Based Architecture',
    tagline: 'Modular, maintainable, single-responsibility UI systems',
    description:
      'Structuring interfaces into reusable, self-contained components with clear prop interfaces, avoiding monoliths and enabling rapid iteration without regressions.',
    icon: 'Layers',
    points: [
      'Decomposed UI hierarchies with clear presentation and container boundaries',
      'Encapsulated styling using Tailwind CSS and scoped utility tokens',
      'Consistent design system tokens for typography, spacing, and states'
    ],
    codeHighlight: {
      filename: 'Button.tsx',
      code: `interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
}
export const Button: React.FC<ButtonProps> = ({ variant = 'primary', ...props }) => {
  return <button className={cn(buttonVariants({ variant }))} {...props} />;
};`
    }
  },
  {
    id: 'type-safety',
    title: 'Strict Type Safety (98.7% TS)',
    tagline: 'End-to-end typed contracts from API to input elements',
    description:
      'Enforcing strict TypeScript typing across entire applications. Eliminating runtime errors by defining shared schemas, generic API response envelopes, and form validators with Zod.',
    icon: 'ShieldCheck',
    points: [
      '98.7% TypeScript adherence demonstrated in Local Business Hub',
      'Zod schema-inferred TypeScript types (z.infer<typeof schema>)',
      'Elimination of arbitrary any types in state and network pipelines'
    ],
    codeHighlight: {
      filename: 'businessSchema.ts',
      code: `export const BusinessSchema = z.object({
  name: z.string().min(3, "Name must be at least 3 characters"),
  category: z.enum(["Food", "Retail", "Services", "Tech"]),
  coordinates: z.object({ lat: z.number(), lng: z.number() }),
  services: z.array(z.string().min(1)).min(1, "At least one service is required"),
});
export type BusinessFormValues = z.infer<typeof BusinessSchema>;`
    }
  },
  {
    id: 'state-management',
    title: 'Predictable State Management',
    tagline: 'Domain-specific useReducer, useContext & Redux architectures',
    description:
      'Designing state layers with clear boundaries. In Hungry Spot, decomposed state into isolated reducers (auth, menu, orders, users) rather than bloated monolithic stores.',
    icon: 'GitFork',
    points: [
      'Modular useReducer actions for deterministic state transitions',
      'Custom action hooks to cleanly expose dispatch without leaky abstractions',
      'Redux Toolkit slices for centralized multi-view data synchronization'
    ],
    codeHighlight: {
      filename: 'useOrderState.ts',
      code: `const [state, dispatch] = useReducer(orderReducer, initialOrderState);
// Exposed via clean action dispatcher hooks:
const addItemToCart = useCallback((item: MenuItem) => {
  dispatch({ type: 'ORDER_ADD_ITEM', payload: item });
}, []);`
    }
  },
  {
    id: 'api-layer',
    title: 'Decoupled API Services Layer',
    tagline: 'Clean separation between UI components and network operations',
    description:
      'Abstracting all HTTP calls into dedicated Axios service modules. Components focus entirely on rendering and user interaction while services handle endpoints, transforms, and error recovery.',
    icon: 'Radio',
    points: [
      'Dedicated service files (/services/auth.ts, /services/orders.ts)',
      'Axios request/response interceptors for auth tokens and error formats',
      'Standardized asynchronous states (idle, loading, success, error)'
    ],
    codeHighlight: {
      filename: 'api/services/menu.ts',
      code: `export const menuService = {
  getCategories: () => apiClient.get<Category[]>('/menu/categories'),
  getItemsByCategory: (catId: string) => apiClient.get<MenuItem[]>('/menu/items?cat=' + catId),
  updateItem: (id: string, data: Partial<MenuItem>) => apiClient.put<MenuItem>('/menu/items/' + id, data),
};`
    }
  },
  {
    id: 'responsive-ui',
    title: 'Mobile-First & Accessible UI',
    tagline: 'Pixel-perfect, fluid layouts from 375px smartphones to 4K displays',
    description:
      'Building with a strict mobile-first mindset. Tested across viewports, cross-browser engines (Chromium, WebKit, Gecko), with semantic tags, proper keyboard focus, and WCAG contrast.',
    icon: 'Smartphone',
    points: [
      'Tested responsiveness across 375px mobile, tablets, and wide monitors',
      'Cross-browser rendering compatibility tested across Chrome, Firefox, Safari, Edge',
      'WCAG AA accessible contrast ratios and visible focus outlines'
    ],
    codeHighlight: {
      filename: 'ResponsiveLayout.tsx',
      code: `<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4 sm:p-6 lg:p-8">
  {/* Fluid breakpoints with intentional touch targets for mobile */}
</div>`
    }
  },
  {
    id: 'production-delivery',
    title: 'Production Delivery & Git Workflows',
    tagline: '100+ production pages shipped, multi-repo architectures & Agile execution',
    description:
      'Hands-on track record of shipping live client deliverables, collaborating with team members across Git repositories, and adhering to strict visual guidelines and sprint deadlines.',
    icon: 'CheckCircle2',
    points: [
      '100+ live educational content pages shipped for Selah El Telmeez',
      'Multi-repo decoupling: orchestrated 3 repositories in ArtHouse platform',
      'Git feature-branching, descriptive commits, and collaborative code reviews'
    ],
    codeHighlight: {
      filename: 'multi-repo-architecture.md',
      code: `# ArtHouse Decoupled Architecture:
Repo 1: /artHouse_portfolio (Angular Frontend)
Repo 2: /ArtHouse_admin     (Angular Admin Suite)
Repo 3: /artHouse_Backend   (Node.js / Express / MongoDB REST API)`
    }
  }
];
