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

  plugins: [
    // Docs for ContainerQueries plugin:https://github.com/tailwindlabs/tailwindcss-container-queries
    tailwindContainerQueries,
    // Docs for Motion plugin: https://docs.rombo.co/tailwind
    tailwindcssMotion,
  ],
} satisfies Config;
