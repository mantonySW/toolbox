import { Tool } from '../types';
import { QrCode, Users, AlertCircle } from 'lucide-react';

export const tools: Tool[] = [
  {
    id: '1',
    name: 'QR Code Generator',
    description: 'Generate custom QR codes for your business needs',
    url: 'https://nimble-twilight-9517d1.netlify.app/',
    icon: 'QrCode'
  },
  {
    id: '2',
    name: 'Duplicate Prospect Analyzer',
    description: 'Identify and manage duplicate prospects efficiently',
    url: 'https://preeminent-kheer-315189.netlify.app/',
    icon: 'Users',
    featured: true
  },
  {
    id: '3',
    name: 'Sync Error Auditor',
    description: 'Audit and resolve synchronization errors',
    url: 'https://meek-stroopwafel-46fcfe.netlify.app/',
    icon: 'AlertCircle',
    featured: true
  }
];