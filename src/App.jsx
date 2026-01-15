import React, { useState, useEffect } from 'react'
import Sidebar from './components/Sidebar'
import ProjectGrid from './components/ProjectGrid'
import projectsData from './data/projects.json'

function App() {
  const [projects, setProjects] = useState([])

  useEffect(() => {
    setProjects(projectsData.projects || [])
  }, [])

  return (
    <div className="app">
      <Sidebar />
      <ProjectGrid projects={projects} />
    </div>
  )
}

export default App

