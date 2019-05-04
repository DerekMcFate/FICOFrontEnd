import { Component, OnInit } from '@angular/core';
import {DataService} from "../../data.service";

@Component({
  selector: 'app-analystsfastest',
  templateUrl: './analystsfastest.component.html',
  styleUrls: ['./analystsfastest.component.scss']
})
export class AnalystsfastestComponent implements OnInit {
  public allData$: any ;
  constructor(private data: DataService) {
    console.log("Constructor")
    this.data.getAllData().subscribe(
      (data) => {
        this.allData$ = this.data.groupBy(data, "USER_ID");
        console.log(this.allData$);
      },
    );
  }
  ngOnInit() {

  }

}
