import { Component, OnInit, AfterContentInit } from '@angular/core';
import { RouterLink} from '@angular/router';
import {DataService} from '../data.service';
import {NgxChartsModule, BarHorizontalStackedComponent } from '@swimlane/ngx-charts';
import {area, line, curveLinear} from 'd3-shape';
import {scaleBand, scaleLinear, scalePoint, scaleTime} from 'd3-scale';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit, AfterContentInit {
  todayCases: any = [];

  view: any[] = [700,400];
  showLegend = true;


  constructor(private data: DataService) {

  }
  ngOnInit() {
    this.data.getCases().subscribe((results) => {
      this.processData(results);
    })
  }
  ngAfterContentInit() {
  }

  processData(cases) {

  }

}
