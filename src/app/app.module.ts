import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { CreatetodoComponent } from './components/createtodo/createtodo.component';
import { SingleTodoComponent } from './components/singletodo/singletodo.component';
import { TodolistComponent } from './components/todolist/todolist.component';
import { BarComponent } from './components/bar/bar.component';
import { TodoComponent } from './components/todo/todo.component';
const appRoutes: Routes = [
  { path:'', component: TodolistComponent},
  { path: 'createtodo', component: CreatetodoComponent },
  { path: 'todo/:id', component: SingleTodoComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    CreatetodoComponent,
    SingleTodoComponent,
    TodolistComponent,
    BarComponent,
    TodoComponent
  ],
  imports: [BrowserModule, FormsModule, RouterModule.forRoot(appRoutes)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
