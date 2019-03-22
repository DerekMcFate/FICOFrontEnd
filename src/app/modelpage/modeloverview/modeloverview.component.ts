import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-modeloverview',
  templateUrl: './modeloverview.component.html',
  styleUrls: ['./modeloverview.component.scss']
})
export class ModeloverviewComponent implements OnInit {

  fprScores$: Object;
  
  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.getModels().subscribe(
      data => this.fprScores$ = data
    );
  }

}
