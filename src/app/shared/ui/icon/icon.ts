import { Component, input } from '@angular/core';

/**
 * Material Symbols icon.
 * Usage: <app-icon name="dashboard" />  — names: https://fonts.google.com/icons
 *
 * Icons are decorative (aria-hidden), so always pair them with visible text
 * or an aria-label on the parent button/link.
 */
@Component({
  selector: 'app-icon',
  host: {
    class: 'icon inline-block',
    'aria-hidden': 'true',
    '[style.font-variation-settings]': `filled() ? "'FILL' 1" : null`,
  },
  template: `{{ name() }}`,
})
export class Icon {
  readonly name = input.required<string>();
  readonly filled = input(false);
}
