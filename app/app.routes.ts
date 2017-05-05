import { Component } from '@angular/core';
import { AreaVideoHomeComponent } from './area-video-home';
import { BecomeSellerComponent } from './become-seller';
import { ListaRisultatiComponent } from './lista-risultati';


export const appRoutesProviders = [
  { path: '', component: AreaVideoHomeComponent },
  { path: 'home', component: AreaVideoHomeComponent },
 // { path: 'risultati/:id:/anid', component: ListaRisultatiComponent },
  { path: 'become-a-seller', component: BecomeSellerComponent },
  { path: 'risultati/:id:/anid', component: ListaRisultatiComponent },
  { path: 'risultati', component: ListaRisultatiComponent }
];
