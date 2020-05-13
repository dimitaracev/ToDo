import { Component, OnInit } from '@angular/core';
import { TodosService } from '../../services/todos.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css'],
})
export class TodolistComponent implements OnInit {
  public FilterTerm: string;
  public FilterState: string;
  public FilterGroupName: string;
  constructor(public Todos: TodosService, private router: Router) {
    this.FilterTerm = '';
    this.FilterGroupName = '';
    this.FilterState = '-1';
  }

  ngOnInit(): void {}

  RemoveTodo(Todo) {
    if (confirm('Are you sure you want to remove this Todo?')) {
      this.Todos.TodoArray = this.Todos.TodoArray.filter(
        (id) => id.Id != Todo.Id
      );
      this.Todos.SaveState();
    }
  }

  GotoTodo(index) {
    this.Todos.LoadState();
    this.router.navigate(['/', 'todo', index]);
  }
}
