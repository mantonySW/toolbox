import { Tool } from '../types';
import { QrCode, Users, AlertCircle, BarChart, Map, FileText, FileSpreadsheet } from 'lucide-react';

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
    url: 'https://gregarious-cuchufli-7c17bc.netlify.app/',
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
    recentlyUpdated: true
  },
  {
    id: '6',
    name: 'Add To Calendar Generator',
    description: 'Create calendar event links for seamless meeting scheduling',
    url: 'https://remarkable-kulfi-ebc561.netlify.app',
    icon: 'FileText',
    path: 'calendar-generator',
    featured: true,
    recentlyUpdated: true
  },
  {
    id: '7',
    name: 'Data Analyzer',
    description: 'Upload your CSV or Excel file to analyze and group your data',
    url: 'https://stirring-frangollo-0019ff.netlify.app/',
    icon: 'FileSpreadsheet',
    path: 'data-analyzer',
    featured: true,
    recentlyUpdated: true
  }
];