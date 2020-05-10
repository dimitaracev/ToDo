import { Component, OnInit, Input } from '@angular/core';
import { TodosService } from '../../services/todos.service';
import { Todo } from '../../models/todo';
import { Router } from '@angular/router';
@Component({
  selector: 'app-todoitem',
  templateUrl: './todoitem.component.html',
  styleUrls: ['./todoitem.component.css'],
})
export class TodoitemComponent implements OnInit {
  @Input() Todo: Todo;
  constructor(private Todos: TodosService, private router: Router) {}

  ngOnInit(): void {}

  RemoveTodo() {
    if(confirm("Are you sure you want to remove this Todo?")) this.Todos.RemoveTodo(this.Todo);
  }
  GotoTodo() {
    this.router.navigate(['/', 'todo', this.Todo.Id]);
  }
}
