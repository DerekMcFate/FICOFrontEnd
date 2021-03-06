import { AfterContentInit, ChangeDetectionStrategy, Component, ContentChild, EventEmitter, Input, OnInit, Output, TemplateRef, ViewEncapsulation } from '@angular/core';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {BarHorizontalStackedComponent, NgxChartsModule} from '@swimlane/ngx-charts';
import {PieSeriesComponent} from "@swimlane/ngx-charts";
import {PieChartComponent} from "@swimlane/ngx-charts";
import {calculateViewDimensions, ColorHelper, ViewDimensions } from '@swimlane/ngx-charts';
import {scaleBand, scaleLinear, scalePoint, scaleTime} from 'd3-scale';
import {area, curveLinear, line} from 'd3-shape';
import {DataService} from '../data.service';


import {
  trigger,
  transition,
  style,
  animate
} from '@angular/animations';
@Component({
  selector: 'app-cases-chart',
  templateUrl: './cases-chart.component.html',
  styleUrls: ['./cases-chart.component.scss']
})

export class CasesChartComponent implements OnInit {
  

  // chart stuff [results]="chartData" for case status 
  todayCases: any = [];
  
  canShow: boolean;
  chartData: any[]; 
  statusCount: any[];
  finalData: any[];
  xAxisLabel = 'Count';
  
  //yAxisLabel = 'Population';
  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };

  // chart stuff for Case Level bar chart
  showCaseLevel: boolean;
  caseLevelData: any[];
  levelCount: any[];
  finalCases: any[];

  //shared chart stuff
  view: any[] = [700, 150];
  showXAxis = true;
  showYAxis = true;
  gradient = true;
  showLegend = true;
  showXAxisLabel = true;
  showYAxisLabel = true;
  schemeType = 'linear';
  dataLabel = true;

  constructor(private data: DataService) { }

  ngOnInit() {
    this.canShow = false;
    this.showCaseLevel = false;
    this.data.getAllData().subscribe((results) => {
      this.processData(results);
    })
    console.log("initialized");
  }
  // takes case data and transforms to data usable by ngx-charts
  // "CASE_STATUS_TYPE_CD": "ACTIVE" 
  // "CASE_LEVEL_": "SERVICE",
  processData(cases) {
    // status objects
    this.statusCount = [];
    this.chartData = [];
    this.finalData = [];
    // level objects
    this.caseLevelData = [];
    this.levelCount = [];
    this.finalCases = [];

    cases.forEach(element => {
      // increment counter if status exists
      if(this.statusCount[element.CASE_STATUS_TYPE_CD]) {
        this.statusCount[element.CASE_STATUS_TYPE_CD]++;
      } else {
        this.statusCount[element.CASE_STATUS_TYPE_CD] = 1;
      }
      // increment counter if status exists
      if(this.levelCount[element.CASE_LEVEL_]) {
        this.levelCount[element.CASE_LEVEL_]++;
      } else {
        this.levelCount[element.CASE_LEVEL_] = 1;
      }

    });
    console.log("STATUS: ", this.statusCount);
    // case level
    let finalLevel = {
      name: "Level",
      series: []
    }
    // case status
    let finalEntry = {
      name: "Cases",
      series: []
    };
    // load case status data 
    for (var key in this.statusCount) {
      let singleEntry = {
        name: key,
        value: this.statusCount[key]
      };
      finalEntry.series.push(singleEntry);
    }
    this.finalData.push(finalEntry);
    this.canShow = true;

    // load case LEVEL data
    for (var key in this.levelCount){
      let thisEntry = {
        name: key,
        value: this.levelCount[key]
      };
      finalLevel.series.push(thisEntry);
    }
    this.finalCases.push(finalLevel);
    this.showCaseLevel = true;

    console.log("GENERAL GRAPH");
    this.finalData=this.finalData[0]['series'];
    this.finalCases=this.finalCases[0]['series'];
    console.log(this.finalData);
    console.log(this.finalCases);
  }

}
