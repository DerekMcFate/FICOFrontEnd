import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { AnalystpageComponent } from './analystpage/analystpage.component';
import { QueuepageComponent } from './queuepage/queuepage.component';
import {NavigationbarComponent} from './navigationbar/navigationbar.component';
import { ModelpageComponent } from './modelpage/modelpage.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomepageComponent
  },
  {
    path: 'analysts',
    component: AnalystpageComponent
  },
  {
    path: 'queue',
    component: QueuepageComponent
  },
  {
    path: 'model',
    component: ModelpageComponent
  },
  {
    path: '',
    component: HomepageComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
