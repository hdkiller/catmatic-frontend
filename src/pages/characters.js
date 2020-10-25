import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import SEO from "../components/SEO"
import Characters from "../components/Characters"

const Character = ({
  data: {
    allStrapiCharacters: { nodes: characters },
  },
}) => {
  return (
    <Layout>
      <SEO title="Karakterek" />
      <section className="blog-page">
        <Characters characters={characters} title="Karakterek" />
      </section>
    </Layout>
  )
}

export const query = graphql`
  {
    allStrapiCharacters{
      nodes {
        slug
        desc
        id
        title
        abilities {
            name
            excerp
        }
        image {
          childImageSharp {
            fluid(cropFocus: NORTH, fit: INSIDE) {
              aspectRatio
              ...GatsbyImageSharpFluid
            }
            fixed(height: 350) {
              ...GatsbyImageSharpFixed
            }            
          }
        }
      }
    }
  }
`
export default Character
