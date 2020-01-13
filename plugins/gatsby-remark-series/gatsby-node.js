module.exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions;
  const typeDef = `
    type Series {
      name: String!
      title: String!
      slug: String!
      order: Int!
    }
  `
  createTypes(typeDef)
}

module.exports.setFieldsOnGraphQLNodeType = ({ type }) => {
  if (type.name !== `MarkdownRemark`) {
    return {}
  } 
  return {
    series: {
      type: `[Series]`
    }
  }
}

module.exports.createPages = ({ getNodesByType }) => {
  const allMarkdownRemarkNodes = getNodesByType("MarkdownRemark")
  for (const markdownRemarkNode of allMarkdownRemarkNodes) {
    if (!markdownRemarkNode.frontmatter.series) {
      continue
    }

    const nodes = allMarkdownRemarkNodes
      .filter(node =>
        node.frontmatter.series &&
        node.frontmatter.series.name === markdownRemarkNode.frontmatter.series.name &&
        node.frontmatter.published
      )
    
    const series = nodes.map(node => {
      const { title, series } = node.frontmatter
      const slug = node.fields.slug
      return {
        name: series.name,
        title,
        slug,
        order: series.order
      }
    })

    for (const node of nodes) {
      node.series = series
    }
  }
}