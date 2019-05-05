import { AfterContentInit, ChangeDetectionStrategy, Component, ContentChild, EventEmitter, Input, OnInit, Output, TemplateRef, ViewEncapsulation } from '@angular/core';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {ActivatedRoute} from "@angular/router";
import {BarHorizontalStackedComponent, NgxChartsModule} from '@swimlane/ngx-charts';
import {calculateViewDimensions, ColorHelper, ViewDimensions } from '@swimlane/ngx-charts';
import {scaleBand, scaleLinear, scalePoint, scaleTime} from 'd3-scale';
import {area, curveLinear, line} from 'd3-shape';
import {DataService} from "../../data.service";

import {
  trigger,
  transition,
  style,
  animate
} from '@angular/animations';
import {stringify} from "querystring";
import {el} from "@angular/platform-browser/testing/src/browser_util";

@Component({
  selector: 'app-analyst-graph-cases',
  templateUrl: './analyst-graph-cases.component.html',
  styleUrls: ['./analyst-graph-cases.component.scss']
})
export class AnalystGraphCasesComponent implements OnInit {

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
  finalAnalystCases: any[];

  //shared chart stuff
  view: any[] = [600, 500];
  timeline = true;
  animations = true;
  showXAxis = true;
  showYAxis = true;
  gradient = true;
  legendOptions = true;
  showLegend = true;
  showXAxisLabel = true;
  showYAxisLabel = true;
  schemeType = 'linear';
  dataLabel = true;
  analystID: string;

  constructor(private data: DataService, private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      console.log(params);
      this.analystID = params['id']
    });
    console.log("assert defined", this.data.analystData$);
    console.log(this.analystID);
  }

  ngOnInit() {
    this.canShow = false;
    this.showCaseLevel = false;
    this.processData(this.data.analystData$);
    console.log("initialized");
  }

  // takes case data and transforms to data usable by ngx-charts
  // "CASE_STATUS_TYPE_CD": "ACTIVE"
  // "CASE_LEVEL_": "SERVICE",

  private getArrOfCaseType(caseType, arr){
    console.log("CALLED", caseType, arr);
    for (var k = 0; k<arr.length; k++){
      console.log("test arrk", arr[k]);
      if(arr[k].name === caseType){
        console.log("argk", arr[k]);
        return arr[k].series;
      }
    }
  }
  private getArrOfMatchingDate(date, arr){
    for (var k = 0; k < arr.length; k++){
      if(arr[k].name === date){
        return arr[k];
      }
    }
  }

  processData(analysts) {
    console.log("process", analysts);
    var analystArr = this.data.getAnalyst(this.analystID);
    console.log(analystArr);
    var finalArr = [];
    var allDates = [];
    var allStatuses = ["ACTIVE", "CLOSED", "OPEN", "NEW"];
    for (var i = 0; i < analystArr.length; i++) {
      // For each case...
      var element = analystArr[i];
      console.log("element", element);
      var dateString = element.QUEUE_PROCESS_DTTM.substring(0, 9);
      if (!allDates.includes(dateString)) {
        allDates.push(dateString);
      }
      console.log("dates:", allDates);
    }

    for (var i = 0; i < allStatuses.length; i++) {
      var arr = []
      for (var j = 0; j < allDates.length; j++) {
        // For each possible date...
        let dateEntry = {
          value: 0,
          name: allDates[j]
        };
        arr.push(dateEntry);
      }
      let entry = {
        name: allStatuses[i],
        series: arr
      };
      finalArr.push(entry);
    }
    console.log("FinalArr step1:", finalArr);
    for (var i = 0; i < analystArr.length; i++) {
      // For each case...
      var element = analystArr[i];
      console.log("element", element);
      var dateString = element.QUEUE_PROCESS_DTTM.substring(0, 9);
      var caseType = element.CASE_STATUS_TYPE_CD;
      console.log("el", element);
      var caseArr = this.getArrOfCaseType(caseType, finalArr);
      console.log("case", caseArr);
      var targetArr = this.getArrOfMatchingDate(dateString, caseArr);
      console.log("tgt", targetArr);
      targetArr.value++;
    }
    this.finalData = finalArr;
    console.log("final", this.finalData);
    this.canShow=true;
  }
}

 /* processData(analysts) {
    console.log("process", analysts)
    // status objects
    this.statusCount = [];
    this.chartData = [];
    this.finalData = [];
    // level objects
    this.caseLevelData = [];
    this.levelCount = [];
    this.finalAnalystCases = [];
    this.statusCount["ACTIVE"] = 0;
    this.statusCount["CLOSED"] = 0;
    this.statusCount["OPEN"] = 0;
    this.statusCount["NEW"] = 0;

    for(var i =0; i < analysts.length; i++){
      if(this.data.getAnalystUserID(analysts[i]) === this.analystID) {
        console.log("Found match");
        for(var j =0; j < analysts[i].length; j++){
          var el = analysts[i][j];
          this.statusCount[el.CASE_STATUS_TYPE_CD]++;
        }

      }
    }
    console.log("STATUS: ", this.statusCount);

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
    this.finalAnalystCases.push(finalLevel);
    this.showCaseLevel = true;
    console.log("ANALYST GRAPH");
    console.log(this.finalData);
    console.log(this.finalAnalystCases);
  }
*/
