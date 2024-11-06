import { Tool } from '../types';
import { QrCode, Users, AlertCircle, BarChart, Map } from 'lucide-react';

export const tools: Tool[] = [
  {
    id: '1',
    name: 'QR Code Generator',
    description: 'Generate custom QR codes for your clients',
    url: 'https://spiffy-profiterole-6e2e54.netlify.app/',
    icon: 'QrCode',
    path: 'qr-code',
    recentlyUpdated: true
  },
  {
    id: '2',
    name: 'Duplicate Prospect Analyzer',
    description: 'Identify and manage duplicate prospects efficiently',
    url: 'https://super-souffle-b68dd7.netlify.app/',
    icon: 'Users',
    path: 'duplicate-analyzer',
    featured: true
  },
  {
    id: '3',
    name: 'Sync Error Auditor',
    description: 'Audit and resolve synchronization errors',
    url: 'https://euphonious-bavarois-d23bf1.netlify.app/',
    icon: 'AlertCircle',
    path: 'sync-error',
    featured: true
  },
  {
    id: '4',
    name: 'SLX™ Campaign Member Manager',
    description: 'Efficiently manage and track campaign members',
    url: 'https://phenomenal-douhua-468c53.netlify.app/',
    icon: 'BarChart',
    path: 'campaign-manager',
    featured: true
  },
  {
    id: '5',
    name: 'Journey Hub',
    description: 'Design and visualize customer journeys with ease',
    url: 'https://iridescent-cannoli-95802f.netlify.app/',
    icon: 'Map',
    path: 'journey-hub',
    featured: true,
    recentlyUpdated: true
  }
];