import React from "react"
import Title from "./Title"
import Character from "./Character"
import { Link } from "gatsby"
export const Characters = ({ characters, title, showLink }) => {
  return (
    <section className="section">
      <Title title={title} />
      <div className="section-center blogs-center">
        {characters.map(character => {
          return <Character key={character.id} {...character} />
        })}
      </div>
      
      {showLink && (
        <Link to="/characters" className="btn center-btn">
          characters
        </Link>
      )}
    </section>
  )
}
export default Characters
