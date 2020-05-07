import { Injectable } from '@angular/core';
import { Todo } from '../models/todo';

@Injectable({
  providedIn: 'root',
})
export class TodosService {
  public TodoArray: Array<Todo>;
  constructor() {
    this.TodoArray = new Array<Todo>();
    this.LoadState();
  }
  AddTodo(todo: Todo) {
    this.TodoArray.push(todo);
    this.SaveState();
  }
  RemoveTodo(todo: Todo) {
    this.TodoArray = this.TodoArray.filter((t) => t != todo);
    this.SaveState();
  }

  SaveState() {
    window.localStorage.setItem('todoArray', JSON.stringify(this.TodoArray));
  }

  LoadState() {
    this.TodoArray = JSON.parse(window.localStorage.getItem('todoArray'));
  }
}
