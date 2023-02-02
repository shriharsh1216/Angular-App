import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserBillComponent } from './user-bill.component';

describe('UserBillComponent', () => {
  let component: UserBillComponent;
  let fixture: ComponentFixture<UserBillComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserBillComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserBillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
