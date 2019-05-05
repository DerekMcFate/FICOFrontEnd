import { Component, OnInit } from '@angular/core';
import {DataService} from "../data.service";

@Component({
  selector: 'app-analystpage',
  templateUrl: './analystpage.component.html',
  styleUrls: ['./analystpage.component.scss']
})

export class AnalystpageComponent implements OnInit {

  analysts$: Object;
  constructor(private data: DataService) { }

  ngOnInit() {

    //Returns the data from the queue json file
    this.data.getAnalysts().subscribe(
      data => this.analysts$ = data
    );


  }
  getThree(array) {
    return [array[0], array[1], array[2]];
  }

}
