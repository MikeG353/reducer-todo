import React from 'react';

const Todo = props => {
    console.log(props)
    return (
        <div className={`item${props.completed ? ' completed' : ''}`}
        onClick={() => {
            props.dispatch({ type: "TOGGLE_COMPLETED"})}}>
                <p>{props.task}</p>
        </div>
    )
}

export default Todo