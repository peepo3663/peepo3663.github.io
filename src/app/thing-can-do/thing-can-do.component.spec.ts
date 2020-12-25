import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThingCanDoComponent } from './thing-can-do.component';

describe('ThingCanDoComponent', () => {
  let component: ThingCanDoComponent;
  let fixture: ComponentFixture<ThingCanDoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThingCanDoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThingCanDoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
