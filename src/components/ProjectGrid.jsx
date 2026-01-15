import React, { useState, useEffect, useRef, useCallback } from 'react'
import ProjectCard from './ProjectCard'
import '../styles/ProjectGrid.css'

const ProjectGrid = ({ projects }) => {
  const [displayedProjects, setDisplayedProjects] = useState([])
  const [page, setPage] = useState(1)
  const observerRef = useRef(null)
  const loadMoreRef = useRef(null)
  const projectsPerPage = 6

  useEffect(() => {
    // Initial load
    setDisplayedProjects(projects.slice(0, projectsPerPage))
    setPage(1)
  }, [projects])

  const loadMoreProjects = useCallback(() => {
    setDisplayedProjects((prevDisplayed) => {
      const currentCount = prevDisplayed.length
      if (currentCount >= projects.length) {
        return prevDisplayed
      }
      const nextCount = Math.min(currentCount + projectsPerPage, projects.length)
      return projects.slice(0, nextCount)
    })
    setPage((prevPage) => prevPage + 1)
  }, [projects, projectsPerPage])

  useEffect(() => {
    // Set up intersection observer for infinite scroll
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && displayedProjects.length < projects.length) {
          loadMoreProjects()
        }
      },
      { threshold: 0.1 }
    )

    const currentLoadMore = loadMoreRef.current
    if (currentLoadMore) {
      observer.observe(currentLoadMore)
    }

    return () => {
      if (currentLoadMore) {
        observer.unobserve(currentLoadMore)
      }
    }
  }, [displayedProjects.length, projects.length, loadMoreProjects])

  return (
    <main className="project-grid-container">
      <div className="project-grid">
        {displayedProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
      {displayedProjects.length < projects.length && (
        <div ref={loadMoreRef} className="load-more-trigger"></div>
      )}
    </main>
  )
}

export default ProjectGrid

