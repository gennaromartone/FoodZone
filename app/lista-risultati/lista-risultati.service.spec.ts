/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ListaRisultatiService } from './lista-risultati.service';

describe('Service: ListaRisultati', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ListaRisultatiService]
    });
  });

  it('should ...', inject([ListaRisultatiService], (service: ListaRisultatiService) => {
    expect(service).toBeTruthy();
  }));
});
