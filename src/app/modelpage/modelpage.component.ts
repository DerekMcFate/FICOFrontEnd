import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-modelpage',
  templateUrl: './modelpage.component.html',
  styleUrls: ['./modelpage.component.scss']
})
export class ModelpageComponent implements OnInit {

  constructor(private data: DataService) { }

  ngOnInit() {
    
  }

}
