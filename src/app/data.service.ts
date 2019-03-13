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


  constructor() { }
}