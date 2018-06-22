import { Component, OnInit } from '@angular/core';
import { Todo } from "./todo";
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  constructor(private todoService: TodoService) { }

  ngOnInit() {
    this.todoService.getAllTodos()
  }

  get todos() {
    return this.todoService.getAllTodos();
  }

  addTodo(title) {
    this.todoService.addTodo({
      id: Date.now(),
      title,
      status: false
    })
  }

  changeStatus(index) {
    this.todoService.changeStatus(index)
  }

  deleteTodo(index) {
    this.todoService.deleteTodo(index)
  }

}
