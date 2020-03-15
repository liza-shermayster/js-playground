function removeDuplicatesReduce(str) {
  return Object.keys(str.split(" ").reduce((acc, item) => {
        acc[item] = 0;
        return acc;
  }, {})).join(' ');
  
}
const str = "hello my my my friend";
removeDuplicatesReduce(str); //=> hello my friend



