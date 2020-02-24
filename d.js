// debounce

function debounce(fn, ms) {
    let d;
    let lastCall;
    setTimeout(() => {
        fn(d);
    }, ms);
    return function(x) {
        let prevCall = lastCall;
        lastCall = Date.now();
        d = x;
    };
}

const print = console.log;
const fireEvent = debounce(print, 100);
let count = 0;
fireEvent(count);
count++;
fireEvent(count);
// fireEvent(++count);
// const intr = setInterval(() => {
//     count++;
//     fireEvent(count);
// }, 100);

// setTimeout(()=> {
//     clearInterval(intr);
// }, 1500);

