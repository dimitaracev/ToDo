import { Injectable } from '@angular/core';
import { Todo } from '../models/todo';
@Injectable({
  providedIn: 'root',
})
export class TodosService {
  public TodoArray: Array<Todo>;
  public GroupArray: Array<string>;
  constructor() {
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

  AddGroup(group : string)
  {
    this.GroupArray.push(group);
    this.SaveState();
  }

  RemoveGroup(group : string)
  {
    this.TodoArray = this.TodoArray.filter((t) => t.Group != group);
    this.GroupArray = this.GroupArray.filter((g) => g != group);
    this.SaveState();
  }
  SaveState() {
    window.localStorage.setItem('todoArray', JSON.stringify(this.TodoArray));
    window.localStorage.setItem('groups', JSON.stringify(this.GroupArray));
  }
  LoadState() {
    this.TodoArray = (JSON.parse(window.localStorage.getItem('todoArray')) || new Array<Todo>());
    this.GroupArray = (JSON.parse(window.localStorage.getItem('groups')) || new Array<string>(''));
  }
}
