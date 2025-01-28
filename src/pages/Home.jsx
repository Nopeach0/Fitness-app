import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className="goal-selector">
      <Link to="/workout-plan?goal=weight-loss" className="goal-card">
        <h2>🔥 Weight Loss</h2>
        <p>High-intensity fat burning workouts</p>
        <div className="progress-ring"></div>
      </Link>

      <Link to="/workout-plan?goal=muscle-gain" className="goal-card">
        <h2>💪 Muscle Building</h2>
        <p>Hypertrophy-focused training split</p>
        <div className="progress-ring"></div>
      </Link>

      <Link to="/workout-plan?goal=strength" className="goal-card">
        <h2>🏋️ Strength Training</h2>
        <p>Powerlifting-based program</p>
        <div className="progress-ring"></div>
      </Link>
    </div>
  )
}

export default Home
