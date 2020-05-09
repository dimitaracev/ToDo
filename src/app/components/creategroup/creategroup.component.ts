import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TodosService } from '../../services/todos.service';

@Component({
  selector: 'app-creategroup',
  templateUrl: './creategroup.component.html',
  styleUrls: ['./creategroup.component.css']
})
export class CreategroupComponent implements OnInit {
  public Group : string;
  constructor(private router : Router, private Todos : TodosService) {
    this.Group = '';
   }

  ngOnInit(): void {
  }

  CreateGroup() {
    if(this.Group != '')
    {
      this.Todos.AddGroup(this.Group);
      this.router.navigate(['/']);
    }
  }
}
