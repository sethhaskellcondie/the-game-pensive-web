import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmolButtonComponent } from './smol-button.component';

describe('SmolButtonComponent', () => {
  let component: SmolButtonComponent;
  let fixture: ComponentFixture<SmolButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SmolButtonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SmolButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
