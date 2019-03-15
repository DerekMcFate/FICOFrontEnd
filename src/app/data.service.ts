import { Injectable } from '@angular/core';
import { Analyst } from './analyst.component';
import { Queue } from './queue.component';
import { FPRScore } from './fprScore.component';
import { Case } from './case.component';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  analyst$: Analyst;
  queue$: Queue;
  fprScore$: FPRScore;
  case$: Case;

  constructor() {
    this.csvToJson()
  }

  async csvToJson() {
    const csvFile="FICO_Data.csv"
    const csv=require("csvtojson")
    csv()
    .fromFile(csvFile)
    .then((jsonObj)=>{
      console.log(jsonObj);
    })
    const jsonArray=csv().fromFile(csvFile);
  }
  getModels() {

  }
}