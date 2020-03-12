Array.prototype.myFilter = function(cb) {
  const newArray = [];
  for (let index = 0; index < array.length; index++) {
    const element = this[index];
    if (cb(element)) {
      newArray.push(element);
    }
  }
  return newArray;
};

const cond = i => i === 6;
const arr = [1, 3, 6, 7];
arr.myFilter(cond); //=> [6]
arr.filter(cond); //=> [6]
