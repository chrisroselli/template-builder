import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      animation: {
        'spin-reverse': 'spin-reverse 300ms linear',
      },
      keyframes: {
        'spin-reverse': {
          from: { transform: 'rotate(360deg)' },
          to: { transform: 'rotate(0deg)' },
        },
      },
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
}
export default config
