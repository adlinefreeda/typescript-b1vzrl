export interface StringManipulationService <T>{
  //arrayFindMultiples():void;
  
  arrayFindMultiples(myArray:any):Array<T>;
  arraySeperate(myArray:any):Array<T>;
  arraySplit(myString:string):Array<T>;
  arraySort(myArray:any):Array<T>;
  arrayReplace(myArray:any):Array<T>;
}