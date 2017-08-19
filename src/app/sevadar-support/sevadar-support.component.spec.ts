import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SevadarSupportComponent } from './sevadar-support.component';

describe('SevadarSupportComponent', () => {
  let component: SevadarSupportComponent;
  let fixture: ComponentFixture<SevadarSupportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SevadarSupportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SevadarSupportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
