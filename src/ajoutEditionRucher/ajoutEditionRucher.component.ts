import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/services/login.service';
import { ConfigurationService } from 'src/services/configuration.service';
import { RucherService } from 'src/services/rucher.service';
import { ActivatedRoute, Router } from '@angular/router';
import { VisiteRucherService } from 'src/services/visiteRucher.service';

@Component({
  selector: 'app-ajoutEditionRucher',
  templateUrl: './ajoutEditionRucher.component.html',
  styleUrls: ['./ajoutEditionRucher.component.css']
})
export class AjoutEditionRucherComponent implements OnInit {

  public id :string;
  public nbRuches = 0;
  public listEnv : [];
  public descr :string;
  public coordGeo:any;
  public dateCrea :Date;
  public listVisite:[];
  public freqVisite : number;
  public modif = false;
  public error;
  public emailUser = this.loginService.getUserConnected()
  constructor(private loginService: LoginService,
              private configurationService: ConfigurationService,
              private rucherService : RucherService,
              private route: ActivatedRoute,
              private router: Router,
              private visiteRucherService: VisiteRucherService) { }


  async ngOnInit() {
    //on associe a identifiant le query params si il s'agit d'une modification
    await this.route.queryParams
              .subscribe(params => {
                this.id= params.id 
              });
    if(this.id){
      this.modif =true;
      var rucher = this.rucherService.getRucherById(this.id,this.emailUser)
      if(rucher){
        this.descr=rucher._description;
        this.nbRuches= rucher._nbRuches;
        this.listVisite = this.visiteRucherService.getVisitesByIdRucher(this.id,this.emailUser);
      }
    }

   
    var conf = this.configurationService.getConfigurationByEmail(this.emailUser);
    if(conf){
      this.freqVisite = conf.freq;
      this.listEnv = conf.listEnv;
    }
    await this.getPosition().then(data=>this.coordGeo = {lng : data.lng , lat : data.lat} );

  }

  //fonction qui retourne sous forme de Promise la position de l'utilisateur
  getPosition(): Promise<any>
  {
    return new Promise((resolve, reject) => {

      navigator.geolocation.getCurrentPosition(resp => {

          resolve({lng: resp.coords.longitude, lat: resp.coords.latitude});
        },
        err => {
          
        });
    });

  }

  //fonction qui valide l'ajout ou la modification d'un rucher
  validate(){
   
    if(this.id && this.nbRuches && this.descr && this.freqVisite  && this.emailUser){
      this.dateCrea = new Date();
      this.rucherService.addRucher(this.id,this.nbRuches,this.descr,this.freqVisite,this.coordGeo,this.dateCrea,this.emailUser);
      this.router.navigate(['/CarteRuchers']);
    }else{
      this.error="Erreur dans les informations afin d'ajouter une nouveau rucher";
    }
    
  }

}
