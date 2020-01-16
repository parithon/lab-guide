const toString = require("mdast-util-to-string")
const visit = require("unist-util-visit")
const slugs = require("github-slugger")()

module.exports = ({ markdownAST, markdownNode }, {
    depth = 6, 
    maintainCase = false
  }) => {
  
  const headers = []
  
  slugs.reset()
  
  visit(markdownAST, `heading`, node => {
    if (node.depth > depth) {
      return
    }
    headers.push({
      title: toString(node),
      slug: slugs.slug(toString(node), maintainCase),
      depth: node.depth
    })
  })

  markdownNode.headings = headers
}