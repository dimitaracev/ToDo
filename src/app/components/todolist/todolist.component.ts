import { Component, OnInit } from '@angular/core';
import { TodosService } from '../../services/todos.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css'],
})
export class TodolistComponent implements OnInit {
  public FilterTerm: string;
  public FilterState: boolean;
  public FilterFinished: string;
  constructor(public Todos: TodosService, private router : Router) {
    this.FilterTerm = '';
    this.FilterState = false;
    this.FilterFinished = 'true';
  }

  ngOnInit(): void {}

  RemoveTodo(index) {
    this.Todos.TodoArray = this.Todos.TodoArray.filter((id) => id.Id != index);
    this.Todos.SaveState();
  }

  GotoTodo(index)
  {
    this.Todos.LoadState();
    this.router.navigate(['/', 'todo', index]);
  }

  Filter() {
    this.Todos.LoadState();
    this.Todos.TodoArray = this.Todos.TodoArray.filter((todo) => {
      if(this.FilterState)
      {
        let state = (this.FilterFinished === "true");
        return todo.Title.toLowerCase().includes(this.FilterTerm.toLowerCase()) && todo.State === state;
      }
      else {
        return todo.Title.toLowerCase().includes(this.FilterTerm.toLowerCase());
      }
    });
  }
}
