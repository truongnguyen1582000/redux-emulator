const init = {
  todos: ["a", "b", "c"],
};

export default function reducer(state = init, action, args) {
  switch (action) {
    case "ADD":
      const [newTodo] = args;
      return {
        ...state,
        todos: [...state.todos, newTodo],
      };
    default:
      return state;
  }
}
