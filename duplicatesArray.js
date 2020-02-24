const str = "this is a a a a a test test string";

function removeDuplicatesSet(str) {
  const arr = str.split(" ");
  return [...new Set(arr)];
}
removeDuplicatesSet(str); //=> ['this','is','a','test','string']

function removeDuplicatesObject(str) {
  const arr = str.split(" ");
  const newObj = {};
  for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    newObj[element] = 0;
  }
  return Object.keys(newObj).join(' ');
}
removeDuplicatesObject(str); //=> this is a test string

function removeDuplicatesFilter(str){
    const arr = str.split(" ");
    const newArr = arr.filter((item,index)=> arr.indexOf(item)===index);
    console.log(newArr.join(' '));
    
    return newArr.join(' ');
 
}
removeDuplicatesFilter(str); //=> this is a test string