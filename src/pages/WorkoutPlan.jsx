import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const workoutPlans = {
  'weight-loss': {
    title: '6-Week Fat Loss Program',
    description: 'High-intensity fat burning workouts',
    splits: [
      { day: 'Day 1: HIIT Cardio + Core', exercises: [
        { name: 'Treadmill Sprints', video: 'https://via.placeholder.com/1200x300' },
        { name: 'Mountain Climbers', video: 'https://via.placeholder.com/1200x300' },
        { name: 'Plank to Push-Up', video: 'https://via.placeholder.com/1200x300' },
        { name: 'Russian Twists', video: 'https://via.placeholder.com/1200x300' }
      ] },
      { day: 'Day 2: Upper Body Circuit', exercises: [
        { name: 'Push-Ups', video: 'https://via.placeholder.com/1200x300' },
        { name: 'Pull-Ups', video: 'https://via.placeholder.com/1200x300' },
        { name: 'Dumbbell Shoulder Press', video: 'https://via.placeholder.com/1200x300' },
        { name: 'Bicep Curls', video: 'https://via.placeholder.com/1200x300' },
        { name: 'Tricep Dips', video: 'https://via.placeholder.com/1200x300' }
      ] },
      { day: 'Day 3: Lower Body + Cardio', exercises: [
        { name: 'Squats', video: 'https://via.placeholder.com/1200x300' },
        { name: 'Lunges', video: 'https://via.placeholder.com/1200x300' },
        { name: 'Box Jumps', video: 'https://via.placeholder.com/1200x300' },
        { name: 'Jump Rope', video: 'https://via.placeholder.com/1200x300' }
      ] },
      { day: 'Day 4: Full Body HIIT', exercises: [
        { name: 'Burpees', video: 'https://via.placeholder.com/1200x300' },
        { name: 'Kettlebell Swings', video: 'https://via.placeholder.com/1200x300' },
        { name: 'Battle Ropes', video: 'https://via.placeholder.com/1200x300' },
        { name: 'Mountain Climbers', video: 'https://via.placeholder.com/1200x300' }
      ] },
      { day: 'Day 5: Active Recovery (Low-Intensity Cardio)', exercises: [
        { name: 'Walking or Cycling', video: 'https://via.placeholder.com/1200x300' },
        { name: 'Stretching/Yoga', video: 'https://via.placeholder.com/1200x300' }
      ] }
    ],
    image: 'https://via.placeholder.com/1200x300'
  },
  'muscle-gain': {
    title: '6-Week Muscle Building Plan (Hypertrophy Focus)',
    description: 'Increase muscle size and definition',
    splits: [
      { day: 'Day 1: Chest & Triceps', exercises: [
        { name: 'Bench Press: 4 sets of 8-12 reps', video: 'https://via.placeholder.com/1200x300' },
        { name: 'Incline Dumbbell Press: 3 sets of 10-12 reps', video: 'https://via.placeholder.com/1200x300' },
        { name: 'Chest Flyes: 3 sets of 12-15 reps', video: 'https://via.placeholder.com/1200x300' },
        { name: 'Tricep Dips: 3 sets of 10-12 reps', video: 'https://via.placeholder.com/1200x300' },
        { name: 'Overhead Tricep Extension: 3 sets of 12-15 reps', video: 'https://via.placeholder.com/1200x300' }
      ] },
      { day: 'Day 2: Back & Biceps', exercises: [
        { name: 'Pull-Ups: 4 sets of 8-10 reps', video: 'https://via.placeholder.com/1200x300' },
        { name: 'Barbell Rows: 4 sets of 8-12 reps', video: 'https://via.placeholder.com/1200x300' },
        { name: 'Lat Pulldown: 3 sets of 10-12 reps', video: 'https://via.placeholder.com/1200x300' },
        { name: 'Barbell Bicep Curls: 3 sets of 10-12 reps', video: 'https://via.placeholder.com/1200x300' },
        { name: 'Hammer Curls: 3 sets of 12-15 reps', video: 'https://via.placeholder.com/1200x300' }
      ] },
      { day: 'Day 3: Legs', exercises: [
        { name: 'Squats: 4 sets of 8-12 reps', video: 'https://via.placeholder.com/1200x300' },
        { name: 'Leg Press: 3 sets of 10-12 reps', video: 'https://via.placeholder.com/1200x300' },
        { name: 'Romanian Deadlifts: 3 sets of 10-12 reps', video: 'https://via.placeholder.com/1200x300' },
        { name: 'Lunges: 3 sets of 12 reps per leg', video: 'https://via.placeholder.com/1200x300' },
        { name: 'Calf Raises: 4 sets of 15-20 reps', video: 'https://via.placeholder.com/1200x300' }
      ] },
      { day: 'Day 4: Shoulders & Abs', exercises: [
        { name: 'Overhead Press: 4 sets of 8-12 reps', video: 'https://via.placeholder.com/1200x300' },
        { name: 'Lateral Raises: 3 sets of 12-15 reps', video: 'https://via.placeholder.com/1200x300' },
        { name: 'Front Raises: 3 sets of 12-15 reps', video: 'https://via.placeholder.com/1200x300' },
        { name: 'Face Pulls: 3 sets of 12-15 reps', video: 'https://via.placeholder.com/1200x300' },
        { name: 'Hanging Leg Raises: 3 sets of 15 reps', video: 'https://via.placeholder.com/1200x300' },
        { name: 'Plank: 3 sets of 60 seconds', video: 'https://via.placeholder.com/1200x300' }
      ] },
      { day: 'Day 5: Full Body (Compound Movements)', exercises: [
        { name: 'Deadlifts: 4 sets of 6-8 reps', video: 'https://via.placeholder.com/1200x300' },
        { name: 'Push-Ups: 3 sets of 15-20 reps', video: 'https://via.placeholder.com/1200x300' },
        { name: 'Pull-Ups: 3 sets of 8-10 reps', video: 'https://via.placeholder.com/1200x300' },
        { name: 'Kettlebell Swings: 3 sets of 15 reps', video: 'https://via.placeholder.com/1200x300' },
        { name: 'Burpees: 3 sets of 12 reps', video: 'https://via.placeholder.com/1200x300' }
      ] }
    ],
    image: 'https://via.placeholder.com/1200x300'
  },
  'strength': {
    title: '8-Week Bulking Plan (Strength & Size)',
    description: 'Gain muscle mass and strength',
    splits: [
      { day: 'Day 1: Chest & Triceps', exercises: [
        { name: 'Bench Press: 5 sets of 5 reps', video: 'https://via.placeholder.com/1200x300' },
        { name: 'Incline Bench Press: 4 sets of 6-8 reps', video: 'https://via.placeholder.com/1200x300' },
        { name: 'Chest Flyes: 3 sets of 10-12 reps', video: 'https://via.placeholder.com/1200x300' },
        { name: 'Tricep Dips: 3 sets of 8-10 reps', video: 'https://via.placeholder.com/1200x300' },
        { name: 'Overhead Tricep Extension: 3 sets of 10-12 reps', video: 'https://via.placeholder.com/1200x300' }
      ] },
      { day: 'Day 2: Back & Biceps', exercises: [
        { name: 'Deadlifts: 5 sets of 5 reps', video: 'https://via.placeholder.com/1200x300' },
        { name: 'Pull-Ups: 4 sets of 6-8 reps', video: 'https://via.placeholder.com/1200x300' },
        { name: 'Barbell Rows: 4 sets of 6-8 reps', video: 'https://via.placeholder.com/1200x300' },
        { name: 'Barbell Bicep Curls: 3 sets of 8-10 reps', video: 'https://via.placeholder.com/1200x300' },
        { name: 'Hammer Curls: 3 sets of 10-12 reps', video: 'https://via.placeholder.com/1200x300' }
      ] },
      { day: 'Day 3: Legs', exercises: [
        { name: 'Squats: 5 sets of 5 reps', video: 'https://via.placeholder.com/1200x300' },
        { name: 'Leg Press: 4 sets of 8-10 reps', video: 'https://via.placeholder.com/1200x300' },
        { name: 'Romanian Deadlifts: 4 sets of 6-8 reps', video: 'https://via.placeholder.com/1200x300' },
        { name: 'Lunges: 3 sets of 10 reps per leg', video: 'https://via.placeholder.com/1200x300' },
        { name: 'Calf Raises: 4 sets of 12-15 reps', video: 'https://via.placeholder.com/1200x300' }
      ] },
      { day: 'Day 4: Shoulders & Abs', exercises: [
        { name: 'Overhead Press: 5 sets of 5 reps', video: 'https://via.placeholder.com/1200x300' },
        { name: 'Lateral Raises: 3 sets of 10-12 reps', video: 'https://via.placeholder.com/1200x300' },
        { name: 'Front Raises: 3 sets of 10-12 reps', video: 'https://via.placeholder.com/1200x300' },
        { name: 'Face Pulls: 3 sets of 12-15 reps', video: 'https://via.placeholder.com/1200x300' },
        { name: 'Hanging Leg Raises: 3 sets of 12 reps', video: 'https://via.placeholder.com/1200x300' },
        { name: 'Plank: 3 sets of 60 seconds', video: 'https://via.placeholder.com/1200x300' }
      ] }
    ],
    image: 'https://via.placeholder.com/1200x300'
  }
}

function WorkoutPlan() {
  const location = useLocation()
  const goal = new URLSearchParams(location.search).get('goal')
  const plan = workoutPlans[goal] || { title: 'No Goal Selected', description: 'Please select a goal from the home page.', splits: [], image: 'https://via.placeholder.com/1200x300' }
  const [selectedExercise, setSelectedExercise] = useState(null)

  const handleExerciseClick = (exercise) => {
    setSelectedExercise(exercise)
  }

  return (
    <div className="workout-split active-split">
      <img src={plan.image} alt={plan.title} className="workout-image" />
      <h2>{plan.title}</h2>
      <p>{plan.description}</p>
      {plan.splits.map((split, index) => (
        <div key={index} className="split-day" onClick={() => handleExerciseClick(split.exercises[0])}>
          <h3>{split.day}</h3>
          <ul>
            {split.exercises.map((exercise, i) => (
              <li key={i} onClick={() => handleExerciseClick(exercise)} style={{ cursor: 'pointer' }}>
                {exercise.name}
              </li>
            ))}
          </ul>
        </div>
      ))}
      {selectedExercise && (
        <div className="workout-video">
          <h3>{selectedExercise.name}</h3>
          <iframe src={selectedExercise.video} title={selectedExercise.name} className="workout-video"></iframe>
        </div>
      )}
      <button>Start {plan.title}</button>
    </div>
  )
}

export default WorkoutPlan
