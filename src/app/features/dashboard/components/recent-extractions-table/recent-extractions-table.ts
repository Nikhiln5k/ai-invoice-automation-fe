import { Component, input, output } from '@angular/core';
import { CurrencyPipe, DatePipe } from '@angular/common';
import { RecentExtraction } from '../../models/dashboard.models';
import { StatusBadge } from '../../../../shared/ui/status-badge/status-badge';

/** "Recent Extractions" table card: Date · Vendor · Category · Amount · Status. */
@Component({
  selector: 'app-recent-extractions-table',
  imports: [CurrencyPipe, DatePipe, StatusBadge],
  host: { class: 'flex min-h-[400px] flex-1 flex-col bg-white border border-zinc-200 rounded' },
  template: `
    <div class="flex items-center justify-between border-b border-zinc-200 p-4">
      <h2 class="font-medium text-zinc-900">Recent Extractions</h2>
      <button type="button" (click)="viewAll.emit()">View All</button>
    </div>
    <div class="overflow-x-auto">
      <table class="w-full text-left text-sm whitespace-nowrap">
        <thead>
          <tr>
            <th scope="col">Date</th>
            <th scope="col">Vendor</th>
            <th scope="col">Category</th>
            <th scope="col" class="text-right">Amount</th>
            <th scope="col" class="text-center">Status</th>
          </tr>
        </thead>
        <tbody>
          @for (row of rows(); track row.id) {
            <tr>
              <td>{{ row.date | date: 'MMM d, y' }}</td>
              <td>{{ row.vendor }}</td>
              <td>{{ row.category }}</td>
              <td class="text-right">{{ row.amount | currency: row.currency }}</td>
              <td class="text-center"><app-status-badge [status]="row.status" /></td>
            </tr>
          } @empty {
            <tr>
              <td colspan="5">No extractions yet.</td>
            </tr>
          }
        </tbody>
      </table>
    </div>
  `,
})
export class RecentExtractionsTable {
  readonly rows = input.required<readonly RecentExtraction[]>();
  readonly viewAll = output<void>();
}
