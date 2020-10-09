import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanetasListComponent } from './planetas-list.component';

describe('PlanetasListComponent', () => {
  let component: PlanetasListComponent;
  let fixture: ComponentFixture<PlanetasListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlanetasListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanetasListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
