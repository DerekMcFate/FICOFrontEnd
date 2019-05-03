import { Component } from '@angular/core';
import * as d3 from 'd3';
import {Router, RouterLink} from '@angular/router';
import {NgxChartsModule} from '@swimlane/ngx-charts';
import {CasesChartComponent} from './cases-chart/cases-chart.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'FICOFrontEnd';
}
