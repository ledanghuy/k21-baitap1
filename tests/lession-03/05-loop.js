console.log("======================================================================");
console.log("Cau so 1 ");
let sum = 0;
for (let i = 0; i <= 100; i++) {
    sum = sum + i;

}
console.log(sum);
console.log("======================================================================");
console.log("Cau so 2 ");

for (let i = 2; i <= 9; i++) {
    for (let j = 1; j <= 10; j++) {
        console.log(i * j);
    }
}

console.log("======================================================================");
console.log("Cau so 3 ");

const mangsole = [];
for (let i = 1; i <= 99; i++) {
    if (i % 2 === 1) {

        mangsole.push(i);

    }

}
console.log(mangsole);

console.log("======================================================================");
console.log("Cau so 4 ");

for (let i = 1; i <= 10; i++) {
    console.log("user" + i + "@example.com");
}
console.log("======================================================================");
console.log("Cau so 5 ");

let tongdoanhthu =0;
const mangdoanhthu =
    [
        { month: 1, total: 1 },
        { month: 2, total: 2 },
        { month: 3, total: 3 },
        { month: 4, total: 4 },
        { month: 5, total: 5 },
        { month: 6, total: 6 },
        { month: 7, total: 7 },
        { month: 8, total: 8 },
        { month: 9, total: 9 },
        { month: 10, total: 10 },
        { month: 11, total: 11 },
        { month: 12, total: 12 }
    ];

for (let i=0;i<mangdoanhthu.length;i++)
{
    tongdoanhthu=tongdoanhthu + mangdoanhthu[i].total;
}
console.log(tongdoanhthu);