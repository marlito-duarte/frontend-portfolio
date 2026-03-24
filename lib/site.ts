export const site = {
  name: "Marlito",
  fullName: "Marlito Duarte",
  title: "Front-End Developer",
  tagline:
    "A developer who loves turning ideas into clean, user-friendly web experiences that look great on any device.",
  email: "ugly0236@gmail.com",
  initials: "T",
  social: {
    linkedin: "https://www.linkedin.com/in/marlito-duarte-b679243b1/",
    github: "https://github.com/marlito-duarte",
    upwork: "https://www.upwork.com/freelancers/~01aed9ca0d82e23fe3",
  },
} as const;

export const techStack = [
  { name: "React", icon: "⚛️" },
  { name: "Next.js", icon: "▲" },
  { name: "TypeScript", icon: "TS" },
  { name: "Tailwind CSS", icon: "🎨" },
  { name: "HTML/CSS", icon: "</>" },
  { name: "JavaScript", icon: "JS" },
] as const;

export const tools = [
  { name: "VS Code", icon: "💻" },
  { name: "Figma", icon: "◆" },
  { name: "Git", icon: "⎇" },
  { name: "Vercel", icon: "▲" },
  { name: "Chrome DevTools", icon: "🔧" },
  { name: "npm", icon: "📦" },
  { name: "ESLint", icon: "✓" },
  { name: "Postman", icon: "📮" },
] as const;

export type Project = {
  id: string;
  title: string;
  category: "web" | "design";
  url?: string;
  thumbnail?: string;
  image?: string;
};

/** Prefer thumbnail for cards; fall back to full image. Paths are under `public/assets/imgs/projects/`. */
export function projectCardSrc(project: Project): string | undefined {
  return project.thumbnail ?? project.image;
}

export const projects: Project[] = [
  {
    id: "1",
    title: "SaaS Dashboard",
    thumbnail: "/assets/imgs/projects/saas-dashboard-thumbnail.jpg",
    image: "/assets/imgs/projects/saas-dashboard.jpg",
    category: "web",
  },
  {
    id: "2",
    title: "E‑commerce UI",
    thumbnail: "/assets/imgs/projects/e-commerce-ui-thumbnail.jpg",
    image: "/assets/imgs/projects/e-commerce-ui.jpg",
    category: "web",
  },
  {
    id: "3",
    title: "Health Care",
    thumbnail: "/assets/imgs/projects/health-care-thumbnail.jpg",
    image: "/assets/imgs/projects/health-care.jpg",
    category: "web",
  },
  {
    id: "4",
    title: "Landing Page",
    thumbnail: "/assets/imgs/projects/landing-page-thumbnail.jpg",
    url: "https://talentosolutionsph.com/",
    category: "web",
  },
  {
    id: "5",
    title: "Marketing Site",
    thumbnail: "/assets/imgs/projects/marketing-site-thumbnail.jpg",
    image: "/assets/imgs/projects/marketing-site.jpg",
    category: "web",
  },
  {
    id: "6",
    title: "Brand System",
    thumbnail: "/assets/imgs/projects/brand-system-thumbnail.jpg",
    image: "/assets/imgs/projects/brand-system.jpg",
    category: "web",
  },
];

export const logoDesigns = [
  { id: "l1", label: "Logo A", accent: "from-amber-400/40 to-yellow-500/30" },
  { id: "l2", label: "Logo B", accent: "from-orange-400/40 to-red-500/30" },
  { id: "l3", label: "Logo C", accent: "from-lime-400/40 to-green-500/30" },
  { id: "l4", label: "Logo D", accent: "from-cyan-400/40 to-blue-500/30" },
  { id: "l5", label: "Logo E", accent: "from-fuchsia-400/40 to-purple-500/30" },
  { id: "l6", label: "Logo F", accent: "from-pink-400/40 to-rose-500/30" },
] as const;

export const testimonials = [
  {
    quote:
      "So helpful. Extremely quick and very efficient! Clear communication throughout.",
    author: "Client",
    role: "Product lead",
  },
  {
    quote:
      "Worked closely with our team to refresh key pages. Great understanding of the stack, quick, responsive, and accurate.",
    author: "Client",
    role: "Marketing",
  },
  {
    quote: "Timely delivery with exceptional work quality. Would collaborate again.",
    author: "Client",
    role: "Startup founder",
  },
  {
    quote: "Very responsive and accommodating. Professional execution from start to finish.",
    author: "Client",
    role: "Agency",
  },
] as const;

export const aboutParagraphs = [
  "Hi—I’m a front-end developer focused on building fast, accessible interfaces with React and modern CSS. I care about layout, typography, and performance so products feel polished on every screen.",
  "With experience across UI implementation, design handoff, and component systems, I take a detail-oriented approach—from spacing and motion to Core Web Vitals. I enjoy collaborating with designers and stakeholders, turning goals into shipped features.",
  "I’m always looking to grow and contribute on meaningful projects. If you want a reliable developer who values clarity and craft, I’d love to hear from you.",
] as const;
