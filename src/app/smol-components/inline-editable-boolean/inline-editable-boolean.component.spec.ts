import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InlineEditableBooleanComponent } from './inline-editable-boolean.component';

describe('InlineEditableBooleanComponent', () => {
  let component: InlineEditableBooleanComponent;
  let fixture: ComponentFixture<InlineEditableBooleanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InlineEditableBooleanComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InlineEditableBooleanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
