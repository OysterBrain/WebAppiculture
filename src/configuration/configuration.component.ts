import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/services/login.service';
import { ConfigurationService } from 'src/services/configuration.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-configuration',
  templateUrl: './configuration.component.html',
  styleUrls: ['./configuration.component.css']
})
export class ConfigurationComponent implements OnInit {

  public listEnv = [];
  public valueEnv :string;
  public frequency : number;
  public emailUser;
  public error;  
  constructor(private loginService: LoginService, private configurationService : ConfigurationService,private router:Router) { }

  
  ngOnInit() {

    this.emailUser =this.loginService.getUserConnected()
    var conf = this.configurationService.getConfigurationByEmail(this.emailUser);
    if(conf){
      this.listEnv = conf.listEnv;
      this.frequency = conf.freq;
    }
   
  }

  //fonction qui ajoute une valeur dans le table d'environnement
  addEnv(){
    this.listEnv.push(this.valueEnv);
    this.valueEnv="";
  }

  //fonction qui permet de valider la configuration et enregistre toutes les valeurs
  validateConfig(){
    if(this.emailUser&&this.listEnv&&this.frequency){
      this.configurationService.setConfigurationByEmail(this.emailUser,this.listEnv,this.frequency);
      this.router.navigate(["/"]);
    }
    else{
      this.error = "Erreur dans l'ajout d'une configuration";
    }
  }

  //fonction qui permet de supprimer un environnement en fonction de l'index
  deleteEnv(index){
    this.listEnv.splice(index,1);
  }

}
