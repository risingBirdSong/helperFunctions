function combinationCalculator(dataSet: number, subset: number) {
  //to make it more official, use official variable names, but still expose more descriptive var names to user / caller :)
  let n = dataSet; let r = subset;
  return (
    (fctrl(n)) / (fctrl(r) * fctrl(n - r))
  )
}
function fctrl(num: number) {
  if (num === 1) {
    return 1;
  }
  else return num *= fctrl(num - 1);
}

console.log(combinationCalculator(4,3));

