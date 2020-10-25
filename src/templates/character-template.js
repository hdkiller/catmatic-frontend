import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/Layout"
import ReactMarkdown from "react-markdown"
import SEO from "../components/SEO"

const ComponentName = ({ data }) => {
  const { content, title, desc, abilities } = data.character

  return (
    <Layout>
      <SEO title={title} description={desc} />
      <section className="blog-template">
        <div className="section-center">
          <article className="blog-content">
            <ReactMarkdown source={content} />
          </article>
          <Link to="/characters" className="btn center-btn">
            Szeretném megismerni a többieket is!
          </Link>
        </div>
      </section>
    </Layout>
  )
}

export const query = graphql`
  query GetSingleCharacter($slug: String) {
    character: strapiCharacters(slug: { eq: $slug }) {
      content
      title
      desc
    }
  }
`

export default ComponentName
