module.exports = {
  future: {
    purgeLayersByDefault: true,
    applyComplexClasses: true,
  },
  purge: {
    content: [
      './pages/**/*.{js,ts,jsx,tsx}',
      './components/**/*.{js,ts,jsx,tsx}',
    ],
    options: {
      safelist: {
        standard: ['outline-none'],
      },
    },
  },
  theme: {
    // screens:{
    //   "c1":"950px"
    // },
    customForms: (theme) => ({
      default: {
        option: {
          padding: 10,
        },
      },
    }),
    container: {
      '2xm': '455px',
    },
    extend: {
      fontSize: {
        '2xs': '.688rem',
        '3xs': '.655rem',
      },
      backgroundColor: ['checked'],
      borderColor: ['checked'],
      maxWidth: {
        '8xl': '1920px',
      },
      colors: {
        cbcolor: '#6B7280',
        footerbg: '#151515',
        xxmain: '#F9F9F9',
        purpleD: '#440244',
        fbColor: '#2276C5',
        // 'primary-2': 'var(--primary-2)',
        primary: 'var(--primary)',
        secondary: 'var(--secondary)',
        // 'secondary-2': 'var(--secondary-2)',
        indigod: '#3A7E17',
        indigoc: '#A5B4FC',
        hover: 'var(--hover)',
        'hover-1': 'var(--hover-1)',
        'hover-2': 'var(--hover-2)',
        'accent-0': 'var(--accent-0)',
        'accent-1': 'var(--accent-1)',
        'accent-2': 'var(--accent-2)',
        'accent-3': 'var(--accent-3)',
        'accent-4': 'var(--accent-4)',
        'accent-5': 'var(--accent-5)',
        'accent-6': 'var(--accent-6)',
        'accent-7': 'var(--accent-7)',
        'accent-8': 'var(--accent-8)',
        'accent-9': 'var(--accent-9)',
        violet: 'var(--violet)',
        'violet-light': 'var(--violet-light)',
        'violet-dark': 'var(--violet-dark)',
        pink: 'var(--pink)',
        'pink-light': 'var(--pink-light)',
        cyan: 'var(--cyan)',
        blue: 'var(--blue)',
        green: 'var(--green)',
        red: 'var(--red)',
      },
      textColor: {
        base: 'var(--text-base)',
        primary: 'var(--text-primary)',
        secondary: 'var(--text-secondary)',
      },
      boxShadow: {
        ty: '0px 0px 8px rgba(0, 0, 0,0.6)',
        'outline-normal': '0 0 0 2px var(--accent-2)',
        magical:
          'rgba(0, 0, 0, 0.02) 0px 30px 30px, rgba(0, 0, 0, 0.03) 0px 0px 8px, rgba(0, 0, 0, 0.05) 0px 1px 0px',
      },
      lineHeight: {
        'extra-loose': '2.2',
      },
      scale: {
        120: '1.2',
      },
      appearance: ['hover', 'focus'],
    },
  },
  variants: {
    extend: {
      translate: ['group-hover'],
      rotate: ['group-hover'],
      backgroundColor: ['checked'],
      borderColor: ['checked'],
    },
  },

  plugins: [require('@tailwindcss/forms')],
  //   plugins: [
  //  require("@tailwindcss/forms")({
  //    strategy: 'class',
  //  }),
  // ],
}
