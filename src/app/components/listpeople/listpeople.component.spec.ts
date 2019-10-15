import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListpeopleComponent } from './listpeople.component';

describe('ListpeopleComponent', () => {
  let component: ListpeopleComponent;
  let fixture: ComponentFixture<ListpeopleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListpeopleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListpeopleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
