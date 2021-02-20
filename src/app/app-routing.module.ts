import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaggedTaskViewComponent } from './tagged-task-view/tagged-task-view.component';
import { TaggedSettingViewComponent } from './tagged-setting-view/tagged-setting-view.component';
import { TaggedOverviewViewComponent } from './tagged-overview-view/tagged-overview-view.component';

const routes: Routes = [
  { path: '', component: TaggedTaskViewComponent },
  { path: 'setting', component: TaggedSettingViewComponent },
  { path: 'overview', component: TaggedOverviewViewComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
