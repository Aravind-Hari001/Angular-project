import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManipulateEmployeeComponent } from './manipulate-employee.component';

describe('ManipulateEmployeeComponent', () => {
  let component: ManipulateEmployeeComponent;
  let fixture: ComponentFixture<ManipulateEmployeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManipulateEmployeeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManipulateEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
