import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionMobilesComponent } from './gestion-mobiles.component';

describe('GestionMobilesComponent', () => {
  let component: GestionMobilesComponent;
  let fixture: ComponentFixture<GestionMobilesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GestionMobilesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionMobilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
