import React from "react"
import Title from "./Title"
import Item from "./Item"
import { Link } from "gatsby"
const Items = ({ items, title, showLink }) => {
  return (
    <section className="section projects">
      <Title title={title} />
      <div className="section-center projects-center">
        {items.map((item, index) => {
          return <Item key={item.id} index={index} {...item} />
        })}
      </div>
      {showLink && (
        <Link to="/items" className="btn center-btn">
          items
        </Link>
      )}
    </section>
  )
}

export default Items
