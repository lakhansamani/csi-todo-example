import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from "@angular/platform-browser";
import { TodoComponent } from './todo.component';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule
  ],
  declarations: [TodoComponent],
  exports: [TodoComponent]
})
export class TodoModule { }
