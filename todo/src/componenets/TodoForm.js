import React, {useState} from 'react';

const TodoForm = ({dispatch}) => {
    const [newItem, setNewItem] = useState("")   
    const handleChanges = e => {
        setNewItem(e.target.value);
      };
    
    return (
        <form onSubmit={ (e) => {
            e.preventDefault(); 
            console.log()
            dispatch({type: "ADD_ITEM", payload: newItem })}}
            > 
        <input
            onChange={handleChanges}
            type="text"
            name="newItem"
            value={newItem}
            />
            <button>Add Task</button>
        </form>
    )
    
}

export default TodoForm;