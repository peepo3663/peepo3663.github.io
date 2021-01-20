import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatILoveComponent } from './what-i-love.component';

describe('WhatILoveComponent', () => {
  let component: WhatILoveComponent;
  let fixture: ComponentFixture<WhatILoveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WhatILoveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WhatILoveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
