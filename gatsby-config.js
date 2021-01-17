const resolveConfig = require("tailwindcss/resolveConfig");
const tailwindConfig = require("./tailwind.config.js");

const fullConfig = resolveConfig(tailwindConfig);

module.exports = {
  siteMetadata: {
    title: `ippo design`,
    description: `handmade customizable jewelry and more`,
    author: `@ippo.earrings`,
  },
  plugins: [
    `gatsby-plugin-eslint`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `ippo-countdown`,
        short_name: `starter`,
        start_url: `/`,
        background_color: fullConfig.theme.colors.white,
        theme_color: fullConfig.theme.colors.green["500"],
        display: `minimal-ui`,
        icon: `src/images/ippo-icon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-postcss`,
      options: {
        postCssPlugins: [
          require(`tailwindcss`)(tailwindConfig),
          require(`autoprefixer`),
          ...(process.env.NODE_ENV === `production`
            ? [require(`cssnano`)]
            : []),
        ],
      },
    },
    `gatsby-plugin-offline`,
    {
      resolve: '@slixites/gatsby-plugin-google-fonts',
      options: {
        fonts: [
          'Yusei Magic',
        ],
        display: 'swap',
        preconnect: true,
        attributes: {
            rel: 'stylesheet preload prefetch',
            as: 'style',
        },
      },
    },
  ],
};
