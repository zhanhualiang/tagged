import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';

import { TaggedHeaderComponent } from './tagged-header/tagged-header.component';
import { TaggedTaskViewComponent } from './tagged-task-view/tagged-task-view.component';
import { TaggedSettingViewComponent } from './tagged-setting-view/tagged-setting-view.component';
import { TaggedOverviewViewComponent } from './tagged-overview-view/tagged-overview-view.component';
import { DailyTabComponent } from './daily-tab/daily-tab.component';
import { TaskListComponent } from './tab/task-list/task-list.component';
import { TabHeaderComponent } from './tab/tab-header/tab-header.component';
import { PopUpTaskDialogComponent } from './pop-up-task-dialog/pop-up-task-dialog.component';
import { TaggedLoginComponent } from './tagged-login/tagged-login.component';
import { WebInterceptorService } from './service/web-interceptor.service';

@NgModule({
  declarations: [
    AppComponent,
    TaggedHeaderComponent,
    TaggedTaskViewComponent,
    TaggedSettingViewComponent,
    TaggedOverviewViewComponent,
    DailyTabComponent,
    TaskListComponent,
    TabHeaderComponent,
    PopUpTaskDialogComponent,
    TaggedLoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    DragDropModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatSnackBarModule
  ],
  entryComponents: [
    PopUpTaskDialogComponent
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: WebInterceptorService, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
