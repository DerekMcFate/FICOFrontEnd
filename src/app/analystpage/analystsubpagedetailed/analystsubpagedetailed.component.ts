import { Component, OnInit } from '@angular/core';
import {ViewDimensions, ColorHelper, calculateViewDimensions } from '@swimlane/ngx-charts';
import {area, line, curveLinear} from 'd3-shape';
import {scaleBand, scaleLinear, scalePoint, scaleTime} from 'd3-scale';
import {
  trigger,
  transition,
  style,
  animate
} from '@angular/animations';
import {ActivatedRoute} from '@angular/router';
import {DataService} from '../../data.service';


@Component({
  selector: 'app-analystsubpagedetailed',
  templateUrl: './analystsubpagedetailed.component.html',
  styleUrls: ['./analystsubpagedetailed.component.scss']
})
export class AnalystsubpagedetailedComponent implements OnInit {
  view: any[] = [700,200];
  canShow: boolean;
  chartData: any[];
  statusCount: any[];
  finalData: any[];
  analystID: string;
  analyst: any[];
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Country';
  showYAxisLabel = true;
  yAxisLabel = 'Population';

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };

  constructor(public data: DataService, private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      console.log(params);
      this.analystID = params['id'];
      this.analyst = data.getAnalyst(this.analystID);
      console.log("ANALYST:", this.analyst);
    });
  }

  optionsSelect: Array<any>;
  ngOnInit() {

    this.optionsSelect = [
      { value: '1', label: 'Option 1' },
      { value: '2', label: 'Option 2' },
      { value: '3', label: 'Option 3' }
    ];
  }

}
