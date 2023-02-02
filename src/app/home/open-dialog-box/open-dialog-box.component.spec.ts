import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenDialogBoxComponent } from './open-dialog-box.component';

describe('OpenDialogBoxComponent', () => {
  let component: OpenDialogBoxComponent;
  let fixture: ComponentFixture<OpenDialogBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpenDialogBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpenDialogBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
