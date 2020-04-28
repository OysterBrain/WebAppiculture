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

  //fonction qui retourne l'utilisateur en fonction de l'email de l'utilisateur 
  userInserted(email){
    return JSON.parse(localStorage.getItem(email));
  }
}
