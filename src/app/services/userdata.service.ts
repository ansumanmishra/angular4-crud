import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, RequestMethod } from '@angular/http';
import 'rxjs/add/operator/map';
import { User } from '../models/user.interface';

@Injectable()
export class UserdataService {
  constructor(private http: Http) { }

  getUsers() {
    return this.http.get('http://localhost:4000/users')
      .map(res => res.json())
  }

  addUser(user: User) {
    var body = JSON.stringify(user);
    var headerOptions = new Headers({'Content-Type':'application/json'});
    var requestOptions = new RequestOptions({method : RequestMethod.Post,headers : headerOptions});

    return this.http.post('http://localhost:4000/adduser', body,requestOptions).map(x => x.json());

  }

  deleteUser(userid) {
    return this.http.delete('http://localhost:4000/user/' + userid).map(
      res => res.json()
    )};

}
