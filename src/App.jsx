import { Routes, Route } from 'react-router-dom'
import HomePageContainer from './components/HomePageContainer'
import TournamentPageContainer from './components/TournamentPageContainer'

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePageContainer />} />
      <Route path="/tournament/:id" element={<TournamentPageContainer />} />
    </Routes>
  )
}

export default App
