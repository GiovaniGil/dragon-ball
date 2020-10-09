import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanetasCardComponent } from './planetas-card.component';

describe('PlanetasCardComponent', () => {
  let component: PlanetasCardComponent;
  let fixture: ComponentFixture<PlanetasCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlanetasCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanetasCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
