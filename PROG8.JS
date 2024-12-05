function CS(marks) {
    let grade;

    if (marks >= 90) {
        grade = "A+";
        console.log('Excelent');
    } else if (marks >= 80) {
        grade = "A";
        
    } else if (marks >= 70) {
        grade = "B+";
    } else if (marks >= 60) {
        grade = "B";
    } else if (marks >= 50) {
        grade = "C+";
    } else {
        grade = "C";
    }

    return grade;
}


const students = [
    { name: "A", marks: 92 },
    { name: "B", marks: 75 },
    { name: "C", marks: 68 },
    { name: "D", marks: 54 },
    { name: "E", marks: 45 },
];


students.forEach((student) => {
    const grade = CS(student.marks);
    console.log(`${student.name} has been categorized as grade: ${grade} `);
});
