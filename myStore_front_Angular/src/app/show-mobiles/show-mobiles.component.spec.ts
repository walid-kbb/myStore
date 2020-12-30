import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowMobilesComponent } from './show-mobiles.component';

describe('ShowMobilesComponent', () => {
  let component: ShowMobilesComponent;
  let fixture: ComponentFixture<ShowMobilesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowMobilesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowMobilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
