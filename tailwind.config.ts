import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  mode: "jit",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        tpcBlack: "#000000",
        tpcBlue: "#0293AD",
        tpcLightBlue: "#88A4AA",
        tpcLighterBlue: "#01B0CF",
        tpcDarkBlue: "#014753",
        tpcGray: "#989898",
        tpcBento: "#1F1E1E",
        card: {},
        popover: {},
        primary: {},
        secondary: {},
        muted: {},
        accent: {},
        destructive: {},
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
      },
      backdropBlur: {
        DEFAULT: "20px",
      },
      backdropBrightness: {
        DEFAULT: "0.8",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  //   plugins: [require("tailwindcss-animate")],
} satisfies Config;
