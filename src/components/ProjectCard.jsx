import React from 'react'
import '../styles/ProjectCard.css'

const ProjectCard = ({ project }) => {
  const getLinkLabel = (platform) => {
    const labels = {
      github: 'GitHub',
      soundcloud: 'SoundCloud',
      youtube: 'YouTube',
      spotify: 'Spotify',
      external: 'Visit Site',
      apple:"Apple Music"
    }
    return labels[platform] || platform
  }

  return (
    <article className="project-card">
      <h2 className="project-title">{project.title}</h2>
      <div className="project-image-container">
        <img 
          src={project.photo} 
          alt={project.title}
          className="project-image"
          onError={(e) => {
            e.target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="300"%3E%3Crect width="400" height="300" fill="%23f5f5f5"/%3E%3Ctext x="50%25" y="50%25" text-anchor="middle" dy=".3em" font-size="24" fill="%23888888"%3EProject Image%3C/text%3E%3C/svg%3E'
          }}
        />
      </div>
      <p className="project-description">{project.description}</p>
      {project.links && Object.keys(project.links).length > 0 && (
        <div className="project-links">
          {Object.entries(project.links).map(([platform, url]) => (
            url && (
              <a
                key={platform}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
              >
                {getLinkLabel(platform)}
              </a>
            )
          ))}
        </div>
      )}
    </article>
  )
}

export default ProjectCard

