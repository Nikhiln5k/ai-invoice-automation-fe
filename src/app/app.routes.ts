import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./core/layout/shell/shell').then((m) => m.Shell),
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'dashboard' },
      {
        path: 'dashboard',
        title: 'Overview | ExTrack',
        loadChildren: () => import('./features/dashboard/dashboard.routes'),
      },
      // Future feature routes (lazy-loaded the same way):
      // { path: 'extraction', loadChildren: () => import('./features/extraction/extraction.routes') },
      // { path: 'ledger',     loadChildren: () => import('./features/ledger/ledger.routes') },
      // { path: 'reports',    loadChildren: () => import('./features/reports/reports.routes') },
    ],
  },
  { path: '**', redirectTo: 'dashboard' },
];
