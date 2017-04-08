import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  planetsList: any[] = [];
  selectedPlanet: any;

  constructor() { }

  ngOnInit() {
    this.selectedPlanet = {};
    this.planetsList = [];
    this.planetsList.push({name: 'mercury', description: 'first one'});
    this.planetsList.push({name: 'mars', description: 'second one'});
    this.planetsList.push({name: 'earth', description: 'our planet'});
  }

  showPlanetInfo(selplanet) {
    this.selectedPlanet = selplanet;
  }
}
