import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { Icon } from '../../../shared/ui/icon/icon';
import { NAV_ITEMS } from './nav-items';

/**
 * Vertical 68px navigation rail (desktop) / bottom bar (mobile).
 * On desktop the label shows as a tooltip on hover/focus; on mobile it sits under the icon.
 */
@Component({
  selector: 'app-nav-rail',
  imports: [RouterLink, RouterLinkActive, Icon],
  host: {
    class:
      'flex md:flex-col items-center justify-around md:justify-start ' +
      'bg-white border-t md:border-t-0 md:border-r border-zinc-200 ' +
      'px-4 md:px-0 md:py-6 z-50',
  },
  template: `
    <a
      routerLink="/dashboard"
      class="hidden md:flex size-8 items-center justify-center bg-zinc-950 text-white font-mono font-bold tracking-tighter text-lg mb-8"
      aria-label="ExTrack home"
    >
      Ex
    </a>

    <nav aria-label="Primary" class="contents md:block md:w-full">
      <ul class="flex md:flex-col items-center gap-6 md:gap-8 list-none m-0 p-0">
        @for (item of navItems; track item.path) {
          <li>
            <a
              [routerLink]="item.path"
              routerLinkActive="text-primary"
              ariaCurrentWhenActive="page"
              class="group relative flex flex-col items-center gap-1 text-zinc-500 hover:text-primary transition-colors"
            >
              <app-icon [name]="item.icon" class="text-2xl" />
              <span
                class="text-micro uppercase tracking-wider whitespace-nowrap
                       md:absolute md:left-12 md:rounded md:bg-zinc-900 md:px-2 md:py-1 md:text-white
                       md:pointer-events-none md:opacity-0 md:transition-opacity
                       md:group-hover:opacity-100 md:group-focus-visible:opacity-100"
              >
                {{ item.label }}
              </span>
            </a>
          </li>
        }
      </ul>
    </nav>

    <div class="hidden md:flex mt-auto flex-col items-center gap-6">
      <button type="button" class="text-zinc-500 hover:text-zinc-900 transition-colors" aria-label="Settings">
        <app-icon name="settings" class="text-2xl" />
      </button>
    </div>
  `,
})
export class NavRail {
  protected readonly navItems = NAV_ITEMS;
}
