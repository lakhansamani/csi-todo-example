import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from "@angular/platform-browser";
import { HttpModule } from '@angular/http';
import { TodoComponent } from './todo.component';
import { ListComponent } from '../list/list.component';
import { TodoInputComponent } from '../todo-input/todo-input.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  declarations: [
    TodoComponent,
    ListComponent,
    TodoInputComponent
  ],
  exports: [TodoComponent]
})
export class TodoModule { }
