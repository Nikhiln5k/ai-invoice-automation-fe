import { Component, input } from '@angular/core';
import { Icon } from '../../../../shared/ui/icon/icon';
import { DashboardMetric } from '../../models/dashboard.models';

/** KPI card: icon tile, optional trend/live indicator, label, mono value. */
@Component({
  selector: 'app-metric-card',
  imports: [Icon],
  host: { class: 'flex flex-col justify-between bg-white p-6 border border-zinc-200 rounded' },
  template: `
    <div class="mb-8 flex items-start justify-between">
      <span
        class="flex size-10 items-center justify-center rounded border"
        [class]="
          metric().tone === 'primary'
            ? 'bg-primary/10 border-primary/20 text-primary'
            : 'bg-zinc-50 border-zinc-100 text-zinc-900'
        "
      >
        <app-icon [name]="metric().icon" class="text-xl" />
      </span>

      @if (metric().trend; as trend) {
        <span class="font-mono text-micro uppercase tracking-wider">{{ trend.label }}</span>
      }
    </div>

    <p class="text-sm text-zinc-500">{{ metric().label }}</p>
    <p class="font-mono text-3xl font-medium tracking-tight">
      {{ metric().value }}<span>{{ metric().valueSuffix }}</span>
    </p>
  `,
})
export class MetricCard {
  readonly metric = input.required<DashboardMetric>();
}
