// See https://tailwindcss.com/docs/configuration for details
module.exports = {
  purge: ["./src/**/*.js"],
  // https://github.com/tailwindlabs/tailwindcss-forms
  plugins: [require("@tailwindcss/forms"), require("@tailwindcss/typography")],
  theme: {
    fontFamily: {
      'sans': ['"Yusei Magic"'],
    },
    extend: {
      colors: {
        'ippo-blue': '#A3BED3',
        'star-yellow': '#FECB00',
        'etsy-orange': '#FFF',
        'instagram-blue': '#393C53',
      }
    }
  }
};
