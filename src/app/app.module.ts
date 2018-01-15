import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';

import { NavComponent } from './nav/nav.component';
import { AddUserComponent } from './user/add-user/add-user.component';
import { ListUsersComponent } from './user/list-users/list-users.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    NavComponent,
    AddUserComponent,
    ListUsersComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
