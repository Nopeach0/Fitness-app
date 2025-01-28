import React, { useState } from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home.jsx'
import WorkoutPlan from './pages/WorkoutPlan.jsx'

function App() {
  const [goal, setGoal] = useState('')

  return (
    <div className="container">
      <header>
        <img src="https://via.placeholder.com/1200x200" alt="Fitness Header" className="header-image" />
        <h1>Fitness Goal Planner</h1>
        <nav>
          <ul>
            <li>
              <Link to="/">
                <img src="https://via.placeholder.com/24" alt="Home Icon" className="icon" />
                Home
              </Link>
            </li>
            <li>
              <Link to="/workout-plan">
                <img src="https://via.placeholder.com/24" alt="Workout Plan Icon" className="icon" />
                Workout Plan
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home setGoal={setGoal} />} />
          <Route path="/workout-plan" element={<WorkoutPlan goal={goal} />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
