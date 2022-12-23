/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'primary-green': '#00676C',
        'primary-purple': '#D9C6F4',
      },
      fontFamily: {
        'public-sans': ['Public Sans', 'sans-serif'],
        'averta': ['averta', 'sans-serif'],
        
    },
  },
  plugins: [],
}
}