import { TestBed, inject } from '@angular/core/testing';

import { EmpleadoApiService } from './empleado-api.service';

describe('EmpleadoApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EmpleadoApiService]
    });
  });

  it('should be created', inject([EmpleadoApiService], (service: EmpleadoApiService) => {
    expect(service).toBeTruthy();
  }));
});
