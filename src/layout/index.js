import React from "react"
import { Helmet } from "react-helmet"
import "./styles.scss"
import Navigation from "../components/Navigation"
import Footer from "../components/Footer"
import favicon16 from "../../static/favicon-16x16.png"
import favicon32 from "../../static/favicon-32x32.png"
import appleTouch from "../../static/apple-touch-icon.png"

export default ({ children }) => {
  return (
    <div className="wrapper">
      <Helmet defer={false}>
        <html lang="en" />
        <title>Per Lindström</title>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href={appleTouch}
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href={favicon32}
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href={favicon16}
        />
        <meta name="description" content="My name is Per Lindström and I'm a software engineer" />
        <meta name="author" content="Per Lindström" />
      </Helmet>
      <Navigation />
      <main className="content">{children}</main>
      <Footer />
    </div>
  )
}
