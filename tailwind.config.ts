import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        "logo-spin": "spin 20s linear infinite",
      },
    },
  },
  plugins: [],
} satisfies Config;
