export interface PortfolioConfig {
  name: string;
  pronouns?: string;
  role: string;
  heroHeadline: string;
  heroBio: string;
  avatarUrl: string;
  avatarOptions: { id: string; label: string; url: string }[];
  aboutHeading: string;
  aboutText: string;
  socials: {
    twitter: string;
    twitterHandle: string;
    instagram: string;
    instagramHandle: string;
    github: string;
    githubHandle: string;
    email: string;
  };
  services: {
    number: string;
    name: string;
    description: string;
  }[];
  projects: {
    id: string;
    number: string;
    name: string;
    category: 'Client' | 'Personal';
    tagline: string;
    description: string;
    scope: string[];
    tools: string[];
    images: {
      col1Top: string;
      col1Bottom: string;
      col2: string;
    };
    liveUrl?: string;
    githubUrl?: string;
  }[];
}

export const defaultPortfolioConfig: PortfolioConfig = {
  name: 'Victoria',
  role: 'Full Stack Developer',
  heroHeadline: "Hi, i'm victoria",
  heroBio: 'a full stack developer driven by crafting striking, robust, and unforgettable digital experiences',
  avatarUrl: '/src/assets/images/victoria_portrait_1790281202018.jpg',
  avatarOptions: [
    {
      id: 'portrait_1',
      label: '3D Victoria (Modern Chic)',
      url: '/src/assets/images/victoria_portrait_1790281202018.jpg',
    },
    {
      id: 'portrait_2',
      label: '3D Victoria (Tech Hoodie)',
      url: '/src/assets/images/victoria_3d_avatar_1790281215893.jpg',
    },
    {
      id: 'original_jack',
      label: 'Original Stylized 3D Avatar',
      url: 'https://shrug-person-78902957.figma.site/_components/v2/d24c01ad3a56fc65e942a1f501eb73db42d7cf9a/Rectangle_40443.81459862.png',
    },
  ],
  aboutHeading: 'About me',
  aboutText:
    "With more than five years of engineering experience across the entire web stack, i build modern architectures, intuitive user interfaces, and resilient backend systems. I truly enjoy working with teams and founders who value high craft, performance, and memorable product design. Let's build something incredible together!",
  socials: {
    twitter: 'https://x.com/JosephVictoria',
    twitterHandle: '@JosephVictoria',
    instagram: 'https://instagram.com/Tor11a',
    instagramHandle: '@Tor11a',
    github: 'https://github.com/jv748690-a11y',
    githubHandle: 'jv748690-a11y',
    email: 'jv748690@gmail.com',
  },
  services: [
    {
      number: '01',
      name: 'Full Stack Web Architecture',
      description:
        'End-to-end development of resilient web platforms, from responsive single-page applications and interactive micro-frontends to secure, scalable backend architectures.',
    },
    {
      number: '02',
      name: 'Interactive UI & 3D Experiences',
      description:
        'Crafting cinematic, tactile web interfaces with Framer Motion, Tailwind, Three.js, and WebGL with rigorous attention to typography, micro-interactions, and accessibility.',
    },
    {
      number: '03',
      name: 'API & Microservices Engineering',
      description:
        'Designing fast, type-safe REST & GraphQL APIs, real-time WebSockets, robust authentication workflows, and database schemas optimized for high throughput.',
    },
    {
      number: '04',
      name: 'Cloud, DevOps & Performance',
      description:
        'Deploying and maintaining CI/CD pipelines, containerized Cloud Run / Docker clusters, serverless edge functions, caching layers, and Lighthouse 95+ performance audits.',
    },
    {
      number: '05',
      name: 'Product Engineering & Strategy',
      description:
        'Transforming product requirements into rapid MVP launches, design systems, and enterprise-grade software solutions built for business growth.',
    },
  ],
  projects: [
    {
      id: 'track-my-siwes',
      number: '01',
      name: 'TrackMySIWES',
      category: 'Client',
      tagline: 'Smart SIWES Monitoring & Internship Logbook System',
      description:
        'A centralized digital ecosystem for students, university coordinators, and industry supervisors to manage internship logbooks, track real-time attendance, review skills acquisition, and approve weekly reports with zero paperwork.',
      scope: [
        'Automated logbook entry & weekly summary workflows',
        'Supervisor review portal with digital sign-off',
        'Attendance & completion analytics dashboards',
        'Secure document generation for university accreditation',
      ],
      tools: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Tailwind CSS'],
      images: {
        col1Top: '/src/assets/images/siwes_login_1790281803972.jpg',
        col1Bottom: '/src/assets/images/siwes_features_1790281839944.jpg',
        col2: '/src/assets/images/siwes_mockup_1790281254682.jpg',
      },
      liveUrl: 'https://trackmysiwes.app',
      githubUrl: 'https://github.com/jv748690-a11y/trackmysiwes',
    },
    {
      id: 'vee-gem-luxury',
      number: '02',
      name: 'Vee Gem',
      category: 'Client',
      tagline: 'Timeless Luxury Jewelry & Timepiece E-Commerce',
      description:
        'An editorial e-commerce platform showcasing curated wristwatches, classic steel chronographs, onyx dials, and handpicked luxury jewelry crafted in Lagos, Nigeria. Features fluid filtering, smooth cart flows, and high-fashion aesthetics.',
      scope: [
        'Bespoke product catalog with multi-category filtering',
        'Mobile-first responsive shopping bag & checkout',
        'High-resolution interactive product zoom & media carousel',
        'Headless inventory sync & WhatsApp enquiry pipeline',
      ],
      tools: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Stripe / Paystack'],
      images: {
        col1Top: '/src/assets/images/veegem_hero_1790281851505.jpg',
        col1Bottom: '/src/assets/images/veegem_earrings_1790281828389.jpg',
        col2: '/src/assets/images/veegem_mockup_1790281242415.jpg',
      },
      liveUrl: 'https://veegem.shop',
      githubUrl: 'https://github.com/jv748690-a11y/vee-gem',
    },
    {
      id: 'naija-pulse',
      number: '03',
      name: 'NaijaPulse',
      category: 'Personal',
      tagline: 'Real-Time Naira Exchange Rate & Macro Snapshot',
      description:
        'A sleek, high-frequency financial intelligence web app offering live USD, GBP, and EUR exchange rates against the Nigerian Naira (NGN), paired with monthly headline inflation rate trends reported by the NBS.',
      scope: [
        'Real-time forex rate ingest & live currency trackers',
        'Headline inflation rate tracker with historical curve',
        'Instant multi-currency exchange calculator',
        'Dark mode Bloomberg-style dashboard typography',
      ],
      tools: ['React', 'TypeScript', 'Tailwind CSS', 'Recharts', 'FastAPI / Node'],
      images: {
        col1Top: '/src/assets/images/pulse_inflation_1790281816414.jpg',
        col1Bottom: '/src/assets/images/naijapulse_mockup_1790281268561.jpg',
        col2: '/src/assets/images/pulse_inflation_1790281816414.jpg',
      },
      liveUrl: 'https://naijapulse.finance',
      githubUrl: 'https://github.com/jv748690-a11y/naijapulse',
    },
  ],
};
