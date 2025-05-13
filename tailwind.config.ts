import type { Config } from "tailwindcss";

export default {
  content: [
    './src/pages/**/*.{js,jsx,tsx,ts}',
    './src/components/**/*.{js,jsx,tsx,ts}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
} satisfies Config

