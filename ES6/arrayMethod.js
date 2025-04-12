{
    const snakes = [30, 45, 20, 60, 10];
    console.log(snakes);
    const newPrice = snakes.map(snake => snake + 13);
    console.log(newPrice);
}
{
    const players = ['messi', 'maradona', 'pele', 'zidan', 'ronaldo'];
    console.log(players);
    const largeName = players.filter(player => player.length > 5);
    console.log(largeName);
}
{
    const numbers = [10, 15, 20, 25, 30, 35, 40];
    console.log(numbers);
    const avobe20 = numbers.find(num => num > 20);
    console.log(avobe20);
}
{
    const height = [65, 70, 68, 72, 68, 73];
    console.log(height);
    const longest = height.filter(long => long > 69);
    console.log(longest);
}
{
    const numbers = [7, 10, 15, 20, 25, 30];
    numbers.map(num => console.log(num / 3));
}
{
    const friends = ['leonardo', 'brad pitt', 'kate winslet', 'audrey hepburn', 'jhonny depp'];
    friends.map(friend => console.log(friend[2]));
}
{
    const names = ['tom', 'harry', 'sam', 'jack'];
    names.find(name => {
        if (name[0] === 'h') {
            console.log(name);
        }
    })
}
{
    const array = [1, 2, 3, 4, 5];
    array.forEach(num => console.log(num));
}
{
    const animals = ['cow', 'goat', 'sheep', 'horse'];
    animals.forEach(animal => console.log(animal));
}
{
    const numbers = [90, 50, 110, 102, 91, 150];
    const larger = numbers.some(number => number > 100);
    console.log(larger);
}
{
    const elements = [10, 20, 30, 40, 50, 60];
    const divBy5 = elements.every(element => element % 5 === 0);
    console.log(divBy5);
}
{
    const words = ['mango', 'hero', 'hello', "banana", 'hijibiji'];
    const findHello = words.some(word => word === "hello");
    console.log(findHello);
}
{
    const ages = [18, 19, 20, 31, 21, 22, 23, 24, 24, 25, 26];
    const adult = ages.every(age => age >= 18);
    console.log(adult);
}
// ==========================reduce================
{
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const total = numbers.reduce((sum, num) => sum + num, 0);
    console.log('total: ', total);
}
{
    const numbers = [32, 34, 35, 36, 89, 700];
    const total = numbers.reduce((sum, num) => sum + num, 0);
    console.log(total);
}

const products = [
    { id: 1, name: 'dell', price: 30000 },
    { id: 2, name: 'hp', price: 30400 },
    { id: 3, name: 'acer', price: 43000 }
]
const totalPrice = products.reduce((acumulate, currentValue) => acumulate + currentValue.price, 0);
console.log(totalPrice);


const myArray = [5, 10, 15, 20, 25];
const totalNumber = myArray.reduce((accumulate, currentValue) => accumulate + currentValue, 0);
console.log(totalNumber);


const myProducts = [
    { name: 'shampo', price: 100 },
    { name: 'soap', price: 50 },
    { name: 'toothPaste', price: 75 },
    { name: 'toothBrush', price: 30 },
    { name: 'faceWash', price: 150 }
];

const totalProductPrice = myProducts.reduce((accumulate, currentValue) => accumulate + currentValue.price, 0);
console.log(totalProductPrice);


const productss = [
    { name: 'pen', price: 5 },
    { name: 'book', price: 100 }
]
const totalValue = productss.reduce((accumulate, currentValue) => accumulate + currentValue.price, 0);
console.log(totalValue);


const num = [1, 2, 3, 4, 5];
const totalNum = num.reduce((a, c) => a + c, 0);
console.log(totalNum);


const nums = [10, 20, 30, 40, 50, 60];
const highestNum = nums.reduce((a, c) => {
    return (c > a) ? c : a;
}, nums[0]);
console.log(highestNum);


const ary = [100, 200, 300, 400];
const numOfAry = ary.reduce((accumulator, currentValue) => accumulator + currentValue, 50);
console.log(numOfAry);



// ===========================================================
{
    const num = [1, 2, 4, 7, 6, 5, 2, 4, 3, 2, 7, 9, 8, 0, 9];
    num.sort();
    console.log(num);
}
{
    const numbers = [50, 12, 25, 8, 15];
    numbers.sort();
    console.log(numbers);
}
{
    const descenArray = [12, 2, 45, 9, 6];
    descenArray.sort((a, b) => b - a);
    console.log(descenArray);
}
{
    const frndAge = [
        { name: 'sara', age: 22 },
        { name: 'ali', age: 29 },
        { name: 'tariq', age: 35 }
    ];
    frndAge.sort((a, b) => a.age - b.age);
    console.log(frndAge);
}
{
    const names = ['nabil', 'zubayer','jack', 'sarwar', 'delwar'];
    names.sort();
    console.log(names);
    names.sort((a, b) => a.length - b.length);
    console.log(names);
}

// ============reverse=============
{
    const names = ["zara", 'tariq', 'amir', 'lina'];
    names.reverse();
    console.log(names);
}
{
    const numbers = [1, 4, 9, 7];
    numbers.reverse();
    console.log(numbers);
}
{
    const users = [
        { name: 'ali', age: 30 },
        { name: 'sara', age: 25 },
        { name: 'tariq', age: 35 }
    ];
    console.log(users);
    users.reverse();
    console.log(users);
}
// ========splice & slice============
{
    const fruits = ['apple', 'banana', 'cherry', 'data'];
    console.log(fruits);
    const middle = fruits.slice(1, 3);
    console.log(middle);
}
{
    const cars = ['tesla', 'bmw', 'toyota', 'ford'];
    const middleItems = cars.slice(0, 2);
    console.log(cars);
    console.log(middleItems);
}
{
    const movieList = ['inception', 'titanic', 'joker', 'avatar', 'interstellar'];
    console.log(movieList);
    movieList.splice(2, 2, 'spiderman', 'batman');
    console.log(movieList);
}
{
    const players = ['messi', 'ronaldo', 'neymar', 'mbappe'];
    console.log(players);
    players.splice(2, 1, "halland");
    console.log(players);
}