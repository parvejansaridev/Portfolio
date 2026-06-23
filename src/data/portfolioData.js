// src/data/portfolioData.js
// Single source of truth for all portfolio content.
// Edit this file to update copy across the entire site.

export const personal = {
  name: 'Mohammad Parvej Ansari',
  initials: 'PA',
  roles: ['Python Developer', 'FastAPI Developer', 'React Developer', 'Full Stack Developer'],
  location: 'Dholka, Gujarat, India',
  email: 'ansarimohammadparvej7@gmail.com',
  phone: '+91 9429410486',
  linkedin: 'https://www.linkedin.com/in/mohammad-parvej-ansari-74179b329/',
  github: 'https://github.com/parvej-devloper',
  resume: '/assets/Parvej_Ansari_Resume.pdf',
  photo: '/assets/profile.png',
  tagline:
    "Backend-leaning Full Stack Developer who ships REST APIs first, then builds the interface that does them justice.",
  about: [
    "I'm a Full Stack Developer with hands-on, production experience in Python, FastAPI, PostgreSQL, and React.js — gained while building a live e-commerce platform end to end during my internship.",
    "My core strength is backend engineering: designing clean REST APIs, structuring relational databases, and wiring up secure authentication. I pair that with a React front end that consumes those APIs cleanly, so nothing feels bolted together.",
    "I'm currently completing my MCA, and outside coursework I keep building — shipping small, well-documented projects and writing APIs the way I'd want to consume them myself.",
  ],
};

export const stats = [
  { label: 'REST APIs shipped', value: 12, suffix: '+' },
  { label: 'Months hands-on (internship)', value: 5, suffix: '' },
  { label: 'Core stack', value: 4, suffix: '', display: 'Py/FastAPI/PG/React' },
  { label: 'Production project', value: 1, suffix: '', display: 'Satan Fits' },
];

export const skills = {
  Frontend: [
    { name: 'HTML5', level: 90 },
    { name: 'CSS3', level: 88 },
    { name: 'JavaScript', level: 80 },
    { name: 'React.js', level: 75 },
    { name: 'Responsive Design', level: 88 },
  ],
  Backend: [
    { name: 'Python', level: 90 },
    { name: 'FastAPI', level: 85 },
    { name: 'REST API Development', level: 88 },
    { name: 'JWT Authentication', level: 80 },
  ],
  Database: [
    { name: 'PostgreSQL', level: 82 },
    { name: 'SQL', level: 85 },
    { name: 'MySQL', level: 75 },
  ],
  Tools: [
    { name: 'Git & GitHub', level: 85 },
    { name: 'Postman', level: 85 },
    { name: 'VS Code', level: 92 },
    { name: 'Cloudinary', level: 78 },
  ],
};

export const experience = [
  {
    role: 'AI / Full-Stack Developer Intern',
    company: 'Eternal Web Pvt. Ltd.',
    period: 'Dec 2025 — Apr 2026',
    points: [
      'Developed a full-stack e-commerce application end to end using Python (FastAPI) and React.js.',
      'Implemented secure user authentication and authorization using Clerk.',
      'Designed dynamic UI components with real-time stock updates and admin panel features.',
      'Integrated RESTful APIs with frontend components for seamless data flow.',
      'Used Cloudinary for efficient image storage and management.',
      'Contributed to scalable, maintainable backend services in a production codebase.',
    ],
  },
];

export const projects = [
  {
    title: 'Satan Fits — E-commerce Platform',
    description:
      'A full-stack e-commerce application built using React, FastAPI, and PostgreSQL — covering authentication, catalog, cart, and order flow from the database up.',
    features: [
      'JWT login & registration',
      'Product management',
      'Shopping cart & checkout',
      'Order tracking',
      'Admin dashboard',
      'REST APIs throughout',
    ],
    tech: ['React.js', 'FastAPI', 'PostgreSQL', 'JWT', 'Cloudinary'],
    live: 'https://satan-fits.vercel.app',
    github: 'https://github.com/parvej-devloper',
    featured: true,
  },
  {
    title: 'Renewed Gadgets Portal',
    description:
      'MCA academic project — an e-commerce platform for refurbished gadgets, with product management, authentication, and order handling built on a relational schema.',
    features: ['Product management', 'Authentication', 'Order handling', 'Relational DB design'],
    tech: ['HTML', 'CSS', 'Java', 'PHP', 'MySQL'],
    live: null,
    github: 'https://github.com/parvej-devloper',
    featured: false,
  },
  {
    title: 'Smart Door Lock',
    description:
      'BCA robotics project — an embedded security system implementing access-control logic for automated door locking.',
    features: ['Embedded programming', 'Access control logic', 'Hardware-software integration'],
    tech: ['C', 'C++', 'Embedded Systems'],
    live: null,
    github: 'https://github.com/parvej-devloper',
    featured: false,
  },
];

export const education = [
  {
    degree: 'Master of Computer Applications (MCA)',
    school: 'SKPIMCS-KSV University, Gandhinagar',
    period: '2024 — 2026',
    detail: 'CGPA: 6.38',
  },
  {
    degree: 'Bachelor of Computer Applications (BCA)',
    school: 'SKPIMCS-KSV University, Gandhinagar',
    period: '2021 — 2024',
    detail: 'CGPA: 7.88',
  },
  {
    degree: 'Higher Secondary (12th) — Commerce',
    school: 'MCHD, Gujarat Board, Dholka',
    period: '2021',
    detail: '54.57%',
  },
  {
    degree: 'Secondary (10th)',
    school: 'MCHD, Gujarat Board, Dholka',
    period: '2019',
    detail: '64.66%',
  },
];

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
];
