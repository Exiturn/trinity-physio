import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        tpcBlack: "#000000",
        tpcBlue: "#0293AD",
        tpcLightBlue: "#88A4AA",
        tpcLighterBlue: "#01B0CF",
        tpcGray: "#989898",
        tpcBento: "#1F1E1E",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;
