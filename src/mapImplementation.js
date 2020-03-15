function map(fn, array) {
  let newArray = [];
  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    newArray.push(fn(element));
  }
  return newArray;
}
function actionFn(element) {
  return element + 3;
}

map(actionFn,[1,2,3]); // => [4,5,6]
