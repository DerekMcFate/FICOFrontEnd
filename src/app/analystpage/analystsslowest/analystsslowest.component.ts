import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-analystsslowest',
  templateUrl: './analystsslowest.component.html',
  styleUrls: ['./analystsslowest.component.scss']
})
export class AnalystsslowestComponent implements OnInit {
  slowAnalysts: any = [1,2,3];

  constructor() { }

  ngOnInit() {
  }

}
