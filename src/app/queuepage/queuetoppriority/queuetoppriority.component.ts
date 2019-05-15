import { Component, OnInit } from '@angular/core';
import {DataService} from '../../data.service';

@Component({
  selector: 'app-queuetoppriority',
  templateUrl: './queuetoppriority.component.html',
  styleUrls: ['./queuetoppriority.component.scss']
})
export class QueuetoppriorityComponent implements OnInit {
  constructor(private data: DataService) { }

  ngOnInit() {

    this.data.getQueues().subscribe(
    );
  }

}
