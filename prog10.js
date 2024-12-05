function generateNumbers() {
    const result = [];
   
    
  
    for (let i = 1; i <= 5; i++) {
        result.push(i * 2);
    }

   
    for (let i = 1; i <= 5; i++) {
        result.push(i * 5);
    }

   
    for (let i = 1; i <= 5; i++) {
        result.push(i * 7);
    }

   
    for (let i = 1; i <= 5; i++) {
        result.push(i * 10);
    }

    return result;
}


const numbers = generateNumbers();
console.log("Generated Numbers:", numbers);
