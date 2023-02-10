/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors:{
        'green-teal':'#247B7B',
        'green-middle-blue':'#78CDD7',
        'green-cadet-blue':'#44A1A0',
        'green-midnight':'#0D5C63',
        'white-baby-powder':'#FFFFFA',
        'coral':'#ff7f50'
      },
      keyframes: {
        wiggle: {
            '0%, 100%': {
                transform: 'rotate(-3deg)'
            },
            '50%': {
                transform: 'rotate(3deg)'
            },
        }
    },
    animation: {
        wiggle: 'wiggle 1s ease-in-out infinite',
    }
    },
  },
  plugins: [require("daisyui")],
};
