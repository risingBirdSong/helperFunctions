let stringnames = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
let mapped = stringnames.map(function (name, n) {
    //@ts-ignore
  return this[name] = function () { return  `test of ${name}`};
});
