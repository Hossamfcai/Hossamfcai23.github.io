import React, { useState } from 'react';
import { Copy, Check, Terminal, Code2, Layers } from 'lucide-react';

export const CodePreviewCard: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'architecture' | 'state' | 'service'>('architecture');
  const [hasCopied, setHasCopied] = useState(false);

  const snippets = {
    architecture: {
      filename: 'AppArchitecture.tsx',
      lang: 'tsx',
      code: `// Multi-Layer Architecture: Decoupled & Predictable
// UI Layer -> Custom Context Hooks -> Reducer -> Axios Services
import { useAuthContext } from './context/AuthContext';
import { useMenuState } from './hooks/useMenuState';
import { menuService } from './services/menuService';

export const RestaurantPage: React.FC = () => {
  const { user, isRoleAuthorized } = useAuthContext();
  const { categories, dishes, isLoading, dispatch } = useMenuState();

  const handleOrderSubmit = async (orderPayload: OrderFormValues) => {
    // Isolated Axios Service decoupled from UI presentation
    const response = await menuService.createOrder(orderPayload);
    dispatch({ type: 'ORDER_CONFIRMED', payload: response.data });
  };

  return <OrderView user={user} dishes={dishes} onOrder={handleOrderSubmit} />;
};`
    },
    state: {
      filename: 'orderReducer.ts',
      lang: 'ts',
      code: `// Domain-Specific Reducer with Strict TypeScript Actions
export interface OrderItem {
  id: string;
  dishName: string;
  price: number;
  quantity: number;
}

export type OrderAction =
  | { type: 'ADD_ITEM'; payload: OrderItem }
  | { type: 'REMOVE_ITEM'; payload: { id: string } }
  | { type: 'RESET_CART' };

export function orderReducer(state: OrderState, action: OrderAction): OrderState {
  switch (action.type) {
    case 'ADD_ITEM':
      return { ...state, items: [...state.items, action.payload] };
    case 'REMOVE_ITEM':
      return { ...state, items: state.items.filter(i => i.id !== action.payload.id) };
    case 'RESET_CART':
      return { ...state, items: [] };
    default:
      return state;
  }
}`
    },
    service: {
      filename: 'axiosServices.ts',
      lang: 'ts',
      code: `// Dedicated Axios Service Layer with Typed Interceptors
import axios, { AxiosInstance } from 'axios';

export const apiClient: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  timeout: 10000,
  headers: { 'Content-Type': 'application/json' }
});

apiClient.interceptors.request.use((config) => {
  const token = localStorage.getItem('auth_token');
  if (token) config.headers.Authorization = \`Bearer \${token}\`;
  return config;
});

export const orderService = {
  fetchReceipt: (orderId: string) => apiClient.get(\`/orders/\${orderId}/receipt\`),
  submitOrder: (data: unknown) => apiClient.post('/orders', data)
};`
    }
  };

  const currentSnippet = snippets[activeTab];

  const handleCopy = () => {
    navigator.clipboard.writeText(currentSnippet.code);
    setHasCopied(true);
    setTimeout(() => setHasCopied(false), 2000);
  };

  return (
    <div className="w-full rounded-2xl bg-slate-900/90 dark:bg-slate-950/90 border border-slate-700/80 shadow-2xl shadow-indigo-500/10 overflow-hidden font-mono text-xs backdrop-blur-md">
      {/* Window Title Bar */}
      <div className="flex items-center justify-between px-4 py-3 bg-slate-800/80 dark:bg-slate-900/90 border-b border-slate-700/70">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-rose-500/80" />
          <div className="w-3 h-3 rounded-full bg-amber-500/80" />
          <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
          <span className="ml-2 text-slate-400 text-[11px] font-sans flex items-center gap-1.5 font-medium">
            <Terminal className="w-3.5 h-3.5 text-indigo-400" />
            front-end-architecture · {currentSnippet.filename}
          </span>
        </div>

        <button
          type="button"
          onClick={handleCopy}
          aria-label="Copy code snippet"
          className="flex items-center gap-1 px-2.5 py-1 rounded-md text-[11px] text-slate-300 hover:text-white bg-slate-700/60 hover:bg-slate-700 transition-colors cursor-pointer"
        >
          {hasCopied ? (
            <>
              <Check className="w-3 h-3 text-emerald-400" />
              <span className="text-emerald-400 font-sans">Copied</span>
            </>
          ) : (
            <>
              <Copy className="w-3 h-3 text-slate-400" />
              <span className="font-sans">Copy</span>
            </>
          )}
        </button>
      </div>

      {/* Tabs Switcher */}
      <div className="flex items-center px-4 bg-slate-850/60 dark:bg-slate-900/40 border-b border-slate-800 text-[11px] overflow-x-auto">
        <button
          type="button"
          onClick={() => setActiveTab('architecture')}
          className={`flex items-center gap-1.5 py-2.5 px-3 border-b-2 font-medium transition-colors whitespace-nowrap cursor-pointer ${
            activeTab === 'architecture'
              ? 'border-indigo-500 text-indigo-400 bg-indigo-500/10'
              : 'border-transparent text-slate-400 hover:text-slate-200'
          }`}
        >
          <Code2 className="w-3 h-3" />
          AppArchitecture.tsx
        </button>

        <button
          type="button"
          onClick={() => setActiveTab('state')}
          className={`flex items-center gap-1.5 py-2.5 px-3 border-b-2 font-medium transition-colors whitespace-nowrap cursor-pointer ${
            activeTab === 'state'
              ? 'border-indigo-500 text-indigo-400 bg-indigo-500/10'
              : 'border-transparent text-slate-400 hover:text-slate-200'
          }`}
        >
          <Layers className="w-3 h-3" />
          orderReducer.ts
        </button>

        <button
          type="button"
          onClick={() => setActiveTab('service')}
          className={`flex items-center gap-1.5 py-2.5 px-3 border-b-2 font-medium transition-colors whitespace-nowrap cursor-pointer ${
            activeTab === 'service'
              ? 'border-indigo-500 text-indigo-400 bg-indigo-500/10'
              : 'border-transparent text-slate-400 hover:text-slate-200'
          }`}
        >
          <Terminal className="w-3 h-3" />
          axiosServices.ts
        </button>
      </div>

      {/* Code Display Area */}
      <div className="p-4 sm:p-5 overflow-x-auto text-[11px] sm:text-xs leading-relaxed text-slate-300">
        <pre className="font-mono">
          <code>{currentSnippet.code}</code>
        </pre>
      </div>

      {/* Status Bar */}
      <div className="px-4 py-2 bg-slate-950 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-500">
        <div className="flex items-center gap-3">
          <span className="flex items-center gap-1 text-emerald-400">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            TypeScript 98.7% Strict
          </span>
          <span className="text-slate-600">|</span>
          <span>UTF-8</span>
        </div>
        <span className="font-medium text-indigo-400">React 18/19 · Vite</span>
      </div>
    </div>
  );
};
