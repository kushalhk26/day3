
function number() {
    const results = [];
    for (let num= 1; num<= 100; num++) {
        
           let i=num;
        
        if (i % 2 === 0) {
            i *= 5;
        }

        
        if (i % 3 === 0) {
            i /= 3;
        }

        
        results.push(i);
    }
    return results;
}


const finalResults = number();
console.log(" Result:", finalResults);
