import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
  })
export class ConfigurationService {
  
  constructor() { }

  //fonctioin qui renvoi la configuration en fonction de l'email
  getConfigurationByEmail(email){
    var config = JSON.parse(localStorage.getItem(email+":config"));
    if(config){
      return config
    }
    return null

  }
  //fonction qui ajoute un configuration
  setConfigurationByEmail(email,listEnv,freq){
    localStorage.setItem(email+":config",JSON.stringify({listEnv:listEnv,freq:freq}));
  }

  


}
