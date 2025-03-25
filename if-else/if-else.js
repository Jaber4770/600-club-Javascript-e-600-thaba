const time = 6;
if (time > 5) {
    console.log("get nasta from ammo.");
} else {
    console.log("get jharor bari");
}

const login = true;
if (login == true) {
    console.log("Welcome!");
} else {
    console.log("Get Lost!");
}

const myRun = 5;
if (myRun === 5) {
    console.log("get chocolate");
}
else {
    console.log("You will have mota vuri.");
}

const myMarks = 85;
if (myMarks > 80) {
    console.log("baba will buy a bike for me.");
} else {
    console.log("no bike");
}

const movieShowTime = 8;
if (movieShowTime < 9) {
    console.log("i wil watch the movie.");
}
else {
    console.log("nakee tel diye ghomabo.");
}

const temparature = 30;
if (temparature >= 30) {
    console.log("Turn on the Air Conditioner.");
} else {
    console.log("kombol mori diye ghomabo.");
}


const age = 18;
const height = 65;
if (age > 18 && height > 60) {
    console.log("gari thelo");
} else {
    console.log("garite boshe thako");
}

const math = 82;
const english = 87;
if (math > 80 || english > 85) {
    console.log("you can continue study");
}
else {
    console.log("toke biye diye dibo.");
}

const gpa = 5;
const earning = 9200;
if (gpa === 5 && earning <= 10000) {
    console.log("you will get scholarship.");
}
else {
    console.log("you will not get scholarhsip")
}


const candidateAge = 29;
const experience = 3;
if (candidateAge < 30 && experience > 2) {
    console.log("you can seat for the exam.");
} else {
    console.log("sorry.");
}

const hasEgg = 13;
const hasChicken = false;
if (hasEgg > 12 || hasChicken === true) {
    console.log('dimer korma hobe');
} else {
    console.log("pawroti and kola khabo.");
}


const bodyTemparature = 98;
const hasKashi = false;
if (bodyTemparature >= 100 && hasKashi == true) {
    console.log("go to doctor");
}
else {
    console.log("kathha mori diye suiye thako");
}

const attendance = 78;
const submitAssignment = false;
if (attendance > 80 && submitAssignment === true) {
    console.log("you can seat for the exam.");
} else {
    console.log("you can not seat for the exam.");
}


const electricity = true;
const mobileCharge = false;
if (electricity === false && mobileCharge === false) {
    console.log("you will study");
}
else {
    console.log("you will play video game.");
}

const shirtPrice = 1200;
const hasCoupon = true;
if (shirtPrice > 1000 && hasCoupon === true) {
    console.log(shirtPrice - (shirtPrice * 20 / 100));
}
else {
    console.log("no discount");
}


// discount:

const price = 4500;
if (price >= 6000) {
    const discount = (price / 100) * 15;
    const pay = price - discount;
    console.log(pay);
}
else if (price >= 3000) {
    const discount = (price / 100) * 5;
    const pay = price - discount;
    console.log(pay);
}


{
    const age = 6;
    if (age <= 12) {
        console.log("free food");
    }
    else if (age >= 60) {
        console.log("get 50% discount");
    }
    else {
        console.log("you have to pay full bill.")
    }

}



const balance = 1300;
if (balance < 1000) {
    console.log(
        "deposit money"
    )
} else if (balance > 1000 && balance < 5000) {
    console.log("bindas life enjoy koro");
}
else if (balance > 5000) {
    console.log("you are rich. marry me.");
}


const marks = 85;
if (marks < 50) {
    console.log("you fail.");
} else if (marks > 50 && marks < 80) {
    console.log("passed");
} else if (marks > 80) {
    console.log("A+")
}

const totalPage = 446;
if (totalPage < 100) {
    console.log("small size book");
} else if (totalPage > 100 && totalPage < 500) {
    console.log("mid size book");
} else if (totalPage > 500) {
    console.log("heart attack size book");
}


const temp = 15;
if (temp <= 0) {
    console.log("ice");
}
else if (temp > 0 && temp < 20) {
    console.log("cool cool");
}
else if (temp > 20) {
    console.log("hot hot");
}

const level = 14;
if (level < 10) {
    console.log("novice");
} else if (level > 10 && level < 50) {
    console.log("expert");
} else if (level > 50) {
    console.log("Pro Gamer");
}

// movie & popcorn
const money = 400;
const popcornPrice = 40;
if (money >= 300) {
    console.log("going to watch movie");
    if (popcornPrice <= 50) {
        console.log
            ("buying popcorn");
    }
    else {
        console.log("popcorn is expensive");
    }
} else {
    console.log("home alone");
}


const gotInvitation = true;
const pocketMoney = 1100;
if (gotInvitation == true) {
    if (pocketMoney >= 1000) {
        console.log("buying a gift");
    } else {
        console.log("going withoug gift");
    }
} else {
    console.log('remove from friend list');
}


const tea = true;
const biscit = false;
if (tea === false) {
    if (biscit === false) {
        console.log('only tea ready');
    }
} else {
    console.log("boshe boshe star jalsha dekhon");
}


const isActive = true;
const subscription = "premium";
if (isActive === true) {
    if (subscription === "premium") {
        console.log("enjoy premium feature");
    }
} else {
    console.log("watch free version");
}

const foodDeliveryApp = false;
const hasFood = false;
if (hasFood === true) {
    console.log("khabar gorom kor");
} else if (foodDeliveryApp === true) {
    console.log("order food");
} else {
    console.log("ajke ami roja.");
}


const totalPeople = 101;
const gift101 = true;
if (totalPeople > 100) {
    if (gift101 === true) {
        console.log("let's party all night");
    }
} else {
    console.log("i will party with myself");
}


const shoping = 3000;
let cashBack = null;
shoping >= 3000 ? cashBack = 500:cashBack = 0;
console.log(cashBack);

const myAge = 15;
myAge >= 15 ? console.log("Teenager") : console.log("child");

const isLoggedIn = true;
isLoggedIn ? console.log("Welcome Back") : console.log("Please Login");

const oilTank = 'full';
oilTank === "full" ? console.log("ready for a long drive") : console.log("fill the tank");

const isPassed = true;
isPassed ? console.log("party time") : console.log("next semester e serious study korbo.");


const sunny = false;
sunny || console.log('stay home');

const expensive = false;
!expensive && console.log("i will buy this item");

