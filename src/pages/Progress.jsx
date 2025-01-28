import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

function Progress() {
  useEffect(() => {
    setTimeout(() => unlockAchievement('5k-club'), 2000);
  }, []);

  const unlockAchievement = (achievementId) => {
    const badge = document.getElementById(achievementId);
    badge.style.animation = 'none';
    void badge.offsetWidth; // Trigger reflow
    badge.style.animation = 'unlock 1s ease';
  }

  return (
    <div className="progress-section">
      <h2>RESUME THE BIG LAD LIFTING PLAN</h2>
      <p>5 Day Plan - 6 Weeks</p>
      <Link to="/workout-plan" className="cta-button">
        View Plan
      </Link>

      <div className="muscle-groups">
        <div className="muscle-card" onClick={() => showWorkout('chest')}>
          <h3>CHEST</h3>
          <div className="progress-bar"></div>
        </div>
        <div className="muscle-card" onClick={() => showWorkout('back')}>
          <h3>BACK</h3>
          <div className="progress-bar"></div>
        </div>
      </div>

      <div className="achievements">
        <h2>Your Achievements</h2>
        <div className="achievement-badge" id="5k-club">🏆 5K Club</div>
        <div className="achievement-badge" id="month-streak">🔥 30-Day Streak</div>
      </div>
    </div>
  )
}

const showWorkout = (muscleGroup) => {
  alert(`Workout for ${muscleGroup} coming soon!`);
}

export default Progress
