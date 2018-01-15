import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { User } from '../../models/user.interface';

import { UserdataService } from '../../services/userdata.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  @Output() userAdded = new EventEmitter();
  name:string;
  age:string;
  constructor(private userDataService: UserdataService) { 

  }

  ngOnInit() {
    
  }

  createUser(user: User) {
    this.userDataService.addUser(user).subscribe( data => {
      this.userDataService.getUsers();
      this.userAdded.emit(data);
      this.name = '';
      this.age = '';
    });
  }

}
