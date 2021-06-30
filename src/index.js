import './styles.css'
import { Todo, TodoList, crearTodoHtml } from './classes'


export const todoList = new TodoList()



todoList.todos.forEach(crearTodoHtml)  // todoList.todos.forEach(todo => crearTodoHtml(todo))

const newTodo = new Todo('aprender JS')
// todoList.nuevoTodo(newTodo)

todoList.todos[0].imprimirClase()

newTodo.imprimirClase()