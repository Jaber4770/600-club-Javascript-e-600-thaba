// conversion
function inchToFeet(inch) {
    return inch / 12;
}
console.log(inchToFeet([75]));


function mileToGoj(mile) {
    const goj = mile * 1760;
    return goj;
}
console.log(13, "mile = ", mileToGoj(13), "goj");


function kwhToCiloCal(kwh) {
    return kwh * 860;
}
console.log(5, "kwh = ", kwhToCiloCal(5), "Cilocalory");


function hourToSecond(hour) {
    return hour * 3600;
}
const hour = 2;
console.log(hour, "hour = ", hourToSecond(hour), "second");


function cmTometer(cm) {
    return cm / 100;
}
const cm = 345;
console.log(cm, "cm = ", cmTometer(cm), " m");


function inchTocm(inch) {
    return inch * 2.54;
}
const inch = 320;
console.log(inch, "inch = ", inchTocm(inch), "cm");


function poundToKg(pound) {
    return pound * 0.453;
}
const pound = 5;
console.log(pound, "pound = ", poundToKg(pound), 'kg');


function gojToMeter(goj) {
    return goj * 0.91;
}
const goj = 300;
console.log(goj, " goj = ", gojToMeter(goj), 'm');


// ------------------------------------------------

function taxCalculation(amount) {
    if (amount <= 50000) {
        return 10;
    } else if (amount >= 50001 && amount < 100000) {
        return 20;
    } else if (amount >= 100001 && amount < 200000) {
        return 30;
    } else {
        return (amount * 40 / 100);
    }
}
console.log('tax: ', taxCalculation(1000001));



function deliveryCost(weight) {
    if (weight <= 10) {
        return 100;
    } else if (weight <= 20) {
        return 300;
    } else if (weight <= 50) {
        return 1000;
    } else {
        return (weight * 100);
    }
}
const weight = 51;
console.log('total cost of', weight, "kg is: ", deliveryCost(weight));



function gradeCalculator(marks) {
    if (marks >= 80 && marks <= 100) {
        return "A";
    } else if (marks >= 70 && marks <= 79) {
        return "B";
    } else if (marks >= 60 && marks <= 69) {
        return "C";
    } else if (marks >= 50 && marks <= 59) {
        return "D";
    } else if (marks < 50 && marks >= 0) {
        return "F";
    }
}
console.log("your grade is: ", gradeCalculator(80));



function oddNumSum(array) {
    let oddNum = [];
    let sumOfOddNum = 0;
    for (let num of array) {
        if (num % 2 !== 0) {
            oddNum.push(num);
        }
    }
    for (let num of oddNum) {
        sumOfOddNum += num;
    }
    return sumOfOddNum;
}
const numsArray = [12, 23, 324, 34, 5, 43, 45, 67, 89, 8, 77];
console.log("sum of odd num from array: ", oddNumSum(numsArray));



function findAvarageOfEvenNum(array) {
    let evenNum = [];
    let evenNumSum = 0;
    for (let num of array) {
        if (num % 2 === 0) {
            evenNum.push(num);
        }
    }
    for (let num of evenNum) {
        evenNumSum += num;
    }
    const avg = evenNumSum / evenNum.length;
    return avg;
}
const numsAray = [12, 23, 324, 34, 5, 43, 45, 67, 89, 8, 77];
console.log("sum of even number is: ", findAvarageOfEvenNum(numsAray));



function findOddNumAndMultiply(array) {
    let newArray = [];
    for (let num of array) {
        if (num % 2 !== 0) {
            const value = num * 2;
            newArray.push(value);
       }
    }
    return newArray;
}
const numAray = [12, 23, 324, 34, 5, 43, 45, 67, 89, 8, 77];
console.log("2x of odd number array is: ", findOddNumAndMultiply(numAray));


















