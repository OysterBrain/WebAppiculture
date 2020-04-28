import { Injectable } from '@angular/core';
import { Rucher } from 'src/models/Rucher';

@Injectable({
    providedIn: 'root'
  })
export class RucherService {

  constructor() { }

  //fonction qui ajoute un rucher 
  addRucher(id,nbRuches,env,freq,coord,date,emailUser){
    var rucher = new Rucher();
    var ruchers = [];
    rucher.id = id;
    rucher.nbRuches = nbRuches;
    rucher.description = env;
    rucher.frequenceVisites = freq;
    rucher.dateCreation = date;
    rucher.coordonnees = coord;
    var allRuchers = this.getAllRuchers(emailUser);
    if(allRuchers){
      ruchers = allRuchers;
    }
    ruchers.push(rucher);
    localStorage.setItem(emailUser+":ruchers",JSON.stringify(ruchers));
  }
 
  //fonction qui retourne un rucher en fonction de son identifiant
  getRucherById(id,emailUser){
    var allRuchers =  JSON.parse(localStorage.getItem(emailUser+":ruchers"));
    return allRuchers.find(function(value){return value._id==id})
  }


  getAllRuchers(emailUser){
    return JSON.parse(localStorage.getItem(emailUser+":ruchers"));
  }
}
