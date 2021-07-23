import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LiveContactComponent } from './live-contact.component';

describe('LiveContactComponent', () => {
  let component: LiveContactComponent;
  let fixture: ComponentFixture<LiveContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LiveContactComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LiveContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
