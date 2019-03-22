import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getAnalysts() {
    return this.http.get('assets/analystData.json');
  }

  getCases() {
    return this.http.get('assets/casesData.json');
  }

  getModels() {
    return this.http.get('assets/fprData.json');
  }
  
  getQueues() {
    return this.http.get('assets/queueData.json');
  }
}
