import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
  })
export class ConfigurationService {
  
  constructor() { }

  getConfigurationByEmail(email){
    return JSON.parse(localStorage.getItem(email+":config"));

  }

  setConfigurationByEmail(email,listEnv,freq){
    localStorage.setItem(email+":config",JSON.stringify({listEnv:listEnv,freq:freq}));
  }

  


}
