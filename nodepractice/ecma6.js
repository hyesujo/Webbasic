
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

const result = num1 > num2 ? 'num1' : 'num2';
console.log(result, '가 더 큽니다.');

listn.length > 0 ? console.log(listn) : console.log('list가 비었습니다.');

if(true) {
    console.log('조건이 true일 때 실행됩니다.');
}

const hunnum = 100;

if(hunnum >= 100) {
    console.log('number는 100보다 큽니다.');
}

if(hunnum > 200) {
    console.log('number는 200보다 큽니다.'); 
}

const score = 85;

let degree = '';

if (score >= 90) {
    degree = "A";
} else if (score >= 80) {
    degree = 'B';
} else if (score >= 60) {
    degree = 'c';
} 
console.log('degree: ' , degree);

const switchNum = 3;

let msg = '';

switch(switchNum) {
    case 1:
        msg = '값이 아닙니다.'; 
        break; 
    case 2:
        msg = '값이 아닙니다.';
        break;
    case 3:
        msg = '찾는 값입니다.';
        break;
}

console.log(msg);

const Num9 = 9;

for(let value = 1; value < 10; value += 1) {
    console.log(Num9 * value);
}

for(let j = 2; j <= 9; j++) {
    console.log('==%d단 시작==',j);
    for(let i =1; i <= 9; i++) {
        console.log('%d * %d = %d', j,i , j * i);
    }
}

const studentList = [
 {name : 'Kyeongrok', age:31, score: 85},
 {name : 'jihyun', age: 31, score: 96},
 {name : 'minsup', age: 35, score: 76},
 {name : 'yuna', age:31, score: 94}
];

let resultStudent = '';
for(let index = 0; index < studentList.length; index +=1) {
    if(studentList[index].name === 'minsup') {
        resultStudent = studentList[index];
        break;
    }
    console.log(studentList[index].name, '은 minsup이 아닙니다.');
}
console.log('resultStudent:' ,resultStudent);

const userList = [
    {name : 'Kyeongrok', age:31, score: 85},
    {name : 'jihyun', age: 31, score: 96},
    {name : 'minsup', age: 35, score: 76},
    {name : 'yuna', age:31, score: 94}
];

for (const user of userList) {
    console.log('user: ', user);
}

const listUser = [
    {name : 'Kyeongrok', age:31, score: 85},
    {name : 'jihyun', age: 31, score: 96},
    {name : 'minsup', age: 35, score: 76},
];

listUser.forEach(function(user) {
 console.log(user);
});

console.log('-------------');

listUser.forEach(user => console.log(user));

{
    for(let i = 0; i < 10; i++) {
        console.log(i, '반복');
    }

    let arrData = [1,2,3,4];
    for(let i in arrData) {
        console.log(i, "반복 IN"); //in은 배열의 index를 출력
    }

    for(let i of arrData) {
        console.log(i, '반복 OF'); //of는 배열의 value를 출력
    }

    let objData = {a:1, b:2};

    for(let i in objData) {
        console.log(i, "반복INob");

    "length" in new String('123');
    }
}

const getYymmdd = (date) => {
  const yyyy = date.getFullYear();
  const mm = date.getMonth() < 9 ? `0${date.getMonth()+1}` : (date.getMonth() + 1);
  const dd = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate();
  return `${yyyy}-${mm}-${dd}`;
};

const yymmdd = getYymmdd(new Date());
const yymmdd17 = getYymmdd(new Date(2017,9-1, 9));
console.log(yymmdd);
console.log(yymmdd17);

const date = new Date();
const dateToTimestamp = date.getTime();
const timestampTodate = new Date(1570274211107);
const timestampToInit = new Date(1);

console.log('Date to timestamp', dateToTimestamp);
console.log('Inital timestamp', timestampToInit);
console.log('Timestamp to date', timestampTodate);

try {
    printMessage('hello'); 
} catch(e) {
    console.log('error:', e);
}

console.log('program finished');

const printHello = () => console.log('hello');

try {
    printHello();
} catch(e) {
    console.error(e);
} finally {
    console.log('finally1');
}

try {
    printbye();
} catch(e) {
    console.error(e);
} finally {
    console.log('finally2');
}

console.log('env', process.env);
console.log('---------');
console.log('arch', process.arch);

const printHello1 = () => {
    console.log('hello');
}
printHello1();

const printBye = () => {
    console.log('bye');
}
printBye();

const printMes = (pMessage) => {
   console.log(pMessage);
}

printMes('hello');

const printMes2 = (pMessage) => {
    console.log(pMessage);
}

printMes2('bye2');

const sum = (a,b) => {
    const r = a + b;
    return r;
}

const result33 = sum(100, 200);
console.log(result33);

function getDegree(score) {
    if(score >= 90) {
        return 'A';
    } else if (score >= 80) {
        return 'B';
    } else if (score >= 70) {
        return 'C';
    }
    return 'F';
}

userList.forEach((user) => {
 const result = `name: ${user.name}, score: ${getDegree(user.score)}`;
 console.log(result);
});


const prinMes = (message) => {
   console.log(message);
}

const prinWel = () =>{
   console.log('welcome'); 
}

prinMes('hi');
prinWel();

console.log('typeof printMessage : %s', typeof prinMes);
console.log('typeof printWel', typeof prinWel);

const pm = prinMes;
pm('goodmorning');

const plus = (a,b) => {
    return a+b;
}

const minus = (a, b) => {
    return a - b;
}

let p = plus;

console.log('typeof plus: %s', typeof plus);
console.log('typeof p: %s', typeof p);
console.log("10 + 20 = %d", p(10, 20));

const calculate =(a,b, func) => {
    return func(a, b);
}

console.log(calculate(10,20, minus));
console.log(calculate(10,20,plus));

const prH = () => console.log('hello');
const prH2 = () => 'hello2'; 

const prms = message => console.log(message);
const plus1 = (a,b) => a + b;
const minus1 = (a,b) => a - b;
prH();
console.log(prH2());
prms('hhhh');
console.log('plus : %d', plus(10,20));
console.log('minus : %d', minus(10,20));

const sumAndPrint = (a,b) => {
    const res1 = a+b;
    return `결과는 ${res1}입니다.`;
}
const res1 = sumAndPrint(10,20);
console.log(res1);

const printResult = (result) => {
    console.log(`결과는 ${result}입니다.`);
}

const calculateAndPrint = (calculateRe, callback) => {
    callback(calculateRe);
};

calculateAndPrint(plus1(3,20), printResult); 

let resultSubtraction;

function subtrac(a, b) {
    resultSubtraction = a - b;
}

subtrac(80, 50);
console.log(resultSubtraction);

function multiple(a,b) {
    const result = a * b;
    return result;
}

const r = multiple(10,10);
console.log(r);

const randomNum = Math.random();
const zeroTonine = Math.floor(Math.random() * 10);
const twentyToThirty = Math.floor(Math.random() * ((30-20) + 1), 10) + 20; 
const oneToTen = Math.floor(Math.random() * 10, 10) + 1;
const makeRandom = (min, max) => Math.floor(Math.random() * ((max - min)+ 1), 10) + min;

console.log(randomNum);
console.log('zeroToNine:', zeroTonine);
console.log('oneToTen:', oneToTen);
console.log('tweentyToThirty', twentyToThirty);

for(let value =1; value < 10; value ++) {
    console.log('10 to 20:', makeRandom(10,20));
}

const ronum = 88.7;
const divide = 1/2;

console.log('type: %s %d', typeof ronum, ronum);
console.log('round', typeof ronum, Math.round(ronum));
console.log('divide: %d, %d', divide, Math.round(divide));

const maxResult = Math.max(-10,10,20,30,40);
const minResult = Math.min(-10,10,20,30,40);

console.log('max :', maxResult);
console.log('min :', minResult);

const abs1 = Math.abs('-1');
const abs2 = Math.abs(-3.141592);
const abs3 = Math.abs([2]);
const abs4 = Math.abs({});
const abs5 = Math.abs(null);
const abs6 = Math.abs('');
const abs7 = Math.abs([]);

console.log(abs1); 
console.log(abs2);
console.log(abs3);
console.log(abs4);

const pow1 = Math.pow(7,2);
const pow2 = Math.pow(2, 10);
const pow3 = Math.pow(8, 1/3);
const pow4 = Math.pow(2, 0.5);

console.log(pow1);
console.log(pow2);
console.log(pow3);
console.log(pow4);

const sqrt1 = Math.sqrt(9);
const sqrt2 = Math.sqrt(4);//제곱근 

console.log(sqrt1);
console.log(sqrt2);

const cbrt1 = Math.cbrt(-8);
const cbrt2 = Math.cbrt(Infinity);

console.log(cbrt1);
console.log(cbrt2);

const sign1 = Math.sign(3);
const sign2 = Math.sign(-4);
const sign3 = Math.sign(0);

console.log(sign1);
console.log(sign2);
console.log(sign3);

const log_1 = Math.log(10);
const log_2 = Math.log(1);

const log10_1 = Math.log10(10000);
const log10_2 = Math.log10(10); //밑이 10인 로그

const log2_1 = Math.log2(1024);
const log2_2 = Math.log2(2); //밑이 2인 로그

console.log('log_1', log_1);
console.log('log_2', log_2);
console.log('log10_1', log10_1);
console.log('log2_1', log2_1);

const floor1 = Math.floor(45.95);
const floor2 = Math.floor(-45.06);

const ceil = Math.ceil(7.004);
const ceil2 = Math.ceil(-0.96);
const ceil3 = Math.ceil(-7.004);

console.log('floor', floor1);
console.log('floor2', floor2);
console.log('ceil', ceil);
console.log('ceil2', ceil2);
console.log('ceil3', ceil3);

const trunc1 = Math.trunc(24.2);
const trunc2 = Math.trunc(42.553);

console.log('trunc1', trunc1);
console.log('trunc2', trunc2);

const greeting = 'hello';
const dateString = "2017-08-24T11:00:00";
const smallBracket = '()';

const replacedGreeting = greeting.replace('el', '');
const replaceDateString = dateString.replace('T', " ");
const middleBraket = smallBracket.replace('(', '{').replace(')', '}');

console.log('el을 없애기: %s', replacedGreeting);
console.log('T를 공백으로: %s', replaceDateString);
console.log('() => {} : %s', middleBraket);

const dateString1 = '2020-12-28 11:00:00';

const date1 = dateString1.split(' ')[0];
const time1 = dateString1.split(' ')[1];

console.log('date : %s', date1);
console.log('time: %s', time1);

const resultsp = 'abc'.split('b');
console.log('result', resultsp);

const stringSub = 'avdvdfdggewssz';

const subString1 = stringSub.substring(0, 4);
const subString2 = stringSub.substring(5, 8);

console.log('0, 4', subString1);
console.log('8, 11', subString2);

const order1 = { no: 1, productName: '티셔츠', price: '30000'};
const order2 = { no: 2, productName: '청바지', price: '45000'};
const order3 = { no :3, productName: 'shoes', price: '55.70'};
const order4 = { no: 4, productName: 'sunglass', price: '120.80'};

const concatenate = order1.price + order2.price;
const sumOr = parseInt(order1.price) + parseInt(order2.pirce);
const sumpars = parseInt(order3.price) + parseInt(order4.price);
const sumNum = Number(order3.price) + Number(order4.price); 

console.log('concatenate', concatenate);
console.log('sumOr', sumOr);
console.log('sumpars', sumpars);
console.log('sumNum', sumNum);

const h1 = '<h1>:::특별가 - 99,000원:::</h1>';
const reh1 = h1.replace(/<h1>/g, '').replace(/<\/h1>/g, '');

console.log(reh1);


const strr = '<h1>특별가 - </h1><h2>99,000원</h2>';
const reSt = strr.replace(/<..>/g, ''); 
const reSt2 = strr.replace(/<...>/g, '');

console.log('<..> :' ,reSt);
console.log('<... :' ,reSt2);

const streg = '<h1>특별가 - </h1><h2>99,000원</h2>';
const divreg = '<div>특별가 - </div><h2>99,000원</h2>';
const replaceH1 = streg.replace(/<.{0,1}h1>/g, '');
const replaceTags = divreg.replace(/<.{0,4}>/g, '');

console.log(replaceH1);
console.log(replaceTags);

const repBra = '(<h1>:::특별가 - 99,000원:::</h1>)';

const replaceBr = repBra.replace(/[()]/g, '');
const replacedBraketComma = repBra.replace(/[()/\,h1<>: -]/g, '');  

console.log(replaceBr);
console.log(replacedBraketComma);

const text = "hello my name is kyeongrok";
const matched = text.match(/[a-l]{1,3}/g);

console.log(matched);

// setInterval(() => console.log('hello'), 1000);

// const printBye1 = () => console.log('bye');

// setInterval(printBye1, 2000);

setTimeout(() => console.log('hello'),3000);

const playInterval = setInterval(() => console.log('hello'),1000);

setTimeout(() => { clearInterval(playInterval);}, 5000);

const frList = [
    {name: 'joeunki', age: 26, score:85},
    {name: 'imjiyeon', age: 30, score:70},
    {name: 'kangsunghyen', age:25, score: 90},
];

console.log(frList[0]);

const student1 = {name: 'yuna', age: 26, score: 55}; 
frList.push(student1);

console.log(frList);

frList.pop(); //마지막넣은 학생제거
console.log(frList);

const reverNum = [1,2,3,4];
reverNum.reverse();

console.log('reverNum', reverNum);

const reverstArray = 'hello'.split('');
reverstArray.reverse();
console.log('reverStArr', reverstArray);

const sortNum = [3,5,9,2,4];
const sortString = [
    'timeoutRemaining',
    'flagrantFouls',
    'defensive3seconds',
    'jumpshots', 
    'dunks',
    'layups',
];

const sortNumbers = sortNum.sort();
const sortedStrings = sortString.sort();

console.log('sortedNumber', sortNumbers);
console.log('sortedNumReverse',sortNumbers.reverse());
console.log('sortedStrings', sortedStrings);
console.log('reverseSortedString', sortedStrings.reverse());

const freindList = [
    {name: 'joeunki', age: 26, math: 85, english: 87},
    {name: 'imjiyeon', age: 30, math: 95, english: 97},
    {name: 'kangsunghyen', age:25, math: 75, english: 84},
    {name: 'seahyein', age: 27, math: 84, english: 73},
    {name: 'imjinsun', age: 27, math: 54, english: 67},
];

freindList.sort((beforefr, nextfr) => {
  if(beforefr.age > nextfr.age) return 1;
  else if(beforefr.age < nextfr.age) return -1;
//   else if(beforefr.math > nextfr.math) return -1;
//   else if(beforefr.math < nextfr.math) return 1;
});

console.log(freindList);

freindList.sort((now, next) => now.math - next.math);
console.log('freindList', freindList);
freindList.sort((now, next) => next.math - now.math);
console.log('freindListRe', freindList);

const compare = (now, next) => {
    console.log('-----------');
    console.log('now', now);
    console.log('next', next);
}; 

freindList.sort(compare);

const sliceString = [
    'timeoutRemaining',
    'flagrantFouls',
    'defensive3seconds',
    'jumpshots', 
    'dunks',
    'layups',
];

const sliced = sliceString.slice(1,4);
console.log(sliced);

const exStudentList = [
    {name: 'kyeongrok', age: 31, math: 85, english: 87},
    {name: 'jihyun', age: 31, math: 95, english: 97},
    {name: 'minsup', age: 35, math: 76, english: 84},
    {name: 'dasom', age: 24, math: 84, english: 73},
    {name: 'yuna', age: 26, math: 54, english:  67},
    {name: 'mattheue', age: 29, math: 34, english: 100},
];

const sorted = exStudentList.sort((now, next) => now.math - next.math);
console.log('sorted', sorted);
const reversedEx = sorted.reverse();
console.log('reversed', reversedEx);
const slicedEx = reversedEx.slice(0,3);
console.log('sliced:', slicedEx);

const part1 = ['keongrok', 'minsup'];
const part2 = ['jihyen','hyesu'];
const part3 = ['dasom', 'hyein'];

const team = part1.concat(part3);
console.log('team: ', team);
const team2 = part1.concat(part2,part3);
console.log('team1:', team2);

const destination = ['서울', '파리', '로마'];

console.log(destination);

console.log(destination.shift());
console.log(destination);

destination.unshift('뉴욕');
console.log(destination);

console.log(destination.pop());
console.log(destination);

const destinationName = [
    '런던','로마','파리','서울'
];

const searchDestination ='파리';

for(let i =0 ;i < destinationName.length; i++) {
    if (searchDestination === destinationName[i]) {
        console.log(searchDestination, '입니다.');
        break;
    }
}

const returnFunction = () => (a,b) => a + b;

const plusreturn = returnFunction();

console.log(plusreturn(10,15)); 

const countdown = (value) => {
    console.log('value:', value);
    if(value === 0) return value;
    return countdown(value -1);
};

console.log('result', countdown(20));


const sumPlus = (start, end, accumulator) => {
    if (start > end) return  accumulator;
    return sumPlus(start + 1, end, accumulator + start);
};

console.log('result', sumPlus(0, 10, 0));

const sumFor = () => {
    let start = 0;
    for(let i = 1; i <=10; i++) {
        start += i;
    }
    console.log('sumfor',start);
}
sumFor();

const factorial = (n) => {
    if(n === 0) return 1;
    return n * factorial(n - 1);
};

console.log(factorial(4));

const fibonacci = (num) => {
 if(num <= 1) return 1;
 return fibonacci(num-1) + fibonacci(num -2);
};

for(let i =0; i < 10; i++) {
    console.log(fibonacci(i));
}

const scoreNum = [85,95,76];

const forSum = (array) => {
    let result = 0;
    for(let i = 0; i <= array.length; i++) {
        result += array[i];
        console.log(result);
    }
}

forSum(scoreNum);


const recurSum = (list, total, length) => {
  if(length === list.length) return total;
  return recurSum(list, total + list[length], length + 1);
};

console.log('sum:', recurSum(scoreNum, 0,0));

const average = (list, total, length) => {
    if(length === list.length) return total / length;
    return average(list, total + list[length], length + 1);
};

console.log('average', average(scoreNum, 0,0));

function grandParent(g1, g2) {
    const g3 = 3;
    return function parent(p1, p2) {
        const p3 = 33;
        return function child(c1, c2) {
            const c3 = 333;
            return g1 + g2 + g3+ p1 + p2 + p3 + c1+ c2 + c3;
        };
    };
}

const parentFunction = grandParent(1,2);
const childFunction = parentFunction(11,22);
console.log(childFunction(111,222)); 

const multiple5 = x => x * 5;
const add10 = x => x + 10;

const plusabb = (a,b) => a+ b;
const minusabb = (a, b) => a - b;

console.log(multiple5(add10(5)));
console.log(minusabb(plusabb(10,20),40));

const addcurring = x => y => x + y;
const addcurring10 = addcurring(10);

console.log(addcurring10(20));
console.log(addcurring(10)(10));

const coffeeMachine = liquid => espresso => `${espresso} + ${liquid}`;

const americanoMachine = coffeeMachine('water');
const latteMachine = coffeeMachine('milk');

const americano = americanoMachine('coffee bean');
const latte = latteMachine('coffee bean');

console.log(americano);
console.log(latte);

const fs = require('fs');
const { resolve } = require('path');

const openFileAndPrint = path => fileName => fs.readFile(path + 
      fileName, (err, data) => {
          if (err) throw err;
          console.log(data.toString());
      });

const thisDirOpenFileAndPrint = openFileAndPrint('/Users/johyesu/DEV/nodePractice/nodepractice/');
const otherDirOpenFileAndPrint = openFileAndPrint('/Users/johyesu/DEV/nodePractice/node_modules/');

thisDirOpenFileAndPrint('104_curring_example.js'); 
otherDirOpenFileAndPrint('package.json');

const isApple = (fruit) => {
    if (fruit === 'apple') return true;
    return false;
};

console.log(isApple('apple'));

const predNumber = [1,2,19,38,4,98,25];

const isFirstBiggerThenSecond = (first, second) => {
    if (first > second) return true;
    return false;
}

const sortedpreNumber = predNumber.sort(isFirstBiggerThenSecond);
console.log(sortedpreNumber);

const ages = [11,12,13,16,21,31];

const upper16 = ages.filter(age => age > 16);
const under13 = ages.filter(age => age < 13);
const between12And21 = ages.filter(age => age > 12 && age < 21); 

console.log('upper16', upper16);
console.log('under13', under13);
console.log('between12And21', between12And21);

const filterstudent = [
    {name: 'kyeongrok', age: 31, math: 85, english: 87},
    {name: 'jihyun', age: 31, math: 95, english: 97},
    {name: 'minsup', age: 35, math: 76, english: 84},
    {name: 'dasom', age: 24, math: 84, english: 73},
    {name: 'yuna', age: 26, math: 54, english:  67},
    {name: 'mattheue', age: 29, math: 34, english: 100},
];

const mathUpper80 = filterstudent.filter(student => student.math > 80);
const mathUpper80AndEnglishUpper70 = filterstudent.filter(student => student.math > 90 && student.english > 70);

console.log('mathUpper80:', mathUpper80);
console.log('mathUpper80AndEnglishUpper70', mathUpper80AndEnglishUpper70);

const listmap = [1,2,3];

const multipledList = listmap.map(m => m * 10);
multipledList.forEach(item => console.log(item));

const listEmployee = [
    {name: "hyesu", age: 27, salary:3000},
    {name: 'hyein', age: 26, salary: 2500},
    {name: 'jinsun', age: 27, salary: 3200},
];

const raisedSalaryList = listEmployee.map(employee => (employee.salary * 1.1));
raisedSalaryList.forEach(salary => console.log('salary: %d', salary));

const reduceScore = [10,20,30,40,50];

const reduceSum = reduceScore.reduce((a,b) => (a + b));
const sumWithInitvalue = reduceScore.reduce((a,b) => (a+ b), 10);

console.log('sum:', reduceSum);
console.log('sumWithInitvalue', sumWithInitvalue);

const reduceStu = [
    {name: 'joeunki', age: 26, score: 85},
    {name: 'imjiyeon', age: 30, score: 95},
    {name: 'kangsunghyen', age:25, score: 75},
];

const mapScore = reduceStu.map(fr => fr.score);
const reduSum = mapScore.reduce((a,b) => a+b, 0);
console.log('sum:',reduSum); 

const Upper80StudentSum = reduceStu.filter(fr => fr.score > 80)
.map(student => student.score).reduce((a,b) => (a+b)); 

console.log("mapfilter:", Upper80StudentSum);

const employeeList = [
    {name: 'kyeongrok', age: 31, department: 'development'},
    {name: 'jihyun', age: 31, math: 95, department: 'design'},
    {name: 'minsup', age: 35, math: 76, department: 'development'},
];

const developerAgeList = employeeList.filter(employee => employee.department === 'development')
.map(employee => employee.age);

console.log(developerAgeList.reduce((a,b) => a+b));


const aveStudentList = [
    {name: 'kyeongrok', age: 31, math: 85, english: 87},
    {name: 'jihyun', age: 31, math: 95, english: 97},
    {name: 'minsup', age: 35, math: 76, english: 84},
    {name: 'dasom', age: 24, math: 84, english: 73},
    {name: 'yuna', age: 26, math: 54, english:  67},
    {name: 'mattheue', age: 29, math: 34, english: 100},
];

const between21to30StudentAverage = 
aveStudentList.filter(ave => ave.age > 22 && ave.age < 30).map(ave => ave.math)
.reduce((previous, current, index, array) => previous + (current / array.length), 0);

console.log('average:', between21to30StudentAverage);

const promiseFirst = 
new Promise(resolve => resolve(1)).then(result => `${result + 10}`); 

const promiseSecond =
 new Promise(resolve => resolve(1)).then(result => `${result + 20}`);

 Promise.all([promiseFirst, promiseSecond]).then(result => {
    console.log("result",result);
    console.log('sum', Number(result[0]) + Number(result[1]));
 });


 const printSomething = require('./119_exports');

 printSomething.printHelloex();
 printSomething.printMessage2('exports bye');

//  const contents = 'hello\nbye\n안녕';

//  fs.writeFile('./message.txt', contents, function(err) {
//      if (err) {
//          return console.log(err);
//      }
//      console.log('The file was saved!');
//  } ); 파일생성

//  const textdata = fs.readFileSync('./message.txt');
//  const textString = textdata.toString();
//  console.log('sync work01');
//  console.log(textString);  동기방식

 fs.readFile('./message.txt', (err,data) => {
     if(err) throw err;
     console.log('async work01');
     console.log(data.toString());
 })

 fs.readFile('./message.txt', (err,data) => {
     if(err) throw err;
     let contents = data.toString();
     contents = 'replaced';
     fs.writeFileSync('./message.txt',contents);
 });

 const fsList = [1,2,3,4,5];

 fsList.forEach(item =>
     fs.appendFile('./chapters.text', `chapter ${item}\n`, (err,data) => {
        if(err) throw err;
        console.log('saved');
 }));

 const dirName = `${__dirname}/img`;

 if (!fs.existsSync(dirName)) {
     fs.mkdirSync(dirName);
 }

 const testFolder = './';

 const filenameList = fs.readdirSync(testFolder);

 filenameList.forEach((fileName) => {
     console.log("fff",fileName);
 });

 const jsonList = [
    {name: 'kyeongrok', age: 31, department: 'development'},
    {name: 'jihyun', age: 31, math: 95, department: 'design'},
 ];

 fs.writeFile('./list.json', JSON.stringify(jsonList), (err) => {
   if(err) throw err;
   console.log('json saved');
 });

 fs.readFile('./list.json', (err, data) => {
    if(err) console.log(err);
    const json = JSON.parse(data.toString());
    console.log('name:', json[0].name);
    console.log('name:', json[1].name);
 });

 const renameFile = (fromFilepathName, toFilepathName) => {
     fs.rename(fromFilepathName, toFilepathName, (err) => {
        if(err) console.log(`ERROR: ${err}`);
     });
 };

 const fromFilepathName = "./hello.txt";
 const toFilepathName = './bye.txt';

 renameFile(fromFilepathName, toFilepathName);

//  const http = require('http');
//  const server = http.createServer();

 //이벤트 연결
//  server.on('requst', () => {
//     console.log('Request');
//  });

//  server.on('connection', () => {
//     console.log('Connection');
//  });

//  server.on('close', () => {
//     console.log('close'); 
//  });

//  server.listen(5000, () => {
//     console.log('서버가 동작중입니다. http://127.0.0.1:5000');
//  });

//  const testClose = function() {
//      server.close();
//      console.log('서버가 종료돠었습니다. http://127.0.0.1:5000');
//  }

//  setTimeout(testClose, 10000);

