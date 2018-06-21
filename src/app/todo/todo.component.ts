import { Component, OnInit } from '@angular/core';
import { Todo } from "./todo";

const TODOS: Todo[] = [
  { id: 1, title: 'Learn JS', status: false },
  { id: 2, title: 'Have coffee', status: false },
  { id: 3, title: 'Watch Football World cup', status: false },
];

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  todoList:Todo[]

  constructor() { }

  ngOnInit() {
    this.todoList = TODOS
  }

  addTodo(title) {
    console.log('called function')
    const id = this.todoList.length + 1;
    this.todoList.push({
      id,
      title,
      status: false,
    })
  }

  changeStatus(index) {
    this.todoList[index].status = !this.todoList[index].status
  }

}
