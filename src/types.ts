export interface Treatment {
  id: string;
  name: string;
  subtitle: string;
  category: 'facial' | 'lips' | 'bio' | 'corrective' | 'male' | 'tech';
  productsOrTech: string;
  tagline: string;
  shortDescription: string;
  fullDescription: string;
  indications: string[];
  keyBenefits: string[];
  sessionTime: string;
  recovery: string;
  evaluationRequired: boolean;
  image: string;
}

export interface TechnologyItem {
  id: string;
  name: string;
  badge: string;
  officialDescription: string;
  clinicalApplication: string;
  scientificHighlights: string[];
  image: string;
}

export interface Specialist {
  name: string;
  role: string;
  specialty: string;
  bio: string;
  credentials: string[];
  image: string;
}

export interface ClinicalResultCase {
  id: string;
  procedure: string;
  title: string;
  zone: string;
  resultSummary: string;
  clinicalObservation: string;
  harmonizationPoints: string[];
  productUsed: string;
  sessionInfo: string;
  beforeImage: string;
  afterImage: string;
  compositeImage?: string;
  fileSlot?: string;
  tag: string;
  badge: string;
}

export interface TestimonialItem {
  id: string;
  quote: string;
  patientName: string;
  procedure: string;
  city: string;
}

export interface AuthorityPillar {
  id: string;
  title: string;
  description: string;
  iconName: string;
}
