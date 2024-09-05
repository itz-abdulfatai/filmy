/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        manrope: ['manrope', 'sans-serif']
      },

      colors: {
        primary: {
          light: '#ffffff',
          DEFAULT: '#000000',
          dark: '#000000',
        },
        secondary: {
          light: '#f1f1f1',
          DEFAULT: '#111111',
          dark: '#262626',
        },
        accent: {
          light: '#FF9999',
          DEFAULT: '#E50000',
          dark: '#E50000',
        },
        neutral: {
          light: '#000000',
          DEFAULT: '#ffffff',
          dark: '#ffffff',
        },
        ash: {
          light: '#000000',
          DEFAULT: '#BFBFBF',
          dark: '#BFBFBF',
        },
        accent2: {
          light: '#000000',
          DEFAULT: '#1f1f1f',
          dark: '#BFBFBF',
        }
      }
    },
  },
  plugins: [],
}

