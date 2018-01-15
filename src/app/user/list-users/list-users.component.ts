import { Component, OnInit, Input } from '@angular/core';
import { User } from '../../models/user.interface';

import { UserdataService } from '../../services/userdata.service';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent implements OnInit {
  @Input() users:User;
  
  showUsers:boolean = true;

  constructor(public userdataService:UserdataService) { }

  ngOnInit() {
    this.getUsers()
  }

  getUsers() {  
    this.userdataService.getUsers().subscribe( (users) => {
      this.users = users;
    });
  }

  editUser(userid) {
    alert('Editing user ' + userid)
  }

  deleteUser(userid) {
    let confirmDelete = confirm('Are you sure you want to delete this user?');

    if(confirmDelete) {
      this.userdataService.deleteUser(userid).subscribe( (users) => {
        this.users = users;
      });
    }
  }

	toggleUsers() {
		this.showUsers = !this.showUsers;
	}

}
