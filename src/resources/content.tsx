import {
  About,
  Blog,
  Gallery,
  Home,
  Newsletter,
  Person,
  Social,
  Work,
} from "@/types";
import { Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Pedro",
  lastName: "Frias",
  name: `Pedro Frias`,
  role: "Head of Blockchain & Crypto Practice – EY Digital Engineering Team",
  avatar: "/images/avatar.jpg",
  email: "pedro@hexablock.io",
  location: "Europe/Madrid", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "Spanish"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter: Newsletter = {
  display: true,
  title: <>Suscríbete a la Newsletter de HexaBlock</>,
  description: <>Insights sobre blockchain y activos digitales</>,
};

const social: Social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  // Set essentials: true for links you want to show on the about page
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/Pfriasf",
    essential: true,
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/pedro-frias-favero/",
    essential: true,
  },
  {
    name: "Instagram",
    icon: "instagram",
    link: "https://www.instagram.com/once_ui/",
    essential: false,
  },
  {
    name: "Threads",
    icon: "threads",
    link: "https://www.threads.net/@once_ui",
    essential: false,
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
    essential: true,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>HexaBlocks</>,
  featured: {
    display: true,
    title: (
      <Row gap="12" vertical="center">
        <Text marginRight="4" onBackground="brand-medium">
          Featured work
        </Text>
      </Row>
    ),
    href: "/work/building-once-ui-a-customizable-design-system",
  },
  subline: (
    <>
      Leading enterprise-grade blockchain and digital asset initiatives.
      <br />
      Focused on custody, security, and real-world adoption in regulated
      environments.
    </>
  ),
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: false,
  },
  calendar: {
    display: true,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        {person.name} is a blockchain and digital assets leader with extensive
        experience leading enterprise initiatives from strategy to production.
        His work focuses on custody, security architecture, and the operational
        realities of running blockchain-based platforms at scale, where private
        keys, access controls, and governance are central to system trust and
        continuity. He helps organizations move beyond experimentation,
        designing and operating resilient systems that integrate technology,
        risk, and business needs in complex, real-world environments.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "EY",
        timeframe: "2022 - Present",
        role: "Head of Blockchain & Crypto Practice Spain",
        achievements: [
          <>
            Built and led the Blockchain & Crypto Practice in Spain, supporting
            enterprise clients across the full lifecycle of digital asset
            initiatives, from early strategy to production environments.
          </>,
          <>
            Advised organizations on custody models, security architecture, and
            operating frameworks for blockchain-based systems handling real
            assets and real operational risk within financial services environments.
          </>,

          <>
            Worked closely with executive stakeholders, technology teams, and
            risk functions to align business objectives with secure, scalable
            technical designs.
          </>,
          <>
            Led multidisciplinary teams across engineering, architecture,
            security, and compliance, bridging advisory and hands-on delivery.
          </>,
        ],
        images: [
        ],
      },
     
{
  company: "KeepCoding®",
  timeframe: "2023 – Present",
  role: "Professor — Blockchain & Cryptoassets Full Stack Bootcamp",
  achievements: [
    <>
      Professor in the Blockchain & Cryptoassets Full Stack Bootcamp,
      a comprehensive program covering blockchain fundamentals,
      cryptocurrencies, tokens, and enterprise DLT platforms.
    </>,
    <>
      Responsible for delivering the Smart Contracts module focused on
      enterprise blockchain development using Hyperledger Fabric,
      including chaincode development, SDK integration, and data modeling.
    </>,
    <>
      Emphasis on production-ready decentralized applications,
      addressing private data handling and real-world architectural
      and operational considerations.
    </>,
  ],
  images: [],
},

    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "University of Jakarta",
        description: <>Studied software engineering.</>,
      },
      {
        name: "Build the Future",
        description: <>Studied online marketing and personal branding.</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "Figma",
        description: (
          <>Able to prototype in Figma with Once UI with unnatural speed.</>
        ),
        tags: [
          {
            name: "Figma",
            icon: "figma",
          },
        ],
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/cover-02.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/project-01/cover-03.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Next.js",
        description: (
          <>Building next gen apps with Next.js + Once UI + Supabase.</>
        ),
        tags: [
          {
            name: "JavaScript",
            icon: "javascript",
          },
          {
            name: "Next.js",
            icon: "nextjs",
          },
          {
            name: "Supabase",
            icon: "supabase",
          },
        ],
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/cover-04.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work: Work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/work/projects
  // All projects will be listed on the /home and /work routes
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
