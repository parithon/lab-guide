const path = require("path")

module.exports.createPages = ({ getNodesByType, actions }) => {
  const { createPage } = actions
  // const blogTemplate = path.resolve(`./src/templates/blog/blog.jsx`)
  const docsTemplate = path.resolve(`./src/templates/module/module.jsx`)
  const allMarkdownRemarkNodes = getNodesByType("MarkdownRemark")
  allMarkdownRemarkNodes.forEach(node => {
    switch (node.fields.type) {
      // case "blogs": {
      //   createPage({
      //     component: blogTemplate,
      //     path: node.fields.slug,
      //     context: {
      //       slug: node.fields.slug
      //     }
      //   })
      //   break
      // }
      case "modules": {
        createPage({
          component: docsTemplate,
          path: node.fields.slug,
          context: {
            slug: node.fields.slug,
            series: node.frontmatter.series && node.frontmatter.series.name
          }
        })
        break
      }
    }
  })
}