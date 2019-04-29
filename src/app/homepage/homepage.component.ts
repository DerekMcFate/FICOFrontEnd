import { Component, OnInit, AfterContentInit, Input, Output, EventEmitter, ContentChild, TemplateRef, ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core';
import { RouterLink} from '@angular/router';
import {DataService} from '../data.service';
import {ViewDimensions, ColorHelper, calculateViewDimensions } from '@swimlane/ngx-charts';
import {area, line, curveLinear} from 'd3-shape';
import {scaleBand, scaleLinear, scalePoint, scaleTime} from 'd3-scale';
import {
  trigger,
  transition,
  style,
  animate
} from '@angular/animations';
import { ChartData } from 'chart.js';
import {NgxChartsModule, BarHorizontalStackedComponent} from '@swimlane/ngx-charts';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit, AfterContentInit {
  todayCases: any = [];

  // chart stuff [results]="chartData" 
  view: any[] = [700,400];
  canShow: boolean;
  chartData: any[]; 
  statusCount: any[];

  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Country';
  showYAxisLabel = true;
  yAxisLabel = 'Population';

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };

  constructor(private data: DataService) {}

  ngOnInit() {
    this.canShow = false;
    this.data.getCases().subscribe((results) => {
      this.processData(results);
    })
  }
  ngAfterContentInit() {
  }

  //"CASE_STATUS_TYPE_CD": "ACTIVE"
  processData(cases) {
    this.statusCount = [];
    this.chartData = [];
    cases.forEach(element => {
      // increment counter if status exists
      if(this.statusCount[element.CASE_STATUS_TYPE_CD]) {
        this.statusCount[element.CASE_STATUS_TYPE_CD]++;
      } else {
        this.statusCount[element.CASE_STATUS_TYPE_CD] = 1;
      }
    });
    for (var key in this.statusCount) {
      let singleEntry = {
        name: key,
        value: this.statusCount[key]
      };
      this.chartData.push(singleEntry);
    }
    this.canShow = true;
    console.log(this.chartData);
  }
}
