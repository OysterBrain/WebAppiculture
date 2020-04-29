import { Component, OnInit } from '@angular/core';
import { RucherService } from 'src/services/rucher.service';
import { LoginService } from 'src/services/login.service';
import { Router } from '@angular/router';
import { VisiteRucherService } from 'src/services/visiteRucher.service';
import { ok } from 'assert';
import { ConfigurationService } from 'src/services/configuration.service';

@Component({
  selector: 'app-listeRuchers',
  templateUrl: './listeRuchers.component.html',
  styleUrls: ['./listeRuchers.component.css']
})
export class ListeRuchersComponent implements OnInit {

 
  public listRuchers;
  private emailUsers;
  private freqConfig
  constructor(private rucherService : RucherService,
    private loginService : LoginService,
    private router : Router,
    private visiteRucherService : VisiteRucherService,
    private configService : ConfigurationService
    ) { }

  ngOnInit() {
    this.emailUsers = this.loginService.getUserConnected();
    this.listRuchers = this.rucherService.getAllRuchers(this.emailUsers);
    this.freqConfig = this.configService.getConfigurationByEmail(this.emailUsers).freq;
    console.log(this.listRuchers);
    console.log(this.nbDaysBtwLatestVisite("deded",this.latestVisite("deded")));
    console.log(this.getFreq("deded")/2);
    console.log(this.nbDaysBtwLatestVisite("deded",this.latestVisite("deded"))>=this.getFreq("deded")/2)
  }

  //fonction qui redirige vers la page de visite du rucher en fonction de son id
  goToVisite(idRucher){
    this.router.navigate(['/VisiteRucher'],{ queryParams: { idRucher: idRucher }});
  }

  //renvoi le nombre de jour entre deux dates
  nbDaysBtwLatestVisite(idRucher,latestVisite){
    var dateDay = new Date();
    var latest = new Date(latestVisite);
    var diff = Math.abs(dateDay.getTime() - latest.getTime());
    var diffDays = Math.ceil(diff / (1000 * 3600 * 24)); 
   

    return 2;
  }
  //fonction qui retourne la date de la derniere visite
  latestVisite(idRucher){
    return this.visiteRucherService.getLatestVisite(idRucher,this.emailUsers); 
  }
  //fonction qui retourne la freq du rucher ou sinon la freq du en configuration
  getFreq(idRucher){
    return this.rucherService.getFreqByIdRucher(idRucher,this.emailUsers)?this.rucherService.getFreqByIdRucher(idRucher,this.emailUsers):this.freqConfig;
  }

}
