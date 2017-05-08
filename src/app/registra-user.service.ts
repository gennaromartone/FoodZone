import { Injectable } from '@angular/core';
import { Headers, Response, Http, RequestOptions } from '@angular/http';

import {User} from './form-registration/user.interface'

import 'rxjs/add/operator/toPromise';

@Injectable()
export class RegistraUserService {

  constructor(private http:Http) { }

  private heroesUrl = 'https://api.backendless.com/v1/data/Users';


  create(user:User): Promise<User> {

     let opt: RequestOptions
     let myHeaders: Headers = new Headers
     myHeaders.set('application-id', "566EA398-866D-50D2-FFC2-C19B1AA74E00");
     myHeaders.append('secret-key', "E1D4F6E4-A5CC-FD4D-FF19-EE222B97B800");
     myHeaders.append('Content-type', 'application/json')

     opt = new RequestOptions({
      headers: myHeaders
     })

    return this.http
      .post(this.heroesUrl, JSON.stringify(user), opt)
      .toPromise()
      .then(res => res.json().data)
      .catch(this.handleError);
  }

  getUsers(): Promise<User[]> {

     let opt2: RequestOptions
     let myHeaders2: Headers = new Headers
     myHeaders2.set('application-id', "566EA398-866D-50D2-FFC2-C19B1AA74E00");
     myHeaders2.append('secret-key', "E1D4F6E4-A5CC-FD4D-FF19-EE222B97B800");
     myHeaders2.append('Content-type', 'application/json')

     opt2 = new RequestOptions({
      headers: myHeaders2
     })


    return this.http.get(this.heroesUrl, opt2)
               .toPromise()
               .then(response => response.json().data as User[])
               .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

}
