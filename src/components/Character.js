import React from "react"
import PropTypes from "prop-types"
import Image from "gatsby-image"
import { Link } from "gatsby"
const Character = ({ id, title, image, date, category, slug, desc, abilities }) => {
  return (
    <Link to={`/characters/${slug}`} className="blog" key={id}>
      <article>
      <div className="character-img-div">
      {image && (
          <Image fixed={image.childImageSharp.fixed} className="{image.childImageSharp.fixed.aspectRatio}" />
        )}

      </div>
      
        <div className="blog-card">

          <h4>{title}</h4>
          <p>{desc}</p>
          <h5>Képességei:</h5>
          <p>
              <ul>
          {abilities.map(ability => {
          return <li>{ability.name}</li>
        })}
              </ul>
          </p>
          <div className="blog-footer">
            <p>{category}</p>
            <p>{date}</p>
          </div>
        </div>
      </article>
    </Link>
  )
}

Character.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  image: PropTypes.object.isRequired,
}

export default Character
