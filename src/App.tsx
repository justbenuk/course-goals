import goalsImg from './assets/goals.jpg'
import Header from "./components/Header";
import { useState } from "react";
import { Goal } from "./types";
import CourseGoalList from "./components/CourseGoalList";
import NewGoal from './components/NewGoal';

export default function App() {
  //add state
  const [goals, setGoals] = useState<Goal[]>([])

  //add the goal
  function handleAddGoal(goal: string, summery: string) {
    setGoals(prevState => {
      const newGoal: Goal = {
        id: Math.random(),
        title: goal,
        description: summery
      }
      return [...prevState, newGoal]
    })
  }

  function handleDeleteGoal(id: number) {
    setGoals(prevState => prevState.filter(goal => goal.id !== id))
  }

  return (
    <main>
      <Header image={{ src: goalsImg, alt: 'A List Of Goals' }}>
        <h1>Your Course Goals</h1>
      </Header>
      <NewGoal onAddGoal={handleAddGoal}/> 
      <CourseGoalList goals={goals} onDelete={ handleDeleteGoal } />
    </main>
  );
}
