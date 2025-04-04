function sum(num1 = 0, num2 = 0, num3 = 0) {
    return num1 + num2 + num3;
}
console.log(sum(1, 2, 3));
console.log(sum(1, 2));



function savings(amount = 50) {
    let savedMoney = 0;
    return savedMoney + amount;
}
console.log(savings(100));



function earning(name = "anonymous", salary = 0) {
    console.log(name, " : ", salary);
}
earning("jack", 5000000);
earning("jack", 5000000);
earning("jack", 5000000);



function squire(num = 1) {
    return num * num;
}
console.log(squire(5));



function productListing(name = "unknown product", price = 1) {
    console.log(name, " : ", price);
}
productListing("pant", 800);



function favBook(books = ["JS Book"]) {
    console.log(books);
}
favBook(["physics", "chemistry", "math", "biology", "js book"]);



function items({ price = 10, quantity = 1 } = {}) {
    console.log(`Price: ${price}, Quantity: ${quantity}`);
}
items({ price: 50, quantity: 2 });



function multiply(array = [5, 10, 15]) {
    const newAry = [];
    for (let item of array) {
        let mult = item * 2;
        newAry.push(mult);
    }
    return newAry;
}
const arry = [5, 2, 3];
console.log(multiply(arry));



function simpleInterest({ principle = 1000, rate = 5 } = {}) {
    return principle * rate / 100;
}
console.log(simpleInterest({ principle: 5000, rate: 10 }));



function salaryAndTax({ salary = 50000, tax = 10 } = {}) {
    const tAx = salary * tax / 100;
    return salary - tAx;
}
console.log(salaryAndTax({ salary: 100000, tax: 20 }));



// -------------template string----------
console.log(`The diffrence between 100 and 20 is: ${100 - 20}`);


const employee = {
    name: "jack",
    age: 23,
    salary: 100000
}
console.log(`The developer ${employee.name} age ${employee.age} got salary ${employee.salary}`);



const fruits = ['mango', 'banana', 'jackfruit'];
console.log(`my fav fruits is: ${fruits[0]}, ${fruits[1]}, ${fruits[2]}`);



const a = 50;
const b = 10;
console.log(`the division of a and b is ${a / b}`);



const person = {
    firstName: "amit",
    lastname: 'Kumar'
}
console.log(`Full Name: ${person.firstName} ${person.lastname}`);




const animal = ["cat", "dog", "elephant"];
console.log(`my favorite animal are ${animal[0]}, ${animal[1]} and ${animal[2]}`);



const studentName = {
    name: 'Jack',
    age: 21,
    results: [80, 88, 98]
}
console.log(`student name: ${studentName.name} age: ${studentName.age} his avarage marks for 3 subject is: ${(studentName.results[0] + studentName.results[1] + studentName.results[2]) / 3}`);