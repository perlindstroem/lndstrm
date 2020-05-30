import React from "react"
import { Link } from "gatsby"

export default () => {
  const links = [
    {
      name: "About",
      link: "about",
    },
    {
      name: "Contact",
      link: "contact",
    },
  ]

  return (
    <div className="nav-bar">
      <div className="nav-title">
        <Link to="/">Per Lindström</Link>
      </div>
      <div className="nav-links">
        {links.map(link => (
          <Link key={link.name} to={link.link} activeClassName="active">
            {link.name}
          </Link>
        ))}
      </div>
    </div>
  )
}
