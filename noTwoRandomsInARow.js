class MyRandom {
    last = 0;

    constructor() {
        
    }

    getRandom() {
        let n;
        while ((n = Math.round(Math.random()*10)) == this.last);
        this.last = n; 
        return n;
    }
}

let random = new MyRandom();
console.log(random.getRandom());
