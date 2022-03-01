import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddGuidanceComponent } from './add-guidance.component';

describe('AddGuidanceComponent', () => {
  let component: AddGuidanceComponent;
  let fixture: ComponentFixture<AddGuidanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddGuidanceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddGuidanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
