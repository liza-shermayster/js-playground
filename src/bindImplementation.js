const foo = function() {
  console.log(this);
  //call from line 6 {bar:'hello}
  //call from line 18  {bar:'bye'}
  console.log(this.bar);
  //line-6 : hello
  //line-20 : bye
};
let baz = foo.bind({ bar: "hello" });
baz();

// Implement Function.prototype.bind()
function bind(fn, context) {
  return function() {
    fn.call(context);
  };
}

let baz1 = bind(foo, { bar: "bye" });
baz1();

