function f(n, m){
    function func(...values) {
        val = [...values]
        bucket = []
        sortedVal = []
        val.sort()
        bSize = 0
        for(let i = 0; i < parseInt(n/m); i++) {
            for(let j = 0; j <  m; bSize++, j++) {
                bucket.unshift(val[bSize])
            }
            for (let j = 0; j < m;  j++) {
                sortedVal.push(bucket[j])
            }
        }
        console.log(sortedVal)
    }
    if (n % m != 0){
        console.log(`Invalid input (${n} is not divisible by ${m})`)
    }
    else {
        return func
    }
}
let innerFunc = f(8, 2)
if (innerFunc != undefined) {
    innerFunc(6, 7, 4, 8, 1, 3, 2, 5)
}