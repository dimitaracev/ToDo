import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Todo } from '../../models/todo';
import { TodosService } from '../../services/todos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent implements OnInit {
  public Todo: Todo;
  public TitleEntered: Boolean;
  constructor(
    private route: ActivatedRoute,
    private Todos: TodosService,
    private router: Router
  ) {
    this.Todo = new Todo(0, '','', false, undefined);
    this.TitleEntered = true;
  }

  ngOnInit(): void {
    let id = Number.parseInt(this.route.snapshot.paramMap.get('id'));
    if (id > ((this.Todos.TodoArray.length > 0) ? this.Todos.TodoArray[this.Todos.TodoArray.length - 1 ].Id : -1))  {
      this.router.navigate(['/']);
    } else {
      this.Todo = this.Todos.TodoArray.filter((index) => index.Id == id)[0];
    }
  }
  Update() {
    if (this.Todo.Title != '') {
      this.Todos.SaveState();
      this.router.navigate(['/']);
    } else {
      this.TitleEntered = false;
    }
  }
  Remove() {
    if(confirm("Are you sure you want to remove this Todo?")){this.Todos.RemoveTodo(this.Todo);
    this.router.navigate(['/']);
    }
  }
}
