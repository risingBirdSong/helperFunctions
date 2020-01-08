function reverseLookup(obj: Object) {
    let returnObj = {};
    Object.entries(obj).forEach(val => {
        //@ts-ignore
        returnObj[val[1]] = val[0];
    })
    return returnObj;
}
