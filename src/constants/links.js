import React from "react"
import { Link } from "gatsby"
const data = [
  {
    id: 1,
    text: "Kezdőlap",
    url: "/",
  },
  {
    id: 2,
    text: "Cicásmese",
    url: "/about/",
  },

  {
    id: 5,
    text: "Szereplők",
    url: "/characters/",
  },
  {
    id: 5,
    text: "Varázstárgyak",
    url: "/items/",
  },
  {
    id: 6,
    text: "Helyszinek",
    url: "/locations/",
  },
  {
    id: 7,
    text: "Történetek",
    url: "/blog/",
  },
  {
    id: 8,
    text: "Elérhetőség",
    url: "/contact/",
  },
]

const tempLinks = data.map(link => {
  return (
    <li key={link.id}>
      <Link to={link.url}>{link.text}</Link>
    </li>
  )
})
// I KNOW WE CAN COMBINE IT !!!!!

export default ({ styleClass }) => {
  return (
    <ul className={`page-links ${styleClass ? styleClass : ""}`}>
      {tempLinks}
    </ul>
  )
}
