import { Injectable } from '@angular/core';
import { Headers, Response, Http, RequestOptions } from '@angular/http';
import { Azienda } from './azienda';

import {Observable} from 'rxjs/Rx';

import 'rxjs/add/operator/toPromise';

// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class Backendless {

  constructor(private http: Http) { }
  private aziendaUrl = 'https://api.backendless.com/v1/data/Azienda';
  private resultSet : Promise<Azienda[]>;

  getRadius(lat:number, lang:number, center:Number, zoom:Number) : String {

    let latplus = lat + 0.2000; // Lat >= 4.8911'
    let latminus = lat - 0.2000;
    let langplus = lat + 0.2000;
    let langminus = lat - 0.2000;

    var wherecondition = '?where=';

    return this.aziendaUrl.concat(wherecondition).concat('Lang <= '+langplus+' and Lang >= '+langminus+' AND Lat <= '+latplus+' and Lat >= '+latminus);

  }

  private getQueryString(options) : String {

    var wherecondition = '?where=';

    return this.aziendaUrl.concat(wherecondition);
  }

  // Fetch all existing Aziendas
  getAziendas() : Observable<Azienda[]> {

     let opt: RequestOptions
     let myHeaders: Headers = new Headers
     myHeaders.set('application-id','566EA398-866D-50D2-FFC2-C19B1AA74E00');
     myHeaders.append('secret-key','E1D4F6E4-A5CC-FD4D-FF19-EE222B97B800');
     myHeaders.append('Content-type', 'application/json')

     opt = new RequestOptions({
      headers: myHeaders
     })
         // ...using get request
         return this.http.get(this.aziendaUrl,opt)
                        // ...and calling .json() on the response to return data
                         .map((res:Response) => res.json().data as Azienda[])
                         //...errors if any
                         .catch((error:any) => Observable.throw(error.json().error || 'Server error'));

     }

 getAziende(url): Promise<Azienda[]> {
//getAziende(url): void {
  let opt2: RequestOptions
     let myHeaders2: Headers = new Headers
     myHeaders2.set('application-id', "566EA398-866D-50D2-FFC2-C19B1AA74E00");
     myHeaders2.append('secret-key', "E1D4F6E4-A5CC-FD4D-FF19-EE222B97B800");
     myHeaders2.append('Content-type', 'application/json')

     opt2 = new RequestOptions({
      headers: myHeaders2
     })

     this.aziendaUrl.concat();

    return  this.http.get(url,opt2)
             .toPromise()
             .then(response => response.json().data as Azienda[])
             .catch(this.handleError);
  }

  tornaRisultati():Promise<Azienda[]> {

    return this.resultSet;
  }  

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

}
