import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrontCircleSpinComponent } from './front-circle-spin.component';

describe('FrontCircleSpinComponent', () => {
  let component: FrontCircleSpinComponent;
  let fixture: ComponentFixture<FrontCircleSpinComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FrontCircleSpinComponent]
    });
    fixture = TestBed.createComponent(FrontCircleSpinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
