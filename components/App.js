import html from "../core.js";
import { connect } from "../store.js";

const connector = connect((state) => ({
  todos: state.todos,
}));

function App({ todos }) {
  return html`
    <ul>
      ${todos.map((todo) => `<li>${todo}</li>`)}
    </ul>
    <button onclick="dispatch('ADD', 'new to do')">Add new todo</button>
  `;
}

export default connector(App);
