import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyTabComponent } from './daily-tab.component';

describe('DailyTabComponent', () => {
  let component: DailyTabComponent;
  let fixture: ComponentFixture<DailyTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DailyTabComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DailyTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
