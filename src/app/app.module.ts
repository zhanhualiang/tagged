import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';

import { TaggedHeaderComponent } from './tagged-header/tagged-header.component';
import { TaggedTaskViewComponent } from './tagged-task-view/tagged-task-view.component';
import { TaggedSettingViewComponent } from './tagged-setting-view/tagged-setting-view.component';
import { TaggedOverviewViewComponent } from './tagged-overview-view/tagged-overview-view.component';

@NgModule({
  declarations: [
    AppComponent,
    TaggedHeaderComponent,
    TaggedTaskViewComponent,
    TaggedSettingViewComponent,
    TaggedOverviewViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
