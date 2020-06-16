import React from "react"
import Layout from "../layout"
import { FaLinkedin, FaGithub } from "react-icons/fa"

export default () => {
  return (
    <Layout>
      <h1>Contact</h1>
      <p>
        For any inquiries, please contact me on:{" "}
        <strong>per (at) lndstrm (dot) se</strong>.
      </p>
      <p>I can also be found at any of the following:</p>
      <a className="social" href="https://www.linkedin.com/in/lndstrm/">
        <FaLinkedin />
      </a>
      <a className="social" href="https://github.com/perlindstroem">
        <FaGithub />
      </a>
    </Layout>
  )
}
