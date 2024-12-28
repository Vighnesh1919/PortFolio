/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{html,js,jsx}", // Include all relevant files
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'], // Added font family
      },
      keyframes: {
        slideInLeft: {
          '0%': { transform: 'translateX(-100%)', opacity: 0 },
          '100%': { transform: 'translateX(0)', opacity: 1 },
        },
        slideInRight: {
          '0%': { transform: 'translateX(100%)', opacity: 0 },
          '100%': { transform: 'translateX(0)', opacity: 1 },
        },
        popUp: {
          '0%': { transform: 'scale(0.8)', opacity: 0 },
          '100%': { transform: 'scale(1)', opacity: 1 },
        },
        wave: {
          '0%': { transform: 'translateX(0)' },
          '25%': { transform: 'translateX(-25%)' },
          '50%': { transform: 'translateX(-50%)' },
          '75%': { transform: 'translateX(-25%)' },
          '100%': { transform: 'translateX(0)' },
        },
      },
      animation: {
        slideInLeft: 'slideInLeft 1s ease-out',
        slideInRight: 'slideInRight 1s ease-out',
        popUp: 'popUp 0.5s ease-out',
        wave: 'wave 10s linear infinite', // Added wave animation
      },
    },
  },
  plugins: [],
};
