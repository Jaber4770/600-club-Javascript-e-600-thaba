const findBrand = ({ name: productName, price, brand }) => {
    console.log(productName, price, brand)
}
const product = {
    name: "laptop",
    price: 50000,
    brand: "dell"
}
findBrand(product);



const phone = ({ name, price, phone }) => {
    console.log(name, phone, price);
}
const Phone = {
    name: "mobile",
    price: 2000,
    phone: 'samsung'
}
phone(Phone);



const itemFromArry = ([first, second]) => {
    console.log(first, second);
}
const ArrayItems = ['red', 'blue', "green", 'yellow'];
itemFromArry(ArrayItems);



const findSecondItem = ([, second]) => {
    console.log(second);
}
const threeNum = [1, 2, 3];
findSecondItem(threeNum);



const firstAndLastItem = ([two, , , eight]) => {
    console.log(two, eight);
}
const nums = [2, 4, 6, 8];
firstAndLastItem(nums);



function multiplyAndDes(a, b) {
    return [a * 3, b * 3];
}
const [a, b] = multiplyAndDes(1, 2);
console.log(a, b);



function defaultValue({ Name, City, Phone = 'N/A' }) {
    console.log(Name, City, Phone);
}
const person = {
    Name: "rahim",
    City: "dhaka"
}
defaultValue(person);

function findProfession({ name, profession: job }) {
    console.log(name, job);
}
const teacher = {
    name: "maria",
    profession: "teacher"
}
findProfession(teacher);