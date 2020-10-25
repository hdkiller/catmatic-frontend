import React from "react"
import Title from "./Title"
import Location from "./Location"
import { Link } from "gatsby"
const Locations = ({ locations, title, showLink }) => {
  return (
    <section className="section projects">
      <Title title={title} />
      <div className="section-center projects-center">
        {locations.map((location, index) => {
          return <Location key={location.id} index={index} {...location} />
        })}
      </div>
      {showLink && (
        <Link to="/locations" className="btn center-btn">
          Helyszínek
        </Link>
      )}
    </section>
  )
}

export default Locations
