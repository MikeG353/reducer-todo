import React, { useState, useReducer } from 'react';

const TodoForm = () => {
    // state to handle input
    const [newTaskName, setNewTaskName] = useState()

    const handleChanges = e => {
        setNewTaskName(e.target.value);
    }

    return (
        <form onSubmit={(e) => {
            e.preventDefault();
        }}
        >
            <input
                onChange={handleChanges}
                type="text"
                name="newTaskName"
                value={newTaskName}
            />
            <button>Add Task</button>
        </form>
    )
}
export default TodoForm