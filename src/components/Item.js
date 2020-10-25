import React from "react"
import PropTypes from "prop-types"
import Image from "gatsby-image"
const Item = ({ description, name, slug, content, attribute, image, index }) => {
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
          {attribute.map(attr => {
            return <span key={attr.id}>{attr.title}</span>
          })}
        </div>

      </div>
    </article>
  )
}

Item.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.object.isRequired,
  attributes: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default Item
