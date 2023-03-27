const path = require(`path`);

module.exports = {
  siteMetadata: {
    title: `Interaudio`,
    description: `Sound System Rental Cancun`,
    author: `@interaudiocancun`
  },
  plugins: [
    'gatsby-plugin-robots-txt',
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `images`)
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Interaudio cancun sound system rental`,
        short_name: `interaudio-cancun`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/slogan/browser_tab_icon2.png` // This path is relative to the root of the site.
      }
    }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ]
};
