import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{ts,tsx,js,jsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      colors: {
        gold: "#D4AF37",
        "gold-light": "#E5C76B",
        "gold-dark": "#B38728",
      },
      fontFamily: {
        poppins: ["var(--font-poppins)"],
        lora: ["var(--font-lora)"],
      },
    },
  },
  plugins: [],
};

export default config;
