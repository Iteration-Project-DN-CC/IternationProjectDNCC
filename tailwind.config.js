/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./client/**/*.{js,jsx,html}'], // Ensure the correct file paths for Tailwind class scanning
  theme: {
    extend: {
      colors: {
        peach: '#DF7B6C',
        darkerpeach: '#CF695A',
        lightpeach: '#F3A899',
        bggray: '#F7F7F7',
        background: '#FFF1EF',
      },
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'], // set Monstserrat as default sans font
      },
      // spacing: {
      // 	18: '4.5rem',
      // },
      transitionDuration: {
        400: '400ms',
      },
      // keyframes: {
      // 	wiggle: {
      // 		'0%, 100%': { transform: 'rotate(-3deg)' },
      // 		'50%': { transform: 'rotate(3deg)' },
      // 	},
      // },
      // animation: {
      // 	wiggle: 'wiggle 1s ease-in-out infinite',
      // },
    },
  },
  plugins: [],
};
