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
    rucher.visites = [];
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

  //fonction qui retourne tous les ruchers d'un utilisateur
  getAllRuchers(emailUser){
    return JSON.parse(localStorage.getItem(emailUser+":ruchers"));
  }

  //fonction qui supprime un rucher en fonction de son index dans le tableau de rucher
  deleteRucher(emailUser,indexRucher){
    var ruchers = this.getAllRuchers(emailUser);
    ruchers.splice(indexRucher,1);
    localStorage.setItem(emailUser+":ruchers",JSON.stringify(ruchers));
  }
}
