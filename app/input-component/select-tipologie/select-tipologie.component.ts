import { Component, OnInit } from '@angular/core';
import { AziendaType } from '../../shared/aziendaType';
import { SearchServiceService } from '../../shared'

@Component({
  selector: 'app-select-tipologie',
  templateUrl: './select-tipologie.component.html',
  styleUrls: ['./select-tipologie.component.css']
})
export class SelectTipologieComponent implements OnInit {

  aziendaType:AziendaType[];

  constructor(private searchService:SearchServiceService) { }

  ngOnInit() {
      this.searchService.getAziendeType().then(result => this.aziendaType = result);
  }

}
