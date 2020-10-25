const path = require("path")

// create pages dynamically
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    {
      blogs: allStrapiBlogs {
        nodes {
          slug
        }
      }
    }
  `)

  result.data.blogs.nodes.forEach(blog => {
    createPage({
      path: `/blogs/${blog.slug}`,
      component: path.resolve(`src/templates/blog-template.js`),
      context: {
        slug: blog.slug,
      },
    })
  })

  const c_result = await graphql(`
    {
      characters: allStrapiCharacters {
        nodes {
          slug
        }
      }
    }
  `)

  c_result.data.characters.nodes.forEach(character => {
    createPage({
      path: `/characters/${character.slug}`,
      component: path.resolve(`src/templates/character-template.js`),
      context: {
        slug: character.slug,
      },
    })
  })

}
