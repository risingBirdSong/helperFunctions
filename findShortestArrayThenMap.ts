function shortestArray (arrA : any[], arrB : any[]) : any[] {
    let both = [arrA, arrB];
    return both.sort((a, b) => {
        return a.length - b.length;
    })[0];
}

shortestArray([1,2], [1,2,3,4,5]) //?
shortestArray([1,2,3,4,5], [1,2]) //?

function iterateShortestArray (arrayA : any[], arrayB : any[]) {
  return shortestArray(arrayA, arrayB).map(val => val);
}

iterateShortestArray([1,2,3], [1,2,3,4,5,6,7,8]); //?
iterateShortestArray([1,2,3,4,5,6,7,8], [1,2,3],); //?


//why did i make these lol?
