import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSevadarComponent } from './add-sevadar.component';

describe('AddSevadarComponent', () => {
  let component: AddSevadarComponent;
  let fixture: ComponentFixture<AddSevadarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddSevadarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSevadarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
