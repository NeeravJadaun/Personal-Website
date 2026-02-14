export const siteConfig = {
  name: "Neerav Jadaun",
  role: "Mathematics Student",
  school: "University of Waterloo",
  email: "nsjadaun@uwaterloo.ca",
  linkedin: "https://www.linkedin.com/in/neerav-jadaun",
  github: "https://github.com/NeeravJadaun",
  formspreeEndpoint: "https://formspree.io/f/YOUR_FORMSPREE_ID"
} as const;

export const navigationLinks = [
  { label: "Home", href: "#home" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" }
] as const;

export const aboutPoints = [
  "Mathematics student at Waterloo focused on building data-driven systems for finance and technology.",
  "Apply math, statistics, and software engineering to practical problems such as analytics, risk modeling, and product reliability.",
  "Actively seeking internships across fintech, software engineering, and finance-adjacent technical teams."
] as const;

export const experience = [
  {
    role: "Software Engineering Fellow",
    company: "Headstarter AI",
    location: "Remote",
    period: "Jul 2024 - Sep 2024",
    points: [
      "Built full-stack AI apps with Next.js, OpenAI APIs, Stripe payments, and Pinecone vector search.",
      "Shipped a GPT-4 support chatbot with 30% faster test response times; recognized for strong UI/UX execution.",
      "Improved performance and scalability through stronger state management and API-first architecture.",
      "Collaborated through Git/GitHub pull requests, code reviews, and iterative release cycles."
    ]
  },
  {
    role: "Firmware Developer",
    company: "University of Waterloo Formula Electric",
    location: "Waterloo, ON",
    period: "Sep 2025 - Present",
    points: [
      "Develop embedded C/C++ firmware for vehicle ECUs, including CAN/LIN communication and sensor interfaces.",
      "Increased validation throughput by 35% by improving test coverage, automation, and debugging workflows.",
      "Built signal simulation, HIL test benches, and fault-diagnostics tooling to validate control board reliability."
    ]
  }
] as const;

export const projects = [
  {
    title: "Doceo: The Ultimate Study Tool",
    image: "/projects/doceo-placeholder.svg",
    alt: "Doceo project preview",
    highlights: [
      "Built a full-stack AI STEM tutor (Next.js/TypeScript + FastAPI) that converts text and images into animated, step-by-step lessons over SSE with synced voice (Gemini + ElevenLabs).",
      "Added personalization and reliability with document ingestion/retrieval (PDF, DOCX, TXT), confusion-signal adaptation, and async audio caching/throttling.",
      "Built Cram Mode using a RAG pipeline (chunking, embeddings, retrieval) with streaming and cache/rate-limit controls for stable summaries."
    ],
    tags: ["Next.js", "TypeScript", "FastAPI", "RAG", "SSE", "Gemini", "ElevenLabs"],
    repoUrl: "",
    docUrl: ""
  },
  {
    title: "Spotify Stats App",
    image: "/projects/spotify-placeholder.svg",
    alt: "Spotify analytics dashboard preview",
    highlights: [
      "Built a personal analytics dashboard using Spotify OAuth 2.0 and Spotify Web API to pull individualized listening data.",
      "Aggregated and visualized top artists, top tracks, and listening trends while handling pagination, rate limits, and token refresh logic.",
      "Delivered resilient API-first UX with robust states for expired tokens, empty histories, and external API failures."
    ],
    tags: ["OAuth 2.0", "REST APIs", "TypeScript", "Data Visualization", "Error Handling"],
    repoUrl: "",
    docUrl: ""
  }
] as const;

export const skillGroups = [
  {
    title: "Programming Languages",
    items: ["Python", "TypeScript", "JavaScript", "SQL", "C / C++"]
  },
  {
    title: "Frameworks & APIs",
    items: ["Next.js", "FastAPI", "REST APIs", "OAuth 2.0"]
  },
  {
    title: "Data & Quant",
    items: ["NumPy", "pandas", "scikit-learn", "Jupyter"]
  },
  {
    title: "Databases",
    items: ["PostgreSQL", "MongoDB", "Redis"]
  },
  {
    title: "Dev Tools",
    items: ["Git / GitHub", "Linux / Bash", "Docker", "CI/CD (GitHub Actions)"]
  },
  {
    title: "Cloud & Deployment",
    items: ["Vercel", "AWS (basics)"]
  }
] as const;

export const education = {
  institution: "University of Waterloo",
  degree: "Honours Mathematics Student",
  period: "Sep 2025 - Present",
  coursework: [
    "Calculus",
    "Linear Algebra",
    "Probability & Statistics",
    "Programming Fundamentals",
    "Data Structures",
    "Economics",
    "Financial Mathematics"
  ]
} as const;
