import { Component, OnInit, AfterContentInit, Input, Output, EventEmitter, ContentChild, TemplateRef, ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core';
import { RouterLink} from '@angular/router';
import {DataService} from '../data.service';
import {NgxChartsModule, BarHorizontalStackedComponent, ViewDimensions, ColorHelper, calculateViewDimensions } from '@swimlane/ngx-charts';
import {area, line, curveLinear} from 'd3-shape';
import {scaleBand, scaleLinear, scalePoint, scaleTime} from 'd3-scale';
import {
  trigger,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit, AfterContentInit {
  todayCases: any = [];

  // chart stuff
  view: any[] = [700,400];
  showLegend = true;
  canShow: boolean;
  chartData: any[]; 
  statusCount: any[];

  
  @Input() legend = true;
  @Input() legendTitle: string = 'Legend';
  @Input() legendPosition: string = 'right';
  @Input() xAxis;
  @Input() yAxis;
  @Input() showXAxisLabel;
  @Input() showYAxisLabel;
  @Input() xAxisLabel;
  @Input() yAxisLabel;
  @Input() tooltipDisabled: boolean = false;
  @Input() gradient: boolean;
  @Input() showGridLines: boolean = true;
  @Input() activeEntries: any[] = [];
  @Input() schemeType: string;
  @Input() trimXAxisTicks: boolean = true;
  @Input() trimYAxisTicks: boolean = true;
  @Input() maxXAxisTickLength: number = 16;
  @Input() maxYAxisTickLength: number = 16;
  @Input() xAxisTickFormatting: any;
  @Input() yAxisTickFormatting: any;
  @Input() xAxisTicks: any[];
  @Input() yAxisTicks: any[];
  @Input() barPadding = 8;
  @Input() roundDomains: boolean = false;
  @Input() xScaleMax: number;
  @Input() showDataLabel: boolean = false;
  @Input() dataLabelFormatting: any;

  @Output() activate: EventEmitter<any> = new EventEmitter();
  @Output() deactivate: EventEmitter<any> = new EventEmitter();

  @ContentChild('tooltipTemplate') tooltipTemplate: TemplateRef<any>;

  dims: ViewDimensions;
  groupDomain: any[];
  innerDomain: any[];
  valueDomain: any[];
  xScale: any;
  yScale: any;
  transform: string;
  colors: ColorHelper;
  margin = [10, 20, 10, 20];
  xAxisHeight: number = 0;
  yAxisWidth: number = 0;
  legendOptions: any = [];
  dataLabelMaxWidth: any = {negative: 0, positive: 0};

  changeDetection: ChangeDetectionStrategy.OnPush;
  styleUrls: ['../common/base-chart.component.scss'];
  encapsulation: ViewEncapsulation.None;
  animations: [];

  constructor(private data: DataService) {}

  ngOnInit() {
    this.canShow = false;
    this.data.getCases().subscribe((results) => {
      this.processData(results);
    })
  }
  ngAfterContentInit() {
  }

  //"CASE_STATUS_TYPE_CD": "ACTIVE"
  processData(cases) {
    this.statusCount = [];
    this.chartData = [];
    cases.forEach(element => {
      // increment counter if status exists
      if(this.statusCount[element.CASE_STATUS_TYPE_CD]) {
        this.statusCount[element.CASE_STATUS_TYPE_CD]++;
      } else {
        this.statusCount[element.CASE_STATUS_TYPE_CD] = 1;
      }
    });
    for (var key in this.statusCount) {
      let singleEntry = {
        name: key,
        value: this.statusCount[key]
      };
      this.chartData.push(singleEntry);
    }
    this.canShow = true;
    console.log(this.chartData);

  }

  update(): void {
    //super.update();

    if (!this.showDataLabel) {
      this.dataLabelMaxWidth = {negative: 0, positive: 0};          
    }

    this.margin = [10, 20 + this.dataLabelMaxWidth.positive, 10, 20 + this.dataLabelMaxWidth.negative]; 

    this.dims = calculateViewDimensions({
      width: this.view[0],
      height: this.view[1],
      margins: this.margin,
      showXAxis: this.xAxis,
      showYAxis: this.yAxis,
      xAxisHeight: this.xAxisHeight,
      yAxisWidth: this.yAxisWidth,
      showXLabel: this.showXAxisLabel,
      showYLabel: this.showYAxisLabel,
      showLegend: this.legend,
      legendType: this.schemeType,
      legendPosition: this.legendPosition
    });

    //this.formatDates();

    this.groupDomain = this.getGroupDomain();
    this.innerDomain = this.getInnerDomain();
    this.valueDomain = this.getValueDomain();

    this.xScale = this.getXScale();
    this.yScale = this.getYScale();

    this.setColors();
    this.legendOptions = this.getLegendOptions();

    this.transform = `translate(${ this.dims.xOffset } , ${ this.margin[0] })`;
    }
  getGroupDomain(): any[] {
    const domain = [];

    for (const group of this.chartData) {
      if (!domain.includes(group.name)) {
        domain.push(group.name);
      }
    }

    return domain;
  }

  getInnerDomain(): any[] {
    const domain = [];

    for (const group of this.chartData) {
      for (const d of group.series) {
        if (!domain.includes(d.name)) {
          domain.push(d.name);
        }
      }
    }

    return domain;
  }
  getValueDomain(): any[] {
    const domain = [];
    let smallest = 0;
    let biggest = 0;
    for (const group of this.chartData) {
      let smallestSum = 0;
      let biggestSum = 0;
      for (const d of group.series) {
        if (d.value < 0) {
          smallestSum += d.value;
        } else {
          biggestSum += d.value;
        }
        smallest = d.value < smallest ? d.value : smallest;
        biggest = d.value > biggest ? d.value : biggest;
      }
      domain.push(smallestSum);
      domain.push(biggestSum);
    }
    domain.push(smallest);
    domain.push(biggest);

    const min = Math.min(0, ...domain);
    const max = this.xScaleMax
      ? Math.max(this.xScaleMax, ...domain)
      : Math.max(...domain);
    return [min, max];
  }
  getYScale(): any {
    const spacing = this.groupDomain.length / (this.dims.height / this.barPadding + 1);

    return scaleBand()
      .rangeRound([0, this.dims.height])
      .paddingInner(spacing)
      .domain(this.groupDomain);
  }

  getXScale(): any {
    const scale = scaleLinear()
      .range([0, this.dims.width])
      .domain(this.valueDomain);
    return this.roundDomains ? scale.nice() : scale;
  }

  groupTransform(group): string {
    return `translate(0, ${this.yScale(group.name)})`;
  }

  onClick(data, group?): void {
    if (group) {
      data.series = group.name;
    }

    //this.chartData.emit(data);
  }

  trackBy(index, item): string {
    return item.name;
  }

  setColors(): void {
    let domain;
    if (this.schemeType === 'ordinal') {
      domain = this.innerDomain;
    } else {
      domain = this.valueDomain;
    }

    //this.colors = new ColorHelper(this.scheme, this.schemeType, domain, this.customColors);
  }

  getLegendOptions() {
    const opts = {
      scaleType: this.schemeType,
      colors: undefined,
      domain: [],
      title: undefined,
      position: this.legendPosition
    };
    if (opts.scaleType === 'ordinal') {
      opts.domain = this.innerDomain;
      opts.colors = this.colors;
      opts.title = this.legendTitle;
    } else {
      opts.domain = this.valueDomain;
      opts.colors = this.colors.scale;
    }

    return opts;
  }

  updateYAxisWidth({ width }): void {
    this.yAxisWidth = width;
    this.update();
  }

  updateXAxisHeight({ height }): void {
    this.xAxisHeight = height;
    this.update();
  }

  onDataLabelMaxWidthChanged(event, groupIndex) {                
    if (event.size.negative)  {
      this.dataLabelMaxWidth.negative = Math.max(this.dataLabelMaxWidth.negative, event.size.width);
    } else {
      this.dataLabelMaxWidth.positive = Math.max(this.dataLabelMaxWidth.positive, event.size.width);
    }  
    if (groupIndex === (this.chartData.length - 1)) {
      setTimeout(() => this.update());
    }        
  }

  onActivate(event, group?) {
    const item = Object.assign({}, event);
    if (group) {
      item.series = group.name;
    }

    const idx = this.activeEntries.findIndex(d => {
      return d.name === item.name && d.value === item.value && d.series === item.series;
    });
    if (idx > -1) {
      return;
    }

    this.activeEntries = [ item, ...this.activeEntries ];
    this.activate.emit({ value: item, entries: this.activeEntries });
  }

  onDeactivate(event, group?) {
    const item = Object.assign({}, event);
    if (group) {
      item.series = group.name;
    }

    const idx = this.activeEntries.findIndex(d => {
      return d.name === item.name && d.value === item.value && d.series === item.series;
    });

    this.activeEntries.splice(idx, 1);
    this.activeEntries = [...this.activeEntries];

    this.deactivate.emit({ value: item, entries: this.activeEntries });
  }
}
