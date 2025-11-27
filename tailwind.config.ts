import type { Config } from "tailwindcss";

const config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        body: "#05070A",
        surface: "#0C1117",
        accent: "#4FA3D9",
        "accent-soft": "#1A2A3A",
        "border-subtle": "#1E2933",
        "text-primary": "#F4F5F7",
        "text-muted": "#9CA3B3",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;

export default config;
