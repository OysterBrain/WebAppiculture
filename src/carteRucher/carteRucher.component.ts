import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';
import { RucherService } from 'src/services/rucher.service';
import { LoginService } from 'src/services/login.service';
import { Router } from '@angular/router';




@Component({
  selector: 'app-carteRucher',
  templateUrl: './carteRucher.component.html',
  styleUrls: ['./carteRucher.component.css']
})

export class CarteRucherComponent implements OnInit {
  private map;
  //liste des ruchers des coordonnées géographiques
  public listRuchersCoord = [];
  //liste des ruchers sans coordonnées géographiques
  public listRuchersWithoutCoord = []
  private icon = {
    icon: L.icon({
      iconSize: [ 25, 41 ],
      iconAnchor: [ 13, 0 ],
      iconUrl: 'leaflet/marker-icon.png',
      shadowUrl: 'leaflet/marker-shadow.png'
    })
  };
  constructor(private rucherService: RucherService,
              private loginService : LoginService,
              private router : Router){

  }
  ngOnInit() {
    
    this.map = L.map('map').locate({setView: true, maxZoom: 16});
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(this.map);
    this.placeRuchers();
   
  }

  //fonction qui place les ruchers sur la carte 
  placeRuchers(){
    var ruchers = this.rucherService.getAllRuchers(this.loginService.getUserConnected());
    if(ruchers){
      ruchers.forEach(rucher => {
          if(rucher._coordonnees &&rucher._coordonnees.lng && rucher._coordonnees.lat){
            this.listRuchersCoord.push(rucher);
          }
          else{
            this.listRuchersWithoutCoord.push(rucher);
          }
      });
    
    }
    if(this.listRuchersCoord!=undefined && this.listRuchersCoord.length>0){
      this.listRuchersCoord.forEach(rucherCoord => {
        const popupInfo = "<b>Rucher : "+rucherCoord._id+"</b><br>"+ rucherCoord._nbRuches + 'ruches '+ "<br> <button class='visit'>VISITER</button>";
        const marker = L.marker([rucherCoord._coordonnees.lat,rucherCoord._coordonnees.lng],this.icon).addTo(this.map);
        marker.bindPopup(popupInfo).on("popupopen", (a) => {
          var popUp = a.target.getPopup()
          popUp.getElement()
         .querySelector(".visit")
         .addEventListener("click", e => {
           this.goToVisite(rucherCoord._id);
         });
        })  
      });
    }
    
  }

  //fonction qui route vers la page de visite du rucher en incluant l'id du rucher en queryparams
  goToVisite(idRucher){
    this.router.navigate(['/VisiteRucher'],{ queryParams: { idRucher: idRucher }});
  }
}
