/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#5B4BFF',
          light: '#8F7BFF',
          dark: '#3A2ACB',
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

