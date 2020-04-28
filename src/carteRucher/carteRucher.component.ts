import { Component, OnInit } from '@angular/core';
declare let L;

@Component({
  selector: 'app-carteRucher',
  templateUrl: './carteRucher.component.html',
  styleUrls: ['./carteRucher.component.css']
})
export class CarteRucherComponent implements OnInit {

  ngOnInit() {
    const map = L.map('map').setView([51.505, -0.09], 13);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
}
}
