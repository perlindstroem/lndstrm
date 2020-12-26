const path = require("path")

// exports.createPages = async ({ graphql, actions }) => {
//   const { createPage } = actions

//   const pages = await graphql(`
//     {
//       pm: allPrismicPost {
//         edges {
//           node {
//             id
//             uid
//           }
//         }
// 	  }
// 	  md: allMarkdownRemark {
//         edges {
//           node {
//             fields {
//               slug
//             }
//           }
//         }
//       }
//     }
//   `)

//   const template = path.resolve("src/templates/post.js")

//   pages.data.pm.edges.forEach(edge => {
//     createPage({
//       path: `/posts/${edge.node.uid}`,
//       component: template,
//       context: {
//         uid: edge.node.uid,
//       },
//     })
//   })

//   pages.data.md.edges.forEach(edge => {
//     const slug = edge.node.fields.slug
//     actions.createPage({
//       path: slug,
//       component: require.resolve(`./src/templates/blog-post.js`),
//       context: { slug: slug },
//     })
//   })
// }

exports.createPages = async ({ actions, graphql, reporter }) => {
	const { createPage } = actions
  
	const blogPostTemplate = require.resolve(`./src/templates/blog-post.js`)
  
	const result = await graphql(`
	  {
			allMarkdownRemark(
				sort: { order: DESC, fields: [frontmatter___date] }
				limit: 1000
			) {
				edges {
					node {
						frontmatter {
						slug
						}
					}
				}
			}
	  }
	`)
  
	// Handle errors
	if (result.errors) {
	  reporter.panicOnBuild(`Error while running GraphQL query.`)
	  return
	}
  
	result.data.allMarkdownRemark.edges.forEach(({ node }) => {
	  createPage({
			path: node.frontmatter.slug,
			component: blogPostTemplate,
			context: {
				// additional data can be passed via context
				slug: node.frontmatter.slug,
			},
	  })
	})
  }