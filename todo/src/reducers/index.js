export const initialTodoList = {
    todos:[
        {
            task: 'Build reducer',
            completed: false,
            id: Date.now()
        }
    ]
}

export const todoReducer = (state, action) => {
    switch (action.type) {
        case "TOGGLE_COMPLETED":
            console.log('toggleCompleted')
            return state
        default:
            return state
    }
}