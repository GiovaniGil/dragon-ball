import { PersonagensModule } from './personagens.module';

describe('PersonagensModule', () => {
  let personagensModule: PersonagensModule;

  beforeEach(() => {
    personagensModule = new PersonagensModule();
  });

  it('should create an instance', () => {
    expect(personagensModule).toBeTruthy();
  });
});
