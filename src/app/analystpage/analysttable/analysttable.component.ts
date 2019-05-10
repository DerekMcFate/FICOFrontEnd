import { Component, OnInit } from "@angular/core";
import {DataService} from "../../data.service";

@Component({
  selector: "app-analysttable",
  styleUrls: ["./analysttable.component.scss"],
  templateUrl: "./analysttable.component.html",
})
export class AnalysttableComponent implements OnInit {

  public elements: any = [];
  public headElements = ["Score", "Name, ID#", "Average cases/day", "Assigned Queue",
    "Case Level Expertise", "Case Type Expertise", "Cases Assigned"];
  private analystDone;
  private queuesDone;
  constructor(public data: DataService) {
  }

  public ngOnInit() {
  console.log("Init")
    for (let i = 0; i <= 14; i++) {
      this.elements.push({score: i * 23, id: "User " + i,
        avgtime: i,  assignedqueue: i + 1, caseexpertise: i + 2,
        casetypeexpertise: i + 3, casestotal: i + 4 });
    }
    // Returns the data from the queue json file

//      this.getUniqueUserIDs(this.combinedData$);
  }

  public getUniqueUserIDs(array) {
    var uniqueUserIDs = [];
    for(var i = 0; i < array.length; i++) {
      if(uniqueUserIDs.includes(array[i].USER_ID)) {
        ;
      } else {
        uniqueUserIDs.push(array[i].USER_ID);
      }
    }
    console.log(uniqueUserIDs);
    return uniqueUserIDs;
  }

}
