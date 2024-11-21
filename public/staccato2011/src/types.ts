export interface JourneyDay {
  day: number;
  title: string;
  description: string;
  completed: boolean;
  metrics: {
    responseRate: number;
    satisfaction: number;
    engagement: number;
  };
  communications: {
    type: 'automated' | 'personal';
    channel: string;
    content: string;
    owner?: string;
  }[];
  nextSteps: string[];
}

export interface ReferralMetrics {
  referralsPerVIP: number;
  conversionRate: number;
  timeToFirstReferral: number;
  qualityScore: number;
}

export interface RepurchaseMetrics {
  additionalPurchaseRate: number;
  timeToSecondPurchase: number;
  crossCategoryRate: number;
  orderValueIncrease: number;
}

export interface ProgramMetrics {
  npsScore: number;
  engagementRate: number;
  eventParticipation: number;
  communityInvolvement: number;
}

export interface StrategyProgram {
  name: string;
  description: string;
  metrics: {
    conversionRate: number;
    participationRate: number;
    satisfactionScore: number;
    engagementRate: number;
  };
  status: 'active' | 'pending' | 'completed';
}