/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      fontFamily :{ 
        AmazonEmber: ["AmazonEmber","sans-serif"],
        AmazonEmberRegular:['AmazonEmber-Regular', 'sans-serif'],
        AmazonEmberRegularItalics:['AmazonEmber-RegularItalics', 'sans-serif'],
        AmazonEmberItalics:['AmazonEmber-Italics', 'sans-serif']
       
      } 
    },
  },
  plugins: [],
}