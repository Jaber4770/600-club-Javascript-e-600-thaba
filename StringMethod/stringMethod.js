const city = 'chattogram';
const gPosition=city.indexOf('g');
console.log(gPosition);


const division = 'sylhet';
const findY = division.includes('y');
console.log(findY);


const name = 'rifat';
console.log(name[4]);



const language = 'javascript';
console.log(language.indexOf('rip'));

const text = 'immutable';
console.log(text.length);
text[0] = ('aaa');
console.log(text);

// ==================lower and upper case================
const email = 'User@Example.com';
console.log(email.toLocaleLowerCase());

const greeting = 'hELlo WoRLd';
console.log(greeting.toUpperCase());


{
    const language = 'JavaScript';
    const caseIgnore = language.toLocaleLowerCase();
    console.log(caseIgnore.includes('script'));
}

{
    const text = 'NodeJs';
    if (text[0] === 'N') {
        console.log(true);
    }
}