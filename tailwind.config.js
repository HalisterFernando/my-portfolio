module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    fontFamily: {
      sans: ['Open Sans', 'sans-serif'],
      heading: ['Roboto Slab', 'serif'],
    },
    extend: {
      colors: {
        crimson: '#cf6766',
        indigo: '#30415d',
        white: '#ffffff',
        'light-blue': '#8eaebd',
        ultramarine: '#031424',
      },
      screens: {
        '2lg': { raw: '(min-width: 950px)' },
        '2sm': { raw: '(min-width: 414px)' },
      },

    },
  },
  plugins: [],
};
