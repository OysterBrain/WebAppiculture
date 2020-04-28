import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';
import { User } from '../models/User';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private loginService : LoginService) { }
  
  public email :string;
  public password :string;

  ngOnInit() {
    
  }

  onSubmit(){
    this.loginService.connectUser(this.email,this.password);
  }

}
