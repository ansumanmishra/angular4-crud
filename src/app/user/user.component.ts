import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
	users:Object[] = [];
  constructor() { 
  		this.users = [{
  		'name': 'Ansuman',
  		'age': 34
  	},{
  		'name': 'Rahas',
  		'age': 35
  	}]
  }

  ngOnInit() {
  }

}
