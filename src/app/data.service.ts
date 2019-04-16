import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }
  //Returns Analyst data
  getAnalysts() {
    return this.http.get('assets/analystData.json');
  }
  //Returns Case data
  getCases() {
    return this.http.get('assets/casesData.json');
  }
  //Returns Model data
  getModels() {
    return this.http.get('assets/fprData.json');
  }
  //Returns Queue data
  getQueues() {
    return this.http.get('assets/queueData.json');
  }
  groupBy(array, key) {
    //Reorganizes the given array using the provided key. The key used needs to be a key between all objects in the json array.
    //For example when using queueData.json as the array, 'CLIENT_ID' or 'CASE_STATUS' can be used as the key.
    var group = array.reduce(function(rv, x) {
      (rv[x[key]] = rv[x[key]] || []).push(x);
      return rv;
    }, {});
    //Prints the array to the console for viewing the data in browser

    //console.log("groupBy Object");
    //console.log(Object.values(group));
    return Object.values(group);
    
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
