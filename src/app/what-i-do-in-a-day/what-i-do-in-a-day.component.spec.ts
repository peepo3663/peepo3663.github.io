import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatIDoInADayComponent } from './what-i-do-in-a-day.component';

describe('WhatIDoInADayComponent', () => {
  let component: WhatIDoInADayComponent;
  let fixture: ComponentFixture<WhatIDoInADayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WhatIDoInADayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WhatIDoInADayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
