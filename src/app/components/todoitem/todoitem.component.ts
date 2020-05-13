import { Component, OnInit, Input, Output } from '@angular/core';
import { Todo } from '../../models/todo';
import { EventEmitter } from '@angular/core';
@Component({
  selector: 'app-todoitem',
  templateUrl: './todoitem.component.html',
  styleUrls: ['./todoitem.component.css'],
})
export class TodoitemComponent implements OnInit {
  @Input() Todo: Todo;
  @Output() remove : EventEmitter<Todo> = new EventEmitter<Todo>();
  @Output() goto : EventEmitter<number> = new EventEmitter<number>();
  constructor() {}

  ngOnInit(): void {}

  EmitRemove() {
    this.remove.emit(this.Todo);
  }
  EmitGoto() {
    this.goto.emit(this.Todo.Id);
  }
}
