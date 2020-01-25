const path = require("path")

const onCreateNode = ({ node, actions }, pluginOptions = {}) => {
  // Only process markdown files
  if (node.internal.type !== "MarkdownRemark") {
    return
  }

  const { createNodeField } = actions
  const dirs = node.fileAbsolutePath.split("/")
  const baseIdx = dirs.indexOf(pluginOptions["basepath"] || "src")
  const offsetIdx = baseIdx + 2
  const type = dirs[baseIdx+1]
  const basename = path.basename(node.fileAbsolutePath, ".md").toLocaleLowerCase()

  const dir = (
    dirs.length > offsetIdx
    ? dirs.slice(offsetIdx, -1)
    : ""
  )
  .filter(d => d !== basename)
  .join("/")

  const slug = path.join(type, dir, basename === "index" ? "" : basename) // do not include index

  createNodeField({
    node,
    name: 'slug',
    value: `/${slug}`
  })

  createNodeField({
    node,
    name: 'type',
    value: type
  })
}

module.exports.onCreateNode = onCreateNode;