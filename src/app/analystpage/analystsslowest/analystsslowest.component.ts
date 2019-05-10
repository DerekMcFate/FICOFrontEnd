import { Component, OnInit } from '@angular/core';
import {DataService} from "../../data.service";

@Component({
  selector: 'app-analystsslowest',
  templateUrl: './analystsslowest.component.html',
  styleUrls: ['./analystsslowest.component.scss']
})
export class AnalystsslowestComponent implements OnInit {
  constructor(private data: DataService) {
  }
  ngOnInit() {
  }

}
