import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { AnalystpageComponent } from './analystpage/analystpage.component';
import { QueuepageComponent } from './queuepage/queuepage.component';
import { ModelpageComponent } from './modelpage/modelpage.component';
import { NavigationbarComponent } from './navigationbar/navigationbar.component';
import { ActivecasesComponent } from './activecases/activecases.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    AnalystpageComponent,
    QueuepageComponent,
    ModelpageComponent,
    NavigationbarComponent,
    ActivecasesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    MDBBootstrapModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
