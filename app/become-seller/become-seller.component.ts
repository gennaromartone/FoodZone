import { Component, OnInit } from '@angular/core';
import {RegistraUserService} from './../registra-user.service';

import {User} from './../form-registration/user.interface';

@Component({
  moduleId: 'become-seller',
  selector: 'app-become-seller',
  templateUrl: './become-seller.component.html',
  styleUrls: ['./become-seller.component.css']
})
export class BecomeSellerComponent implements OnInit {

  public user: User;

  users: User[];

  constructor(private registraUserService:RegistraUserService, /* private location: Location */) { }

  ngOnInit() {
      this.getUsers();
  }

  getUsers():void {

        this.registraUserService.getUsers().then(users => this.users = users);
    }

}
