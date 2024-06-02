/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
    },
    extend: {
      fontFamily: {
        'primary': ['SuisseIntl-Regular'],
        'secondary': ['Open Sans'],
        'third': ['Montserrat'],
        
      },
      colors: {
        'primary': '#1E2127',
        'secondary': '#767676',
        'third': '#E614FC',
        'body': '#1E1E1E',
        'gradF': '#FC00FF',
        'gradT': '#00DBFF',
        
      },
      maxWidth: {
        'container': '1600px',
      }
    },
  },
  plugins: [],
}

