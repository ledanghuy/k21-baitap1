console.log("======================================================================");
console.log("Cau so 1 ");

function multiply(a, b) {
    console.log(a * b);
}
multiply(5, 10);
console.log("======================================================================");
console.log("Cau so 2 ");

function findMin(a, b, c) {

    let min = a;
    if (b < min) {
        min = b;

    } if (c < min) {
        min = c;
    }
    return min;

};
const boso1 = findMin(10, 5, 3);
console.log(boso1);
const boso2 = findMin(4, 5, 6);
console.log(boso2);

console.log("======================================================================");
console.log("Cau so 3 ");


const students =
    [
        { name: "Huy", score: 1 },
        { name: "AN", score: 3 },
        { name: "Bình", score: 4 },
        { name: "Cường", score: 8 },
        { name: "Dũng", score: 7 },
        { name: "Hòa", score: 9 },
        { name: "Phong", score: 2 },
        { name: "Giang", score: 10 }

    ];
threshold = 5;

function getTopStudents(students, threshold) {

    const newarr = [];
    for (let i = 0; i < students.length; i++) {
        if (students[i].score >= threshold) {
            newarr.push(students[i].name);

        }
    }
    return newarr;
};

const aaa = getTopStudents(students, threshold);
console.log(aaa);



console.log("======================================================================");
console.log("Cau so 4");

function calculateInterest(principal, rate, years) {

    let total = principal + principal * rate * years / 100;
    return total;

};
const bb = calculateInterest(10, 20, 5)
console.log(bb);
