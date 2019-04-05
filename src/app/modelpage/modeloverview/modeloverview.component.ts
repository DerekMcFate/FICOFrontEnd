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
    ['Case ID', 'Bank Name', 'Queue', 'Elapsed Time'];
  confirmedNotFraudHeadElements =
    ['Case ID', 'Bank Name', 'Queue', 'Elapsed Time'];

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
      data => this.fprScores$ = this.data.groupObjects(data, "SCORING_MODEL_NAME")
    );
    this.data.getQueues().subscribe(
      data => this.queues$ = data
    );
  }

}
