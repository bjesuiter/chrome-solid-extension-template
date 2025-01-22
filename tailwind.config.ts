import tailwindContainerQueries from "@tailwindcss/container-queries";
import type { Config } from "tailwindcss";
import * as tailwindcssMotion from "tailwindcss-motion";

export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        "logo-spin": "spin 20s linear infinite",
      },
    },
  },
  plugins: [tailwindContainerQueries, tailwindcssMotion],
} satisfies Config;
