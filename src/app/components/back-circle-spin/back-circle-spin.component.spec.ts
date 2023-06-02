import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackCircleSpinComponent } from './back-circle-spin.component';

describe('BackCircleSpinComponent', () => {
  let component: BackCircleSpinComponent;
  let fixture: ComponentFixture<BackCircleSpinComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BackCircleSpinComponent]
    });
    fixture = TestBed.createComponent(BackCircleSpinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
