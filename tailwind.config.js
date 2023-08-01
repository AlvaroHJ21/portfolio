/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#13111C',
        'background-light': '#211f2e',
        main: '#607FEF',
        gris: '#636363',
        primary: '#607FEF',
        'base-400': '#13111C',
      },
      fontFamily: {
        raleway: ['Raleway', 'sans-serif'],
      },
      fontSize: {
        52: '3.25rem',
        32: '2rem',
        20: '1.25rem',
        16: '1rem',
      },
      fontWeight: {
        black: '900',
        bold: '700',
        regular: '300',
      },
      text: {
        ralewayBlack52: {
          fontFamily: 'raleway',
          fontSize: '52',
          fontWeight: 'black',
        },
      },
    },
  },
  daisyui: {
    themes: [
      {
        dark: {
          ...require('daisyui/src/theming/themes')['[data-theme=dark]'],
          primary: '#607FEF',
        },
      },
    ],
  },
  darkMode: 'class',
  plugins: [require('daisyui')],
};
