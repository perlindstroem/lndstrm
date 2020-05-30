import React from "react"
import { Helmet } from "react-helmet"
import "./styles.scss"
import Navigation from "../components/Navigation"
import Footer from "../components/Footer"

export default ({ children }) => {
  return (
    <div className="wrapper">
      <Helmet defer={false}>
        <title>Per Lindström</title>
      </Helmet>
      <Navigation />
      <div className="content">{children}</div>
      <Footer />
    </div>
  )
}
