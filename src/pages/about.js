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
      <h2>Likes</h2>
      <ul>
        <li>Cooking and eating food</li>
        <li>Drinking beer and coffee</li>
        <li>Houseplants</li>
        <li>Running and climbing</li>
        <li>Learning new things</li>
        <li>Building awesome products</li>
      </ul>
      <h2>Tools</h2>
      <ul>
        <li>Terminal: iTerm2 w/ zsh</li>
        <li>Editor: VS Code</li>
        <li>Font: <a href="https://github.com/be5invis/Iosevka">Iosevka Extended</a></li>
      </ul>
      <h2>Experience</h2>
      <ul>
      <li>
          CTO at <a href="https://mytilly.co">Tilly</a>{" "}
          (current)
        </li>
        <li>
          Associate at <a href="https://digitaledge.se">Digital Edge</a>
        </li>
        <li>
          Research Intern at <a href="https://signality.com">Signality</a>
        </li>
        <li>
          Lead Software Engineer at <a href="https://skira.se">Skira</a>
        </li>
        <li>
          Software Engineer at <a href="https://goli.nu">GOLI</a>
        </li>
        <li>
          Critical Incident Manager at{" "}
          <a href="https://hpe.com">Hewlett Packard Enterprise</a>
        </li>
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
