import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          DEFAULT: "#a77b00",
          light: "#c8a84b",
          dark: "#7a5a00",
        },
        cream: {
          DEFAULT: "#faf8f5",
          dark: "#f0ede7",
          border: "#e8e4dd",
        },
        charcoal: "#1a1714",
        muted: "#6b6460",
      },
      fontFamily: {
        serif: ["var(--font-cormorant)", "Georgia", "serif"],
        sans: ["var(--font-dm-sans)", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        widest: "0.3em",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(28px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        bounceSlow: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
      },
      animation: {
        "fade-in": "fadeIn 1s ease-out both",
        "slide-up": "slideUp 1s ease-out both",
        "slide-up-1": "slideUp 1s ease-out 0.15s both",
        "slide-up-2": "slideUp 1s ease-out 0.3s both",
        "fade-in-delay": "fadeIn 1s ease-out 0.5s both",
        "bounce-slow": "bounceSlow 2.5s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
