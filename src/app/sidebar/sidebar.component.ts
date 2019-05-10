import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss', '../app.component.scss']

})
export class SidebarComponent implements OnInit {

  constructor(public data: DataService) { }

  ngOnInit() {
   }

}
