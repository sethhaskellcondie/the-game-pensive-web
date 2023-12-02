import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SystemsPageComponent } from './systems-page.component';

describe('SystemsPageComponent', () => {
  let component: SystemsPageComponent;
  let fixture: ComponentFixture<SystemsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SystemsPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SystemsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
