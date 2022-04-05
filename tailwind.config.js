const colors = require('tailwindcss/colors');

module.exports = {
  content: ['./**/*.html'],
  plugins: [require('daisyui')],
  theme: {
    extend: {
      colors: {
        teal: colors.teal,
        cyan: colors.cyan,
      },
    },
  },
  daisyui: {
    themes: [
      {
        dark: {
          ...require('daisyui/src/colors/themes')['[data-theme=dark]'],
          primary: '#64E8FF',
          'primary-content': '#2D2A42',
          secondary: '#D926AA',
          'secondary-content': '#ffffff',
          accent: '#1FB2A5',
          'accent-content': '#ffffff',
          neutral: '#191D24',
          'neutral-focus': '#111318',
          'neutral-content': '#A6ADBB',
          'base-100': '#2A303C',
          'base-200': '#242933',
          'base-300': '#20252E',
          'base-content': '#FFFFFF',
        },
        light: {
          ...require('daisyui/src/colors/themes')['[data-theme=light]'],
          primary: '#64E8FF',
          'primary-content': '#2D2A42',
        },
      },
    ],
  },
};
