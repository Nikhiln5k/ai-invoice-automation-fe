import { NavItem } from '../../models/nav-item.model';

/** Primary navigation. Add entries here as feature routes are built. */
export const NAV_ITEMS: readonly NavItem[] = [
  { path: '/dashboard', label: 'Overview', icon: 'dashboard' },
  // { path: '/extraction', label: 'AI Extraction', icon: 'document_scanner', hasActivity: true },
  // { path: '/ledger', label: 'Ledger', icon: 'receipt_long' },
  // { path: '/reports', label: 'Reports', icon: 'bar_chart' },
];
