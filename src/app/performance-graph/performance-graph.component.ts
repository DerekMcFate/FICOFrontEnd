import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';
import{NgxChartsModule} from '@swimlane/ngx-charts';

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
  
  // results array for graph
  allData: any[];

  view = [700, 500];
  timeline = true;
  showXAxis = true;
  showYAxis = true;
  legendOptions = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Country';
  showYAxisLabel = true;
  yAxisLabel = 'Population';

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };

  constructor(private data: DataService) { }

  ngOnInit() {
    this.canShow = false;
    this.totalCases = 0;
    this.data.getQueues().subscribe((results) => {
      this.processData(results);
    })
  }

  // name will be "efficiency" series will be % closed cases vs. active
  processData(cases) {
    this.caseCounts = [];
    // key for these two will be the date 
    this.closedCases = [];
    this.openCases = [];
    this.allData = [];
    
    var closed = [];   
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
      if(closedOrOpen === "Closed") {
        if(this.closedCases[dateString]) {
          this.closedCases[dateString]++;
        } else {
          this.closedCases[dateString] = 1;
        }
      }else{
        if(this.openCases[dateString]) {
          this.openCases[dateString]++;
        } else {
          this.openCases[dateString] = 1;
        }
      }
    });
    console.log(this.closedCases);
    console.log(this.openCases);
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
      AllEntry,
      ClosedEntry,
      OpenEntry
    }
    this.allData.push(bigEntry);
    console.log(this.allData);
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