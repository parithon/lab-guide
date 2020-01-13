const path = require("path")

const hashset = {};

module.exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions

  if (node.internal.type === "MarkdownRemark") {
    const dirs = node.fileAbsolutePath.split("/")
    const srcIdx = dirs.indexOf("src")
    const type = dirs[srcIdx+1]
    const offsetIdx = srcIdx + 2
    const basename = path.basename(node.fileAbsolutePath, ".md").toLocaleLowerCase()
    
    const dir = (
      dirs.length > offsetIdx
      ? dirs.slice(offsetIdx, -1)
      : ""
    )
    .filter(d => d !== basename)
    .join("/")

    const slug = path.join(dir, basename)
    
    createNodeField({
      node,
      name: 'slug',
      value: slug
    })

    createNodeField({
      node,
      name: 'type',
      value: type
    })
  }

}

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const blogTemplate = path.resolve(`./src/templates/blog.tsx`)
  const docsTemplate = path.resolve(`./src/templates/module.tsx`)
  const response = await graphql(`
    query modules {
      allMarkdownRemark {
        nodes {
          frontmatter {
            title
          }
          fileAbsolutePath
          fields {
            slug
            type
          }
        }
      }
    }
  `)

  response.data.allMarkdownRemark.nodes.forEach((node) => {
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
        break;
      }
    }    
  })
}