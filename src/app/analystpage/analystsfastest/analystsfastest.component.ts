import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-analystsfastest',
  templateUrl: './analystsfastest.component.html',
  styleUrls: ['./analystsfastest.component.scss']
})
export class AnalystsfastestComponent implements OnInit {
  fastAnalysts: any = [1,2,3];
  constructor() { }

  ngOnInit() {

  }

}
