import { GoalList } from "../types"
import CourseGoal from "./CourseGoal"
import InfoBox from "./InfoBox"
export default function CourseGoalList({goals, onDelete}: GoalList) {
  if(goals.length === 0){
    return <InfoBox mode="hint">You have no course goals yet, Why dont you add some!</InfoBox>
  }
  return (
    <ul>
        {goals.map(goal => (
          <li key={goal.id}>
            <CourseGoal id={goal.id} title={goal.title} onDelete={onDelete}>
              <p>{goal.description}</p>
            </CourseGoal>
          </li>
        ))}
      </ul>
  )
}
