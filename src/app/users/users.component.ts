import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})

export class UsersComponent implements OnInit {

  users$: Object;

  //access to service through dependency injection
  constructor(private data: DataService) { }

  //life cycle hook
  ngOnInit() {
    this.data.getUsers().subscribe(
      data => this.users$ = data  
    )
  }

}
