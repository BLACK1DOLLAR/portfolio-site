export type Project = {
  slug: string;
  name: string;
  category: string;
  description: string;
  url: string;
  tags: string[];
  gradient: string;
  image: string;
  index: string;
};

export const projects: Project[] = [
  {
    slug: "pharmacy-demo-1",
    name: "Cedar Pharmacy — Consult",
    category: "Pharmacy",
    description:
      "A message-first pharmacy concept — \"Ask a pharmacist\" is the whole hero. Prescription checks, health checks and delivery route straight into WhatsApp.",
    url: "https://black1dollar.github.io/pharmacy-demo/",
    tags: ["Next.js", "Tailwind", "WhatsApp Flow"],
    gradient: "from-[#0f2b21] via-[#123527] to-[#1c4a34]",
    image: "/images/projects/pharmacy-demo-1.jpg",
    index: "01",
  },
  {
    slug: "pharmacy-demo-2",
    name: "Cedar Pharmacy — Storefront",
    category: "Pharmacy",
    description:
      "Same brand, restyled as a neighbourhood-pharmacy storefront — a bolder dark-green theme and a services-first layout for walk-in and delivery customers.",
    url: "https://black1dollar.github.io/pharmacy-demo-2/",
    tags: ["Next.js", "Tailwind", "Theming"],
    gradient: "from-[#122a2f] via-[#153842] to-[#1d4d57]",
    image: "/images/projects/pharmacy-demo-2.jpg",
    index: "02",
  },
  {
    slug: "gadgets-demo",
    name: "Volt & Co. Gadgets",
    category: "Electronics",
    description:
      "A phones-and-accessories storefront with prices shown up front — tap an item and the order lands in WhatsApp with the price already filled in.",
    url: "https://black1dollar.github.io/gadgets-demo/",
    tags: ["Next.js", "Tailwind", "Catalogue UX"],
    gradient: "from-[#231a2e] via-[#2d2140] to-[#402a5c]",
    image: "/images/projects/gadgets-demo.jpg",
    index: "03",
  },
  {
    slug: "gadgets-demo-premium",
    name: "Volt & Co. — Premium",
    category: "Electronics",
    description:
      "An upmarket cut of the same catalogue — near-black theme, oversized type and a floating device mockup for a higher-ticket gadget inventory.",
    url: "https://black1dollar.github.io/gadgets-demo-premium/",
    tags: ["Next.js", "Tailwind", "Dark UI"],
    gradient: "from-[#1a1a24] via-[#20202e] to-[#2c2c42]",
    image: "/images/projects/gadgets-demo-premium.jpg",
    index: "04",
  },
  {
    slug: "beauty-demo-premium",
    name: "Bloom Room Studio — Premium",
    category: "Beauty",
    description:
      "A moody, editorial booking site for a lash-and-brow studio — deep plum palette, serif display type, deposit-based WhatsApp booking.",
    url: "https://black1dollar.github.io/beauty-demo-premium/",
    tags: ["Next.js", "Tailwind", "Booking UX"],
    gradient: "from-[#2e1a22] via-[#3d2029] to-[#582a37]",
    image: "/images/projects/beauty-demo-premium.jpg",
    index: "05",
  },
  {
    slug: "beauty-demo",
    name: "Bloom Room Studio",
    category: "Beauty",
    description:
      "The standard cut of the same studio brand — soft blush palette, transparent pricing per service, and a one-tap booking flow.",
    url: "https://black1dollar.github.io/beauty-demo/",
    tags: ["Next.js", "Tailwind", "Static Export"],
    gradient: "from-[#2a1620] via-[#38182a] to-[#4f1f3a]",
    image: "/images/projects/beauty-demo.jpg",
    index: "06",
  },
  {
    slug: "nimsa-southeast",
    name: "NiMSA South East Region",
    category: "Organisation",
    description:
      "The regional site for the Nigerian Medical Students' Association, South-East zone — 3,500+ students across 13 schools, leadership, events and campaigns.",
    url: "https://nimsa-se.onrender.com/",
    tags: ["Full-Stack", "Content Site"],
    gradient: "from-[#131f2e] via-[#16283c] to-[#1c3552]",
    image: "/images/projects/nimsa-southeast.jpg",
    index: "07",
  },
  {
    slug: "nimsa-pageantry",
    name: "NIMSA South East Pageantry",
    category: "Organisation",
    description:
      "A black-and-gold campaign microsite built for an association pageant — nominee profiles, a paid-vote flow, and a live leaderboard.",
    url: "https://nimsapageantry.netlify.app/",
    tags: ["Full-Stack", "Event Site"],
    gradient: "from-[#241522] via-[#31192d] to-[#472240]",
    image: "/images/projects/nimsa-pageantry.jpg",
    index: "08",
  },
];

export const categories = [
  "All",
  ...Array.from(new Set(projects.map((p) => p.category))),
];
