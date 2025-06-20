/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', 
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'lumi-primary': '#762075',
        'lumi-primary-hover': '#5E195D',
        'lumi-label': '#C964C5',
        'lumi-label-alt': '#8B5CF6',
        'dark-header': '#130613',
        'dark-background': '#2C002C',
      },
    gridTemplateAreas: {
        'layout-desktop': [
          'header header',
          'sidebar main',
        ],
      },
      gridTemplateColumns: {
        'layout-desktop': 'auto 1fr', 
      },
      gridTemplateRows: {
        'layout-desktop': '5rem 1fr', 
      },
    },
  },
  plugins: [
    require('@savvywombat/tailwindcss-grid-areas'),
  ],
}