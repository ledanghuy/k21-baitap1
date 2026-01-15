console.log("======================================================================");
console.log("Cau so 1 ");

const car =
{

    make: "Toyota",
    model: "Corolla",
    year: 2021
};
console.log(car.year);
console.log("======================================================================");
console.log("Cau so 2 ");

const person =
{
    name: "Le Dang Huy",
    address:
    {
        street: "Tran Khat Chan",
        city: "Ha Noi",
        country: "Viet Nam"

    }
};
console.log(person.address.street);
console.log("======================================================================");
console.log("Cau so 3 ");

const student =
{
    name: "AAAAAAAAAAAAAAAAAA",
    grades:
    {
        math: 10,
        english: 8

    }

};
console.log(student.grades["math"]);
console.log("======================================================================");
console.log("Cau so 4 ");

const setting =
{

    volume: 100,
    brightness: 8
};
setting.volume = 50;
console.log(setting);
console.log("======================================================================");
console.log("Cau so 5 ");

const bike =
{

}
bike.color = "red";
console.log("======================================================================");
console.log("Cau so 6 ");

const employee =
{

    name: "Huy LD",
    age: 35


};
delete employee.age;
console.log("======================================================================");
console.log("Cau so 7 ");

const school =
{
    classA: ["An", "Bình", "Châu"],
    classB: ["Đào", "Hương", "Giang"]
}
console.log(school);