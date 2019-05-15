import { Component, OnInit } from '@angular/core';
import {DataService} from '../../data.service';

@Component({
  selector: 'app-queuequalitycontrol',
  templateUrl: './queuequalitycontrol.component.html',
  styleUrls: ['./queuequalitycontrol.component.scss']
})
export class QueuequalitycontrolComponent implements OnInit {

  queues$: Object;
  headElements: Object;
  elements: Object;

  constructor(private data: DataService) { }

  ngOnInit() {

    this.data.getQueues().subscribe(
      data => this.queues$ = data
    );
  }

}
