import React from "react"
import Layout from "../layout"

export default () => {
  const books = [
    {
      name: "Tribal Leadership",
      author: "Dave Logan and John King"
    },
    {
      name: "Getting Real",
      link: "https://basecamp.com/books/getting-real",
    },
    {
      name: "Thinking, Fast and slow",
      author: "Daniel Kahneman"
    },
    {
      name: "Sapiens",
      author: "Yuval Noah Harari"
    },
    {
      name: "Hacking Growth",
      author: "Morgan Brown and Sean Ellis"
    },
    {
      name: "The Lean Startup",
      author: "Eric Ries"
    }
  ]

  const articles = [
    {
      name: "How to Write a Git Commit Message",
      link: "https://chris.beams.io/posts/git-commit/",
    },
    {
      name: "Less is More: Jumpstarting Productivity with Small Teams",
      link: "https://stevemcconnell.com/articles/less-is-more-jumpstarting-productivity-with-small-teams/"
    }
  ]
  return (
    <Layout>
      <h1>Reads</h1>
      <p>
        A non-exhaustive list of stuff I have read and enjoyed/would recommend!
      </p>
      <h2>Books</h2>
      <ul>
        {books.map(({ name, link, author }) => (
          <li key={name}>{link ? <a href={link}>{name}</a> : `${name}`} { author && `by ${author}`}</li>
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
