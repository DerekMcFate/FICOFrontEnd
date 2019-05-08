import { AfterContentInit, ChangeDetectionStrategy, Component, ContentChild, EventEmitter, Input, OnInit, Output, TemplateRef, ViewEncapsulation } from '@angular/core';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {BarHorizontalStackedComponent, NgxChartsModule} from '@swimlane/ngx-charts';
import {calculateViewDimensions, ColorHelper, ViewDimensions } from '@swimlane/ngx-charts';
import {scaleBand, scaleLinear, scalePoint, scaleTime} from 'd3-scale';
import {area, curveLinear, line} from 'd3-shape';
import {DataService} from "../../data.service";


import {
  trigger,
  transition,
  style,
  animate
} from '@angular/animations';
@Component({
  selector: 'app-analyst-graph-level',
  templateUrl: './analyst-graph-level.component.html',
  styleUrls: ['./analyst-graph-level.component.scss']
})
export class AnalystGraphLevelComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
