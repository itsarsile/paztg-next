/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        montserrat: ['var(--font-montserrat)']
      },
      animation: {
        title: 'title 3s ease-out forwards',
        "fade-in": "fade-in 3s ease-in-out forwards",
        "gradient-fade-in": "gradient-fade-in 3s forwards"
      },
      keyframes: {
        'gradient-fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        },
        "title": {
          '0%': {
            opacity: '0%',
            'letter-spacing': '0.5em'
          },
          '25%': {
            'line-height': '0%',
            opacity: '0%'
          },
          '75%': {
            opacity: '10%',
          },
          '100%': {
            'line-height': '100%',
            opacity: '100%'
          }
        },
        "fade-in": {
          "0%": {
            opacity: "0%"
          },
          "75%": {
            opacity: "0%"
          },
          "100%": {
            opacity: "100%"
          }
        }
      }
    },
  },
  plugins: [],
}
