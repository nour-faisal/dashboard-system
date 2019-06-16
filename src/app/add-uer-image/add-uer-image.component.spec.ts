import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddUerImageComponent } from './add-uer-image.component';

describe('AddUerImageComponent', () => {
  let component: AddUerImageComponent;
  let fixture: ComponentFixture<AddUerImageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddUerImageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddUerImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
