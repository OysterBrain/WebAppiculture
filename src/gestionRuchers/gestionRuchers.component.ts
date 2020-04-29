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

  deleteRucher(indexRucher){
    this.rucherService.deleteRucher(this.emailUsers,indexRucher);
    window.location.reload();
  }

  goToEditRucher(id){
    this.router.navigate(["/Rucher"], {queryParams: { id: id }});
  }
}
