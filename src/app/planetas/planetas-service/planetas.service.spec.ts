import { TestBed, inject } from '@angular/core/testing';

import { PlanetasService } from './planetas.service';

describe('PlanetasService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PlanetasService]
    });
  });

  it('should be created', inject([PlanetasService], (service: PlanetasService) => {
    expect(service).toBeTruthy();
  }));
});
