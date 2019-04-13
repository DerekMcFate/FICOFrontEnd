import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-modeloverview',
  templateUrl: './modeloverview.component.html',
  styleUrls: ['./modeloverview.component.scss']
})
export class ModeloverviewComponent implements OnInit {
  elementsConfirmed: any = [];
  elementsConfirmedNotFraud: any = [];
  confirmedHeadElements =
    ['Case ID', 'Bank Name', 'Queue', 'Status'];
  confirmedNotFraudHeadElements =
    ['Case ID', 'Bank Name', 'Queue', 'Status'];

  fprScores$: Object;
  queues$: Object;
  combinedData$: Object;

  constructor(private data: DataService) { }

  ngOnInit() {
    this.elementsConfirmed.push({caseid: '22222', bank: 'Chase Bank',
      queue: 'High Risk Customer',  elapsedTime: '11 min.'});
    this.elementsConfirmedNotFraud.push({caseid: '11111', bank: 'Union Bank',
      queue: 'Top Priority',  elapsedTime: '5 min.'});


    this.data.getModels().subscribe(
      data => this.fprScores$ = this.data.groupBy(data, "SCORING_MODEL_NAME")
    );
    this.data.getQueues().subscribe(
      data => this.queues$ = data
    );

    this.combinedData$ = this.data.mergeData(this.data.groupBy(this.data.getModels(), "SCORING_MODEL_NAME"), this.data.getQueues(), "CLIENT_ID")
  }

  isFraud(array) {
    var fraudArr = [];
    for(var i = 0; i < array.length; i++) {
      if(array[i].CASE_STATUS_CD.includes("CONFIRMED_FRAUD")) {
        fraudArr.push(array[i]);
      }
    }
    return fraudArr;
  }

  isNotFraud(array) {
    var notFraudArr = [];
    for(var i = 0; i < array.length; i++) {
      if(array[i].CASE_STATUS_CD.includes("NOT_FRAUD")) {
        notFraudArr.push(array[i]);
      }
    }
    return notFraudArr;
  }

  getThree(array) {
    return [array[0], array[1], array[2]];
  }

}
