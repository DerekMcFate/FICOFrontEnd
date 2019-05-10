import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class DataService {
  public analystData$: any ;
  public allData$: any;

  constructor(private http: HttpClient) {
    console.log("Constructor")
    this.getAllData().subscribe(
      (data) => {
        this.analystData$ = this.groupBy(data, "USER_ID");
        this.allData$ = this.groupBy(data, "CASE_ID");
        //console.log(this.analystData$);
      },
    );

  }
  //Returns Analyst data
  getAnalysts() {
    return this.http.get('assets/analystData.json');
  }
  getAllData() {
    return this.http.get('assets/mergedData.json');
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
    //console.log(array);
    var group = array.reduce(function(rv, x) {
      var combinedKey = Object.values(key).join("-");
      (rv[x[key]] = rv[x[key]] || []).push(x);
      return rv;
    }, {});
    //Prints the array to the console for viewing the data in browser

    //console.log("groupBy Object");
    //console.log(Object.values(group));
    console.log(group);
    return Object.values(group);

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

  public getOldestOpenCases(allCasesArr) {
    //console.log("ALLCASEARR:", allCasesArr);
    function Comparator(a, b) {
      if (a[0]['CASE_CREATED_DTTM'] > b[0]['CASE_CREATED_DTTM']) return -1;
      if (a[0]['CASE_CREATED_DTTM'] < b[0]['CASE_CREATED_DTTM']) return 1;
      return 0;
    }

    var oldestCases = allCasesArr.sort(Comparator).slice(0,3);
    //console.log("OLD", oldestCases);
    return oldestCases;
  }
  public getTimeActive(testCase) {
      let monthMap = {
        "JAN": 1, "FEB": 2, "MAR": 3, "APR": 4, "MAY": 5,
        "JUN": 6, "JUL": 7, "AUG": 8, "SEP": 9, "OCT": 10,
        "NOV": 11, "DEC": 12,
        }
      var caseDate = testCase[0]['CASE_CREATED_DTTM'];
      var year = "20" + caseDate.slice(7, 9);
      var month = monthMap[caseDate.slice(3, 6)];
      var day = caseDate.slice(0,2);
      var hours = caseDate.slice(10, 12);
      var minutes =  caseDate.slice(13, 15);
      var seconds = caseDate.slice(17,19);
      var ms = 0;
      //console.log(year, month);
      var oldDate = new Date(+year, month, day, hours, minutes, seconds, ms);
      var currentDate = new Date();
      //console.log("Old Date:", oldDate.toLocaleString());
      //console.log("Current Date:", currentDate.toLocaleString());
      var diff = Math.abs(oldDate.getTime() - currentDate.getTime());
      var daysSince = Math.ceil(diff / (1000 * 3600 * 24));
      var color = "black";
      if (daysSince > 14) {
        color = "red";
      }
      let retVal = {
        days: daysSince,
        color: color,
      }
      return retVal;
  }
  public getFastestAnalysts(analystArr) {
    function Comparator(a, b) {
      if (a[0]['CASES_PER_DAY'] > b[0]['CASES_PER_DAY']) return -1;
      if (a[0]['CASES_PER_DAY'] < b[0]['CASES_PER_DAY']) return 1;
      return 0;
    }
    var fastestAnalysts = analystArr.sort(Comparator).slice(0,3);
    return fastestAnalysts;
  }
  public getSlowestAnalysts(analystArr){
    function Comparator(a, b) {
      if (a[0]['CASES_PER_DAY'] < b[0]['CASES_PER_DAY']) return -1;
      if (a[0]['CASES_PER_DAY'] > b[0]['CASES_PER_DAY']) return 1;
      return 0;
    }
    var slowestAnalysts = analystArr.sort(Comparator).slice(0,3);
    return slowestAnalysts;
  }
  public getAnalystUserID(analyst){
    return analyst[0]['USER_ID'];
  }
  public getAnalystCasesPerDay(analyst){
    return analyst[0]['CASES_PER_DAY'];
  }
  public getAnalystCaseLevel(analyst){
    return analyst[0]['CASE_LEVEL_'];
  }
  public getAnalystCaseType(analyst){
    return analyst[0]['CASE_TYPE_'];
  }
  public getAnalystQueue(analyst){
    return analyst[0]['QUEUE_NAME'];
  }
  public getAnalystCasesCount(analyst){
    return analyst.length;
  }
  public getAnalyst(userID) {
    for (var i = 0; i < this.analystData$.length; i++) {
      if (this.getAnalystUserID(this.analystData$[i]) === userID) {
        return this.analystData$[i];
      }
    }
  }

  public getAnalystScoreColor(analyst){
    var score = this.getAnalystScore(analyst);
    if (score > 70){
      return '#00FF00';
    } else if (score < 30) {
      return '#FF0000';
    } else {
      return "";
    }
  }
  public getAnalystScore(analyst) {
    return analyst[0]['EFFICIENCY_SCORE'];
  }
}
