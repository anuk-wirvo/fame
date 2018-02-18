import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileAuthStep2Component } from './mobile-auth-step-2.component';

describe('MobileAuthStep2Component', () => {
  let component: MobileAuthStep2Component;
  let fixture: ComponentFixture<MobileAuthStep2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MobileAuthStep2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MobileAuthStep2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
