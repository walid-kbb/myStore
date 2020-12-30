import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionMarquesComponent } from './gestion-marques.component';

describe('GestionMarquesComponent', () => {
  let component: GestionMarquesComponent;
  let fixture: ComponentFixture<GestionMarquesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GestionMarquesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionMarquesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
