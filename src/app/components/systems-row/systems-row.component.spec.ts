import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SystemsRowComponent } from './systems-row.component';

describe('SystemsRowComponent', () => {
  let component: SystemsRowComponent;
  let fixture: ComponentFixture<SystemsRowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SystemsRowComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SystemsRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
