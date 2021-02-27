import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaggedTodayTabComponent } from './tagged-today-tab.component';

describe('TaggedTodayTabComponent', () => {
  let component: TaggedTodayTabComponent;
  let fixture: ComponentFixture<TaggedTodayTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaggedTodayTabComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TaggedTodayTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
