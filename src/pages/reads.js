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
      <h2>Books</h2>
      {books.map(({ name, link }) => (
        <li key={name}>{link ? <a href={link}>{name}</a> : `${name}`}</li>
      ))}
      <h2>Articles</h2>
      {articles.map(({ name, link }) => (
        <li key={name}>
          <a href={link}>{name}</a>
        </li>
      ))}
    </Layout>
  )
}