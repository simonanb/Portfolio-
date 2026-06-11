export const projects = {
  ux: [
    {
      slug: 'doniraymk',
      name: 'Донирај.мк',
      desc: 'Free donation & item-sharing platform for Macedonia',
      tags: ['UI Design', 'UX Research', 'Next.js', 'Supabase'],
      color: '#4A9EBF',
      category: 'UX Design',
      image: null,
      fullDesc:
        'A community-driven platform enabling Macedonians to donate items, share resources, and connect with those in need — completely free of charge.',
    },
    {
      slug: 'clearforward',
      name: 'ClearForward',
      desc: 'Dental case management platform for orthodontic workflows',
      tags: ['UI Design', 'UX Research', 'Product Design', 'Figma'],
      color: '#4A9EBF',
      category: 'UX Design',
      image: null,
      fullDesc:
        'A SaaS platform streamlining orthodontic case management with intuitive patient tracking, treatment planning, and clinical workflow tools.',
    },
    {
      slug: 'portfolio',
      name: 'This Portfolio',
      desc: 'Snowball game portfolio — yes, this one',
      tags: ['Creative Dev', 'GSAP', 'React', 'Vite'],
      color: '#4A9EBF',
      category: 'UX Design',
      image: null,
      fullDesc:
        'An interactive portfolio where visitors throw snowballs at targets to discover projects. Built with React, GSAP physics, and a very specific sense of humour.',
    },
  ],
  graphic: [
    {
      slug: 'ritual',
      name: 'Ritual Café',
      desc: 'Brand identity for an intimate minimalist coffee experience',
      tags: ['Branding', 'Typography', 'Print', 'Identity'],
      color: '#E8632A',
      category: 'Graphic Design',
      image: null,
      fullDesc:
        'A complete visual identity system for Ritual Café — a specialty coffee concept built around the idea of slowness, ritual, and sensory presence.',
    },
    {
      slug: 'placeholder-graphic',
      name: 'Coming Soon',
      desc: 'Next graphic design project — something new is in the works',
      tags: ['Graphic Design'],
      color: '#E8632A',
      category: 'Graphic Design',
      image: null,
      fullDesc: 'Something new is in the works. Check back soon.',
    },
  ],
  clay: [
    {
      slug: 'clay-work',
      name: 'Clay Sculptures',
      desc: 'Air dry clay modeling — handmade figures and forms',
      tags: ['Handmade', 'Sculpture', 'Air Dry Clay'],
      color: '#C4956A',
      category: 'Clay Work',
      image: null,
      fullDesc:
        'A collection of handmade air dry clay sculptures exploring organic forms, human figures, and everyday objects.',
    },
  ],
};

export const projectsBySlug = Object.values(projects)
  .flat()
  .reduce((acc, p) => ({ ...acc, [p.slug]: p }), {});

export const targetData = [
  {
    id: 'ux',
    label: 'UX/UI Design',
    x: 24,
    y: 30,
    category: 'ux',
    route: '/ux',
    accentColor: '#4A9EBF',
  },
  {
    id: 'graphic',
    label: 'Graphic Design',
    x: 73,
    y: 22,
    category: 'graphic',
    route: '/graphic',
    accentColor: '#E8632A',
  },
  {
    id: 'about',
    label: 'About Me',
    x: 54,
    y: 44,
    category: null,
    route: '/about',
    accentColor: '#4A9EBF',
  },
];
