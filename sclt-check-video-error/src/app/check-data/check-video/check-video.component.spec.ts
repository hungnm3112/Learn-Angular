import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckVideoComponent } from './check-video.component';

describe('CheckVideoComponent', () => {
  let component: CheckVideoComponent;
  let fixture: ComponentFixture<CheckVideoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckVideoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
