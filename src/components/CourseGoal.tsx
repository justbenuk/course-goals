import { CourseProps } from '../types'


export default function CourseGoal({id, title, children, onDelete}: CourseProps ) {
  return (
    <article>
      <div>
        <h2>{title}</h2>
        {children}
      </div>
      <button onClick={() => onDelete(id)}>delete</button>
    </article>
  )
}
