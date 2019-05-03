import { Component, OnInit, AfterContentInit, Input, Output, EventEmitter, ContentChild, TemplateRef, ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core';
import { RouterLink} from '@angular/router';
import {DataService} from '../data.service';
import {ViewDimensions, ColorHelper, calculateViewDimensions } from '@swimlane/ngx-charts';
import {area, line, curveLinear} from 'd3-shape';
import {scaleBand, scaleLinear, scalePoint, scaleTime} from 'd3-scale';
import {
  trigger,
  transition,
  style,
  animate
} from '@angular/animations';
import {CasesChartComponent} from '../cases-chart/cases-chart.component';


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit, AfterContentInit {
  constructor() {}
  ngOnInit() {}
  ngAfterContentInit() {}
}
