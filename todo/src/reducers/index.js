export const initialTodoList = {
    todos:[
        {
            task: 'Build reducer',
            completed: true,
            id: 1
        },
        {
            task: 'Build a form',
            completed: true,
            id: 2
        },
        {
            task: 'Build Add Task Functionality',
            completed: true,
            id: 3
        },
        {
            task: 'Build OnClick Toggle',
            completed: false,
            id: 4
        },
        {
            task: 'Clear Completed',
            completed: false,
            id: 5
        },
    ]
}

export const todoReducer = (state, action) => {
    switch (action.type) {
        case "ADD_TODO":            
            return {
                ...state,               
               todos:[
                   ...state.todos,
                   { 
                       task: action.payload,
                       completed: false,
                       id: state.todos.length+1
                    }
               ]
            }
        case "TOGGLE_COMPLETED":
            console.log(action, state.todos)
            return {
                ...state,
                todos: [
                    ...state.todos.map(todo => todo.task === action.payload ? 
                        {...todo, completed: !todo.completed} 
                        : todo )
                ]
            }
        case "CLEAR_COMPLETED":
            // return state
            return {
                ...state,
                todos: [
                    ...state.todos.filter(task => task.completed !== true)
                ]
            }
        default:
            return state
    }
}