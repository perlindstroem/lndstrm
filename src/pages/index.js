import React from "react"
import Layout from "../layout"

export default () => {
  return (
    <Layout>
      <h1>
        <span className="gradient-text">
          Hi there{" "}
        </span>
        <span role="img" aria-label="hand wave">
          👋
        </span>
      </h1>
      <p>
        I'm Per, a software engineer enthusiastic about building scalable
        user-oriented applications and using machine learning to gain insights from data.
      </p>
      <p>
        Currently, my time is spent building tech at <a href="https://mytilly.co">Tilly</a>.
      </p>
    </Layout>
  )
}
