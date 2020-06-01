import React from "react"
import Layout from "../layout"

export default () => {
  const books = [
    {
      name: "Tribal Leadership",
    },
    {
      name: "Getting Real",
      link: "https://basecamp.com/books/getting-real",
    },
    {
      name: "Thinking, Fast and slow",
    },
    {
      name: "Sapiens"
    },
    {
      name: "Hacking Growth"
    },
    {
      name: "The Lean Startup"
    }
  ]

  const articles = [
    {
      name: "How to Write a Git Commit Message",
      link: "https://chris.beams.io/posts/git-commit/",
    },
  ]
  return (
    <Layout>
      <h1>Reads</h1>
      <p>
        A non-exhaustive list of stuff I have read and enjoyed/would recommend!
      </p>
      <h2>Books</h2>
      <ul>
        {books.map(({ name, link }) => (
          <li key={name}>{link ? <a href={link}>{name}</a> : `${name}`}</li>
        ))}
      </ul>
      <h2>Articles</h2>
      <ul>
        {articles.map(({ name, link }) => (
          <li key={name}>
            <a href={link}>{name}</a>
          </li>
        ))}
      </ul>
    </Layout>
  )
}
