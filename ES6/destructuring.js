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



{
    const Products = ({name, ...rest}) => {
        console.log(name);
        console.log(rest);
    }
    const product = {
        name: 'laptop',
        price: 5000,
        brand: 'dell'
    }
    Products(product);
}



{
    const title = ({ title, ...obj }) =>{
        console.log(title);
        console.log(obj);
    }

    const project = {
        id: 101,
        title: "web app",
        budget: 3000,
        client: "tech corp"
    }
    title(project);
}

{
    const programmer = ({ language, specialty, ...other })=>{
        console.log(language, specialty);
        console.log(other);
    }
    const Programmer = {
        name: "sophia",
        language: "javascript",
        experience: 5,
        specialty: "frontend",
        tools: "react"
    }
    programmer(Programmer);
}

{
    const arraySlice = ([item1, item2, ...rest]) => {
        console.log(item1);
        console.log(item2);
        console.log(rest);
    }
    const numbers = [10, 20, 3, 30, 300, 3000];
    arraySlice(numbers);
}

{
    const sumOfRest = ([num1, num2, ...rest]) => {
        let sum = 0;
        for (let r of rest) {
            sum += r;
        }
        return sum;
    }
    const array = [1, 2, 3, 4, 5, 6, 6, 7, 787, 8, 3];
    console.log(sumOfRest(array));
}

{
    const sumOfArguments = (...rest) => {
        let sum = 0;
        for (let r of rest) {
            sum += r;
        }
        return sum / rest.length;
    }
    console.log(sumOfArguments(10, 2, 3, 4, 5, 55, 66, 4, 44, 33, 322,));
}



