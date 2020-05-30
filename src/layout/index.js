import React from "react"
import "./styles.scss"
import Navigation from "../components/Navigation"
import Footer from "../components/Footer"

export default ({ children }) => {
  return (
    <div className="wrapper">
      <Navigation />
	  <div className="content">
      {children}
	  </div>
	  <Footer />
    </div>
  )
}