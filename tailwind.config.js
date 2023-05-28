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
      aspectRatio: {
        '3/4': '3 / 4',
      },
        backgroundImage: {
            'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
            'gradient-conic':
                'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        },
      fontFamily: {
        archia: ['var(--font-archia)'],
        sans: ['var(--font-tthoves)'],
      },
      colors: {
        'crftd-purple': '#9B91FA',
        'crftd-purple-dark': '#191932',
        'crftd-gray': '#707070',
        'crftd-white': '#F2F2F2',
      },
    },
  },
  plugins: [],
}
