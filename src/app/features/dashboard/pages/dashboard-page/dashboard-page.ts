import { Component, inject } from '@angular/core';
import { DashboardStore } from '../../data-access/dashboard-store';
import { DashboardHeader } from '../../components/dashboard-header/dashboard-header';
import { MetricCard } from '../../components/metric-card/metric-card';
import { TopCategoryCard } from '../../components/top-category-card/top-category-card';
import { RecentExtractionsTable } from '../../components/recent-extractions-table/recent-extractions-table';

/**
 * Routed container for /dashboard.
 * Owns data access; child components are presentational (inputs/outputs only).
 *
 * Layout (from design):
 *  ┌ header: eyebrow + "Overview" title ............ [Export CSV] [Upload Receipt] ┐
 *  ├ metrics bento: 3 cols (md+) ─ Total Spend │ Pending Review │ Top Category (dark) ┤
 *  └ Recent Extractions table (flex-1, min-h 400px) ──────────────────────────────────┘
 */
@Component({
  selector: 'app-dashboard-page',
  imports: [DashboardHeader, MetricCard, TopCategoryCard, RecentExtractionsTable],
  host: { class: 'block p-4 md:p-10 lg:p-12' },
  template: `
    <div class="mx-auto flex w-full max-w-7xl flex-col gap-8">
      <app-dashboard-header />

      <section aria-label="Key metrics" class="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-6">
        @for (metric of store.metrics(); track metric.id) {
          <app-metric-card [metric]="metric" />
        }
        <app-top-category-card [category]="store.topCategory()" />
      </section>

      <app-recent-extractions-table [rows]="store.recentExtractions()" />
    </div>
  `,
})
export class DashboardPage {
  protected readonly store = inject(DashboardStore);
}
