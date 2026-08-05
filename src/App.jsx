import { Navigate, Route, Routes } from 'react-router-dom'
import ChatbotGuide from './pages/ChatbotGuide.jsx'
import FastApiModule from './pages/FastApiModule.jsx'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/chatbot" replace />} />
      <Route path="/chatbot" element={<ChatbotGuide />} />
      <Route path="/fastapi" element={<FastApiModule />} />
      <Route path="*" element={<Navigate to="/chatbot" replace />} />
    </Routes>
  )
}

export default App
