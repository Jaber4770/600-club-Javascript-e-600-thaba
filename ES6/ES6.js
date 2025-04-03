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



