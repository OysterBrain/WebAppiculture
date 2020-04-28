import { Component, OnInit } from '@angular/core';

import * as L from 'leaflet';
import { RucherService } from 'src/services/rucher.service';
import { LoginService } from 'src/services/login.service';
@Component({
  selector: 'app-carteRucher',
  templateUrl: './carteRucher.component.html',
  styleUrls: ['./carteRucher.component.css']
})

export class CarteRucherComponent implements OnInit {


  constructor(private rucherService: RucherService,
              private loginService : LoginService){

  }
  ngOnInit() {
    const map = L.map('map').locate({setView: true, maxZoom: 16});

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
    this.placeRuchers();
  }

  placeRuchers(){
    var ruchers = this.rucherService.getAllRuchers(this.loginService.getUserConnected());
    console.log(ruchers);
  }
}
