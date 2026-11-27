import { Component, output } from '@angular/core';
import { Icon } from '../../../../shared/ui/icon/icon';

/** Page title block + primary actions (Export CSV, Upload Receipt). */
@Component({
  selector: 'app-dashboard-header',
  imports: [Icon],
  host: { class: 'flex flex-col justify-between gap-4 md:flex-row md:items-end' },
  template: `
    <div>
      <p class="mb-2 font-mono text-xs font-bold uppercase tracking-widest text-primary">Financial Cortex</p>
      <h1 class="text-4xl leading-none font-light tracking-tighter md:text-5xl">Overview</h1>
    </div>
    <div class="flex items-center gap-3">
      <button type="button" class="flex items-center gap-2" (click)="exportCsv.emit()">
        <app-icon name="download" />
        <span>Export CSV</span>
      </button>
      <button type="button" class="flex items-center gap-2" (click)="uploadReceipt.emit()">
        <app-icon name="add" />
        <span>Upload Receipt</span>
      </button>
    </div>
  `,
})
export class DashboardHeader {
  readonly exportCsv = output<void>();
  readonly uploadReceipt = output<void>();
}
