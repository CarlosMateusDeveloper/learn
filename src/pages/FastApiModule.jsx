import ProgressBar from '../components/ProgressBar.jsx'
import SiteHeader from '../components/SiteHeader.jsx'
import content from './fastapi-content.html?raw'

export default function FastApiModule() {
  return (
    <div className="page page-fastapi">
      <ProgressBar />
      <SiteHeader
        logo={<>FastAPI <b>em profundidade</b></>}
        tag="módulo 1 de 5 · introdução ao FastAPI"
      />
      <main dangerouslySetInnerHTML={{ __html: content }} />
      <footer>
        <div className="wrap">
          <span>FastAPI em Profundidade · Módulo 1 — Introdução ao FastAPI</span>
          <span>feito para estudar com calma ☕</span>
        </div>
      </footer>
    </div>
  )
}
