import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyMottoComponent } from './my-motto.component';

describe('MyMottoComponent', () => {
  let component: MyMottoComponent;
  let fixture: ComponentFixture<MyMottoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyMottoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyMottoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
