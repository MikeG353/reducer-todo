import React from 'react'
import Todo from './Todo'

const TodoList = props => {
    console.log(props.todos)
    return (
        <>
            {props.todos.map(task => (
                <Todo
                key={task.id}
                task={task.task}
                completed={task.completed}
                dispatch={props.dispatch}
                />
            ))}
        </>
    )
}

export default TodoList