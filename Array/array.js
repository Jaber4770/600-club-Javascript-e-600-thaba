const numbers = [71, 72, 73, 74, 75, 76, 77, 78, 79];
const fruits = ["apple", "banana", "orange", "mango", "goava"];
const shoppingBag = ["alo", "peyaj", "begon", "mola", "gajor", "tomato", "derosh", "law", "sosha", "potol"];
const favMovie = ["titanic", "interstellar", "bahubali", "kgf", "r jani na"];
const oddNum = [11, 13, 15, 17, 19, 21, 23, 25, 27, 29];
const saroundColor = ["black", "white", "blue", "red"];
console.log(saroundColor.length);
const capital = ["dhaka", "washington", "bucharest", "rome", "berlin"];
console.log(capital.length);


const friends = ["rifat", "shawon", "mithu", "ashik", "olik"];
console.log(friends[3]);

const favBook = ["book1", "book2", "book3", "book4", "book5", "book6", "book7"];
console.log(favBook[5]);

const favGame = ["free fire", "pubgi", "candi crash", "temple run"];
favGame[2] = "subway surfer";
console.log(favGame);

const familyMembers = ["baba", "ma", "jisun", "ami(Jack)", "mim"];
console.log(familyMembers[3]);


const travelPlan = ["switzerland", "norway", "denmark", "germany", "australia", "canada", "usa"];
console.log(travelPlan[4]);

const studyTable = ["book", "monitor", "laptop", "speaker", "mouse", "keyboard"];
console.log(studyTable[7]);



const numbersArray = [10, 20, 30, 40, 50];
numbersArray.push(60);
console.log(numbersArray);


const names = ["sojib", "sagor", "shakib", "sohel"];
names.push("somon");
console.log(names);

const installedGame = ['game1', 'game2', 'game3', 'game4'];
installedGame.pop();
console.log(installedGame);

const numberArray = [24, 36, 48, 60];
numberArray.unshift(12);
console.log(numberArray);

const bookList = ['book1', 'book2', "book3", 'book4', 'book5'];
bookList.shift();
console.log(bookList);

const fruitsArray = ["apple", 'banana', 'mango', 'lichu'];
if (fruitsArray.includes('mango')) {
    console.log("mango ache");
} else {
    console.log("mango nai, gache uth.");
}


const namesUnknown = ['babul', 'alif', 'choton'];
console.log(namesUnknown.indexOf("babul"));

const frndNames = ['rimon', 'rifat', 'rajib'];
console.log(frndNames.indexOf('rifat'));

const cities = ["dhaka", "chittagong", 'sylhet'];
cities.push("rajshahi");
console.log(cities.includes("RajShahi"));

const elements = ["dighi", 'megh', "bristy", "borsha"];
elements.includes("bristy") ? console.log("i need umbrella") : console.log("no rain no pain");

const favGames = ["cricket", "football", "vallayball"];
console.log(favGames.includes("badmintan"));

