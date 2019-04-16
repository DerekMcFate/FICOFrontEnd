import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';

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

  //Add 'private data: DataService' to the constructor
  constructor(private data: DataService) { }

  ngOnInit() {
    //Returns the data from the queue json file
    this.data.getQueues().subscribe(
      data => this.queues$ = data
    );
    //Returns the data from the model json file, and organize the array by the key 'SCORING_MODEL_NAME' 
    this.data.getModels().subscribe(
      data => this.fprScores$ = this.data.groupBy(data, "SCORING_MODEL_NAME")
    );
    //Combines two arrays together based on a key shared between them *WIP*
    this.combinedData$ = this.data.mergeData(this.data.groupBy(this.data.getModels(), "SCORING_MODEL_NAME"), this.data.getQueues(), "CLIENT_ID")
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
