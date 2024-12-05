const str = "bosco";


if (str.length % 2 !== 0) {
    
    const middleIndex = Math.floor(str.length / 2);
    
    const middleLetter = str[middleIndex];
    console.log(`The middle letter is "${middleLetter}".`);
} 
