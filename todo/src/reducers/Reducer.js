export const reducer = (state, action) => {
    switch (action.type) {
        case "ADD_ITEM":
          const newTodo = {
            id: Date.now(),
            completed: false,
            name: action.payload
          }
          return {
            ...state,
            todo: [
              ...state.todo,
              newTodo
            ]
          };
        case "TOGGLE_COMPLETE":
          return {
            ...state,
            completed: !state.completed
          };
        case "CLEAR_COMPLETE":
          return {
            ...state,
            completed: this.state.items.filter(item => !item.completed)
          };
        default:
          return state;
      };
    };

export const initialState = {
  todo:[{
    item: 'Learn about reducers',
    completed: false,
    id: 3892987589
  }]
}

