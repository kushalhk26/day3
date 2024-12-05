function Odd() {
    const alphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const result = [];

    for (let i = 0; i <= 26; i++) {
        if (i % 2 !== 0) { 
            result.push(alphabets[i - 1]); 
        }
    }

    //console.log("Odd Digit Alphabets:", result.join(" "));
    console.log(result.join(" "));
}


Odd();
