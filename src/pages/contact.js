import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import { ArenguForm } from "gatsby-plugin-arengu-forms"
import Title from "../components/Title"
const contact = () => {
  return (
    <Layout>
      <SEO title="Üzenet Küldése" />

      <section className="contact-page">
      <Title title="Titkos üzenet" />

      <article className="contact-form">
      <div className="form-group">
            <ArenguForm id="160374131739067650" />
         </div>
        </article>
         </section>

    </Layout>
  )
}

export default contact
