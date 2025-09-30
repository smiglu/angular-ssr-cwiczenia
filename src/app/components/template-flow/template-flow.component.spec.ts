import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateFlowComponent } from './template-flow.component';

describe('TemplateFlowComponent', () => {
  let component: TemplateFlowComponent;
  let fixture: ComponentFixture<TemplateFlowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [TemplateFlowComponent]
})
    .compileComponents();

    fixture = TestBed.createComponent(TemplateFlowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
