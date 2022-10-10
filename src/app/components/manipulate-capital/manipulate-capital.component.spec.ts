import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManipulateCapitalComponent } from './manipulate-capital.component';

describe('ManipulateCapitalComponent', () => {
  let component: ManipulateCapitalComponent;
  let fixture: ComponentFixture<ManipulateCapitalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManipulateCapitalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManipulateCapitalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
