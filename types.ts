
export interface Message {
  role: 'user' | 'model';
  text: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  location: string;
  description: string[];
}

export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  stats?: { label: string; value: string }[];
}

export interface Talk {
  id: string;
  title: string;
  event: string;
  year: string;
  type: 'Keynote' | 'Panel' | 'Workshop';
  link?: string;
}

export interface Publication {
  id: string;
  title: string;
  publisher: string;
  year: string;
  type: 'Book' | 'Paper' | 'Article';
  link?: string;
  description?: string;
}
