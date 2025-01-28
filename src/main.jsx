import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom'
import Home from './pages/Home.jsx'
import WorkoutPlan from './pages/WorkoutPlan.jsx'
import Progress from './pages/Progress.jsx'
import Gallery from './pages/Gallery.jsx'
import Social from './pages/Social.jsx'

function App() {
  const navigate = useNavigate()

  const handleHeaderClick = () => {
    navigate('/')
  }

  return (
    <div className="container">
      <header>
        <h1 className="header" onClick={handleHeaderClick}>
          FitGenius
        </h1>
        <nav>
          <ul className="tab-navigation">
            <li>
              <Link to="/progress" className="tab-button">
                Progress
              </Link>
            </li>
            <li>
              <Link to="/workout-plan" className="tab-button">
                Workout Plans
              </Link>
            </li>
            <li>
              <Link to="/gallery" className="tab-button">
                Photo Gallery
              </Link>
            </li>
            <li>
              <Link to="/social" className="tab-button">
                Social
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/progress" element={<Progress />} />
          <Route path="/workout-plan" element={<WorkoutPlan />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/social" element={<Social />} />
        </Routes>
      </main>
    </div>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
)
