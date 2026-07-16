export interface Project {
  number: string;
  title: string;
  description: string;
  technologies: string[];
  href: string;
  demo?: string;
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  summary: string;
}

export interface CapabilityGroup {
  title: string;
  items: string[];
}

export const site = {
  name: 'Dmitrii Malashikhin',
  role: 'Data Engineer',
  description:
    'Data Engineer building reliable ETL end-to-end, from source onboarding and normalization to enrichment, validation, and production support.',
  philosophy: 'Source to production. Observable by default. Boring when it matters.',
  location: 'New York City',
  timezone: 'America/New_York',
  email: 'hello@malashikh.in',
  domain: 'malashikh.in',
  resume: '/Dmitrii_Malashikhin_Data_Engineer_Resume.pdf',
  social: [
    { label: 'GitHub', href: 'https://github.com/themdq' },
    { label: 'LinkedIn', href: 'https://linkedin.com/in/themdq' },
    { label: 'Telegram', href: 'https://t.me/bonaquabro' },
  ],
} as const;

export const projects: Project[] = [
  {
    number: '01',
    title: 'ASOS Map',
    description: 'Interactive map for exploring weather stations and historical observations.',
    technologies: ['Kubernetes', 'React', 'Astro'],
    href: 'https://github.com/themdq/asos-map',
    demo: 'https://windborne.malashikh.in',
  },
  {
    number: '02',
    title: 'Telegram 2 Google Drive',
    description: 'A bot that routes files from Telegram conversations into connected Google Drive folders.',
    technologies: ['Terraform', 'AWS', 'GCP'],
    href: 'https://github.com/themdq/tg2gd',
  },
  {
    number: '03',
    title: 'Job Search Platform',
    description: 'A platform for searching, aggregating, and tracking vacancies.',
    technologies: ['Kubernetes', 'PostgreSQL', 'Django'],
    href: 'https://github.com/themdq/jobsearch',
  },
];

export const experience: Experience[] = [
  {
    role: 'Data Engineer',
    company: 'R-Vision',
    period: 'Oct 2023 — Jan 2026',
    summary:
      'Owned end-to-end vulnerability data feeds for a security scanner: source research, ETL pipelines, enrichment across vulnerability databases, validation, automation, CI/CD, and developer tooling.',
  },
  {
    role: 'Data Engineer',
    company: 'Datagile',
    period: 'Aug 2022 — Oct 2023',
    summary:
      'Built SIEM normalization rules and Python connectors, documented integrations, supported production workflows, and automated routine engineering work.',
  },
];

export const capabilities: CapabilityGroup[] = [
  { title: 'Data engineering', items: ['Python', 'SQL', 'ETL', 'data quality'] },
  { title: 'Platforms', items: ['Airflow', 'Kubernetes', 'Docker', 'Terraform'] },
  { title: 'Systems', items: ['PostgreSQL', 'Kafka', 'Elasticsearch', 'CI/CD'] },
];

export const education = [
  {
    degree: 'MS in Information Systems',
    school: 'Admiral Makarov State University',
    period: '2022 — 2024',
  },
  {
    degree: 'BS in Computer Science',
    school: 'Admiral Makarov State University',
    period: '2018 — 2022',
  },
] as const;

export const interests = [
  'MMA',
  'NBA',
  'Swimming',
  'Rollerblading',
  'Indie music',
  'Coffee',
  'Books',
  'Films',
  'Photography',
  'Digital minimalism',
] as const;
