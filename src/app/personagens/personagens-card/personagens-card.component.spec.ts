import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonagensCardComponent } from './personagens-card.component';

describe('PersonagensCardComponent', () => {
  let component: PersonagensCardComponent;
  let fixture: ComponentFixture<PersonagensCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonagensCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonagensCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
