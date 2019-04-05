import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { AnalystpageComponent } from './analystpage/analystpage.component';
import { QueuepageComponent } from './queuepage/queuepage.component';
import { ModelpageComponent } from './modelpage/modelpage.component';
import { NavigationbarComponent } from './navigationbar/navigationbar.component';
import { ActivecasesComponent } from './activecases/activecases.component';
import { FooterComponent} from './footer/footer.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { AnalystsmallComponent } from './analystpage/analystsmall/analystsmall.component';
import { AnalystsubpagelistComponent } from './analystpage/analystsubpagelist/analystsubpagelist.component';
import { AnalystsubpagedetailedComponent } from './analystpage/analystsubpagedetailed/analystsubpagedetailed.component';
import { AnalysttableComponent } from './analystpage/analysttable/analysttable.component';
import { AnalystsfastestComponent } from './analystpage/analystsfastest/analystsfastest.component';
import { AnalystsslowestComponent } from './analystpage/analystsslowest/analystsslowest.component';
import { ModelsidebarComponent } from './modelpage/modelsidebar/modelsidebar.component';
import { ModeloverviewComponent } from './modelpage/modeloverview/modeloverview.component';
import { CasedetailsComponent } from './modelpage/casedetails/casedetails.component';
import { SidebarComponent } from './sidebar/sidebar.component';


@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    AnalystpageComponent,
    QueuepageComponent,
    ModelpageComponent,
    NavigationbarComponent,
    ActivecasesComponent,
    AnalystsmallComponent,
    AnalystsubpagelistComponent,
    AnalystsubpagedetailedComponent,
    FooterComponent,
    AnalysttableComponent,
    AnalystsfastestComponent,
    AnalystsslowestComponent,
    FooterComponent,
    ModelsidebarComponent,
    ModeloverviewComponent,
    CasedetailsComponent,
    SidebarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    MDBBootstrapModule.forRoot(),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
