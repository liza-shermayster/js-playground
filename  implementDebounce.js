// Implement debounce

function debounce(fn, time) {
  let setTimeoutId;
  return function() {
    if (setTimeoutId) {
      clearInterval(setTimeoutId);
    }
    setTimeoutId = setTimeout(() => {
      fn.apply(null, arguments);
      setTimeoutId = null;
    }, time);
  };
}

const test = debounce(print, 8000);

function print(text) {
  console.log(text);
}

test("hello");
test("bye");
test("shalom");


