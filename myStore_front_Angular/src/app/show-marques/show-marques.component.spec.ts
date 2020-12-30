import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowMarquesComponent } from './show-marques.component';

describe('ShowMarquesComponent', () => {
  let component: ShowMarquesComponent;
  let fixture: ComponentFixture<ShowMarquesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowMarquesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowMarquesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
