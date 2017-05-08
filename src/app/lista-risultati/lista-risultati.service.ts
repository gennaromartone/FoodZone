import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { ListaRisultati } from './lista-risultati';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class ListaRisultatiService {

  //private heroesUrl = 'app/heroes';  // URL to web api https://api.backendless.com/v1/data/Azienda
  private heroesUrl = 'https://api.backendless.com/v1/data/Azienda';

  constructor(private http: Http) { }

  getHeroes(): Promise<ListaRisultati[]> {
    return this.http.get(this.heroesUrl)
             .toPromise()
             .then(response => response.json().data as ListaRisultati[])
             .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

}
