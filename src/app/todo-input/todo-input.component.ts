import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo-input',
  templateUrl: './todo-input.component.html',
  styleUrls: ['./todo-input.component.css']
})
export class TodoInputComponent implements OnInit {
  todoTitle:string = ''
  @Output() addTodo:EventEmitter<any> = new EventEmitter<any>();
  constructor() { }

  ngOnInit() {
  }

  emitAddTodo() {
    if (this.todoTitle.length) {
      this.addTodo.emit(this.todoTitle)
      this.todoTitle = ''
    }
  }

  onClick() {
    this.emitAddTodo()
  }

  onKeydown(e) {
    if (e.keyCode === 13) {
      this.emitAddTodo()
    }
  }

}
