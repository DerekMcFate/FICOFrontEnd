import { Component, OnInit } from '@angular/core';
import {DataService} from '../../data.service';

@Component({
  selector: 'app-queuequalitycontrol',
  templateUrl: './queuequalitycontrol.component.html',
  styleUrls: ['./queuequalitycontrol.component.scss']
})
export class QueuequalitycontrolComponent implements OnInit {

  queues$: Object;
  elements: Object;

  constructor(public data: DataService) { }

  ngOnInit() {

    this.data.getQueues().subscribe(
      data => this.queues$ = data
    );
  }

}
