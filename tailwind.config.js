/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}", "./index.html"],
  theme: {
    extend: {
      colors: {
        'body': '#0F0F0F',
        'white-primary': '#E5E5E5',
        'black-nav': '#2C2C30',
        'black-about': '#181818',
        'black-list': '#96A1AA',
        'black-follow': '#1D1D1E',
      },
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
      },
      screens: {
        'sm-410': '410px',
        'sm-450': '450px',
        'sm-560': '560px',
        'sm-650': '650px',
        'md-768': '768px',
        'md-860': '860px',
        'md-950': '950px',
        'lg-1000': '1000px',
        'lg-1080': '1080px',
      },
    },
  },
  plugins: [],
}
