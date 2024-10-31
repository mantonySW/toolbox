export interface Tool {
  id: string;
  name: string;
  description: string;
  url: string;
  icon: string;
  featured?: boolean;
  recentlyUpdated?: boolean;
}

export type TimeOfDay = 'morning' | 'afternoon' | 'evening';