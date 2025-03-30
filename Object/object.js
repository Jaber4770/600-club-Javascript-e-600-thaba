const teacher = {
    name: "Koddos Munshi",
    subject: "Higher Math",
    location: "kazipara",
    age: 50,
    college: "A Monem College"
}
console.log(teacher);


const tree = {
    name: 'mango tree',
    age: 40,
    height: "30 fit",
    fruitName: "mango"
}
console.log(tree);


const prani = {
    name: "robel",
    age: 32,
    study: "masters",
    religion: 'muslim',
    height: "65 inch"
}
console.log(prani);


const dad = {
    name: "ramzan ali",
    profession: "teacher",
    age: 47,
    child: 3
}
console.log(dad);

const motorBike = {
    brand: 'BMW',
    taier: "black",
    speed: 300,
    price: 240000
}
console.log(motorBike);

const bird = {
    name: 'duel',
    color: 'black',
    food: 'poka-makor',
    location: 'bd'
}
console.log(bird);

const laptop = {
    brand: 'dell',
    processor: 'intel',
    ram: '8gb',
    price: 35000,
    displaySize: 15
}
console.log(laptop);

//  -------------------------------

const player = {
    name: 'jack',
    age: 23,
    sports: 'cricket',
    team: 'bangladesh'
}
console.log(player.team);

const lapTop = {
    brand: 'dell',
    price: 30,
    hardDisk: 500,
    ram: 16,
    screenSize: 15
}
console.log(lapTop.screenSize);


const favPlace = {
    name: "Cox's Bazar",
    distance: "400km",
    popularity: 'high'
}
console.log(favPlace["popularity"])


const phone = {
    brand: 'Nokia',
    color: 'black',
    price: 5000
}
console.log(phone["price"]);


const library = {
    name: 'Public Library',
    location: "Dhaka",
    books: 5000
}
console.log(library["books"]);

const movies = {
    title: 'inception',
    director: "Nolan",
    rating: 9
}
console.log(movies["rating"]);


const college = {
    name: 'ndc',
    established: 1949,
    group: ['science', 'arts', 'commerce']
}
console.log(college.group[1]);


const family = {
    "fathe.r": {
        name: "baba",
        age: 45,
        profession: "teacher"
    },
    mother: {
        name: "mom",
        age: 35,
        profession: 'teacher'
    }
}
console.log(family.mother.age);
console.log(family['fathe.r'].age);
console.log("age sum: ", family.mother.age + family['fathe.r'].age);
console.log("age sum: ", family.mother.age + family['fathe.r'].age);

const book = {
    author: 'jack',
    name: 'The Jack Sargey',
    price: 300,
    publishYear: 2029
}
console.log("keys: ", Object.keys(book), "values: ", Object.values(book));


const article = {
    title: 'learning JS',
    category: "programming"
};
if (article.hasOwnProperty("author")) {
    console.log("this object has Author property.");
}
else {
    console.log("this object does not author property.");
}


const Laptop = {
    brand: 'dell',
    model: "inspiration",
    price: 45000
}
for (let key in Laptop) {
    console.log(key, Laptop[key]);
}


const Phone = {
    brand: 'samsung',
    model: 'galaxy s21',
    price: '85000'
}
const keys = Object.keys(Phone);
for (let key of keys) {
    let value = Phone[key];
    console.log(key, value);
}


const Bike = {
    brand: "hero",
    price: '120000',
    model: 'splendor'
}
console.log(Object.values(Bike));

const books = {
    book1: 'harry potter',
    book2: 'the hobbit',
    book3: "game of throne"
}
for (let book in books) {
    console.log("book name:", books[book]);
}


const numbers = {
    a: 10,
    b: 20,
    c: 30,
    d:40
}

let numSum = 0;
for (let number in numbers) {
    const singleValue = numbers[number];
    numSum += singleValue;
}
console.log("total of object value: ", numSum);



const Player = {
    name: "messi",
    team: 'argentina',
    goals: 91
}
console.log(Object.values(Player));










