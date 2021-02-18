import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaggedHeaderComponent } from './tagged-header.component';

describe('TaggedHeaderComponent', () => {
  let component: TaggedHeaderComponent;
  let fixture: ComponentFixture<TaggedHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaggedHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TaggedHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
