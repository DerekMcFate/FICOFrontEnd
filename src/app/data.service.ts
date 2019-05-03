import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

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
  //Returns Queue data Obeservable
  getQueues() {
    return this.http.get('assets/queueData.json');
  }
  groupBy(array, key) {
    //Reorganizes the given array using the provided key. The key used needs to be a key between all objects in the json array.
    //For example when using queueData.json as the array, 'CLIENT_ID' or 'CASE_STATUS' can be used as the key.
    var helper = {};
    var group = array.reduce(function(rv, x) {
      var combinedKey = Object.values(key).join("-");
      (rv[x[key]] = rv[x[key]] || []).push(x);
      return rv;
    }, {});
    //Prints the array to the console for viewing the data in browser

    console.log("groupBy Object");
    console.log(Object.values(group));
    return Object.values(group);

  }

  toJson() {
    return this.http.get('assets/fprData.json').pipe(map(data => {}))
  }

  mergeData(array1, array2, key) {
    //***Deprecated***//
    //This function is designed to merge two data arrays based on a key shared between them.
    //console.log("Merged Data: ", res);
    // console.log("MergeData called");
    // console.log("firstArray: ", array1);
    // console.log("secondArray: ", array2);
    // var newArray = [];
    // var array11 = Object.values(array1);
    // var array22 = Object.values(array2);
    // //Get keys
    // var masterKey = Object.values(key).join("-");
    // var keyArr = [];
    // console.log(key[1]);
    // for(var i = 0; i < array1.length; i++) {
    //   //If the key doesn't exist, add it to the key array
    //   for(var j = 0; j < array1[i].length; j++) {
    //     if(!keyArr.includes((array1[i][j][key[0]] + "-" + array1[i][j][key[1]]))) {
    //       //console.log((array1[i][j][key[0]] + "-" + array1[i][j][key[1]]));
    //       keyArr.push((array1[i][j][key[0]] + "-" + array1[i][j][key[1]]));
    //     } else {
    //       console.log("Nothing");
    //     }
    //   }
    // }
    //Get array1 values
    // for(var i = 0; i < array1.length; i++) {
    //   for(var j = 0; j < array1[i].length; j++) {
    //     for(var k = 0; k < keyArr.length; k++) {
    //       if(keyArr[k] === (array1[i][j][key[0]] + "-" + array1[i][j][key[1]])) {
    //         console.log("Hey", keyArr[k]);
    //       } else {
    //         console.log(array1[i][j]);
    //       }
    //     }
    //   }
    // }
    //Get array2 values

    //Return new array
    //return newArray
  //   console.log(key);
  //   var keyMap = {};
  //   for(var i = 0; i < 2; i++) {
  //     for(var j = 0; j < array1.length; j++) {
  //       var id = array1[j][key];
  //       if(!keyMap[id]) {
  //         keyMap[id] = {};
  //       }
  //       for(var element in array1[j]) {
  //         keyMap[id][element] = array1[j][element];
  //       }
  //     }
  //     for(var j = 0; j < array2.length; j++) {
  //       var id = array2[j][key];
  //       if(!keyMap[id]) {
  //         keyMap[id] = {};
  //       }
  //       for(var element in array2[j]) {
  //         keyMap[id][element] = array2[j][element];
  //       }
  //     }
  //   }

  //   var newArray = [];
  //   for(var property in keyMap) {
  //     newArray.push(keyMap[property]);
  //   }
  //   console.log("Merged Data!\n");
  //   console.log(newArray);
  //   return newArray;
  }

}
