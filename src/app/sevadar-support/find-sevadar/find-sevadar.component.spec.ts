import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FindSevadarComponent } from './find-sevadar.component';

describe('FindSevadarComponent', () => {
  let component: FindSevadarComponent;
  let fixture: ComponentFixture<FindSevadarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FindSevadarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FindSevadarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
