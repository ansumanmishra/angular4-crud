import { Component, OnInit } from '@angular/core';

import { UserdataService } from '../services/userdata.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
	providers: [UserdataService]
})
export class UserComponent implements OnInit {

	users:Object[];

  constructor() {
  		
  }

  ngOnInit() {

  }

	addUser() {
		alert('Add User')
	}

	userAddedEvt(users) {
		this.users = users;
	}

}
