/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        leaf: {
          DEFAULT: '#2D5016',
          light: '#3d6b21',
          dark: '#1a3009',
        },
        soil: {
          DEFAULT: '#4A3426',
          light: '#6B4E3D',
          dark: '#2C1F16',
        },
        marigold: {
          DEFAULT: '#E8930C',
          light: '#F5A623',
          dark: '#C17A08',
        },
        clay: '#F8F6F2',
      },
      fontFamily: {
        display: ['Merriweather', 'serif'],
        body: ['Inter', 'sans-serif'],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
      },
    },
  },
  plugins: [],
}
