import ProgressBar from '../components/ProgressBar.jsx'
import SiteHeader from '../components/SiteHeader.jsx'
import content from './chatbot-content.html?raw'

export default function ChatbotGuide() {
  return (
    <div className="page page-chatbot">
      <ProgressBar />
      <SiteHeader
        logo={<>Módulo <b>ChatBot</b> · Clínica</>}
        tag="guia do desenvolvedor · fluxo de agendamento"
      />
      <main dangerouslySetInnerHTML={{ __html: content }} />
      <footer>
        <div className="wrap">
          <span>Módulo ChatBot · Guia do desenvolvedor — fluxo de agendamento</span>
          <span>na dúvida, pergunte antes de implementar 🙂</span>
        </div>
      </footer>
    </div>
  )
}
