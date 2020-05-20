import React from 'react';

const Todo = props => {
    return (
        <div className={`item${props.completed ? ' completed' : ''}`}
        onClick={event => {
            props.dispatch({ type: "TOGGLE_COMPLETED"})
            console.log(event)
            }}>
                <p>{props.task}</p>
        </div>
    )
}

export default Todo