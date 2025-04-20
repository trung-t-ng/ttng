/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#213448',
          light: '#2d4761',
          dark: '#182736',
          50: '#f4f6f8',
          100: '#e9ecf1',
          200: '#c8d1dc',
          300: '#a7b5c7',
          400: '#8699b2',
          500: '#657d9d',
          600: '#4f6380',
          700: '#3a4a60',
          800: '#213448',
          900: '#182736'
        },
        'dark-blue': '#213448',
        'medium-blue': '#547792',
        'light-blue': '#94B4C1',
        'cream': '#ECEFCA',
      },
    },
  },
  plugins: [],
} 