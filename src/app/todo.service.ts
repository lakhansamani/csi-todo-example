import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable, of } from 'rxjs';
import { Todo } from './todo/todo';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  todos: Todo[] = [{
    "id": 1529656330215,
    "title": "Learn Angular JS",
    "completed": false
  }]
  constructor(private http: Http) { }

  getAllTodos(): Observable<any> {
    return this.http.get('assets/todo.json')
    .pipe(map(res => res.json()))
  }
}
