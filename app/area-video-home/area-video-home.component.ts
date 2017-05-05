import { Component, OnInit } from '@angular/core';
import { SearchServiceService } from '../shared/search-service.service';

import { Router }          from '@angular/router';

@Component({
  selector: 'app-area-video-home',
  templateUrl: './area-video-home.component.html',
  styleUrls: ['./area-video-home.component.css']
})
export class AreaVideoHomeComponent implements OnInit {

  constructor(private searchService: SearchServiceService,private router:Router) { }

  ngOnInit() {

  }

  getAziende(value:any):void {
    console.log('Questi i valori del form: '+value);
   this.searchService.getAziendeRisultatiInRadius(); 
    this.completeRegistration();
  }

  logForm(value: any) {
    console.log('Questi i valori del form: '+value);
  }

  completeRegistration(): void {
   // this.router.navigate(['/detail', this.selectedHero.id]);
   // this.router.navigate(['/become-a-seller', this.user.objectId]);
    this.router.navigate(['/risultati']);
  }

}
