import { useEffect } from 'react'
import projects from './data/projects.json'

const BASE = import.meta.env.BASE_URL

const LINK_LABELS = {
  external: 'Link',
  spotify: 'Spotify',
  youtube: 'YouTube',
  appleMusic: 'Apple Music',
}

function App() {
  useEffect(() => {
    document.body.style.backgroundImage = `url(${BASE}background.jpg)`
  }, [])

  return (
    <div className="app">
      <aside className="sidebar">
        <div className="sidebar-content">
          <div className="profile-section">
            <img
              src={`${BASE}profile-picture.png`}
              alt="Profile"
              className="profile-picture"
            />
            <h1 className="sidebar-title">monica's creative garden</h1>
            <p className="sidebar-subtitle">
              A little corner of the internet for my creative hobbies.
            </p>
          </div>
          <nav className="social-links">
            <a className="social-link" href="https://github.com/mokai-xu" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a className="social-link" href="https://linkedin.com/in/xumonica" target="_blank" rel="noopener noreferrer">Linkedin</a>
            <a className="social-link" href="https://open.spotify.com/artist/4wQ4CoGKeE4SVL4lGlV3Eh" target="_blank" rel="noopener noreferrer">Spotify</a>
            <a className="social-link" href="https://soundcloud.com/2kaimusic" target="_blank" rel="noopener noreferrer">Soundcloud</a>
            <a className="social-link" href="https://drive.google.com/file/d/1zmUhYzDf50aOox00NQsJ_oMnxpS8aWb1/view?usp=sharing" target="_blank" rel="noopener noreferrer">Resume</a>
            <a className="social-link" href="https://substack.com/@monicaxu" target="_blank" rel="noopener noreferrer">Substack</a>

          </nav>
        </div>
      </aside>
      <main className="project-grid-container">
        <div className="project-grid">
          {projects.map((project, i) => (
            <article key={i} className="project-card">
              <h2 className="project-title">{project.title}</h2>
              <div className="project-image-container">
                <img
                  src={`${BASE}${project.image}`}
                  alt={project.title}
                  className="project-image"
                />
              </div>
              <p className="project-description">{project.description}</p>
              {project.links && Object.keys(project.links).length > 0 && (
                <div className="project-links">
                  {Object.entries(project.links).map(([key, href]) =>
                    href ? (
                      <a
                        key={key}
                        className="project-link"
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {LINK_LABELS[key] ?? key}
                      </a>
                    ) : null
                  )}
                </div>
              )}
            </article>
          ))}
        </div>
      </main>
    </div>
  )
}

export default App
