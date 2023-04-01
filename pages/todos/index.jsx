import Link from 'next/link'
import styles from '../../styles/Todo.module.css'

export async function getStaticProps() {
    const data = await fetch('https://jsonplaceholder.typicode.com/todos')
    const todos = await data.json()

   // console.log(todos)
   return {
    props: { todos },
   }
}

export default function Todos({ todos }) {
    return (
        <>
           <h1 className={styles.h1}>Tarefas para fazer</h1> 
           <ul className={styles.todolist}>
                {todos.map((todo) => (
                    <div>
                    <li key={todo.id}>{todo.title} - <Link href={`/todos/${todo.id}`}>Ver mais</Link></li>
                    </div>
                ))}
                
           </ul>
        </>
    )
}