/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { RegistraUserService } from './registra-user.service';

describe('RegistraUserService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RegistraUserService]
    });
  });

  it('should ...', inject([RegistraUserService], (service: RegistraUserService) => {
    expect(service).toBeTruthy();
  }));
});
