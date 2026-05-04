export const profile = {
  name: "Neerav Jadaun",
  title: "Mathematics · Fintech · SWE",
  summary:
    "Mathematics student at the University of Waterloo building data-driven systems for finance, reliability, and product engineering.",
  email: "nsjadaun@uwaterloo.ca",
  linkedin: "https://ca.linkedin.com/in/neerav-jadaun",
  github: "https://github.com/NeeravJadaun",
  location: "Waterloo, Ontario",
  target: "Open to fintech, software engineering, and technical finance internships."
};

export const experience = [
  {
    role: "Firmware Developer",
    company: "University of Waterloo Formula Electric",
    location: "Waterloo, ON",
    period: "Sep 2025 — Present",
    bullets: [
      "Develop embedded C/C++ firmware for vehicle ECUs with CAN/LIN communication and sensor interfaces.",
      "Increased validation throughput by 35% through stronger test coverage, automation, and debugging workflows.",
      "Built signal simulation, HIL test benches, and fault-diagnostics tooling to validate control board reliability."
    ]
  },
  {
    role: "Software Engineering Fellow",
    company: "Headstarter AI",
    location: "Remote",
    period: "Jul 2024 — Sep 2024",
    bullets: [
      "Built full-stack AI apps with Next.js, OpenAI APIs, Stripe, and Pinecone vector search.",
      "Shipped a GPT-4 support chatbot with 30% faster response times and strong UI/UX execution.",
      "Improved performance through stronger state management, API-first architecture, GitHub PRs, and code reviews."
    ]
  }
] as const;

export const projects = [
  {
    name: "Dextera",
    label: "2nd · ConHacks 2026",
    image: "/project-dextera.svg",
    alt: "Dark technical dashboard for Dextera smart rehab glove",
    description:
      "A smart rehabilitation glove helping patients recover hand mobility through therapy games while giving therapists real-time analytics. Built around an ESP32 glove with flex sensors, gesture tracking, and a live progress dashboard.",
    tags: ["ESP32", "Embedded Systems", "Flex Sensors", "Dashboard", "Healthcare Tech", "Game Design"]
  },
  {
    name: "Doceo",
    label: "AI STEM Tutor",
    image: "/project-doceo.svg",
    alt: "Dark AI lesson interface for Doceo STEM tutor",
    description:
      "A full-stack AI STEM tutor that turns text and images into animated, step-by-step lessons with synced voice. Includes FastAPI services, SSE streaming, RAG document ingestion, Gemini, and ElevenLabs.",
    tags: ["Next.js", "TypeScript", "FastAPI", "RAG", "SSE", "Gemini", "ElevenLabs"]
  },
  {
    name: "Spotify Stats",
    label: "Data Dashboard",
    image: "/project-spotify.svg",
    alt: "Dark analytics dashboard for Spotify listening stats",
    description:
      "A personal analytics dashboard using Spotify OAuth 2.0 and the Web API to visualize top artists, tracks, and listening trends with resilient token refresh and graceful empty states.",
    tags: ["OAuth 2.0", "REST APIs", "TypeScript", "Data Visualization"]
  },
  {
    name: "MemoLens",
    label: "Assistive AI",
    image: "/project-memolens.svg",
    alt: "Dark assistive care dashboard for MemoLens dementia support",
    description:
      "A real-time assistive system for dementia care that combines live camera context, reminder logic, item tracking, caregiver visibility, and memory-style queries. Built around practical moments like recognizing familiar people, finding daily items, medication reminders, and caregiver event timelines.",
    tags: ["Computer Vision", "WebSocket", "Full Stack", "Reminders", "Caregiver Dashboard", "Smoke Testing"]
  }
] as const;

export const skills = [
  {
    group: "Languages",
    items: ["Python", "TypeScript", "JavaScript", "SQL", "C / C++"]
  },
  {
    group: "Frameworks & APIs",
    items: ["Next.js", "FastAPI", "REST APIs", "OAuth 2.0"]
  },
  {
    group: "Data & Quant",
    items: ["NumPy", "pandas", "scikit-learn", "Jupyter", "Financial Mathematics"]
  },
  {
    group: "Infrastructure",
    items: ["PostgreSQL", "MongoDB", "Redis", "Docker", "GitHub Actions"]
  },
  {
    group: "Hardware",
    items: ["ESP32", "Embedded C/C++", "CAN/LIN", "Flex Sensors", "HIL Testing"]
  }
] as const;

export const education = {
  school: "University of Waterloo",
  program: "Honours Mathematics",
  period: "Sep 2025 — Present",
  highlights: [
    "Calculus",
    "Linear Algebra",
    "Probability & Statistics",
    "Programming Fundamentals",
    "Data Structures",
    "Economics",
    "Financial Mathematics"
  ]
};
