import {ReactNode} from 'react'
export type Goal = {
  id: number,
  title: string,
  description: string,
  
}

export type GoalList = {
  goals: Goal[],
  onDelete: (id: number) => void
}
  
export type CourseProps = {
  id: number,
  title: string,
  children: ReactNode,
  onDelete: (id :number) => void
}

export type NewGoalProps = {
  onAddGoal: (goal: string, summery: string) => void
}

