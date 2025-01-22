import type { Config } from "tailwindcss";
import tailwindcssMotion from "tailwindcss-motion";

export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        "logo-spin": "spin 20s linear infinite",
      },
    },
  },
  plugins: [tailwindcssMotion],
} satisfies Config;
