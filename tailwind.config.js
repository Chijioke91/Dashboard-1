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
        17: '4.7rem',
        dashHt: '56.25rem',
        mainHt: '53.75rem',
      },
      fontFamily: {
        body: ['Poppins'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
