import type { Config } from "tailwindcss";

const animations = {
  "fade-up": {
    "0%": {
      opacity: "0",
      transform: "translateY(20px)",
    },
    "100%": {
      opacity: "1",
      transform: "translateY(0)",
    },
  },
  "fade-in": {
    "0%": {
      opacity: "0",
    },
    "100%": {
      opacity: "1",
    },
  },
  "gradient-x": {
    "0%, 100%": {
      "background-size": "200% 200%",
      "background-position": "left center",
    },
    "50%": {
      "background-size": "200% 200%",
      "background-position": "right center",
    },
  },
  "green-gradient": {
    "0%, 100%": {
      "background-position": "0% 50%",
    },
    "50%": {
      "background-position": "100% 50%",
    },
  },
  "green-flow": {
    "0%, 100%": {
      "background-position": "0% 50%",
    },
    "50%": {
      "background-position": "100% 50%",
    },
  },
  blob: {
    "0%": {
      transform: "translate(0px, 0px) scale(1)",
    },
    "33%": {
      transform: "translate(30px, -50px) scale(1.1)",
    },
    "66%": {
      transform: "translate(-20px, 20px) scale(0.9)",
    },
    "100%": {
      transform: "translate(0px, 0px) scale(1)",
    },
  },
  grid: {
    "0%": { transform: "translateY(0)" },
    "100%": { transform: "translateY(50px)" },
  },
  scanlines: {
    "0%": { transform: "translateY(0)" },
    "100%": { transform: "translateY(-100%)" },
  },
  "color-change": {
    "0%": { "background-color": "#064E3B" }, // Dark green
    "25%": { "background-color": "#065F46" }, // Slightly lighter green
    "50%": { "background-color": "#047857" }, // Medium green
    "75%": { "background-color": "#065F46" }, // Slightly lighter green
    "100%": { "background-color": "#064E3B" }, // Back to dark green
  },
};

const colors = {
  border: "hsl(var(--border))",
  input: "hsl(var(--input))",
  ring: "hsl(var(--ring))",
  background: "hsl(var(--background))",
  foreground: "hsl(var(--foreground))",
  primary: {
    DEFAULT: "#4ADE80",
    foreground: "#0F0F0F",
  },
  secondary: {
    DEFAULT: "hsl(var(--secondary))",
    foreground: "hsl(var(--secondary-foreground))",
  },
  accent: {
    DEFAULT: "#4ADE80",
    foreground: "#0F0F0F",
  },
};

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors,
      keyframes: animations,
      animation: {
        "fade-up": "fade-up 0.8s ease-out forwards",
        "fade-in": "fade-in 0.5s ease-out",
        "gradient-x": "gradient-x 15s ease infinite",
        "green-gradient": "green-gradient 6s ease infinite",
        blob: "blob 7s infinite",
        grid: "grid 20s linear infinite",
        scanlines: "scanlines 8s linear infinite",
        "color-change": "color-change 16s ease infinite", // Increased duration to 16 seconds
      },
      backgroundImage: {
        "grid-white":
          "linear-gradient(to right, rgba(255, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.1) 1px, transparent 1px)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;