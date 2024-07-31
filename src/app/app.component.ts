import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from './shared/services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent{

  username : string = "janathm";
  password : string = "1234";

  constructor(
    userService : UserService
  ){
    userService.checklogin(this.username,this.password).subscribe(data =>{
      console.log(data);
    })
  }
 
}
