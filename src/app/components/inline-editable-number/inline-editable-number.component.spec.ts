import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InlineEditableNumberComponent } from './inline-editable-number.component';

describe('InlineEditableNumberComponent', () => {
  let component: InlineEditableNumberComponent;
  let fixture: ComponentFixture<InlineEditableNumberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InlineEditableNumberComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InlineEditableNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
