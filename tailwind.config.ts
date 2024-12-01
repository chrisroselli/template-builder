import type {Config} from "tailwindcss";

const config: Config = {
    content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#48403e',
          default_light: '#61534f',
          light: '#5d9147',
          dark: '#4a8332',
        },
      },
    },
  },
};
export default config;
