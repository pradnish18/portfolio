/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        zentry: ["zentry", "sans-serif"],
        general: ["general", "sans-serif"],
        "circular-web": ["circular-web", "sans-serif"],
        "robert-medium": ["robert-medium", "sans-serif"],
        "robert-regular": ["robert-regular", "sans-serif"],
      },
      colors: {
        // Obsidian & Amber palette
        obsidian: {
          DEFAULT: "#0a0a0f",
          surface: "#13131a",
          border: "#1e1e2e",
        },
        amber: {
          DEFAULT: "#f59e0b",
          light: "#fbbf24",
          dark: "#d97706",
        },
        indigo: {
          DEFAULT: "#6366f1",
          light: "#818cf8",
          dark: "#4f46e5",
        },
        snow: {
          DEFAULT: "#e8e8f0",
          muted: "#9090b0",
          faint: "#4a4a6a",
        },
        // Keep these aliases so existing Tailwind classes don't break
        blue: {
          50: "#e8e8f0",
          75: "#13131a",
          100: "#e8e8f0",
          200: "#0a0a0f",
          300: "#6366f1",
        },
        violet: {
          300: "#6366f1",
          50: "#e8e8f0",
        },
        yellow: {
          100: "#d97706",
          300: "#f59e0b",
        },
      },
    },
  },
  plugins: [],
};
