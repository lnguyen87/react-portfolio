module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 2s linear infinite',
        'pulse-slow': 'pulse 2s ease-in-out infinite',
        'wiggle': 'wiggle 1s ease-in-out infinite',
      },
      keyframes: {
          wiggle: {
            '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
          }
      },
      padding: {
        '28rem' : '28rem',
      },
      width: {
        '45': '45%',
        '50rem': '50rem',
        '32rem': '32rem',
        '72rem': '72rem',
      },
      height: {
        '45': '45%',
        '50rem': '50rem',
        '32rem': '32rem',
        '72rem': '72rem',
      },
      spacing: {
        '65rem': '65rem',
      },
      screens: {
        'xs': '325px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },
      modal: {
        'display': 'none'
      },
      fontFamily: {
        'shalimar': ['Shalimar', 'cursive'],
        'windsong': ['WindSong', 'cursive'],
      },
      zIndex: {
        '1': '1',
      }
    },
  },
  plugins: [],
}
