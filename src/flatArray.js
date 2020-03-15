

const newArr = [1, 2, 3, 4].concat([5, 6, 7]);
 //=> [1,2,3,4,5,6]

const newArr1 = [1, 2, 3, 4].concat([4, 5, 6,[7, 8, 9]]);
 //=> [1,2,3,4,5,6,[7,8,9]]

 const newArr3 = [1, 2, 3, 4].concat([5, 6, 7], [1, 2, 3, 4]);
 //=> [1,2,3,4,5,6,7,1,2,3,4]

const newArr2 = [1, 2, 3, 4].concat.apply([], [[1, 2, 3, 4], [4, 5, 6,[7, 8, 9]]]); 
//=> [1,2,3,4,4,5,6,[7,8,9]]

const newArr4 = [].concat.apply([], [1, 2, 3,[5, 6, 7,[7, 8, 9]]]); 
//=> [1,2,3,5,6,7,[7,8,9]]


const newArr5 =  [1, 2, 3,[5, 6, 7,[7, 8,[88,99], 9]]].flat(2);
 //=> [1,2,3,5,6,7,7,8,[88,99],9]

 
const newArr6 =  [1, 2, 3,[5, 6, 7,[7, 8, 9]]].flat(Infinity);
 //=> [1,2,3,5,6,7,7,8,9]


function flatten(arr) {
return arr.reduce((acc, item) => {
    if (Array.isArray(item)) {
      acc = acc.concat(flatten(item));
    } else {
      acc.push(item);
    }
    return acc;
  }, []);
}
flatten([1,2,3,4,[5,6,7,[9,22]]]); 
//=>[1,2,3,4,5,6,7,8,9,22]



