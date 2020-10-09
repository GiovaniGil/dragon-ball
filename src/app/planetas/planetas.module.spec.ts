import { PlanetasModule } from './planetas.module';

describe('PlanetasModule', () => {
  let planetasModule: PlanetasModule;

  beforeEach(() => {
    planetasModule = new PlanetasModule();
  });

  it('should create an instance', () => {
    expect(planetasModule).toBeTruthy();
  });
});
