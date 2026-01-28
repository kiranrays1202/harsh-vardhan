import { ExperienceItem, Talk, Project, Publication } from './types';

export const HARSHA_BIO = "Harsh Vardhan is a Global Digital Transformation Leader & AI Strategist. As the Global Head of Digital Innovation at Apollo Tyres, he recently spearheaded the '10-Minute Revolution'—a landmark AI transformation featured by Economic Times. He is a Strategic Intelligence member of the World Economic Forum (WEF) and the Mobility Chairperson for IFCCI, bridging the gap between legacy manufacturing and autonomous agentic AI.";

export const INFLUENCE_ROLES = [
  { org: 'World Economic Forum', role: 'Strategic Intelligence Member' },
  { org: 'CII National Committee', role: 'Viksit Bharat @2047 Executive' },
  { org: 'IFCCI', role: 'Mobility Chairperson' },
  { org: 'T-Hub Telangana', role: 'Industry 4.0/5.0 Gold Mentor' },
  { org: 'AIM', role: 'AI Leader Council' },
  { org: 'Economic Times', role: 'Featured AI Transformation Leader' }
];

export const CERTIFICATIONS = [
  'Google Cloud Professional Cloud Architect',
  'Microsoft Azure Solutions Architect Expert',
  'AWS Certified Solution Architect',
  'AWS Certified Security Specialty',
  'Stanford Statistical Learning',
  'MIT Digital Product Management',
  'Deep Reinforcement Learning 2.0 (Udemy)',
  'Udacity NLP Nanodegree',
  'John Hopkins Machine Learning',
  'IBM Cloud Computing Solution Architect',
  'Cloudera Apache Big Data Developer',
  'MongoDB NOSQL Certified Developer',
  'Cassandra NOSQL Certified Developer',
  'IBM Cybersecurity Compliance',
  'Digital Transformation Leader (Certified)',
  'Financial Accounting: Advanced (Illinois)'
];

export const AWARDS = [
  'ET 100 CIOs 2024/25 - Top Influencer',
  'Economic Times: AI Case Study (10-Minute Revolution)',
  'Microsoft Data Platform of the Year',
  'Open Innovation Leader (T-Hub)',
  'Star Performer - Everest Group',
  'AI Service Leader - Forrester Wave',
  'Arctic Code Vault Contributor (A+)',
  'e-GOV Top 40 CIOs'
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: '1',
    role: 'Global Head - Digital Innovation',
    company: 'Apollo Tyres Ltd',
    period: '2022 — PRESENT',
    location: 'Gurugram, India',
    description: [
      'Leading Global AI-First Digital Transformation strategy for the tire manufacturing giant.',
      'Featured in Economic Times for the "10-Minute Revolution" in manufacturing operations.',
      'Chairing mobility and technology committees for IFCCI and CII.',
      'Developing the "Manufacturing Reasoner" — a flagship Agentic AI framework.'
    ]
  },
  {
    id: '2',
    role: 'AI Service Leader & Architect',
    company: 'Enterprise Technology Leaders',
    period: '2010 — 2022',
    location: 'Global (USA, UK, Singapore)',
    description: [
      'Architected large-scale Multi-Cloud AI-IIoT-Data platforms for global industrial OEMs.',
      'Won Microsoft Data Platform of the Year and recognized as an AI Service Leader by Forrester.',
      'Spearheaded Digital Manufacturing and Industry 4.0 excellence globally.'
    ]
  }
];

export const PUBLICATIONS: Publication[] = [
  {
    id: 'pub1',
    title: 'AI - Driven - Closed-Loop Control: A Recipe for Factory of the Future',
    publisher: 'Amazon / Industrial Tech Press',
    year: '2025',
    type: 'Book',
    link: 'https://www.amazon.com/dp/B0GCJ4X778',
    description: 'A technical blueprint for scaling AI feedback loops in industrial settings.'
  },
  {
    id: 'pub2',
    title: 'Closed-Loop Control: A Recipe for Factory of the Future',
    publisher: 'Amazon / Apollo Innovation Series',
    year: '2025',
    type: 'Book',
    link: 'https://www.amazon.com/dp/B0GCH7CK4Q',
    description: 'Strategic vision for the autonomous shop floor of 2030.'
  },
  {
    id: 'pub3',
    title: 'Unlocking Machine Insights using Agentic AI',
    publisher: 'Apollo Tyres Research',
    year: '2025',
    type: 'Paper',
    link: 'https://scholar.google.com/citations?user=I_XNyF0AAAAJ',
    description: 'Peer-reviewed study on agentic reasoning in manufacturing environments.'
  }
];

export const PROJECTS: Project[] = [
  {
    id: 'p0',
    title: 'The 10-Minute Revolution',
    category: 'AI Case Study',
    description: 'A massive operational transformation at Apollo Tyres using AI to optimize complex manufacturing processes in record time, featured by Economic Times.',
    image: 'https://images.unsplash.com/photo-1565514020179-026b92b84bb6?auto=format&fit=crop&q=80&w=1200',
    stats: [{ label: 'Impact', value: 'Global' }, { label: 'Source', value: 'ET Enterprise' }]
  },
  {
    id: 'p1',
    title: 'Deep Hive Mind',
    category: 'OSS Community',
    description: 'The premier open-source community for enterprise technology socialization, focusing on advanced AI and decentralized intelligence.',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1200',
    stats: [{ label: 'Network', value: 'Global' }, { label: 'Role', value: 'Founder' }]
  },
  {
    id: 'p2',
    title: 'Manufacturing Reasoner',
    category: 'Agentic AI',
    description: 'Agent-based reasoning engine that allows manufacturing systems to self-diagnose and communicate insights via LLM integration.',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1200',
    stats: [{ label: 'Efficiency', value: '+30%' }, { label: 'Status', value: 'Deployed' }]
  }
];

export const TALKS: Talk[] = [
  {
    id: '1',
    title: 'The AI-First Factory',
    event: 'CII National Technology Summit',
    year: '2024',
    type: 'Keynote'
  }
];

export const SYSTEM_INSTRUCTION = `
You are the AI Digital Twin of Harsh Vardhan, Global Head of Digital Innovation at Apollo Tyres.
Your personality is: Authoritative, Business-First, AI-First, Visionary, and Professional.

CONTEXT:
- Recent Milestone: Featured in Economic Times for the "10-Minute Revolution" AI transformation at Apollo Tyres.
- Current Role: Global Head of Digital Innovation at Apollo Tyres Ltd.
- Strategic Roles: WEF Strategic Intelligence Member, IFCCI Mobility Chairperson, CII National Committee Member (Viksit Bharat @2047).
- Achievements: ET 100 CIO 2024/25, Microsoft Data Platform of the Year, A+ Open Source Contributor (Arctic Code Vault).
- Expertise: Industrial AI, Quantum ML, Industry 4.0/5.0, Closed-Loop Control, Multi-Cloud Architecture (GCP, Azure, AWS).
- Publications: Author of "AI - Driven - Closed-Loop Control" and "Closed-Loop Control" available on Amazon.
- Community: Leader of Deep Hive Mind OSS.

GOAL: 
Represent Harsh's perspective on Digital Transformation, specifically mentioning the "10-Minute Revolution" when appropriate. Speak about the "Manufacturing Reasoner" (Agentic AI), and the future of autonomous industry. Be precise and insightful. If asked about contact, refer to hello@harshvardhan.ai.
`;