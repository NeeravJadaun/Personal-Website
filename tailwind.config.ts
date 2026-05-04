import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["var(--font-display)"],
        body: ["var(--font-body)"],
        mono: ["var(--font-mono)"]
      },
      colors: {
        bg: "var(--bg)",
        raised: "var(--bg-raised)",
        surface: "var(--surface)",
        high: "var(--surface-high)",
        accent: "var(--accent)",
        green: "var(--accent-green)"
      },
      boxShadow: {
        card: "var(--shadow)"
      }
    }
  },
  plugins: []
};

export default config;
