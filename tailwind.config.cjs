/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#6366F1', // Indigo-500
          light: '#818CF8',   // Indigo-400
          dark: '#4F46E5',    // Indigo-600
        },
        accent: '#FFB457',
        success: '#22C55E',
        warning: '#F97316',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      boxShadow: {
        soft: '0 18px 45px rgba(15, 23, 42, 0.18)',
      },
    },
  },
  plugins: [],
}

