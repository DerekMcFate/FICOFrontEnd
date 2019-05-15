import { Component, OnInit } from '@angular/core';
import {DataService} from '../../data.service';

@Component({
  selector: 'app-queuehighrisk',
  templateUrl: './queuehighrisk.component.html',
  styleUrls: ['./queuehighrisk.component.scss']
})
export class QueuehighriskComponent implements OnInit {

  constructor(private data: DataService) { }

  ngOnInit() {
  }

}
