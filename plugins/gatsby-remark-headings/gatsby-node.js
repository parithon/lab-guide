module.exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions
  const typeDef = `
    type Heading {
      title: String
      slug: String
      depth: Int
    }
  `
  createTypes(typeDef)
}
module.exports.setFieldsOnGraphQLNodeType = ({ type }) => {
  if (type.name !== "MarkdownRemark") {
    return {}
  }
  return {
    headings: {
      type: `[Heading!]`
    }
  }
}