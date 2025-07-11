import { FaServer, FaCode, FaTools } from 'react-icons/fa'; // Example icons

export const skillsData = [
  {
    id: 'backend',
    title: 'Backend Development',
    icon: FaServer,
    skills: [
      { name: 'Node.js', percent: 70 },
      { name: 'Express.js', percent: 80 },
      { name: 'REST & GraphQL APIs', percent: 70 },
      { name: 'SQL & NoSQL (MySQL, MongoDB)', percent: 60 },
      { name: 'Authentication & Security', percent: 65 },
      { name: 'Python (FastAPI)', percent: 50 },
    ],
  },
  {
    id: 'frontend',
    title: 'Frontend Development',
    icon: FaCode,
    skills: [
      { name: 'React', percent: 70 },
      { name: 'Next.js', percent: 55 },
      { name: 'JavaScript', percent: 75 },
      { name: 'TypeScript', percent: 50 },
      { name: 'TailwindCSS', percent: 70 },
      { name: 'Framer Motion', percent: 60 },
    ],
  },
  {
    id: 'tools',
    title: 'Tools & Practices',
    icon: FaTools,
    skills: [
      { name: 'Git & GitHub', percent: 80 },
      { name: 'Docker', percent: 50 },
      { name: 'CI/CD', percent: 65 },
      { name: 'Cloud', percent: 60 },
      { name: 'Software Architecture & Engineering', percent: 75 },
      { name: 'Linux & Bash', percent: 60 },
    ],
  },
];