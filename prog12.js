function ReverseAlphabets() {
    const alphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let result = "";

    
    for (let i = alphabets.length - 1; i >= 0; i--) {
        result += alphabets[i]; 
    }

    console.log(result);
}


ReverseAlphabets();
