import { Component, OnInit } from '@angular/core';
import {DataService} from "../../data.service";

@Component({
  selector: 'app-analystsslowest',
  templateUrl: './analystsslowest.component.html',
  styleUrls: ['./analystsslowest.component.scss']
})
export class AnalystsslowestComponent implements OnInit {
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
