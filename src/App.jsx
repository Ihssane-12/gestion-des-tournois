import { Routes, Route } from 'react-router-dom'
import HomePageContainer from './pages/HomePageContainer'
import TournamentPage from './pages/TournamentPage'

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePageContainer />} />
      <Route path="/tournament/:id" element={<TournamentPage />} />
    </Routes>
  )
}

export default App
