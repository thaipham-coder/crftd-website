/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        '3xl': '1792px',
      },
      fontFamily: {
        archia: ['var(--font-archia)'],
        sans: ['var(--font-tthoves)'],
      },
      colors: {
        'crftd-purple': '#9B91FA',
        'crftd-gray': '#707070',
        'crftd-white': '#F2F2F2',
      },
    },
  },
  plugins: [],
}
