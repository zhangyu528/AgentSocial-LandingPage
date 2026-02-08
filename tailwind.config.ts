import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "primary": "#1337ec",
        "background-light": "#f6f6f8",
        "background-dark": "#0a0b14",
        "card-dark": "#161b2c",
        "border-dark": "#2d334d"
      },
      fontFamily: {
        "display": ["Inter", "sans-serif"]
      },
      borderRadius: {
        "DEFAULT": "0.25rem",
        "lg": "0.5rem",
        "xl": "0.75rem",
        "full": "9999px"
      },
      backgroundImage: {
        'grid-pattern': "radial-gradient(#1337ec33 1px, transparent 1px)",
      },
    },
  },
  plugins: [],
};
export default config;
