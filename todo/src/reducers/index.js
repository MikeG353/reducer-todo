export const initialTodoList = {
    todos:[
        {
            task: 'Build reducer',
            completed: false,
            id: Date.now() 
        },
        {
            task: 'Build a form',
            completed: false,
            id: Date.now()
        },
        {
            task: 'Build Add Task Functionality',
            completed: false,
            id: Date.now()
        },
        {
            task: 'Build OnClick Toggle',
            completed: false,
            id: Date.now()
        },
        {
            task: 'Clear Completed',
            completed: false,
            id: Date.now()
        },
    ]
}

export const todoReducer = (state, action) => {
    switch (action.type) {
        case "ADD_TODO":
            console.log(state)
            return {
                ...state,               
               todos:[
                   ...state.todos,
                   { 
                       task: action.payload,
                       completed: false,
                       id: Date.now()
                    }
               ]
            }
        case "TOGGLE_COMPLETED":
            console.log(state.todos)
            return state
        default:
            return state
    }
}