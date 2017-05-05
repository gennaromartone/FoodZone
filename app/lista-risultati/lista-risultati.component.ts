import { Component, OnInit } from '@angular/core';
import { SearchServiceService } from '../shared/search-service.service';
import { Azienda } from '../shared/azienda';
import {Observable} from 'rxjs/Rx';

declare var jsMAIN: any;

@Component({
  selector: 'app-lista-risultati',
  templateUrl: './lista-risultati.component.html',
  styleUrls: ['./lista-risultati.component.css']
})
export class ListaRisultatiComponent implements OnInit {

  shaObj: any;
  aziende:Azienda[];

  constructor(private searchService: SearchServiceService) {

  }

  value: Promise<Azienda[]>;

  logForm(value: any) {
    this.value = value;
  }

  ngOnInit() {
    this.shaObj = new jsMAIN();
    this.shaObj.initMap()
   
    this.searchService.tornaRisultati().then(aziendeRet => this.aziende = aziendeRet ).then( aziendeRet => console.log('Questi i valori di azienda: '+JSON.stringify(aziendeRet)));
     this.searchService.tornaRisultati().then(aziendeRet => this.shaObj.createMarkers(aziendeRet));//this.aziende = aziende);
    console.log('Questi i valori di azienda: '+this.aziende);
  ;
//this.heroService.getHeroes().then(heroes => this.heroes = heroes);

  }

  toggleBounce(azienda: Azienda): void {
    this.shaObj.toggleBounce(azienda.Nome);
  }

}
