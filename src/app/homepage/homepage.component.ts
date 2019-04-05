import { Component, OnInit, AfterContentInit } from '@angular/core';
import { RouterLink} from '@angular/router';
import * as d3 from 'd3';


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit, AfterContentInit {
  data = Array(3);

  constructor() {
    this.data =  [{name: 'Kellen', value: 5}, {name: 'Brett', value: 7}, {name: 'Vaughn', value: 5}];
  }
  ngOnInit() {

  }
  ngAfterContentInit() {
  }

}
