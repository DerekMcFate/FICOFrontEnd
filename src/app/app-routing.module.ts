import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { AnalystpageComponent } from './analystpage/analystpage.component';
import { QueuepageComponent } from './queuepage/queuepage.component';
import {NavigationbarComponent} from './navigationbar/navigationbar.component';
import {ModelpageComponent} from './modelpage/modelpage.component';
import {AnalystsubpagedetailedComponent} from './analystpage/analystsubpagedetailed/analystsubpagedetailed.component';
import {AnalystsubpagelistComponent} from './analystpage/analystsubpagelist/analystsubpagelist.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomepageComponent
  },
  {
    path: 'analysts',
    component: AnalystpageComponent,
    children: [
      {path: '', component: AnalystsubpagelistComponent},
      {path: 'detailed', component: AnalystsubpagedetailedComponent},
    ]
  },
  {
    path: 'queue',
    component: QueuepageComponent
  },
  {
    path: 'models',
    component: ModelpageComponent
  },
  {
    path: ' ',
    component: HomepageComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
