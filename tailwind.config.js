/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#efefef',  // Custom color for primary
        secondary: '#2d3748',  // Custom color for secondary
        accent: '#38b2ac',  // Custom color for accent
        customColor: {
          DEFAULT: '#2b6cb0',
          dark: '#2a4365',
          light: '#F5761A',
        },
      },
    },
  },
  plugins: [],
}

