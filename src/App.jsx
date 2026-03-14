import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

const GITHUB_USER = 'damienmaspero'
const REPO_NAME = 'React-Github-Page'

function App() {
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText(`https://github.com/${GITHUB_USER}/${REPO_NAME}`)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="app">
      <header className="header">
        <img src={reactLogo} className="logo" alt="React logo" />
        <nav>
          <a href={`https://github.com/${GITHUB_USER}/${REPO_NAME}`} target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href="https://react.dev/" target="_blank" rel="noreferrer">
            React Docs
          </a>
          <a href="https://vite.dev/" target="_blank" rel="noreferrer">
            Vite Docs
          </a>
        </nav>
      </header>

      <main className="main">
        <section className="hero">
          <h1>React + Vite on GitHub Pages</h1>
          <p className="subtitle">
            A modern React application built with Vite and deployed to GitHub Pages.
          </p>
          <div className="cta-group">
            <a
              className="btn btn-primary"
              href={`https://github.com/${GITHUB_USER}/${REPO_NAME}`}
              target="_blank"
              rel="noreferrer"
            >
              View on GitHub
            </a>
            <button className="btn btn-secondary" onClick={handleCopy}>
              {copied ? '✓ Copied!' : 'Copy repo URL'}
            </button>
          </div>
        </section>

        <section className="cards">
          <div className="card">
            <h2>⚡ Vite</h2>
            <p>
              Lightning-fast build tool with instant Hot Module Replacement for a
              smooth development experience.
            </p>
            <a href="https://vite.dev/" target="_blank" rel="noreferrer">
              Learn more →
            </a>
          </div>

          <div className="card">
            <h2>⚛️ React 19</h2>
            <p>
              Build interactive UIs with the latest version of React, featuring
              improved performance and new hooks.
            </p>
            <a href="https://react.dev/" target="_blank" rel="noreferrer">
              Learn more →
            </a>
          </div>

          <div className="card">
            <h2>🚀 GitHub Pages</h2>
            <p>
              Deployed automatically to GitHub Pages. Run <code>npm run deploy</code>{' '}
              to publish your latest changes.
            </p>
            <a
              href="https://pages.github.com/"
              target="_blank"
              rel="noreferrer"
            >
              Learn more →
            </a>
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>
          Built with React &amp; Vite — Hosted on{' '}
          <a
            href={`https://github.com/${GITHUB_USER}/${REPO_NAME}`}
            target="_blank"
            rel="noreferrer"
          >
            GitHub Pages
          </a>
        </p>
      </footer>
    </div>
  )
}

export default App

