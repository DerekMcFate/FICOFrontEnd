import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-queuepage',
  templateUrl: './queuepage.component.html',
  styleUrls: ['./queuepage.component.scss']
})
export class QueuepageComponent implements OnInit {

  queues$: Object;
  headElements: Object;
  elements: Object;
  
  constructor(private data: DataService) {
  }

  ngOnInit() {
    this.data.getQueues().subscribe(
      data => this.queues$ = data
    );
  }
}
