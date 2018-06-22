import { Injectable } from '@angular/core';
import { Todo } from './todo/todo'

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  todos: Todo[] = []
  constructor() { }

  getAllTodos(): Todo[] {
    return this.todos
  }

  addTodo(todo: Todo) {
    this.todos = [...this.todos, todo]
  }

  changeStatus(index: number) {
    const currentTodos = [ ...this.todos ]
    currentTodos[index].status = !currentTodos[index].status
    this.todos = currentTodos
  }

  deleteTodo(index: number) {
    const currentTodos = [ ...this.todos ]
    currentTodos.splice(index, 1)
    this.todos = currentTodos
  }
}
