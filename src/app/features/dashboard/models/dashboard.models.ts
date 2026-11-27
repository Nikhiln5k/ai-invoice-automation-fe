import { ExtractionStatus } from '../../../shared/models/extraction-status.model';

export type MetricTone = 'default' | 'primary';

export interface MetricTrend {
  readonly label: string; // e.g. "+14.2% M/M"
  readonly direction: 'up' | 'down' | 'flat';
}

export interface DashboardMetric {
  readonly id: string;
  readonly label: string; // "Total Spend (This Month)"
  readonly value: string; // "$12,481"
  readonly valueSuffix?: string; // ".50" or "Receipts"
  readonly icon: string; // Material Symbols name, e.g. "attach_money"
  readonly tone: MetricTone;
  readonly trend?: MetricTrend;
  readonly live?: boolean; // pulsing indicator
}

export interface TopCategory {
  readonly name: string; // "Travel & Transit"
  readonly icon: string; // Material Symbols name
  readonly share: number; // 0–100
}

export interface RecentExtraction {
  readonly id: string;
  readonly date: string; // ISO date
  readonly vendor: string;
  readonly category: string;
  readonly amount: number;
  readonly currency: string;
  readonly status: ExtractionStatus;
}
