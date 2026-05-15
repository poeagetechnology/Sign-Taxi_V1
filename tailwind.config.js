/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Inter', 'sans-serif'],
      },
      colors: {
        amber: {
          50: '#fff1f7',
          100: '#ffe4f1',
          200: '#ffc9e2',
          300: '#ffa0cd',
          400: '#ff72b5',
          500: '#f9479f',
          600: '#e52b8a',
          700: '#bf1e72',
          800: '#9d1d61',
          900: '#831d53',
        },
      },
      boxShadow: {
        'card': '0 1px 3px 0 rgba(0,0,0,0.07), 0 1px 2px -1px rgba(0,0,0,0.07)',
        'card-hover': '0 4px 6px -1px rgba(0,0,0,0.08), 0 2px 4px -2px rgba(0,0,0,0.08)',
        'modal': '0 20px 60px -10px rgba(0,0,0,0.15)',
      },
    },
  },
  plugins: [],
}
