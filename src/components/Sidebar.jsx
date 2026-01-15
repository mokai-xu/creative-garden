import React from 'react'
import '../styles/Sidebar.css'

const Sidebar = () => {
  const socialLinks = {
    linkedin: 'https://linkedin.com/in/xumonica',
    github: 'https://github.com/mokai-xu',
    resume: 'https://drive.google.com/file/d/1zmUhYzDf50aOox00NQsJ_oMnxpS8aWb1/view',
    youtube: 'https://youtube.com/@2kaimusic',
    spotify: 'https://open.spotify.com/artist/4wQ4CoGKeE4SVL4lGlV3Eh?si=FbqRpXUTTu6lCb1Q5wjeUg',
    soundcloud: 'https://soundcloud.com/2kaimusic',
    substack: 'http://monicaxu.substack.com/'
  }

  return (
    <aside className="sidebar">
      <div className="sidebar-content">
        <div className="profile-section">
          <img 
            src="/profile-picture.png" 
            alt="Profile" 
            className="profile-picture"
            onError={(e) => {
              e.target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="150" height="150"%3E%3Crect width="150" height="150" fill="%23e5e5e5"/%3E%3Ctext x="50%25" y="50%25" text-anchor="middle" dy=".3em" font-size="60" fill="%23888888"%3EM%3C/text%3E%3C/svg%3E'
            }}
          />
          <h1 className="sidebar-title">monica's creative cove</h1>
          <p className="sidebar-subtitle">welcome! come explore the little things i like to build :)</p>
        </div>
        
        <nav className="social-links">
          {Object.entries(socialLinks).map(([platform, url]) => (
            <a
              key={platform}
              href={url}
              target={platform === 'resume' ? undefined : '_blank'}
              rel={platform === 'resume' ? undefined : 'noopener noreferrer'}
              className="social-link"
            >
              {platform.charAt(0).toUpperCase() + platform.slice(1)}
            </a>
          ))}
        </nav>
      </div>
    </aside>
  )
}

export default Sidebar

