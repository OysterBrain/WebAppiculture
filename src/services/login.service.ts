import { Injectable } from '@angular/core';
import { User } from 'src/models/User';

@Injectable({
    providedIn: 'root'
  })
export class LoginService {

    constructor() { }

    //fonction qui connecte l'utilisateur en insérant un email avec la clé "currentUser"
    connectUser(email,password){
       
        var user = JSON.parse(localStorage.getItem(email))
        if(user){
            if(user._password==password){
                localStorage.setItem("currentUser",email);
                return true;
            }
        }
        return false;
    }

    //fonction qui retourne l'email de l'utilisateur connecté.
    getUserConnected(){
        return localStorage.getItem("currentUser");
    }

    //fonction qui deconnecte un utilisateur en supprimant "currentUser"
    disconnectUser(){
        localStorage.removeItem("currentUser");
    }

}
