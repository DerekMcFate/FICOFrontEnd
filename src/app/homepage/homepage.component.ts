import {
  animate,
  style,
  transition,
  trigger
} from '@angular/animations';
import { AfterContentInit, ChangeDetectionStrategy, Component, ContentChild, EventEmitter, Input, OnInit, Output, TemplateRef, ViewEncapsulation } from '@angular/core';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RouterLink} from '@angular/router';
import {calculateViewDimensions, ColorHelper, ViewDimensions } from '@swimlane/ngx-charts';
import {scaleBand, scaleLinear, scalePoint, scaleTime} from 'd3-scale';
import {area, curveLinear, line} from 'd3-shape';
import {CasesChartComponent} from '../cases-chart/cases-chart.component';
import {DataService} from '../data.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit, AfterContentInit {
  constructor(private data: DataService) {}
  ngOnInit() {}
  ngAfterContentInit() {}
}
