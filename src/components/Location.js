import React from "react"
import PropTypes from "prop-types"
import Image from "gatsby-image"
import { FaGithubSquare, FaShareSquare } from "react-icons/fa"
const Location = ({ description, name, image, index }) => {
  return (
    <article className="project">
      {image && (
        <Image fluid={image.childImageSharp.fluid} className="project-img" />
      )}
      <div className="project-info">
        <span className="project-number">0{index + 1}.</span>
        <h3>{name || "default title"}</h3>
        <p className="project-desc">{description}</p>
        <div className="project-stack">
          {/* {stack.map(item => {
            return <span key={item.id}>{item.title}</span>
          })} */}
        </div>
        <div className="project-links">
        </div>
      </div>
    </article>
  )
}

Location.propTypes = {
  title: PropTypes.string.isRequired,
  github: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.object.isRequired,
  stack: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default Location
