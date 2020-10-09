import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonagensListComponent } from './personagens-list.component';

describe('PersonagensListComponent', () => {
  let component: PersonagensListComponent;
  let fixture: ComponentFixture<PersonagensListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonagensListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonagensListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
