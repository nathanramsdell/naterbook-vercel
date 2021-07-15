module.exports = {
  node: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    backgroundColor:  ['responsive', 'dark', 'group-hover', 'focus-within', 'hover', 'focus', 'active'],
    borderWidth: ['responsive', 'active'],
    borderColor: ['responsive', 'dark', 'group-hover', 'focus-within', 'hover', 'focus', 'active'],
    extend: {
      
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
