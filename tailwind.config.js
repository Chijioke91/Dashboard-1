module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      backgroundColor: {
        dashBg: '#101010',
        mainRight: '#F9FAFC',
      },
      spacing: {
        dashHt: '56.25rem',
        mainHt: '53.75rem',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
