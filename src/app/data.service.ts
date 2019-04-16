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
    console.log("Grouped Objects!\n");
    console.log(result);
    return result
  }

  mergeData(array1, array2, key) {
    //This function is designed to merge two data arrays based on a key shared between them.
    var keyMap = {};
    for(var i = 0; i < 2; i++) {
      for(var j = 0; j < array1.length; j++) {
        var id = array1[j][key];
        if(!keyMap[id]) {
          keyMap[id] = {};
        }
        for(var element in array1[j]) {
          keyMap[id][element] = array1[j][element];
        }
      }
      for(var j = 0; j < array2.length; j++) {
        var id = array2[j][key];
        if(!keyMap[id]) {
          keyMap[id] = {};
        }
        for(var element in array2[j]) {
          keyMap[id][element] = array2[j][element];
        }
      }
    }

    var newArray = [];
    for(var property in keyMap) {
      newArray.push(keyMap[property]);
    }
    console.log("Merged Data!\n");
    console.log(newArray);
    return newArray;
  }
}
