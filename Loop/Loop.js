const subjects = ['physics', 'biology', 'higher math', 'chemistry', 'bangla'];
for (const subject of subjects) {
    console.log(subject);
}

const foods = ['biriyani', "kabab", "goro", "morgi", 'vera', "vegitable"];
for (const food of foods) {
    console.log(food);
}

const birthYears = [2001, 2002, 2003, 2004, 2005, 2006];
for (const birthYear of birthYears) {
    console.log(birthYear);
}

const favPlayers = ['tamim', 'shakib', 'mashrafi', 'mushfiq', 'riyad', 'miraj', "taskin"];
for (const player of favPlayers) {
    console.log(player);
}

const examDate = ['12 april', '13 april', '14 april'];
for (const exam of examDate) {
    console.log(exam);
}


// while
let time = 1;
while (time <= 10) {
    console.log(time, "I will practice programming at least 3hours per day.");
    time++;
}


let num = 1;
while (num <= 20) {
    console.log(num);
    num++;
}


let nums = 50;
while (nums <= 100) {
    console.log(nums);
    nums++;
}


let number = 1;
while (number <= 10) {
    console.log(number * 3);
    number++;
}

/* let startNum = 111;
while (startNum >= 110) {
    console.log(startNum / 2);
    startNum++;
}
 */

let num50 = 50;
while (num50 <= 100) {
    console.log(num50);
    num50++;
}

let sumNum = 5;
let sum = 0;
while (sumNum <= 15) {
    sum = sum + sumNum;
    sumNum++;
}
console.log("sum", sum);


let rollNumber = 1;
let sumOfRoll = 0;
while (rollNumber <= 50) {
    sumOfRoll = rollNumber + sumOfRoll;
    rollNumber++;
}
console.log(sumOfRoll);

let numFrom21 = 21;
let sumFrom21 = 0;
while (numFrom21 <= 50) {
    sumFrom21 = numFrom21 + sumFrom21;
    console.log("sum", sumFrom21);
    numFrom21++;
}

let numFrom20 = 20;
let sumFrom20 = 0;
while (numFrom20 <= 40) {
    sumFrom20 = sumFrom20 + numFrom20;
    numFrom20++;
}
console.log("sum from 20-40: ", sumFrom20);



for (let i = 150; i <= 170; i++) {
    console.log(i);
}


let sumOfRollNum = 0;
for (let i = 31; i <= 58; i++) {
    sumOfRollNum = sumOfRollNum + i;
}
console.log("sum of roll num: ", sumOfRollNum);


let sumFrom25 = 0;
for (let i = 25; i <= 75; i++) {
    sumFrom25 = sumFrom25 + i;
}
console.log(sumFrom25);


// odd even

for (let i = 1; i < 20; i = i + 2) {
    console.log(i);
}

for (let i = 2; i <= 20; i = i + 2) {
    console.log(i);
}


for (let i = 20; i <= 50; i++) {
    if (i % 7 == 0) {
        console.log("devided by 7", i);
    }
}


for (let i = 40; i <= 80; i++){
    if (i % 5 == 0 && i % 7 == 0) {
        console.log("devided by 5 and 7: ", i);
    }
}


let sUm = 0;
for (let i = 1; i <= 40; i++){
    if (i % 13 == 0) {
        sUm = sUm + i;
    }
}
console.log("sUm: ", sUm);


for (let i = 1; i <= 50; i = i + 4){
    console.log(i);
}


for (let i = 0; i <= 100; i++){
    if (i % 9 == 0 && i % 6 == 0) {
        console.log(i);
    }
}

let sUM = 0;
for (let i = 1; i <= 50; i++){
    if (i % 4 == 0 && i % 3 == 0) {
        sUM = sUM + i;
    }
}
console.log(sUM);


for (let i = 1; i <= 30; i++){
    if (i > 15) {
        break;
    }
    console.log(i);
}

for (let i = 1; i <= 40; i++){
    if (i % 7 === 0) {
        continue;
    }
    console.log(i);
}


for (let i = 1; i <= 15; i++){
    if (i === 9) {
        continue;
    }
    console.log(i);
}

for (let i = 1; i <= 20; i++){
    if (i === 12) {
        continue;
    }
    console.log(i);
}

for (let i = 1; i <= 25; i++){
    if (i % 3 === 0) {
        continue;
    }
    console.log(i);
}

for (let i = 91; i <= 120; i++){
    if (i % 10 === 0) {
        break;
    }
    console.log("91-120: ",i);
}






