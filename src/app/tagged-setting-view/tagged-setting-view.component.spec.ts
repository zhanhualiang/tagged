import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaggedSettingViewComponent } from './tagged-setting-view.component';

describe('TaggedSettingViewComponent', () => {
  let component: TaggedSettingViewComponent;
  let fixture: ComponentFixture<TaggedSettingViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaggedSettingViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TaggedSettingViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
