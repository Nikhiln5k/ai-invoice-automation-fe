import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavRail } from '../nav-rail/nav-rail';

/**
 * Application shell: nav rail + scrollable main content area.
 * Desktop: [68px rail | content]. Mobile: [content / 60px bottom bar].
 */
@Component({
  selector: 'app-shell',
  imports: [RouterOutlet, NavRail],
  host: {
    class:
      'grid h-dvh w-screen overflow-hidden ' +
      'grid-rows-[1fr_60px] ' +
      'md:grid-rows-1 md:grid-cols-[68px_1fr]',
  },
  template: `
    <app-nav-rail class="order-2 md:order-1" />
    <main id="main-content" class="order-1 md:order-2 relative h-full w-full overflow-y-auto bg-zinc-50">
      <router-outlet />
    </main>
  `,
})
export class Shell {}
