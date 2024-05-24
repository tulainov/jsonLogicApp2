import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TreeAndLogicComponent } from './tree-and-logic.component';

describe('TreeAndLogicComponent', () => {
  let component: TreeAndLogicComponent;
  let fixture: ComponentFixture<TreeAndLogicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TreeAndLogicComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TreeAndLogicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
