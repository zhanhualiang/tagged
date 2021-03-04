import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopUpTaskDialogComponent } from './pop-up-task-dialog.component';

describe('PopUpTaskDialogComponent', () => {
  let component: PopUpTaskDialogComponent;
  let fixture: ComponentFixture<PopUpTaskDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopUpTaskDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PopUpTaskDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
