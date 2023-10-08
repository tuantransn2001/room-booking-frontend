/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './node_modules/flowbite/**/*.js',
    './node_modules/flowbite-react/**/*.js',
    './public/**/*.html',
    './app/**/*.{ts,tsx}',
  ],
  plugins: [require('flowbite/plugin')],
  theme: {
    extend: {
      colors: {
        shades: {
          [1]: `rgba(221, 221, 221, 1)`,
          [2]: `rgba(34, 34, 34, 1)`,
          [3]: `rgba(34, 34, 34, 0.05)`,
          [4]: `rgba(34, 34, 34, 0.3)`,
        },
        neutrals: {
          [1]: `rgba(247, 247, 247, 1)`,
          [2]: `rgba(235, 235, 235, 1)`,
          [3]: `rgba(221, 221, 221, 1)`,
          [4]: `rgba(211, 211, 211, 1)`,
          [5]: `rgba(194, 194, 194, 1)`,
          [6]: `rgba(176, 176, 176, 1)`,
          [7]: `rgba(113, 113, 113, 1)`,
          [8]: `rgba(94, 94, 94, 1)`,
        },
        primary: { [1]: `rgba(246, 71, 95, 1)`, [2]: `rgba(255, 56, 92, 1)` },
        errors: { [1]: '#FEF8F6', [2]: '#C13515' },
        accents: {
          [1]: '#F6D7DF',
          [2]: '#D03660',
          [3]: '#008A05',
          [4]: '#004CC4',
        },
      },
      fontSize: {},
      fontWeight: {},
    },
  },
};
