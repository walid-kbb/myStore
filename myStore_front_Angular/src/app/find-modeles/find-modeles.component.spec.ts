import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FindModelesComponent } from './find-modeles.component';

describe('FindModelesComponent', () => {
  let component: FindModelesComponent;
  let fixture: ComponentFixture<FindModelesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FindModelesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FindModelesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
