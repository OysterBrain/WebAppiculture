import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/services/login.service';
import { User } from 'src/models/User';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {

  
  constructor(private router: Router, private loginService : LoginService) { }

  ngOnInit() {
    
  }


  //fonction qui permet de router vers une url 
  goTo(url){
    this.router.navigate([url]);
  }
  
  //fonction declenchée lorsque le bouton se deconnecter est cliqué et appel disconnectUser de LoginService
  deconnect(){
    this.loginService.disconnectUser();
    this.router.navigate(["/Login"]);
  }
}
