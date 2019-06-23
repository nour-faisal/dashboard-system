import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidbarHvComponent } from './sidbar-hv.component';

describe('SidbarHvComponent', () => {
  let component: SidbarHvComponent;
  let fixture: ComponentFixture<SidbarHvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SidbarHvComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidbarHvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
