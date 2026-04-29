/**
 * Skills data — categorized for display.
 * Add / remove items here; the UI renders dynamically.
 */

export const skillCategories = [
  {
    id: 'ai-ml',
    label: 'AI / ML',
    icon: '◈',
    skills: [
      'PyTorch',
      'TensorFlow',
      'Scikit-learn',
      'LSTM',
      'Prompt Engineering',
    ],
  },
  {
    id: 'frontend',
    label: 'Frontend',
    icon: '◉',
    skills: [
      'React',
      'Next.js (App Router)',
      'TypeScript',
      'Tailwind CSS',
      'Framer Motion',
      'Three.js / R3F',
      'React Query',
    ],
  },
  {
    id: 'backend',
    label: 'Backend',
    icon: '◌',
    skills: [
      'Node.js',
      'RESTAPI',
      'Express',
      'PostgreSQL',
      'MongoDB',
      'Redis',
      'REST & GraphQL',
      'WebSockets',
      'JWT / Auth',
    ],
  },
  {
    id: 'tools',
    label: 'Tools & Infra',
    icon: '◎',
    skills: [
      'Docker',
      'Git & GitHub',
      'Vercel / Railway',
      'AWS (S3, EC2)',
      'CI/CD (GitHub Actions)',
      'Linux / Bash',
      'Postman',
    ],
  },
];

export default skillCategories;
