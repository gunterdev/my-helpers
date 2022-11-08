/**
* Python zip() in Javascript
*/
function zip(...args){
  console.time("start")
  if(args.some((element) => !Array.isArray(element))) 
    throw new Error();
  if(args.length === 0) return [];
  minIteratorValue = args[0].length;
  //get shortest array
  if(args.length > 1){
    for (arr of args){
      const arrLength = arr.length
      if(arrLength < minIteratorValue) {
        minIteratorValue = arrLength;
      }
    }
    console.log(minIteratorValue);
  }
  let zippedArray = [];
  for (let x = 0; x < minIteratorValue; x++){
    zippedArray.push(args.map((arr) => arr[x]));
  }
  console.timeEnd("start")
  return zippedArray;
}
