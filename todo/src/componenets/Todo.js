import React from 'react'

const Todo = props => {
    return (
        <div className={`item${props.completed ? ' completed' : ''}`} onClick={() => props.dispatch({type: "TOGGLE_COMPLETE"})}>
            <p>{props.item}</p>
        </div>
    )
}

export default Todo;