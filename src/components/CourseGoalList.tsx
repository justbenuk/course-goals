import { GoalList } from "../types"
import CourseGoal from "./CourseGoal"

export default function CourseGoalList({goals, onDelete}: GoalList) {
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
