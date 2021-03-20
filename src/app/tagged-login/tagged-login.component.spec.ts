import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaggedLoginComponent } from './tagged-login.component';

describe('TaggedLoginComponent', () => {
  let component: TaggedLoginComponent;
  let fixture: ComponentFixture<TaggedLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaggedLoginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TaggedLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
