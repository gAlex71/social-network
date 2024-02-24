import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      padding: {
        layout: '1.25rem',
      },
      colors: {
        white: '#efeff3',
        border: 'rgba(255, 255, 255, .12)',
        primary: '#8A2BE2'
      },
      transitionDuration: {
        DEFAULT: '400ms'
      },
      transitionTimingFunction: {
        DEFAULT: 'ease-linear'
      }
    },
  },
  plugins: [],
};
export default config;
