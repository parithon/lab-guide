const path = require("path")

const hashset = {};

module.exports.createSchemaCustomization = ({ actions }) => {  
  const { createTypes } = actions
  const typeDefs = `
    type MarkdownRemark implements Node @infer {
      series: [Series!]
    }
    type Series @infer {
      name: String!
      title: String!
      slug: String!
      order: Int!
    }
  `
  createTypes(typeDefs)
}

module.exports.onPostBootstrap = ({ getNodesByType }) => {

  const nodes = getNodesByType("MarkdownRemark")
    .filter(md => md.frontmatter.series !== undefined)
    .sort((a, b) => a.frontmatter.order-b.frontmatter.order)

  if (!nodes || nodes.length === 0) {
    return
  }
  
  const series = nodes.map(node => {
    const { title, series, order } = node.frontmatter
    const slug = node.fields.slug
    return {
      name: series,
      title,
      slug,
      order
    }
  })

  for (const node of nodes) {
    node.series = series
  }
}

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