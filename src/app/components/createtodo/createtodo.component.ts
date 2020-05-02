import { Component, OnInit } from '@angular/core';
import { Todo } from '../../models/todo';
import { TodosService } from '../../services/todos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-createtodo',
  templateUrl: './createtodo.component.html',
  styleUrls: ['./createtodo.component.css'],
})
export class CreatetodoComponent implements OnInit {
  public TodoObject: Todo;
  public TitleEntered : Boolean;
  constructor(private Todos: TodosService, private router: Router) {
    this.TodoObject = {Id: 0, Title: '', Description: '', State: false };
    this.TitleEntered = true;
  }

  Create() {
    if (this.TodoObject.Title != '') {
      let todo: Todo = this.TodoObject;
      todo.Id = (this.Todos.TodoArray.length > 0) ? (this.Todos.TodoArray[this.Todos.TodoArray.length - 1].Id + 1) : 0;
      this.Todos.AddTodo(todo);
      this.TodoObject = {Id: 0, Title: '', Description: '', State: false };
      this.router.navigate(['/']);
    } else {
      this.TitleEntered = false;
    }
  }

  ngOnInit(): void {}
}
