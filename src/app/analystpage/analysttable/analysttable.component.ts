import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-analysttable',
  templateUrl: './analysttable.component.html',
  styleUrls: ['./analysttable.component.scss']
})
export class AnalysttableComponent implements OnInit {

  elements: any = [];
  headElements =
    ['Score', 'Name, ID#', 'Average min./case', 'Assigned Queue', 'Case Level Expertise', 'Case Type Expertise', 'Cases Assigned'];

  constructor() { }

  ngOnInit() {
    for (let i = 1; i <= 15; i++) {
      this.elements.push({score: i * 23, id: 'User ' + i,
        avgtime: i,  assignedqueue: i + 1, caseexpertise: i + 2,
        casetypeexpertise: i + 3, casestotal: i + 4 });
    }
  }

}
