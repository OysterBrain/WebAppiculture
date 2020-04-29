import { Injectable } from '@angular/core';
import { RucherService } from './rucher.service';

@Injectable({
    providedIn: 'root'
  })
export class VisiteRucherService {

  constructor(private rucherService : RucherService) { }

  //Renvoi un tableau de visite en fonction de l'id du ruchet et de l'email de l'utilisateur
  getVisitesByIdRucher(idRucher,emailUser){
    var ruchers = this.rucherService.getRucherById(idRucher,emailUser);
    if(ruchers){
      
      return ruchers._visites;
    }
  }

  //fonction qui renvoi le nombre de hausse recoltés par rucher
  getNbHausseRecoltee(idRucher,emailUser){
    var visites = this.getVisitesByIdRucher(idRucher,emailUser);
    var nbH=0;
    if(visites){
      visites.forEach(visite => {
        nbH += visite._nbHaussesRecoltees;
      });
    }
    return nbH;
  }

  //fonction qui renvoi la premiere date d'un rucher 
  getFirstDate(idRucher,emailUser){
    var visites = this.getVisitesByIdRucher(idRucher,emailUser);
    var first=new Date();
    if(!visites){
      return null
    }else if(visites.length>0){
      visites.forEach(visite => {
        if(visite._date<first){
          first = visite._date;
        }
      });
      return first;
    }
    return null
    
  }

  //fonction qui ajoute une visite à un rucher 
  addVisite(idRucher,emailUser,visite){
    var ruchers = this.rucherService.getAllRuchers(emailUser);
    var indexRucher = ruchers.findIndex(rucher=> rucher._id == idRucher);
    ruchers[indexRucher]._visites.push(visite);
    localStorage.setItem(emailUser+":ruchers",JSON.stringify(ruchers));
  }
  // fonction qui renvois la derniere date de visite
  getLatestVisite(idRucher,emailUser){
    var visites = this.getVisitesByIdRucher(idRucher,emailUser);
    var latest;
    if(!visites){
      return null
    }else if(visites.length>0){
      latest = visites[0]._date ;
      visites.forEach(visite => {
        if(visite._date>latest){
          latest = visite._date;
        }
      });
      return latest;
    }
    return null
  }

  

}
