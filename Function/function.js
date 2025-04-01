function juiceKhao() {
    console.log('ei naw lebor jouce.');
}
juiceKhao();

function myRoutine() {
    console.log("ghom theke uthe coffee khai");
    console.log("tar por pc open kori");
    console.log("js er book pori");
}
myRoutine();

function fmaily() {
    console.log("mom")
    console.log("dad")
    console.log("jisun")
    console.log("sijan")
    console.log("mim")
}
fmaily();

function taskDone() {
    console.log("programming in the morning")
    console.log("delivery")
    console.log("cooking")
    console.log("delivery")
    console.log('programming')
}
taskDone();

function greetMe() {
    console.log("Good Morning! Have a great day!");
}
greetMe();

function getFavFriends() {
    console.log('rifat');
    console.log('shawon');
    console.log('mithu');
}
getFavFriends();

function introductionMyself() {
    const myself = {
        name: "jack",
        age: 23,
        address: 'bucharest, ro',
        phone: +40737778201,
        height: 5.6,
        favFood: 'biriyani'
    }
    for (let clue in myself) {
        console.log(clue, myself[clue]);
    }
}
introductionMyself();


// ---------------------------
function dadSonAgeSum(dad, son) {
    const sumOfAge = dad + son;
    console.log("sum of dad ans son's age: ", sumOfAge);
}

dadSonAgeSum(30, 2);


function multiplication(num1, num2) {
    const mult = num1 * num2;
    console.log("multiplication of 2 numbers is: ", mult);
}
multiplication(15, 20);


function sumOfMarks(math, physics, chemistry) {
    const sum = math + physics + chemistry;
    console.log('sum of 3 subjects is: ', sum);
}
sumOfMarks(95, 88, 92);


function findAge(yearOfBirth, todaysYear) {
    const age = todaysYear - yearOfBirth;
    console.log('your age is: ', age);
}
findAge(2001, 2025);


function buyKodo(money) {
    const law = money / 35;
    console.log("you can buy ", law, 'law');
}
buyKodo(200);


function avarage(num1, num2, num3, num4) {
    const sum = num1 + num2 + num3 + num4;
    const avarage = sum / 4;
    console.log('avarage of 4 numbers: ', avarage);
}
avarage(10, 20, 30, 40);


function sellingPrice(buyingPrice) {
    const sellingPrice = buyingPrice + 250;
    console.log("dokandar sell korbe", sellingPrice);
}
sellingPrice(500);


function findAge100(myBirthYear) {
    const age100 = 100 - myBirthYear;
    console.log('you need ', age100, ' to get age 100 year.');
}
findAge100(24);


function mobileUseTime(perDayTime) {
    const month = 30;
    const monthlyPhoneUsetime = perDayTime * month;
    console.log("you waste ", monthlyPhoneUsetime, " hour time");
}
mobileUseTime(4);


function finding10(num) {
    if (num > 10) {
        return true;
    }
    return false;
}
const result = finding10(11);
console.log(result);


function devidedBy13(num) {
    if (num % 13 === 0) {
        return true;
    }
    return false;
}
const resultOfDivby13 = devidedBy13(13);
console.log(resultOfDivby13);


function foodCost(rice, curry, drinks) {
    const sum = rice + curry + drinks;
    return sum;
}
const foodCosts = foodCost(30, 45, 15);
console.log(foodCosts);


function voting(age) {
    if (age >= 18) {
        return "Eligible for voting.";
    }
    return "Not Eligible";
}
const checkVoting = voting(20);
console.log(checkVoting);


function findLength(text) {
    return text.length;
}
console.log(findLength("Hello World!"));


function avarageOf3Num(num1, num2, num3) {
    const sum = num1 + num2 + num3;
    return sum / arguments.length;
}
console.log(avarageOf3Num(10, 20, 30));


function negativeFinder(num) {
    if (num < 0) {
        return num * -1;
    }
    return 'put a negative number';
}
console.log(negativeFinder(-2));


// ------------------------------------

function findOddOrEven(array) {
    const length = array.length;
    if (length % 2 === 0) {
        return "this array has even numbers of element";
    }
    else {
        return "this array has odd numbers of element";
    }
}
const array = [12, 23, 34, 43, 55, 66, 78, 876, 564, 5, 33, 4, 21];
const resullt = findOddOrEven(array);
console.log(resullt);


function returnFirstLetter(name) {
    const singleLetter = name.slice('');
    return singleLetter[0];
}
const name = "Jack";
const firstLetter = returnFirstLetter(name);
console.log(firstLetter);


function multOrDevide(number) {
    if (number > 10) {
        return number / 10;
    }
    else {
        return number * 10;
    }
}
const number = 10;
console.log(multOrDevide(number));


function sumOfArrayElement(array) {
    const firstElement = array[0];
    const secondElement = array[1];
    return firstElement + secondElement;
}
console.log(sumOfArrayElement([12, 34, 56, 78]));


function n(n) {
    if (n > 0) {
        return n * 2;
    }
    else {
        return n * 3;
    }
}
console.log(n(10));


function nameLength(name1, name2) {
    if (name1.length > name2.length) {
        return true;
    }
    else {
        return false;
    }
}
console.log(nameLength('jack', 'joe'));


function twoNum(num1, num2) {
    const multi = num1 * num2;
    if (multi > 100) {
        return multi / 2;
    }
    return multi;
}
console.log(twoNum(10, 40));


// -----------------------------------
function sumOfOddNum(array) {
    let sum = 0;
    for (let element of array) {
        if (element % 2 === 1) {
            sum = sum + element;
        }
    }
    return sum;
}
console.log(sumOfOddNum([5, 15, 8, 7]));


function findSmallNum(array) {
    const num1 = array[0];
    const num2 = array[1];
    if (num1 > num2) {
        return num2;
    }
    else {
        return num1;
    }
}
console.log(findSmallNum([20, 45, 78]));


function ageKarchopi(age) {
    if (18 > age) {
        return 18;
    } else if (age > 45) {
        return 45;
    }
    else {
        return age;
    }
}
console.log(ageKarchopi(19));


function dividedBy4(array) {
    let sum = 0;
    for (let i of array) {
        if (i % 4 === 0) {
            sum += i;
        }
    }
    return sum;
}
console.log("sum: ", dividedBy4([2, 3, 4, 5, 6, 7, 8, 32, 45]));


function identifyBy20(num) {
    if (num < 20) {
        return num * 2;
    }
    else {
        return num / 20;
    }
}
console.log(identifyBy20(3));


function oddNumSum(array) {
    let sum = 0;
    for (let i of array) {
        if (i < 0) {
            sum += i;
        }
    }
    return sum;
}
console.log(oddNumSum([-12, 2, -343, 5, 4, -56, 5, 556]));


function dividedBy3(array) {
    let sum = 0;
    for (let i of array) {
        if (i % 3 === 0) {
            sum += i;
       }
    }
    return sum;
}
console.log(dividedBy3([11, 22, 31, 90, 34, 565, 64, 75, 60, 58, 59, 99, 55]));