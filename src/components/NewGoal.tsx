import { useRef, type FormEvent } from 'react'
import { type NewGoalProps } from '../types'

export default function NewGoal({onAddGoal}: NewGoalProps) {

  const goal = useRef<HTMLInputElement>(null)
  const summery = useRef<HTMLInputElement>(null)

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()

    const enteredGoal = goal.current!.value
    const enteredSummery = summery.current!.value
    e.currentTarget.reset()
    onAddGoal(enteredGoal, enteredSummery)
  }

  return (
    <form onSubmit={handleSubmit}>
      <p>
        <label htmlFor='goal'>Your Goal</label>
        <input type="text" id='goal' ref={ goal} />
      </p>
      <p>
        <label htmlFor='summery'>Short Summery </label>
        <input type="text" id='summery' ref={summery } />
      </p>
      <p>
        <button>Add Goal</button>
      </p>
    </form>
  )
}


