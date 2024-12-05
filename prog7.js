
function CE(TC, CA) {
    
    const AP = (CA / TC) * 100;

    
    if (AP>= 75) {
        console.log(`Eligible for semester exam `);
    } else {
        console.log(`Not eligible for semester exam`);
    }
}


const TC = 100; // Total number of classes conducted
const CA = 72; // Total number of classes attended by the student

// Call the function
CE(TC, CA);