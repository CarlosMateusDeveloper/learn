import { NavLink } from 'react-router-dom'

export default function SiteHeader({ logo, tag }) {
  return (
    <header className="top">
      <div className="wrap">
        <div>
          <div className="logo">{logo}</div>
          <div className="tag">{tag}</div>
        </div>
        <nav className="site-nav">
          <NavLink to="/chatbot" className={({ isActive }) => (isActive ? 'active' : '')}>
            Chatbot da clínica
          </NavLink>
          <NavLink to="/fastapi" className={({ isActive }) => (isActive ? 'active' : '')}>
            FastAPI · Módulo 1
          </NavLink>
        </nav>
      </div>
    </header>
  )
}
