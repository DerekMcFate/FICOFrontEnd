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

  groupObjects(array, element) {
    //This function is designed to organize elements in an array based on one of it's common keys.
    var i = 0, val, index, values = [], result = [];
    for (; i < array.length; i++) {
      val = array[i][element];
      index = values.indexOf(val);
      if(index > -1)
        result[index].push(array[i]);
      else {
        values.push(val);
        result.push([array[i]]);
      }
    }
    return result
  }
}
