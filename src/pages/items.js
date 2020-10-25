import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import Items from "../components/Items"
import SEO from "../components/SEO"

const ItemsPage = ({
  data: {
    allStrapiItems: { nodes: items },
  },
}) => {
  return (
    <Layout>
      <SEO title="Projects" />
      <section className="projects-page">
        <Items items={items} title="Varázstárgyak" />
      </section>
    </Layout>
  )
}
export const query = graphql`
  {
    allStrapiItems {
      nodes {
        id
        content
        name
        slug
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        attribute {
          id
          name
          value
        }

      }
    }
  }
`

export default ItemsPage
