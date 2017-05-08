import { Component, OnInit } from '@angular/core';
//import { Location }          from '@angular/common';
import { Router }          from '@angular/router';
import {RegistraUserService} from './../registra-user.service';

import {User} from './user.interface';

@Component({
  moduleId: 'form-registration',
  selector: 'app-form-registration',
  templateUrl: './form-registration.component.html',
  styleUrls: ['./form-registration.component.css']
})
export class FormRegistrationComponent implements OnInit {

  public user: User;

  giorni = ['Giorno', '01',
            '02', '03','04','05','06','07','08','09','10','11','12','13','14',
            '15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31'];

  mesi = [
            { value: 'M', display: 'Mese' },
            { value: '01', display: 'Gennaio' },
            { value: '02', display: 'Febbraio' },
            { value: '03', display: 'Marzo' },
            { value: '04', display: 'Aprile' },
            { value: '05', display: 'Maggio' },
            { value: '06', display: 'Giugno' },
            { value: '07', display: 'Luglio' },
            { value: '08', display: 'Agosto' },
            { value: '09', display: 'Settembre' },
            { value: '10', display: 'Ottobre' },
            { value: '11', display: 'Novembre' },
            { value: '12', display: 'Dicembre' }];     

  anni = ['Anno', '1999',
            '1998', '1997','1996','1995','1994','1993','1992','1991','1990','1989','1988','1987','1986',
            '1985','1984','1983','1982','1981','1980','1979','1978','1977','1976','1975','1974','1973','1972','1971','1970','1969',
            '1968', '1967','1966','1965','1964','1963','1962','1961','1960','1959','1958','1957','1956',];               

  constructor(private registraUserService:RegistraUserService, /* private location: Location */ private router:Router) { }

  ngOnInit() {



      // initialize model here
        this.user = {
            nome: '',
            cognome: '',
            email: '',
            password: '',
            giorno: this.giorni[0],
            mese: this.mesi[0].value,
            anno: this.anni[0],
            promotionalConsens: false,
            objectId: ''
        }
  }

  save(model: User, isValid: boolean) {
        // call API to save customer
        console.log(model, isValid);

        this.registraUserService.create(model).then(() => this.completeRegistration());;
    }

 /*  goBack(): void {
    this.location.back();
  } */

  completeRegistration(): void {
   // this.router.navigate(['/detail', this.selectedHero.id]);
   // this.router.navigate(['/become-a-seller', this.user.objectId]);
    this.router.navigate(['/become-a-seller']);
  }
}
