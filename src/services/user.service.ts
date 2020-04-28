import { Injectable } from '@angular/core';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  //fonction qui insere un nouvel utilisateur
  insertNewUser(email, password){
    var user = new User();
    user.email= email;
    user.password = password;
    localStorage.setItem(email,JSON.stringify(user));
  }

  //fonction qui retourne un booleen en fonction si l'email de l'utilisateur existe
  userInserted(email){
    return localStorage.getItem(email);
  }
}
