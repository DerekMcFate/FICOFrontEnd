import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { queue } from 'rxjs/internal/scheduler/queue';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-modeloverview',
  templateUrl: './modeloverview.component.html',
  styleUrls: ['./modeloverview.component.scss']
})
export class ModeloverviewComponent implements OnInit {
  //These provide the headers for the tables in the model cards.
  confirmedHeadElements =
    ['Case ID', 'Bank Name', 'Queue', 'Status'];
  confirmedNotFraudHeadElements =
    ['Case ID', 'Bank Name', 'Queue', 'Status'];
  //These are how you'll refer to your data in the html page
  fprScores$: Object;
  queues$: Object;
  combinedData$: Object;
  modelFlag: boolean;
  queueFlag: boolean;
  //Model Chart
  view: any[] = [700,200];
  canShow: boolean;
  chartData: any[]; 
  statusCount: any[];
  finalData: any[];
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Model';
  showYAxisLabel = true;
  yAxisLabel = 'Cases';

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };

  //Add 'private data: DataService' to the constructor
  constructor(private data: DataService) {
    // this.data.getModels().subscribe(
    //   data => {
    //     this.fprScores$ = this.data.groupBy(data, "TENANT_");
    //     this.modelFlag = true;
    //     if(this.queueFlag === true) {
    //       //this.combinedData$ = this.data.mergeData(this.queues$, this.fprScores$, ["TENANT_", "CLIENT_ID"]);
    //       //console.log(this.combinedData$);
    //     }
    //   }
    // );
    // this.data.getQueues().subscribe(
    //   data => {
    //     this.queues$ = this.data.groupBy(data, "TENANT_");
    //     this.queueFlag = true;
    //     if(this.modelFlag === true) {
    //       //this.combinedData$ = this.data.mergeData(this.queues$, this.fprScores$, ["TENANT_", "CLIENT_ID"]);
    //       //console.log(this.combinedData$);
    //     }
    //   }
    // );
  }

  ngOnInit() {
    //Returns the data from the queue json file
    this.data.getQueues().subscribe(
      data => this.queues$ = data
    );
    //Returns the data from the model json file, and organize the array by the key 'SCORING_MODEL_NAME' 
    this.data.getModels().subscribe(
      data => this.fprScores$ = this.data.groupBy(data, "SCORING_MODEL_NAME")
    );
    this.canShow = false;
    this.data.getModels().subscribe((results) => {
      this.processData(this.data.groupBy(results, "SCORING_MODEL_NAME"));
    })
    //Combines two arrays together based on a key shared between them *WIP*
    //this.combinedData$ = this.data.mergeData(this.data.getModels().pipe(map(fprScores$ => this.fprScores$ = fprScores$)), this.queues$, "TENANT_");
    //console.log("CombinedData", this.combinedData$);
  }

  processData(models) {
    console.log("Models: ", models);
    var modelCount = [];
    this.statusCount = [];
    this.chartData = [];
    this.finalData = [];
    //Gets overall model
    
    //Gets cases of a model
    models.forEach(element => {

      if(this.statusCount[element.CASE_STATUS_TYPE_CD]) {
        this.statusCount[element.CASE_STATUS_TYPE_CD]++;
      } else {
        this.statusCount[element.CASE_STATUS_TYPE_CD] = 1;
      }
    });

    let finalEntry = {
      name: "Models",
      series: []
    };
    for (var key in this.statusCount) {
      let singleEntry = {
        name: key,
        value: this.statusCount[key]
      };
      finalEntry.series.push(singleEntry);
    }

    this.finalData.push(finalEntry);
    this.canShow = true;

    console.log("DATA DE FINALE: ", this.finalData);
  }

  mergeTime() {
    console.log("HOLA QUINSENYETA");
  }
  //This function returns an array of elements where 'CASE_STATUS_CD' contains the phrase 'CONFIRMED_FRAUD'
  isFraud(array) {
    var fraudArr = [];
    for(var i = 0; i < array.length; i++) {
      if(array[i].CASE_STATUS_CD.includes("CONFIRMED_FRAUD")) {
        fraudArr.push(array[i]);
      }
    }
    return fraudArr;
  }
  //Same as above but for 'NOT_FRAUD'
  isNotFraud(array) {
    var notFraudArr = [];
    for(var i = 0; i < array.length; i++) {
      if(array[i].CASE_STATUS_CD.includes("NOT_FRAUD")) {
        notFraudArr.push(array[i]);
      }
    }
    return notFraudArr;
  }
  //Returns the first three elements of the array
  getThree(array) {
    return [array[0], array[1], array[2]];
  }

}
