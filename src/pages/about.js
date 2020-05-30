import React from "react"
import Layout from "../layout"

export default () => {
  return (
    <Layout>
      <h1>CV</h1>
      <p>
        Here's condensed list of what I've done so far.
      </p>
      <h2>Work Experience</h2>
      <ul>
        <li>Associate at Digital Edge</li>
        <li>Research Intern at Signality</li>
        <li>Lead Software Engineer at Skira</li>
        <li>Software Engineer at GOLI</li>
        <li>Critical Incident Manager at Hewlett Packard</li>
      </ul>
      <h2>Education</h2>
      <ul>
        <li>
          M.Sc. in Computer Science and Engineering from Linköping
          University
        </li>
      </ul>
      <h2>Publications</h2>
      <ul>
        <li>Predicting Player Trajectories in Shot Situations in Soccer</li>
        <li>
          Deep Imitation Learning on Spatio-Temporal Data with Multiple
          Adversarial Agents Applied on Soccer
        </li>
        <li>Mapping the current state of SSL/TLS</li>
      </ul>
    </Layout>
  )
}
