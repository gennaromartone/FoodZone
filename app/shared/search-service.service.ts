import { Injectable } from '@angular/core';
import { Headers, Response, Http, RequestOptions } from '@angular/http';
import { Azienda } from './azienda';
import { AziendaType } from './aziendaType';
import { BackendService } from './backend.service';

import {Observable} from 'rxjs/Rx';

import 'rxjs/add/operator/toPromise';

// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class SearchServiceService {

  constructor(private http: Http, private backend:BackendService) { }
  private heroesUrl = "https://api.backendless.com/v1/data/Azienda?where=Nome='Enna'";
  private resultSet : Promise<Azienda[]>;


  // Fetch all existing Aziendas


  getAziendeRisultatiInRadius():void{

    this.backend.getAziendeRisultati(this.backend.getRadius(52.3731,4.8922,null,null));

  }

  getAziendeType():Promise<AziendaType[]>{

    return this.backend.getAziendeType();

  }

  tornaRisultati():Promise<Azienda[]> {

    return this.backend.tornaRisultati();
    //return this.resultSet;
  }  

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

}
