import type { Config } from "tailwindcss";
export default {
  content: ["./app/**/*.tsx", "./components/**/*.tsx", "./lib/**/*.ts"],
  theme: { extend: {
    colors: { cream: "#F8F5EF", ink: "#171717", blue: "#4361EE", coral: "#FF6B5E", lav: "#C9B6FF", lime: "#D5F36A" },
    fontFamily: { display: ["Space Grotesk", "system-ui", "sans-serif"], sans: ["Inter", "system-ui", "sans-serif"] },
  } },
  plugins: [],
} satisfies Config;
