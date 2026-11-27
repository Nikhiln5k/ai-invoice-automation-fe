import { Component, input } from '@angular/core';
import { ExtractionStatus } from '../../models/extraction-status.model';

/**
 * Status pill (Review / Saved / …). Reused by dashboard, ledger and extraction views.
 * Styling to be applied in the UI pass.
 */
@Component({
  selector: 'app-status-badge',
  host: { class: 'inline-flex items-center gap-1.5 font-mono text-micro uppercase tracking-wider' },
  template: `<span aria-hidden="true" class="size-1.5 rounded-full"></span>{{ status() }}`,
})
export class StatusBadge {
  readonly status = input.required<ExtractionStatus>();
}
