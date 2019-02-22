import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-analystsubpagedetailed',
  templateUrl: './analystsubpagedetailed.component.html',
  styleUrls: ['./analystsubpagedetailed.component.scss']
})
export class AnalystsubpagedetailedComponent implements OnInit {

  constructor() { }

  optionsSelect: Array<any>;
  ngOnInit() {
    this.optionsSelect = [
      { value: '1', label: 'Option 1' },
      { value: '2', label: 'Option 2' },
      { value: '3', label: 'Option 3' }
    ];
  }

}
