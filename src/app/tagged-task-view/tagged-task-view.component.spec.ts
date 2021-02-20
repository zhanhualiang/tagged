import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaggedTaskViewComponent } from './tagged-task-view.component';

describe('TaggedTaskViewComponent', () => {
  let component: TaggedTaskViewComponent;
  let fixture: ComponentFixture<TaggedTaskViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaggedTaskViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TaggedTaskViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
