import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LoginService } from 'src/services/login.service';
import { VisiteRucherService } from 'src/services/visiteRucher.service';
import { RucherService } from 'src/services/rucher.service';
import { Visite } from 'src/models/Visite';


@Component({
  selector: 'app-visiteRucher',
  templateUrl: './visiteRucher.component.html',
  styleUrls: ['./visiteRucher.component.css']
})
export class VisiteRucherComponent implements OnInit {
  public id;
  public emailUser;
  public visites = []
  public rucher;
  public nbHausse;
  public dateNewVisite = new Date().toISOString().split('T')[0];;
  public dynDev;
  public food;
  public newNbHaussesRec;
  public firstDateVisite;
  public long;
  public lat;
  public observations;
  public error;
  constructor( private route: ActivatedRoute, 
               private loginService: LoginService,
               private visiteRucherService: VisiteRucherService,
               private rucherService : RucherService) { }

  async ngOnInit() {
    await this.route.queryParams
    .subscribe(params => {
      this.id= params.idRucher 
    });
    console.log(localStorage);
    this.emailUser = this.loginService.getUserConnected();
    this.rucher = this.rucherService.getRucherById(this.id,this.emailUser);
    this.long = this.rucher._coordonnees.lng;
    this.lat = this.rucher._coordonnees.lat;
    this.visites = this.visiteRucherService.getVisitesByIdRucher(this.id,this.emailUser);
    
    this.nbHausse = this.visiteRucherService.getNbHausseRecoltee(this.id,this.emailUser);
    this.firstDateVisite = this.visiteRucherService.getFirstDate(this.id,this.emailUser);
    
  }

  validateNewVisite(){
    var visite = new Visite();
    
    visite.date = new Date(this.dateNewVisite);
    visite.dynamique = this.dynDev;
    visite.nbHaussesRecoltees = this.newNbHaussesRec;
    visite.nourriture= this.food;
    visite.observations = this.observations;
    if(visite.date && visite.dynamique && visite.nbHaussesRecoltees &&visite.nourriture && visite.observations){
      this.visiteRucherService.addVisite(this.id,this.emailUser,visite);
      window.location.reload();
    }
    else{
      this.error = "ERREUR dans la saisie d'une nouvelle visite";
    }


  }
   
}
 
 
