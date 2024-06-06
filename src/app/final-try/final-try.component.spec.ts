import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinalTryComponent } from './final-try.component';

describe('FinalTryComponent', () => {
  let component: FinalTryComponent;
  let fixture: ComponentFixture<FinalTryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FinalTryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FinalTryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
