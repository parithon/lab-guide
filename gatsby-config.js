/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: "Lab Guide",
    siteDescription: "A set of labs designed to teach you features of windows."
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        tailwind: true,
        purgeOnly: [`src/styles/*.css`]
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: 'src',
        path: `${__dirname}/src/`
      }
    },
    `gatsby-plugin-slug`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        // CommonMark mode (default: true)
        commonmark: true,
        // Footnotes mode (default: true)
        footnotes: true,
        // Pedantic mode (default: true)
        pedantic: true,
        // GitHub Flavored Markdown mode (default: true)
        gfm: true,
        // Plugins configs
        plugins: [
          {
            resolve: `gatsby-remark-headings`,
            options: {
              depth: 2
            }
          },
          `gatsby-remark-autolink-headers`,
          {
            resolve: `gatsby-remark-vscode`,
            options: {
              colorTheme: `Solarized Dark`,
              wrapperClassName: ``,
              injectStyles: false
            }
          },
          `gatsby-remark-relative-images`,
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 750,
              linkImagesToOrigina: false,
              wrapperStyle: `margin-left: 0; margin-right: 0`
            }
          }
        ]
      }
    },
    `gatsby-plugin-pages`,
  ]
}
