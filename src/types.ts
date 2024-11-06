export interface Tool {
  id: string;
  name: string;
  description: string;
  url: string;
  icon: string;
  path: string;
  featured?: boolean;
  recentlyUpdated?: boolean;
}

export type TimeOfDay = 'morning' | 'afternoon' | 'evening';