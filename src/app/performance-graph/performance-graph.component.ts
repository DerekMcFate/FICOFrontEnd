import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';
import{NgxChartsModule} from '@swimlane/ngx-charts';

import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import {el} from '@angular/platform-browser/testing/src/browser_util';
import {element} from 'protractor';

@Component({
  selector: 'app-performance-graph',
  templateUrl: './performance-graph.component.html',
  styleUrls: ['./performance-graph.component.scss']
})
export class PerformanceGraphComponent implements OnInit {
  canShow: boolean;
  caseCounts: any[];
  closedCases: any[];
  openCases: any[];
  totalCases: number;
  linear: any;
  // results array for graph
  allData: any[];
  allDates: any[];
  maxY = 3.0;
  view = [600, 500];
  timeline = true;
  animations = true;
  showXAxis = true;
  showYAxis = true;
  legendOptions = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Date';
  showYAxisLabel = true;
  yAxisLabel = 'Number of Cases';

  colorScheme = {
    domain: ['#00337755', '#FF888855', '#00FF0055',]
  };

  constructor(private data: DataService) { }

  ngOnInit() {
    this.linear = "ordinal";
    this.canShow = false;
    this.totalCases = 0;
    this.data.getAllData().subscribe((results) => {
      this.processData(results);
    })
  }

  // name will be "efficiency" series will be % closed cases vs. active
  processData(cases) {
    this.caseCounts = [];
    // key for these two will be the date 
    this.closedCases = [];
    this.openCases = [];
    this.allDates = [];
    this.allData = [];
    var closed = [];
    cases.forEach(element => {
      var dateString = element.QUEUE_PROCESS_DTTM.substring(0,9);
      if(!this.allDates[element]){
        this.allDates.push(dateString);
      }
    });
    console.log("UNORDERED DATES", this.allDates);
    this.allDates = this.data.orderDates(this.allDates).reverse();
    console.log("ORDERED DATES", this.allDates);
    this.allDates.forEach(element => {
      this.openCases[element] = 0;
      this.closedCases[element] = 0;
    });
    cases.forEach(element => {
      // increment counter if status exists
      var dateString = element.QUEUE_PROCESS_DTTM.substring(0,9);

      var status = element.CASE_STATUS_TYPE_CD; 
      var closedOrOpen = "Closed";
      switch(status){
        case "NEW":
          closedOrOpen = "Open";
          break;
        case "OPEN":
          closedOrOpen = "Open";
          break;
        case "ACTIVE":
          closedOrOpen = "Open";
          break;
        default:
          closedOrOpen = "Closed";
          break;
      }
      let singleEntry = {
        date: dateString,
        status: closedOrOpen
      }
      closed.push(singleEntry);
/*
      if (this.closedCases.includes(dateString)){
        ;
      } else {
        this.closedCases[dateString] = 0;
      }
      if (this.openCases.includes(dateString)){
        ;
      } else {
        this.openCases[dateString] = 0;
      }
  */
      if(closedOrOpen === "Closed") {
        if(this.closedCases[dateString]) {
          this.closedCases[dateString]++;
        } else {
          this.closedCases[dateString] = 1;
        }
      }else{
        if(this.openCases[dateString]) {
          console.log("OPENING");
          this.openCases[dateString]++;
        } else {
          this.openCases[dateString] = 1;
        }
      }
    });

    //console.log(this.closedCases);
    //console.log(this.openCases);
    let AllEntry = {
      name: "All Cases",
      series: []
    }
    let ClosedEntry = {
      name: "Closed",
      series: []
    }
    let OpenEntry = {
      name: "Open",
      series: []
    }

    for (var key in this.closedCases){
      let all = {
        value: this.closedCases[key] + this.openCases[key],
        name: key
      }
      let op = {
        value: this.openCases[key],
        name: key
      }
      let cl = {
        value: this.closedCases[key],
        name: key
      }
      AllEntry.series.push(all);
      ClosedEntry.series.push(cl);
      OpenEntry.series.push(op);
    }
    let bigEntry = {
      AllEntry
      //ClosedEntry,
      //OpenEntry
    }

    this.allData.push(OpenEntry);
    this.allData.push(ClosedEntry);
    this.allData.push(AllEntry);
    this.allData= this.allData.reverse();
    console.log("line format:", this.allData);
    this.canShow = true;
  }

}


  //  "CASE_ID": 12248,
//   "TENANT_": "Wells Fargo",
//   "USER_ID": "qauser444",
//   "CLIENT_ID": 5,
//   "QUEUE_NAME": "Top Priority",
//   "CASE_STATUS": "CONFIRMED_FRAUD",
//   "CASE_STATUS_TYPE_CD": "CLOSED",
//   "CASE_CREATED_DTTM": "24-SEP-18 04.01.19.967000000 PM",
//   "QUEUE_PROCESS_DTTM": "24-SEP-18 04.18.41.586000000 PM",
//   "CASE_TYPE_": "CASE_TYPE_SERVICE_3RD_PARTY",
//   "CASE_LEVEL_": "SERVICE"
// 
