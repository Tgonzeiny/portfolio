import { FaServer, FaCode, FaTools } from 'react-icons/fa'; // Example icons

export const skillsData = [
  {
    id: 'backend',
    title: 'Backend Development',
    icon: FaServer,
    skills: [
      { name: 'Node.js', percent: 40 },
      { name: 'RESTful APIs', percent: 85 },
      { name: 'Java (Spring Boot)', percent: 70 },
      { name: 'SQL (MySQL, PostgreSQL)', percent: 75 },
      { name: 'Authentication & Security', percent: 65 },
      { name: 'Flask & FastAPI (Python)', percent: 80 },
    ],
  },
  {
    id: 'frontend',
    title: 'Frontend Development',
    icon: FaCode,
    skills: [
      { name: 'React.js', percent: 60 },
      { name: 'TailwindCSS', percent: 40},
      { name: 'JavaScript (ES6+)', percent: 65 },
      { name: 'JavaFX', percent: 90 },
      { name: 'TailwindCSS', percent: 50 },
      { name: 'React Native', percent: 40 },
    ],
  },
  {
    id: 'tools',
    title: 'Tools & Practices',
    icon: FaTools,
    skills: [
      { name: 'Git & GitHub/GitLab', percent: 90 },
      { name: 'Docker', percent: 50 },
      { name: 'CI/CD & Pipelines', percent: 80 },
      { name: 'System Debugging & Scripting', percent: 70 },
      { name: 'Software Architecture & Engineering', percent: 75 },
      { name: 'Linux & Bash', percent: 55 },
    ],
  },
];