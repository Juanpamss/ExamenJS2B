import { TestBed, inject } from '@angular/core/testing';

import { ServicioDesarrolladorasService } from './servicio-desarrolladoras.service';

describe('ServicioDesarrolladorasService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ServicioDesarrolladorasService]
    });
  });

  it('should be created', inject([ServicioDesarrolladorasService], (service: ServicioDesarrolladorasService) => {
    expect(service).toBeTruthy();
  }));
});
