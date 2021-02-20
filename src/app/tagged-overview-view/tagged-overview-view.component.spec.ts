import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaggedOverviewViewComponent } from './tagged-overview-view.component';

describe('TaggedOverviewViewComponent', () => {
  let component: TaggedOverviewViewComponent;
  let fixture: ComponentFixture<TaggedOverviewViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaggedOverviewViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TaggedOverviewViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
