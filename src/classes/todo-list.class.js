import {Todo} from './todo.class'

export class TodoList {

    constructor() {
        // this.todos = []
        this.cargarLocalStorage()
    }

    nuevoTodo(todo) {
        this.todos.push(todo)
        this.guardarLocalStorage()
    }

    eliminarTodo(id) {
        this.todos = this.todos.filter(todo => todo.id != id)
        this.guardarLocalStorage()

    }

    marcarCompletado(id) {

        this.todos.forEach(todo => {

            if (todo.id == id) {

                todo.completado = !todo.completado
                this.guardarLocalStorage()

            }

        })
    }

    eliminarCompletados() {
        this.todos = this.todos.filter(todo => !todo.completado)
        console.log('eliminar', this.todos)
        this.guardarLocalStorage()

    }


    guardarLocalStorage() {
        localStorage.setItem('todo', JSON.stringify(this.todos))

    }

    cargarLocalStorage() {
        // if (localStorage.getItem('todo')) {
        //     this.todos = JSON.parse(localStorage.getItem('todo'))

        //     console.log('cargarlocal', this.todos)
        // } else {
        //     this.todos = []
        // }


        this.todos = (localStorage.getItem('todo'))
            ? this.todos = JSON.parse(localStorage.getItem('todo'))
            : []


        this.todos = this.todos.map(Todo.fromJson) //  this.todos = this.todos.map(obj => Todo.fromJson(obj))

    }

}