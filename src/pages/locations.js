import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import Locations from "../components/Locations"
import SEO from "../components/SEO"

const LocationsPage = ({
  data: {
    allStrapiLocations: { nodes: locations },
  },
}) => {
  return (
    <Layout>
      <SEO title="Helyszínek" />
      <section className="projects-page">
        <Locations locations={locations} title="Összes helyszín" />
      </section>
    </Layout>
  )
}
export const query = graphql`
  {
    allStrapiLocations {
      nodes {
        id
        description
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
      }
    }
  }
`

export default LocationsPage
