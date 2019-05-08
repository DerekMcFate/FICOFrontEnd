import { Component, OnInit } from '@angular/core';
import {DataService} from "../../data.service";

@Component({
  selector: 'app-analystsfastest',
  templateUrl: './analystsfastest.component.html',
  styleUrls: ['./analystsfastest.component.scss']
})
export class AnalystsfastestComponent implements OnInit {
  constructor(private data: DataService) {
  }
  ngOnInit() {

  }

}
