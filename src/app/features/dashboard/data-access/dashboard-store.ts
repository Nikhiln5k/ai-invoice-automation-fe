import { Service, computed, signal } from '@angular/core';
import { DashboardMetric, RecentExtraction, TopCategory } from '../models/dashboard.models';

/**
 * Signal-based state for the dashboard.
 * Currently seeded with mock data; swap for an HTTP-backed API service later.
 */
@Service()
export class DashboardStore {
  private readonly _metrics = signal<readonly DashboardMetric[]>([
    {
      id: 'total-spend',
      label: 'Total Spend (This Month)',
      value: '$12,481',
      valueSuffix: '.50',
      icon: 'attach_money',
      tone: 'default',
      trend: { label: '+14.2% M/M', direction: 'up' },
    },
    {
      id: 'pending-review',
      label: 'Pending AI Review',
      value: '4',
      valueSuffix: 'Receipts',
      icon: 'document_scanner',
      tone: 'primary',
      live: true,
    },
  ]);

  private readonly _topCategory = signal<TopCategory>({
    name: 'Travel & Transit',
    icon: 'flight',
    share: 65,
  });

  private readonly _recentExtractions = signal<readonly RecentExtraction[]>([
    { id: '1', date: '2023-10-24', vendor: 'Uber Technologies', category: 'Travel', amount: 42.5, currency: 'USD', status: 'review' },
    { id: '2', date: '2023-10-23', vendor: 'AWS EMEA', category: 'Software', amount: 1245, currency: 'USD', status: 'saved' },
    { id: '3', date: '2023-10-20', vendor: 'WeWork', category: 'Office', amount: 450, currency: 'USD', status: 'saved' },
  ]);

  readonly metrics = this._metrics.asReadonly();
  readonly topCategory = this._topCategory.asReadonly();
  readonly recentExtractions = this._recentExtractions.asReadonly();

  readonly pendingReviewCount = computed(
    () => this._recentExtractions().filter((e) => e.status === 'review').length,
  );
}
