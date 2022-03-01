import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewGuidanceComponent } from './view-guidance.component';

describe('ViewGuidanceComponent', () => {
  let component: ViewGuidanceComponent;
  let fixture: ComponentFixture<ViewGuidanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewGuidanceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewGuidanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
