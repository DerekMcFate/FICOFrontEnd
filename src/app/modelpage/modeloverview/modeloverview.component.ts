import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modeloverview',
  templateUrl: './modeloverview.component.html',
  styleUrls: ['./modeloverview.component.scss']
})
export class ModeloverviewComponent implements OnInit {
  elementsConfirmed: any = [];
  elementsConfirmedNotFraud: any = [];
  confirmedHeadElements =
    ['Case ID', 'Bank Name', 'Queue', 'Elapsed Time'];
  confirmedNotFraudHeadElements =
    ['Case ID', 'Bank Name', 'Queue', 'Elapsed Time'];

  constructor() { }


  ngOnInit() {
    this.elementsConfirmed.push({caseid: '22222', bank: 'Chase Bank',
      queue: 'High Risk Customer',  elapsedTime: '11 min.'});
    this.elementsConfirmedNotFraud.push({caseid: '11111', bank: 'Union Bank',
      queue: 'Top Priority',  elapsedTime: '5 min.'});


  }

}
