import { HttpClientModule } from '@angular/common/http';
import { NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {NgxChartsModule} from '@swimlane/ngx-charts';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { ActivecasesComponent } from './activecases/activecases.component';
import { AnalystGraphCasesComponent } from './analystpage/analyst-graph-cases/analyst-graph-cases.component';
import { AnalystGraphLevelComponent } from './analystpage/analyst-graph-level/analyst-graph-level.component';
import { AnalystpageComponent } from './analystpage/analystpage.component';
import { AnalystsfastestComponent } from './analystpage/analystsfastest/analystsfastest.component';
import { AnalystsmallComponent } from './analystpage/analystsmall/analystsmall.component';
import { AnalystsslowestComponent } from './analystpage/analystsslowest/analystsslowest.component';
import { AnalystsubpagedetailedComponent } from './analystpage/analystsubpagedetailed/analystsubpagedetailed.component';
import { AnalystsubpagelistComponent } from './analystpage/analystsubpagelist/analystsubpagelist.component';
import { AnalysttableComponent } from './analystpage/analysttable/analysttable.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CasesChartComponent } from './cases-chart/cases-chart.component';
import { FooterComponent} from './footer/footer.component';
import { HomepageComponent } from './homepage/homepage.component';
import { CasedetailsComponent } from './modelpage/casedetails/casedetails.component';
import { ModeloverviewComponent } from './modelpage/modeloverview/modeloverview.component';
import { ModelpageComponent } from './modelpage/modelpage.component';
import { ModelsidebarComponent } from './modelpage/modelsidebar/modelsidebar.component';
import { NavigationbarComponent } from './navigationbar/navigationbar.component';
import {PerformanceGraphComponent} from './performance-graph/performance-graph.component';
import {QueuehighriskComponent} from './queuepage/queuehighrisk/queuehighrisk.component';
import {QueuepageComponent} from './queuepage/queuepage.component';
import {QueueperformanceComponent} from './queuepage/queueperformance/queueperformance.component';
import {QueuequalitycontrolComponent} from './queuepage/queuequalitycontrol/queuequalitycontrol.component';
import {QueuetoppriorityComponent} from './queuepage/queuetoppriority/queuetoppriority.component';
import {SidebarComponent} from './sidebar/sidebar.component';

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
    PerformanceGraphComponent,
    CasesChartComponent,
    QueueperformanceComponent,
    QueuequalitycontrolComponent,
    QueuehighriskComponent,
    QueuetoppriorityComponent,
    AnalystGraphCasesComponent,
    AnalystGraphLevelComponent,
    //NgxChartsModule
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    MDBBootstrapModule.forRoot(),
    HttpClientModule,
    NgxChartsModule,
    NoopAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
