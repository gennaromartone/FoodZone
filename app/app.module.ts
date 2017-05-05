import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { AreaVideoHomeComponent } from './area-video-home/area-video-home.component';
import { FormRegistrationComponent } from './form-registration/form-registration.component';
import { PasswordStrengthBarComponent } from './password-strength-bar/password-strength-bar.component';

import {RegistraUserService} from './registra-user.service';
import { BecomeSellerComponent } from './become-seller/become-seller.component'

import { appRoutesProviders } from './app.routes';
import { ListaRisultatiComponent } from './lista-risultati/lista-risultati.component'; 
import { SearchServiceService } from './shared/search-service.service';
import { BackendService } from './shared/backend.service';
import { SelectTipologieComponent } from './input-component/select-tipologie/select-tipologie.component'

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    AreaVideoHomeComponent,
    FormRegistrationComponent,
    PasswordStrengthBarComponent,
    BecomeSellerComponent,
    ListaRisultatiComponent,
    SelectTipologieComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
   RouterModule.forRoot(appRoutesProviders)
  ],
  providers: [RegistraUserService,SearchServiceService,BackendService],
  bootstrap: [AppComponent]
})
export class AppModule { }
