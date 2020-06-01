import React from "react"
import Layout from "../layout"

export default () => {
  const publications = [
    {
      name: "Predicting Player Trajectories in Shot Situations in Soccer",
      link:
        "https://www.researchgate.net/publication/334576325_Predicting_Player_Trajectories_in_Shot_Situations_in_Soccer",
    },
    {
      name:
        "Deep Imitation Learning on Spatio-Temporal Data with Multiple Adversarial Agents Applied on Soccer",
      link: "http://urn.kb.se/resolve?urn=urn:nbn:se:liu:diva-158076",
    },
    {
      name: "Mapping the current state of SSL/TLS",
      link: "http://urn.kb.se/resolve?urn=urn:nbn:se:liu:diva-138391",
    },
  ]

  return (
    <Layout>
      <h1>About</h1>
      <p>A few lists describing me and what I have done.</p>
      <h2>Likes</h2>
      <ul>
        <li>Food</li>
        <li>Coffee</li>
        <li>Beer</li>
        <li>Plants</li>
        <li>Running</li>
        <li>Climbing</li>
        <li>Reading</li>
        <li>Coding</li>
      </ul>
      <h2>Tools</h2>
      <ul>
        <li>iTerm2 w/ zsh</li>
        <li>VS Code</li>
      </ul>
      <h2>Experience</h2>
      <ul>
        <li>Associate at Digital Edge (current)</li>
        <li>Research Intern at Signality</li>
        <li>Lead Software Engineer at Skira</li>
        <li>Software Engineer at GOLI</li>
        <li>Critical Incident Manager at Hewlett Packard</li>
      </ul>
      <h2>Education</h2>
      <ul>
        <li>
          M.Sc. in Computer Science and Engineering from Linköping University
        </li>
      </ul>
      <h2>Publications</h2>
      <ul>
        {publications.map(({ name, link }) => (
          <li key={name}>
            <a href={link}>{name}</a>
          </li>
        ))}
      </ul>
    </Layout>
  )
}
