import React from "react"
import { Link } from "gatsby"

export default () => {
  const [open, setOpen] = React.useState(false)

  const links = [
    {
      name: "Reads",
      link: "reads",
    },
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
    <header className="nav-bar">
      <Link to="/" className="nav-title">Per Lindström</Link>
      <div className="nav-toggle">
        <div
          className={`nav-hamburger ${open ? "open" : ""}`}
          onClick={() => {
            setOpen(!open)
            console.log("open", open)
          }}
        />
      </div>
      <nav className={`nav-links ${open ? "open" : ""}`}>
        {links.map(link => (
          <Link key={link.name} to={link.link} activeClassName="active">
            {link.name}
          </Link>
        ))}
      </nav>
    </header>
  )
}
