import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAllNotifComponent } from './view-all-notif.component';

describe('ViewAllNotifComponent', () => {
  let component: ViewAllNotifComponent;
  let fixture: ComponentFixture<ViewAllNotifComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewAllNotifComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAllNotifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
