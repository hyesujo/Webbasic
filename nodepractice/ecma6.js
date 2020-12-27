//es5 style
function printHelloEs5() {
    console.log('hello es5');
}

//es6 style
const printHelloEs6 = () => {
    console.log('hello es6');
}

printHelloEs5();
printHelloEs6();

console.log('hello');
console.log('hello', 'bye');
console.warn(`this line ${'can make error'}`);

console.log('name:%s', 'Kyeongrok');
console.log('age:%d', 31);
console.log('pi:%d', 3.14);
console.log('name:%s sciece:%d',92,84);
console.log("name:%s math:%d", 'kyogrok', 31);
console.log('name:%s math:%d science:%d', 'kyeongrok', 92,84);

const greeting1 = 'hello';
const greeting2 = 'bye';
const name1 = 'kyeongrok';
const name2 = 'jihyun';

const statement = `${greeting1}! my name is ${name1}`;
const statement2 = `${greeting2}! my name is ${name2}`; 

console.log(statement);
console.log(statement2);

const isNaN123 = isNaN(123);
const isNaNMinus123 = isNaN(-123);

const number10 = 10;
const number20 = 20;

const plusResult = number10 + number20;

console.log('10 + 20 = ',plusResult);

const minusResult = number10 - number20;
console.log('10 - 20 = ',minusResult);

const multipleResult = number10 * number20;
console.log('10 * 20 = ', multipleResult);

const dividedResult = number10 / number20;
console.log('10/20 = ', dividedResult);

console.log('5 % 2 :' ,5 % 2);

const numbers = [5, 6, 7, 8]; 

console.log(numbers[0], 'is even number:', numbers[0]%2 === 0);
console.log(numbers[1], 'is even number:' , numbers[1] % 2 ===0);
console.log(numbers[2], 'is even number:', numbers[2] % 2 ===0);

const string = 'hello';

const string2 = "Sweet! So, what do you wanna do today?";

console.log('string', string.length);
console.log('string2', string2.length);

console.log('string[0]', string[0]);
console.log('string2[23]', string2[22]);

const index = 'hello';
const index1 = 'Hey! I\'m fine. Thanks for asking!';

console.log('hel1: ', index.indexOf('hel'));
console.log('fine', index1.indexOf('fine'));

const numberAr = [1,2,3];
const stringAr = ['hello', 'bye'];

//[]와 동일한 방법 []를 이용하는 게 좋음
const numberAr2 = new Array(1,2,3);

console.log(numberAr2);

const arNumbers = [];

arNumbers.push(1);
arNumbers.push(2);
arNumbers.push(3);

const arTexts = [];
arTexts.push('hello', 'welcome', 'bye');

console.log(arNumbers);
console.log(arTexts);

const arCoffee = [];
console.log(arCoffee[0]);
console.log(arCoffee.length);

arCoffee.push('아아메', '카페라떼');

console.log(arCoffee.length);
console.log(arCoffee[0]);

const user = {};

user.name = 'Hs';
user.age = 27; 

console.log(user);

const user2 = {name: "hyesu", age: 27};
console.log(user2);

const user3 = {name : "jhs", age:27};
console.log('user.name' , user3.name);
console.log('uesr.age', user3.age);

user3.nation = "korea"; 
console.log(user3);

console.log('10 > 20', 10 > 20);

let num = 1;

console.log(num);

num += 1;
console.log('after number += 1 ', num);
num -= 1;
console.log('after number -= 1 ', num);

const num1 = 1;
const num2 = 2; 
const listn = [1,2,3,4];
const emptyList = [];

const list = num1 > num2 ? 'num1' : 'num2';
console.log(result, '가 더 큽니다.');

listn.length > 0 ? console.log(list) : console.log()