import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Signal1Component } from './signal1.component';

describe('Signal1Component', () => {
  let component: Signal1Component;
  let fixture: ComponentFixture<Signal1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Signal1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Signal1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
