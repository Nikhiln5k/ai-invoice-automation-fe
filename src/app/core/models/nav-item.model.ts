export interface NavItem {
  /** Router path, e.g. `/dashboard` */
  readonly path: string;
  /** Visible tooltip + accessible name */
  readonly label: string;
  /** Material Symbols icon name, e.g. `dashboard` */
  readonly icon: string;
  /** Shows the pulsing activity dot */
  readonly hasActivity?: boolean;
}
