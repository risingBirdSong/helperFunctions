enum shortOrLong {
    "ascending" = "ascending",
    "descending" = "descending"
}


function sorter <T> (option : shortOrLong, returnAmount : number, ...arrs : T[][]) {
    let container = [...arrs];
    if (option == shortOrLong.ascending){
        container.sort((a : T[],b: T[])=>{
           return a.length - b.length;
        })
    }
    else {
        container.sort((a, b)=>{
            return b.length - a.length;
        })
    }
    return container.slice(0,returnAmount);
}

sorter(shortOrLong.ascending, 3,[1,2],[1,2,3],[1]); //?
sorter(shortOrLong.descending, 1,[1,2],[1,2,3],[1]); //?
