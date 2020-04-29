import { Component, OnInit } from '@angular/core';
import { RucherService } from 'src/services/rucher.service';
import { LoginService } from 'src/services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gestionRuchers',
  templateUrl: './gestionRuchers.component.html',
  styleUrls: ['./gestionRuchers.component.css']
})
export class GestionRuchersComponent implements OnInit {

  public listRuchers;
  private emailUsers;

  constructor(private rucherService : RucherService,
    private loginService : LoginService,
    private router : Router) { }

  ngOnInit() {
    this.emailUsers = this.loginService.getUserConnected();
    this.listRuchers = this.rucherService.getAllRuchers(this.emailUsers);

  }

  //fonction qui appelle le service rucher pour supprimer un rucher en fonction de son index
  //déclenché lors du click
  deleteRucher(indexRucher){
    this.rucherService.deleteRucher(this.emailUsers,indexRucher);
    window.location.reload();
  }
  //fonction qui redirige vers la page rucher de l'id du rucher en parametre
  goToEditRucher(id){
    this.router.navigate(["/Rucher"], {queryParams: { id: id }});
  }

  //fonction qui redirige vers la page rucher 
  goToAdd(){
    this.router.navigate(["/Rucher"]);
  }
}
