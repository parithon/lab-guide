const path = require("path")

module.exports.createPages = ({ getNodesByType, actions }) => {
  const { createPage } = actions
  const blogTemplate = path.resolve(`./src/templates/blog.tsx`)
  const docsTemplate = path.resolve(`./src/templates/module.tsx`)
  const allMarkdownRemarkNodes = getNodesByType("MarkdownRemark")
  allMarkdownRemarkNodes.forEach(node => {
    switch (node.fields.type) {
      case "blogs": {
        createPage({
          component: blogTemplate,
          path: `/blog/${node.fields.slug}`,
          context: {
            slug: node.fields.slug
          }
        })
        break
      }
      case "modules": {
        createPage({
          component: docsTemplate,
          path: `/modules/${node.fields.slug}`,
          context: {
            slug: node.fields.slug
          }
        })
        break
      }
    }
  })
}