import { TestBed } from '@angular/core/testing';

import { CotizacionDivisasService } from './cotizacion-divisas.service';

describe('CotizacionDivisasService', () => {
  let service: CotizacionDivisasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CotizacionDivisasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
