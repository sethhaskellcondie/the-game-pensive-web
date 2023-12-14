import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InlineEditableTextComponent } from './inline-editable-text.component';

describe('InlineEditableTextComponent', () => {
  let component: InlineEditableTextComponent;
  let fixture: ComponentFixture<InlineEditableTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InlineEditableTextComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InlineEditableTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
