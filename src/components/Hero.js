import React from "react"
import Image from "gatsby-image"
import { Link } from "gatsby"
import { graphql, useStaticQuery } from "gatsby"
import SocialLinks from "../constants/socialLinks"
const query = graphql`
  {
    file(relativePath: { eq: "macska-2.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
const Hero = () => {
  const {
    file: {
      childImageSharp: { fluid },
    },
  } = useStaticQuery(query)

  return (
    <header className="hero">
      <div className="section-center hero-center">
        <article className="hero-info">
          <div>
            <div className="underline"></div>
            <h2>A Királylány és a Cicája</h2>
            <h4>Szerepjátékos mese gyerekeknek</h4>
            <h5><i>Hol volt, hol nem volt.<br></br><br></br>
              Volt egyszer egy nagyon kedves kiscica,
              <br></br><br></br>
              - a Királylány cicája -<br></br><br></br>
              akinek kedvenc időtöltése;<br></br> a palota felfedezése volt.
              <br></br><br></br>
              Ezen kívül szeretett még;<br></br> pihe puha párnáján pihengetni <br></br>
              és az ablakpárkányon nézelődni.
              </i></h5>
            <Link to="/blog" className="btn">
              
              Történt egyszer hát...
            </Link>
            <SocialLinks />
          </div>
        </article>
        <Image fluid={fluid} className="hero-img" />
      </div>
    </header>
  )
}

export default Hero
