import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Signal2Component } from './signal2.component';

describe('Signal2Component', () => {
  let component: Signal2Component;
  let fixture: ComponentFixture<Signal2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [Signal2Component]
})
    .compileComponents();

    fixture = TestBed.createComponent(Signal2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
