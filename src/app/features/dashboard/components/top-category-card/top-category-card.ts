import { Component, input } from '@angular/core';
import { Icon } from '../../../../shared/ui/icon/icon';
import { TopCategory } from '../../models/dashboard.models';

/** Dark highlight card showing the top spend category and its share. */
@Component({
  selector: 'app-top-category-card',
  imports: [Icon],
  host: { class: 'flex flex-col justify-between bg-zinc-950 text-white p-6 rounded' },
  template: `
    <div class="mb-6 flex items-start justify-between">
      <p class="text-sm text-zinc-400">Top Category</p>
      <app-icon [name]="category().icon" class="text-zinc-400" />
    </div>
    <p class="text-2xl font-medium tracking-tight">{{ category().name }}</p>
    <div
      role="progressbar"
      [attr.aria-valuenow]="category().share"
      aria-valuemin="0"
      aria-valuemax="100"
      [attr.aria-label]="category().name + ' share of spend'"
    >
      {{ category().share }}%
    </div>
  `,
})
export class TopCategoryCard {
  readonly category = input.required<TopCategory>();
}
