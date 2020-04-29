import { Component, OnInit } from '@angular/core';
import { User } from '../models/User';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-registerUser',
  templateUrl: './registerUser.component.html',
  styleUrls: ['./registerUser.component.css']
})
export class RegisterUserComponent implements OnInit {

  constructor(private userService: UserService) { }
  public email :string;
  public password :string;
  public passwordConfirm : string;
  public error :string;
  
  ngOnInit() {
    
  }

  //fonction appelée lors de la validation 
  onSubmit(){
    if(this.password == this.passwordConfirm && this.email != null){
      if(!this.userService.userInserted(this.email)){
        this.userService.insertNewUser(this.email,this.password);
      }else{
        this.error = "Erreur : email deja existant"; 
      }
    }
    else{
      this.error = "Erreur lors de la saisie"; 
    }
  }
}
