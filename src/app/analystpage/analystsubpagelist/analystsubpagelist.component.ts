import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-analystsubpagelist',
  templateUrl: './analystsubpagelist.component.html',
  styleUrls: ['./analystsubpagelist.component.scss']
})
export class AnalystsubpagelistComponent implements OnInit {

  analysts$: Object;

  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.getQueues().subscribe(
      data => this.analysts$ = data
    );
  }

}
