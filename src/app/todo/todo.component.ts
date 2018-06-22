import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';
import { Todo } from './todo'

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  todos:Todo[] = []

  constructor(private todoService: TodoService) { }

  ngOnInit() {
    this.todoService.getAllTodos().subscribe(todos => {
      this.todos = todos
    })
  }

  addTodo(title) {
    this.todos.push({
      id: Date.now(),
      title,
      completed: false
    })
  }

  changeStatus(i) {
    this.todos[i].completed = !this.todos[i].completed
  }

  deleteTodo(index) {
    this.todos.splice(index, 1)
  }

}
