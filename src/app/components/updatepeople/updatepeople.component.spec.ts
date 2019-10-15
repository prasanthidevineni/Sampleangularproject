import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatepeopleComponent } from './updatepeople.component';

describe('UpdatepeopleComponent', () => {
  let component: UpdatepeopleComponent;
  let fixture: ComponentFixture<UpdatepeopleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdatepeopleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatepeopleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
