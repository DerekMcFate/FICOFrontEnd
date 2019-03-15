import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { Analyst } from './analyst.component';
import { Queue } from './queue.component';
import { FPRScore } from './fprScore.component';
import { Case } from './case.component';
import { json } from 'd3';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  analyst$: Analyst;
  queue$: Queue;
  fprScore$: FPRScore;
  case$: Case;

  constructor(private http: HttpClient) {
    this.getJSON().subscribe(data => {

      //console.log(data);
    });
  }

  public getJSON(): Observable<any> {
    return this.http.get("queueData.json");
  }
}