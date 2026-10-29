import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: { DEFAULT: "#1f6f63", dark: "#14463f", light: "#e6f1ef" },
        sand: "#f7f3ee",
        ink: "#16211f",
      },
      fontFamily: { sans: ["Outfit", "ui-sans-serif", "system-ui", "sans-serif"] },
    },
  },
  plugins: [],
};
export default config;
