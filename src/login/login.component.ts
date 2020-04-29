import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';
import { User } from '../models/User';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private loginService : LoginService,private router: Router) { }
  
  public email :string;
  public password :string;
  public error :string;
  ngOnInit() {
    if(this.loginService.getUserConnected()){
      this.router.navigate(['']);
    }
  }

  //fonction qui est declenché lors du submit pour connecter l'utilisateur
  onSubmit(){
      if(this.loginService.connectUser(this.email,this.password)){
        this.router.navigate(['']);
      }else{
        this.error = "Echec de la connexion"; 
      }
  }

  //fonction qui redirige vers s'enregister
  goToRegister(){
    this.router.navigate(['/Register']);
  }
  


}
