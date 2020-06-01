import React from "react"
import { Helmet } from "react-helmet"
import "./styles.scss"
import Navigation from "../components/Navigation"
import Footer from "../components/Footer"

export default ({ children }) => {
  return (
    <div className="wrapper">
      <Helmet defer={false}>
        <html lang="en" />
        <title>Per Lindström</title>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/static/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/static/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/static/favicon-16x16.png"
        />
        <link rel="manifest" href="/static/site.webmanifest" />
      </Helmet>
      <Navigation />
      <div className="content">{children}</div>
      <Footer />
    </div>
  )
}
