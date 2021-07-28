// Import stylesheets
import { StringManipulationService } from './app-service';

class StringManipulations<T> implements StringManipulationService<T> {
  // private myArray: T[] = [];
  myArray = [9, 15, 20, 50, 65, 80, 7, 'a', 'B'];
  myString = [10, 7, 13, 'a', 'c'];
  //objs :any[];
  // myArray:number[];

  arrayFindMultiples(myArray: any): Array<T> {
    var numbers = [];
    var objs = [];
    for (var item in this.myArray) {
      if (typeof this.myArray[item] == 'number') {
        // this.objs.push(this.myArray[item]);
        objs.push(this.myArray[item]);
      }
    }

    //for(let i=0;i<len;i++)
    for (item in objs) {
      if (objs[item] % 5 == 0 && objs[item] % 10 == 0) {
        console.log(objs[item]);
      }
    }
    return;
  }
  arraySeperate(myArray: any): Array<T> {
    var numbers = [];
    var objs = [];
    for (var item in this.myArray) {
      if (typeof this.myArray[item] !== 'number') {
        objs.push(this.myArray[item]);
      } else {
        numbers.push(this.myArray[item]);
      }
    }
    console.log(objs);
    console.log(numbers);
    return;
  }
  arraySplit(myString: string): Array<T> {
    var numbers = [];
    var objs = [];
    for (var item in this.myString) {
      if (typeof this.myString[item] == 'number') {
        // this.objs.push(this.myArray[item]);
        objs.push(this.myString[item]);
      }
    }
    const arr = objs;
    // console.log(objs);
    const isPrime = n => {
      if (n === 1) {
        return false;
      } else if (n === 2) {
        return true;
      } else {
        for (let x = 2; x < n; x++) {
          if (n % x === 0) {
            return false;
          }
        }
        return true;
      }
    };
    const primeSum = arr => {
      for (let i = 0; i < arr.length; i++) {
        if (!isPrime(arr[i])) {
          continue;
        }
        console.log(arr[i]);
      }
    };
    primeSum(arr);
    return;
  }

  arraySort(myArray: any): Array<T> {
    var numbers = [];
    var objs = [];
    for (var item in this.myArray) {
      if (typeof this.myArray[item] == 'number') {
        // this.objs.push(this.myArray[item]);
        objs.push(this.myArray[item]);
      }
    }
    var sorted = objs.sort();
    console.log('Returned string is : ' + sorted);
    /*for (item in objs) 
       //for(let i=0;i<len;i++)
        {
          if(((objs[item]%5)==0)&&(objs[item]%10)==0)
          {
            console.log(objs[item]); 
          }
        
        }  */
    return;
  }
  arrayReplace(myArray: any): Array<T> {
    var numbers = [];
    var objs = [];
    for (var item in this.myArray) {
      if (typeof this.myArray[item] == 'number') {
        // this.objs.push(this.myArray[item]);
        objs.push(this.myArray[item]);
      }
    }

    //for(let i=0;i<len;i++)
    for (item in objs) {
      if (objs[item] % 3 == 0) {
        // console.log(objs[item]);
        objs[item] = 5;
        console.log(objs[item]);
      } else {
        console.log(objs[item]);
      }
    }
    return;
  }
  disp() {
    var myArray1: any;
    var a = this.arrayFindMultiples(myArray1);
  }

  disp1() {
    var myArray1: any;
    var b = this.arraySeperate(myArray1);
  }
  disp2() {
    var myArray1: any;
    var b = this.arraySplit(myArray1);
  }
  disp3() {
    var myArray1: any;
    var b = this.arraySort(myArray1);
  }
  disp4() {
    var myArray1: any;
    var b = this.arrayReplace(myArray1);
  }
}
let StringManipulations1 = new StringManipulations<any>();
StringManipulations1.disp();
StringManipulations1.disp1();
StringManipulations1.disp2();
StringManipulations1.disp3();
StringManipulations1.disp4();
