import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { CreatetodoComponent } from './components/createtodo/createtodo.component';
import { TodoComponent } from './components/todo/todo.component';
import { TodolistComponent } from './components/todolist/todolist.component';
import { BarComponent } from './components/bar/bar.component';
import { TodoitemComponent } from './components/todoitem/todoitem.component';
import { CreategroupComponent } from './components/creategroup/creategroup.component';
import { TitlepipePipe } from './pipes/titlepipe.pipe';
import { StatepipePipe } from './pipes/statepipe.pipe';
import { GrouppipePipe } from './pipes/grouppipe.pipe';

const appRoutes: Routes = [
  { path:'', component: TodolistComponent},
  { path: 'createtodo', component: CreatetodoComponent },
  { path: 'todo/:id', component: TodoComponent },
  { path: 'creategroup', component: CreategroupComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    CreatetodoComponent,
    TodoComponent,
    TodolistComponent,
    BarComponent,
    TodoitemComponent,
    CreategroupComponent,
    TitlepipePipe,
    StatepipePipe,
    GrouppipePipe
  ],
  imports: [BrowserModule, FormsModule, RouterModule.forRoot(appRoutes)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
