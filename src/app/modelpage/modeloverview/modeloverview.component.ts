import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-modeloverview',
  templateUrl: './modeloverview.component.html',
  styleUrls: ['./modeloverview.component.scss']
})
export class ModeloverviewComponent implements OnInit {

  fprScores$: Object;
  queues$: Object;
  combinedData$: Object;
  
  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.getModels().subscribe(
      data => this.fprScores$ = this.data.groupObjects(data, "SCORING_MODEL_NAME")
    );
    this.data.getQueues().subscribe(
      data => this.queues$ = data
    );
  }

}
